import assert from "node:assert/strict";
import { test } from "node:test";
import type { SanityClient } from "@sanity/client";
import { seedMenu, sectionId } from "../scripts/seed-menu";
import { seedSections } from "../src/data/menu";

const target = { projectId: "seedtest", dataset: "production" };
const counts = seedSections.map((section) => ({
  title: section.title,
  menuType: section.menuType,
  itemCount: section.menuItems.length,
}));

test("seeding preserves draft-only sections and settings", async (context) => {
  context.mock.method(console, "log", () => {});
  let writes = 0;
  const client = {
    getDocuments: async (ids: string[]) => [null, { _id: ids[1] }],
    fetch: async () => counts,
    createOrReplace: async () => { writes += 1; },
    createIfNotExists: async () => { writes += 1; },
  } as unknown as SanityClient;
  await seedMenu(client, target);
  assert.equal(writes, 0);
});

test("seeding stops on lookup failure instead of replacing content", async (context) => {
  context.mock.method(console, "log", () => {});
  let writes = 0;
  const client = {
    getDocuments: async () => { throw new Error("Connection lost"); },
    createOrReplace: async () => { writes += 1; },
    createIfNotExists: async () => { writes += 1; },
  } as unknown as SanityClient;
  await assert.rejects(seedMenu(client, target), /Connection lost/);
  assert.equal(writes, 0);
});

test("new sections use atomic create-if-missing to preserve concurrent edits", async (context) => {
  context.mock.method(console, "log", () => {});
  const id = sectionId("food", 1, "Salads");
  const created: string[] = [];
  let replaced = false;
  const client = {
    getDocuments: async (ids: string[]) => ids[0] === id
      ? [null, null]
      : [{ _id: ids[0] }, null],
    fetch: async () => counts,
    createOrReplace: async () => { replaced = true; },
    createIfNotExists: async (doc: { _id: string }) => { created.push(doc._id); },
  } as unknown as SanityClient;
  await seedMenu(client, target);
  assert.deepEqual(created, [id]);
  assert.equal(replaced, false);
});
