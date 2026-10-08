import { mkdir, stat } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const images = [
  { source: "hero.jpeg", output: "hero.webp", width: 2560 },
  {
    source: "navigation/herologo.svg",
    output: "hero-logo.webp",
    width: 960,
    lossless: true,
  },
  ...[
    "hummuspita.JPG",
    "wrapfront.JPG",
    "chickenkaboboutside.JPG",
    "platterangle.JPG",
    "turkishcoffee.jpeg",
    "whitewine.jpeg",
    "redwine.jpeg",
    "beerfridge.JPG",
  ].map((file) => ({
    source: `menu/${file}`,
    output: `menu/${file.replace(/\.[^.]+$/, ".webp")}`,
    width: 1600,
  })),
];

// Keep the original photos for future edits and CMS uploads. Static imports give
// these display copies content-hashed URLs, so replacing a photo busts its cache.
for (const { source, output, width, lossless = false } of images) {
  const input = resolve(root, "public", source);
  const destination = resolve(root, "src/assets/images", output);
  await mkdir(dirname(destination), { recursive: true });
  const result = await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 85, lossless, effort: 6 })
    .toFile(destination);
  const original = await stat(input);
  console.log(
    JSON.stringify({
      image: output,
      originalBytes: original.size,
      optimizedBytes: result.size,
      width: result.width,
      height: result.height,
    }),
  );
}
