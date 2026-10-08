# Sanity + hosting checklist (agency)

- Project: `0k9bfzy2`, dataset: `production` (public restaurant menu only).
- Site: https://www.thesaharagrill.com
- Vercel: https://vercel.com/lucas-moraes-projects-286fa608/the-sahara-grill
- Local Studio: http://localhost:3001/studio
- Production Studio: https://www.thesaharagrill.com/studio

## Local (do this before switching the live site)

1. `npx sanity login`
2. Prefer **reusing** an existing Sahara Grill project on the Free plan.
3. `npm run sanity:setup` (or `--project-id <id>` / `--create`)
4. Keep `SANITY_REVALIDATE_SECRET` in ignored `.env.local`. It is server-only; never add a `NEXT_PUBLIC_` prefix.
5. For a first-time migration, `npm run seed:menu:cli` uses the existing CLI login; no additional write token is needed. Confirm **16 sections / 81 items** with `npm run sanity:inspect`. Normal seed runs skip existing published and draft documents; `--force` intentionally replaces content. Do not seed routinely after editors begin managing the menu.
6. Restart `npm run dev` → check `/studio` and `/menu`
7. Controlled edit → confirm draft remains private → Publish → confirm site updates → restore original → Publish.
8. `npm run sanity:check-webhook` verifies signed publishes, rejected signatures/payloads, and ignored drafts against the local server.

## Ownership and roles

- Prefer the **client organization** as project owner when ready.
- Agency: Admin collaborator for maintenance.
- Free currently includes **Administrator** and **Viewer**, not the restricted **Editor** role. Viewer cannot publish; Administrator has broader project access. Growth offers Editor. See https://www.sanity.io/pricing for current options.
- Confirm the client's email, ownership, role, and any plan cost before inviting staff. The CMS itself can run on Free.

## CORS

- Local already: `http://localhost:3001` and `:3000` (with credentials).
- Production: `https://www.thesaharagrill.com` with **Allow credentials**.
- Add only the exact origins needed for Studio. Do not use wildcard credentialed origins.

## Webhook (production)

- Manage → API → Webhooks → Create
- URL: `https://www.thesaharagrill.com/api/revalidate`
- Trigger: Create, Update, Delete
- Filter: `_type in ["menuSection", "menuPage"] && !(_id in path("drafts.**")) && !(_id in path("versions.**"))`
- Projection: `{_type, _id}`
- Secret: same as `SANITY_REVALIDATE_SECRET`
- API version for the hook: `v2021-03-25`; POST; drafts and versions disabled.
- `npm run sanity:prepare-production` configures the production CORS origin and creates a signed, **disabled** hook. It preserves an existing matching hook and never prints the secret.
- After deploying the code and environment values, `npm run sanity:enable-webhook` first checks the signed production endpoint, then enables delivery.
- `npm run sanity:check-webhook -- https://www.thesaharagrill.com` checks the deployed handler using the local shared secret.
- No Vercel build hook is needed. A publish invalidates Next.js's `menu` cache tag. Reads use Sanity's published perspective and bypass its extra CDN cache.
- Expected delay after Publish: a few seconds, followed by a page request/refresh. Backup ISR is request-driven after 60 seconds, not a strict 60-second deadline or an automatic browser reload.

## Vercel env vars

- `NEXT_PUBLIC_SANITY_PROJECT_ID=0k9bfzy2`
- `NEXT_PUBLIC_SANITY_DATASET=production`
- `NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01`
- `SANITY_REVALIDATE_SECRET`
- Do **not** put write tokens in `NEXT_PUBLIC_*`. Write token is only needed for local/CI seed scripts.
- Save the webhook secret as a **Secret** value in Vercel's Production environment. Public connection values can be Config values. Changes take effect on the next deployment.
- The client reads no write token. `SANITY_API_WRITE_TOKEN` is optional because CLI seeding is available.

## Validation and remaining separate work

- `npm test`, `npm run lint`, and `NEXT_BUILD_DIR=.next-check npm run build`.
- Verify an actual Sanity webhook delivery returns HTTP 200 after the production deployment, then verify `/menu` and `/studio`.
- Newsletter lead storage is a separate feature. Its old database configuration still needs replacement/verification. Database connections are lazy, signup errors are handled, and subscriber addresses have no public listing endpoint.
