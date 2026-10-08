/**
 * Seed using the logged-in Sanity CLI user token (no API token required).
 *
 * Usage: npm run seed:menu:cli
 *        npm run seed:menu:cli -- --force
 */
import { getCliClient } from "sanity/cli";
import { seedMenu } from "./seed-menu";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const force = process.argv.includes("--force");

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env");
}

const client = getCliClient({
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
});

seedMenu(client, { force, projectId, dataset }).catch((error) => {
  console.error(error);
  process.exit(1);
});
