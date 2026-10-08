import assert from "node:assert/strict";
import { before, test } from "node:test";
import type { getClient as ClientGetter } from "../src/sanity/lib/client";
import type * as Menu from "../src/sanity/lib/menu";

let getClient: typeof ClientGetter;
let menu: typeof Menu;

before(async () => {
  // This suite never contacts Sanity: every fetch is replaced by the test.
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = "cleanuptest";
  ({ getClient } = await import("../src/sanity/lib/client"));
  menu = await import("../src/sanity/lib/menu");
});

test("website reads published content directly before Next.js caches it", () => {
  assert.equal(getClient().config().perspective, "published");
  assert.equal(getClient().config().useCdn, false);
  assert.equal(getClient().config().token, undefined);
});

test("an intentionally empty published menu stays empty", async (context) => {
  context.mock.method(getClient(), "fetch", async () => []);
  assert.deepEqual(await menu.getFoodSections(), []);
  assert.deepEqual(await menu.getDrinksSections(), []);
});

test("published menu edits take precedence over saved content", async (context) => {
  const published = {
    _id: "client-special",
    title: "Client specials",
    variant: "right",
    menuItems: [{ name: "Daily special", price: "$14.00" }],
  };
  context.mock.method(getClient(), "fetch", async () => [published]);
  const sections = await menu.getFoodSections();
  assert.equal(sections.length, 1);
  assert.equal(sections[0].menuItems[0].price, "$14.00");
  assert.equal(sections[0].title, "Client specials");
});

test("a CMS outage keeps the saved food and drinks menus available", async (context) => {
  context.mock.method(getClient(), "fetch", async () => {
    throw new Error("Unavailable");
  });
  context.mock.method(console, "error", () => {});
  const food = await menu.getFoodSections();
  const drinks = await menu.getDrinksSections();
  assert.equal(food.length, 12);
  assert.equal(drinks.length, 4);
  assert.equal(food[0].menuItems[0].name, "Hummus & Pita");
  assert.equal(food[0].menuItems[0].price, "$6.00");
  assert.equal(food[0].imageUrl, "/menu/hummuspita.JPG");
  assert.equal(food[0].imageAlt, "Appetizers");
});

test("menu page settings fall back to defaults when the document is missing", async (context) => {
  context.mock.method(getClient(), "fetch", async () => null);
  const settings = await menu.getMenuPageSettings();
  assert.equal(settings.heading, "The Sahara Grill Menu");
  assert.equal(settings.foodTabLabel, "Food");
  assert.equal(settings.seoTitle, "Menu | The Sahara Grill");
});

test("menu page settings from CMS are used when published", async (context) => {
  context.mock.method(getClient(), "fetch", async () => ({
    heading: "Our Menu",
    intro: "Fresh daily.",
    foodTabLabel: "Kitchen",
    drinksTabLabel: "Bar",
    seoTitle: "Menu SEO",
    seoDescription: "SEO description",
  }));
  const settings = await menu.getMenuPageSettings();
  assert.equal(settings.heading, "Our Menu");
  assert.equal(settings.intro, "Fresh daily.");
  assert.equal(settings.foodTabLabel, "Kitchen");
  assert.equal(settings.drinksTabLabel, "Bar");
});

test("saved menu alignment matches the approved layout", async (context) => {
  context.mock.method(getClient(), "fetch", async () => {
    throw new Error("Unavailable");
  });
  context.mock.method(console, "error", () => {});
  const food = await menu.getFoodSections();
  const byTitle = Object.fromEntries(food.map((s) => [s.title, s.variant]));
  assert.equal(byTitle.Wraps, "left");
  assert.equal(byTitle["Wrap Specials"], "left");
  assert.equal(byTitle["Off the Grill Kabobs"], "right");
  assert.equal(byTitle["House Specialties"], "left");
  assert.equal(byTitle["À La Carte"], "right");
  assert.equal(byTitle.Kids, "left");
});
