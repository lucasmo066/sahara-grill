/** Prepare production CMS settings; enable the hook only after deployment. */
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { config } from "dotenv";
import { getCliClient } from "sanity/cli";

config({ path: ".env.local", quiet: true });
config({ path: ".env", quiet: true });

const origin = "https://www.thesaharagrill.com";
const url = `${origin}/api/revalidate`;
const name = "Sahara Grill menu publish refresh";

type Hook = {
  id: string;
  name: string;
  url: string;
  dataset: string;
  isDisabled: boolean;
  isDisabledByUser: boolean;
};

async function main() {
  const apply = process.argv.includes("--apply");
  const enable = process.argv.includes("--enable");
  assert.ok(!enable || apply, "Use --apply with --enable.");
  const client = getCliClient({ apiVersion: "2025-02-19" }).withConfig({ useCdn: false });
  assert.equal(client.config().projectId, "0k9bfzy2", "Wrong Sanity project.");
  assert.equal(client.config().dataset, "production", "Wrong Sanity dataset.");
  const management = client.withConfig({ useProjectHostname: false });
  const uri = `/hooks/projects/${client.config().projectId}`;
  const hooks = await management.request<Hook[]>({ uri });
  const matching = hooks.filter((hook) => hook.url === url || hook.name === name);
  assert.ok(matching.length <= 1, "Multiple matching hooks; review them before continuing.");
  let hook = matching[0];
  if (hook) {
    assert.equal(hook.url, url, "Existing hook has a different destination.");
    assert.equal(hook.dataset, "production", "Existing hook has a different dataset.");
  }
  console.log(JSON.stringify({ project: "0k9bfzy2", dataset: "production", origin, webhook: url, apply, enable, existingHook: hook?.id || null }));
  if (!apply) return;

  const secret = process.env.SANITY_REVALIDATE_SECRET;
  assert.ok(secret, "Missing local SANITY_REVALIDATE_SECRET.");
  const origins = await client.request<{ origin: string; allowCredentials: boolean }[]>({ uri: "/cors" });
  const existingOrigin = origins.find((entry) => entry.origin === origin);
  if (existingOrigin) {
    assert.ok(existingOrigin.allowCredentials, "Production CORS exists without credentials; review it in Sanity Manage.");
  } else {
    await client.request({ uri: "/cors", method: "POST", body: { origin, allowCredentials: true } });
  }
  console.log("Production Studio CORS is configured.");

  if (!hook) {
    hook = await management.request<Hook>({
      uri,
      method: "POST",
      body: {
        type: "document",
        name,
        description: "Refresh the published menu cache without rebuilding the website.",
        url,
        dataset: "production",
        apiVersion: "v2021-03-25",
        httpMethod: "POST",
        includeDrafts: false,
        includeAllVersions: false,
        isDisabledByUser: true,
        secret,
        rule: {
          on: ["create", "update", "delete"],
          filter: '_type in ["menuSection", "menuPage"] && !(_id in path("drafts.**")) && !(_id in path("versions.**"))',
          projection: "{_type, _id}",
        },
      },
    });
    console.log("Created signed webhook, disabled until the new site is deployed.");
  } else {
    console.log("Existing webhook preserved; its secret was not rotated.");
  }

  if (enable) {
    const body = JSON.stringify({ _id: "menuPage", _type: "menuPage" });
    const timestamp = Date.now();
    const hash = createHmac("sha256", secret).update(`${timestamp}.${body}`).digest("base64url");
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "sanity-webhook-signature": `t=${timestamp},v1=${hash}` },
      body,
      redirect: "error",
      signal: AbortSignal.timeout(30000),
    });
    assert.equal(response.status, 200, "The deployed refresh endpoint is not ready; webhook remains unchanged.");
    const result = await response.json() as { revalidated?: boolean };
    assert.equal(result.revalidated, true, "Refresh endpoint did not confirm invalidation.");
    await management.request({ uri: `${uri}/${hook.id}`, method: "PATCH", body: { isDisabledByUser: false } });
  }

  const saved = await management.request<Hook>({ uri: `${uri}/${hook.id}` });
  console.log(JSON.stringify({ webhookId: saved.id, url: saved.url, disabled: saved.isDisabled || saved.isDisabledByUser }));
}

main().catch((error) => {
  // SDK errors may contain request options, including a secret. Print no body.
  const detail = String(error.response?.body?.message || error.response?.body?.error?.description || error.message || "Unknown error")
    .replaceAll(process.env.SANITY_REVALIDATE_SECRET || "__no_secret__", "[redacted]");
  console.error(`CMS configuration failed${error.statusCode ? ` (HTTP ${error.statusCode})` : ""}: ${detail}`);
  process.exitCode = 1;
});
