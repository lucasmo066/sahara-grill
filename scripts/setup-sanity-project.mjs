/**
 * Creates a Sanity project (if needed), writes env vars, and adds localhost CORS.
 * Requires: `npx sanity login` first.
 *
 * Usage: node scripts/setup-sanity-project.mjs
 */
import { spawnSync } from "child_process";
import { readFileSync, writeFileSync, existsSync } from "fs";
import path from "path";

const root = process.cwd();
const envPath = path.join(root, ".env");

function run(cmd, args) {
  const result = spawnSync(cmd, args, {
    encoding: "utf8",
    cwd: root,
    env: process.env,
  });
  if (result.status !== 0) {
    throw new Error(
      `${cmd} ${args.join(" ")}\n${result.stdout || ""}\n${result.stderr || ""}`
    );
  }
  return (result.stdout || "").trim();
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

console.log("Creating Sanity project via CLI...");
const output = run("npx", [
  "sanity@3",
  "init",
  "-y",
  "--bare",
  "--create-project",
  "Sahara Grill",
  "--dataset",
  "production",
  "--visibility",
  "public",
  "--project-plan",
  "free",
]);

console.log(output);

const projectMatch = output.match(/projectId['":\s]+([a-z0-9]+)/i) ||
  output.match(/\b([a-z0-9]{8})\b/);
const datasetMatch = output.match(/dataset['":\s]+([a-zA-Z0-9_-]+)/i);

const projectId = projectMatch?.[1];
const dataset = datasetMatch?.[1] || "production";

if (!projectId) {
  throw new Error(
    "Could not parse project ID from sanity init output. Paste it into .env manually."
  );
}

upsertEnv("NEXT_PUBLIC_SANITY_PROJECT_ID", projectId);
upsertEnv("NEXT_PUBLIC_SANITY_DATASET", dataset);
upsertEnv("NEXT_PUBLIC_SANITY_API_VERSION", "2024-01-01");

console.log(`Wrote project ${projectId} / dataset ${dataset} to .env`);

try {
  run("npx", ["sanity@3", "cors", "add", "http://localhost:3000", "--credentials"]);
  console.log("Added CORS origin http://localhost:3000");
} catch (error) {
  console.warn(
    "Could not add CORS automatically. Add http://localhost:3000 in Sanity manage → API → CORS origins."
  );
}

console.log(
  "Next: create an Editor API token at https://www.sanity.io/manage, set SANITY_API_WRITE_TOKEN, then run npm run seed:menu"
);
