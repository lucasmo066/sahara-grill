import { createClient, type SanityClient } from "@sanity/client";
import { config as loadEnv } from "dotenv";
import { createReadStream, existsSync } from "fs";
import path from "path";
import { seedSections } from "../src/data/menu";
import { defaultMenuPageSettings } from "../src/sanity/types";

loadEnv({ path: path.resolve(process.cwd(), ".env.local") });
loadEnv({ path: path.resolve(process.cwd(), ".env") });

const EXPECTED_SECTIONS = 16;
const EXPECTED_ITEMS = 81;

export function sectionId(menuType: string, sortOrder: number, title: string) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `menuSection-${menuType}-${sortOrder}-${slug}`;
}

function itemKey(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function uploadImage(
  client: SanityClient,
  imagePath: string,
  alt: string,
) {
  const absolutePath = path.resolve(process.cwd(), imagePath);
  if (!existsSync(absolutePath)) {
    console.warn(`Image not found, skipping: ${imagePath}`);
    return undefined;
  }

  const filename = path.basename(absolutePath);
  const asset = await client.assets.upload(
    "image",
    createReadStream(absolutePath),
    { filename },
  );

  return {
    _type: "image" as const,
    alt,
    asset: {
      _type: "reference" as const,
      _ref: asset._id,
    },
  };
}

async function seedMenuPage(client: SanityClient, force: boolean) {
  const existing = (await client.getDocuments(["menuPage", "drafts.menuPage"]))
    .some(Boolean);

  if (existing && !force) {
    console.log("Skipped Menu Page Settings (already exists).");
    return;
  }

  const doc = {
    _id: "menuPage",
    _type: "menuPage",
    heading: defaultMenuPageSettings.heading,
    foodTabLabel: defaultMenuPageSettings.foodTabLabel,
    drinksTabLabel: defaultMenuPageSettings.drinksTabLabel,
    seoTitle: defaultMenuPageSettings.seoTitle,
    seoDescription: defaultMenuPageSettings.seoDescription,
  };
  if (force) await client.createOrReplace(doc);
  else await client.createIfNotExists(doc);
  console.log(
    force
      ? "Replaced Menu Page Settings (--force)."
      : "Created Menu Page Settings.",
  );
}

export async function seedMenu(
  client: SanityClient,
  {
    force = false,
    projectId,
    dataset,
  }: { force?: boolean; projectId: string; dataset: string },
) {
  const localItems = seedSections.reduce(
    (total, section) => total + section.menuItems.length,
    0,
  );

  if (
    seedSections.length !== EXPECTED_SECTIONS ||
    localItems !== EXPECTED_ITEMS
  ) {
    throw new Error(
      `Local menu source mismatch: expected ${EXPECTED_SECTIONS} sections / ${EXPECTED_ITEMS} items, found ${seedSections.length} / ${localItems}.`,
    );
  }

  console.log(
    `Seeding ${seedSections.length} sections (${localItems} items) into ${projectId}:${dataset}${force ? " (--force overwrite)" : " (skip existing)"}...`,
  );

  let created = 0;
  let skipped = 0;

  for (const section of seedSections) {
    const id = sectionId(section.menuType, section.sortOrder, section.title);
    // A read failure must stop seeding. A draft may be an intentionally
    // unpublished section; never recreate its published copy on a normal run.
    const existing = (await client.getDocuments([id, `drafts.${id}`])).some(Boolean);

    if (existing && !force) {
      skipped += 1;
      console.log(`Skipped (exists): ${section.menuType} / ${section.title}`);
      continue;
    }

    const image = section.imagePath
      ? await uploadImage(client, section.imagePath, section.title)
      : undefined;

    const doc = {
      _id: id,
      _type: "menuSection",
      title: section.title,
      menuType: section.menuType,
      sectionDescription: section.sectionDescription,
      variant: section.variant,
      sortOrder: section.sortOrder,
      isVisible: true,
      ...(image ? { image } : {}),
      menuItems: section.menuItems.map((item) => ({
        _type: "menuItem",
        _key: itemKey(item.name),
        name: item.name,
        price: item.price,
        description: item.description,
        isVisible: true,
      })),
    };

    if (force) await client.createOrReplace(doc);
    else await client.createIfNotExists(doc);
    created += 1;
    console.log(
      `${force && existing ? "Replaced" : "Created"}: ${section.menuType} / ${section.title} (${section.menuItems.length} items, ${section.variant})`,
    );
  }

  await seedMenuPage(client, force);

  const remote = await client.fetch<
    { menuType: string; itemCount: number; title: string }[]
  >(
    `*[_type == "menuSection" && !(_id in path("drafts.**")) && !(_id in path("versions.**"))]{ title, menuType, "itemCount": count(menuItems) }`,
  );
  const remoteItems = remote.reduce((n, s) => n + (s.itemCount || 0), 0);
  const foodCount = remote.filter((s) => s.menuType === "food").length;
  const drinksCount = remote.filter((s) => s.menuType === "drinks").length;

  console.log("---");
  console.log(`Created: ${created}, skipped: ${skipped}`);
  console.log(
    `Dataset now has ${remote.length} sections (${foodCount} food, ${drinksCount} drinks) and ${remoteItems} items.`,
  );

  if (remote.length < EXPECTED_SECTIONS || remoteItems < EXPECTED_ITEMS) {
    throw new Error(
      `Seed verification failed: expected at least ${EXPECTED_SECTIONS} sections / ${EXPECTED_ITEMS} items. Do not point the site at this dataset until seed completes successfully.`,
    );
  }

  console.log("Seed verification passed. Safe to use this dataset on the site.");
  if (!force) {
    console.log(
      "Tip: reruns skip existing documents so client edits are preserved. Use --force only to intentionally overwrite.",
    );
  }
}

async function main() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
  const token = process.env.SANITY_API_WRITE_TOKEN;
  const force = process.argv.includes("--force");

  if (!projectId) {
    throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
  }

  if (!token) {
    throw new Error(
      "Missing SANITY_API_WRITE_TOKEN. Either add an Editor token to .env, or run: npm run seed:menu:cli",
    );
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
  });

  await seedMenu(client, { force, projectId, dataset });
}

const isDirectRun =
  typeof process.argv[1] === "string" &&
  process.argv[1].includes("seed-menu.ts") &&
  !process.argv[1].includes("seed-menu-cli");

if (isDirectRun) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
