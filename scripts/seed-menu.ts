import { createClient } from "@sanity/client";
import { config as loadEnv } from "dotenv";
import { createReadStream, existsSync } from "fs";
import path from "path";
import { seedSections } from "./menu-seed-data";

loadEnv({ path: path.resolve(process.cwd(), ".env.local") });
loadEnv({ path: path.resolve(process.cwd(), ".env") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
}

if (!token) {
  throw new Error(
    "Missing SANITY_API_WRITE_TOKEN. Create an API token with Editor permissions in Sanity manage."
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

async function uploadImage(imagePath: string) {
  const absolutePath = path.resolve(process.cwd(), imagePath);
  if (!existsSync(absolutePath)) {
    console.warn(`Image not found, skipping: ${imagePath}`);
    return undefined;
  }

  const filename = path.basename(absolutePath);
  const asset = await client.assets.upload("image", createReadStream(absolutePath), {
    filename,
  });

  return {
    _type: "image" as const,
    asset: {
      _type: "reference" as const,
      _ref: asset._id,
    },
  };
}

function sectionId(menuType: string, sortOrder: number, title: string) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `menuSection-${menuType}-${sortOrder}-${slug}`;
}

async function seed() {
  console.log(`Seeding ${seedSections.length} menu sections into ${projectId}:${dataset}...`);

  for (const section of seedSections) {
    const image = section.imagePath
      ? await uploadImage(section.imagePath)
      : undefined;

    const doc = {
      _id: sectionId(section.menuType, section.sortOrder, section.title),
      _type: "menuSection",
      title: section.title,
      menuType: section.menuType,
      sectionDescription: section.sectionDescription,
      variant: section.variant,
      sortOrder: section.sortOrder,
      ...(image ? { image } : {}),
      menuItems: section.menuItems.map((item) => ({
        _type: "menuItem",
        _key: item.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, ""),
        name: item.name,
        price: item.price,
        description: item.description,
      })),
    };

    await client.createOrReplace(doc);
    console.log(`Upserted: ${section.menuType} / ${section.title}`);
  }

  console.log("Seed complete.");
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
