import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { config } from "dotenv";

config({ path: ".env.local", quiet: true });
config({ path: ".env", quiet: true });

const baseUrl = process.argv[2] || "http://localhost:3001";
const secret = process.env.SANITY_REVALIDATE_SECRET;
assert.ok(secret, "Configure SANITY_REVALIDATE_SECRET before testing.");

async function send(body, { signed = true, signingSecret = secret } = {}) {
  const timestamp = Date.now();
  const hash = createHmac("sha256", signingSecret)
    .update(`${timestamp}.${body}`)
    .digest("base64url");
  const response = await fetch(new URL("/api/revalidate", baseUrl), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(signed ? { "sanity-webhook-signature": `t=${timestamp},v1=${hash}` } : {}),
    },
    body,
    signal: AbortSignal.timeout(30000),
  });
  return { status: response.status, body: await response.json() };
}

const published = JSON.stringify({ _id: "menuPage", _type: "menuPage" });
assert.equal((await send(published, { signed: false })).status, 401);
assert.equal((await send(published, { signingSecret: "wrong-secret" })).status, 401);
assert.equal((await send("{")).status, 400);
assert.equal((await send(JSON.stringify({ _type: "menuPage" }))).status, 400);
assert.equal((await send(JSON.stringify({ _id: "other", _type: "other" }))).status, 400);
for (const prefix of ["drafts", "versions"]) {
  const result = await send(JSON.stringify({ _id: `${prefix}.menuPage`, _type: "menuPage" }));
  assert.equal(result.status, 200);
  assert.equal(result.body.revalidated, false);
}
const result = await send(published);
assert.equal(result.status, 200);
assert.equal(result.body.revalidated, true);
console.log("Webhook checks passed: unsigned/incorrect signatures rejected; malformed payloads rejected; drafts ignored; published content invalidated.");
