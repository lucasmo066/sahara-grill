/**
 * Configures local env for an existing or new Sahara Grill Sanity project,
 * and adds Studio CORS for the current local ports.
 *
 * Requires: `npx sanity login` first.
 *
 * Usage:
 *   node scripts/setup-sanity-project.mjs
 *   node scripts/setup-sanity-project.mjs --create
 *   node scripts/setup-sanity-project.mjs --project-id <id>
 *
 * Does NOT write API tokens. Add SANITY_API_WRITE_TOKEN and
 * SANITY_REVALIDATE_SECRET yourself in .env / .env.local (never NEXT_PUBLIC_).
 */
import { spawnSync } from "child_process";
import { existsSync, readFileSync, writeFileSync } from "fs";
import path from "path";

const root = process.cwd();
const envPath = path.join(root, ".env");
const args = process.argv.slice(2);
const createNew = args.includes("--create");
const projectIdFlagIndex = args.indexOf("--project-id");
const projectIdFlag =
  projectIdFlagIndex >= 0 ? args[projectIdFlagIndex + 1] : undefined;

const LOCAL_ORIGINS = [
  "http://localhost:3001",
  "http://localhost:3000",
  "http://127.0.0.1:3001",
  "http://127.0.0.1:3000",
];

function run(cmd, argsList, { allowFail = false } = {}) {
  const result = spawnSync(cmd, argsList, {
    encoding: "utf8",
    cwd: root,
    env: process.env,
  });
  if (result.status !== 0 && !allowFail) {
    throw new Error(
      `${cmd} ${argsList.join(" ")}\n${result.stdout || ""}\n${result.stderr || ""}`,
    );
  }
  return {
    status: result.status ?? 1,
    stdout: (result.stdout || "").trim(),
    stderr: (result.stderr || "").trim(),
  };
}

function readEnvValue(key) {
  if (!existsSync(envPath)) return "";
  const match = readFileSync(envPath, "utf8").match(
    new RegExp(`^${key}=["']?([^"'\\n]*)["']?`, "m"),
  );
  return match?.[1]?.trim() || "";
}

function upsertEnv(key, value) {
  const current = existsSync(envPath) ? readFileSync(envPath, "utf8") : "";
  const line = `${key}="${value}"`;
  const pattern = new RegExp(`^${key}=.*$`, "m");
  const next = pattern.test(current)
    ? current.replace(pattern, line)
    : `${current.trimEnd()}\n${line}\n`;
  writeFileSync(envPath, next.endsWith("\n") ? next : `${next}\n`);
}

function parseProjects(listOutput) {
  const projects = [];
  for (const line of listOutput.split("\n")) {
    // Typical: "abcdefgh  Sahara Grill"
    const match = line.match(/^([a-z0-9]{8})\s+(.+)$/i);
    if (match) {
      projects.push({ id: match[1], title: match[2].trim() });
    }
  }
  return projects;
}

console.log("Checking Sanity CLI login...");
const whoami = run("npx", ["sanity@3", "debug", "--secrets"], {
  allowFail: true,
});
if (whoami.status !== 0 && /Unauthorized|login/i.test(whoami.stderr + whoami.stdout)) {
  throw new Error(
    "Not logged in. Run `npx sanity login` in your terminal, complete browser auth, then rerun this script.",
  );
}

const existingEnvProjectId = readEnvValue("NEXT_PUBLIC_SANITY_PROJECT_ID");
let projectId = projectIdFlag || existingEnvProjectId;
let dataset = readEnvValue("NEXT_PUBLIC_SANITY_DATASET") || "production";

const listed = run("npx", ["sanity@3", "projects", "list"], { allowFail: true });
const projects = listed.status === 0 ? parseProjects(listed.stdout) : [];

if (projects.length) {
  console.log("\nExisting Sanity projects:");
  for (const project of projects) {
    console.log(`  - ${project.id}  ${project.title}`);
  }
}

if (!projectId && !createNew) {
  const sahara = projects.find((p) =>
    /sahara/i.test(p.title),
  );
  if (sahara) {
    projectId = sahara.id;
    console.log(
      `\nReusing existing project "${sahara.title}" (${sahara.id}). Pass --create to force a new project.`,
    );
  } else if (projects.length === 1) {
    projectId = projects[0].id;
    console.log(
      `\nReusing the only available project "${projects[0].title}" (${projects[0].id}).`,
    );
  } else if (projects.length > 1) {
    throw new Error(
      "Multiple Sanity projects found and none clearly named Sahara Grill.\n" +
        "Rerun with: node scripts/setup-sanity-project.mjs --project-id <id>\n" +
        "Or create one: node scripts/setup-sanity-project.mjs --create",
    );
  }
}

if (!projectId) {
  console.log(
    "\nCreating project “Sahara Grill” with public production dataset...",
  );
  // `projects create` handles org creation when the account has none yet.
  const created = run("npx", [
    "sanity@3",
    "projects",
    "create",
    "Sahara Grill",
    "--yes",
    "--dataset=production",
    "--dataset-visibility=public",
    "--json",
  ]);
  console.log(created.stdout);

  let parsed;
  try {
    const jsonStart = created.stdout.indexOf("{");
    parsed = JSON.parse(created.stdout.slice(jsonStart));
  } catch {
    parsed = null;
  }

  projectId = parsed?.projectId;
  dataset = parsed?.dataset?.name || "production";
}

if (!projectId) {
  throw new Error(
    "Could not determine project ID. Pass --project-id <id> after creating/selecting a project in https://www.sanity.io/manage",
  );
}

upsertEnv("NEXT_PUBLIC_SANITY_PROJECT_ID", projectId);
upsertEnv("NEXT_PUBLIC_SANITY_DATASET", dataset);
upsertEnv("NEXT_PUBLIC_SANITY_API_VERSION", "2024-01-01");

console.log(`\nWrote project ${projectId} / dataset ${dataset} to .env`);

for (const origin of LOCAL_ORIGINS) {
  const cors = run(
    "npx",
    ["sanity@3", "cors", "add", origin, "--credentials"],
    { allowFail: true },
  );
  if (cors.status === 0 || /already exists|duplicate/i.test(cors.stderr + cors.stdout)) {
    console.log(`CORS OK: ${origin}`);
  } else {
    console.warn(
      `Could not add CORS for ${origin}. Add it in Sanity Manage → API → CORS origins (Allow credentials).`,
    );
  }
}

console.log(`
Next steps (do these yourself — do not paste secrets into chat):

1) Sanity Manage → Project → API → Tokens
   - Create a token with Editor permissions
   - Add to .env or .env.local:
     SANITY_API_WRITE_TOKEN="<your-token>"

2) Create a random revalidation secret (for example: openssl rand -hex 32)
   - Add to .env or .env.local:
     SANITY_REVALIDATE_SECRET="<your-secret>"
   - Never use NEXT_PUBLIC_ for tokens/secrets

3) Seed the menu (verify counts before relying on the CMS):
   npm run seed:menu

4) Restart the Next.js dev server and open:
   http://localhost:3001/studio
   http://localhost:3001/menu

5) Production later (Vercel):
   - Same NEXT_PUBLIC_SANITY_* values
   - Same SANITY_API_WRITE_TOKEN only if you run write scripts in CI (optional)
   - SANITY_REVALIDATE_SECRET for the webhook
   - CORS origin: https://YOUR_PRODUCTION_DOMAIN (Allow credentials)
   - Webhook URL: https://YOUR_PRODUCTION_DOMAIN/api/revalidate
`);
