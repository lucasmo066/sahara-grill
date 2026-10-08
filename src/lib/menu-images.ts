import type { StaticImageData } from "next/image";
import appetizers from "@/assets/images/menu/hummuspita.webp";
import wraps from "@/assets/images/menu/wrapfront.webp";
import kabobs from "@/assets/images/menu/chickenkaboboutside.webp";
import specialties from "@/assets/images/menu/platterangle.webp";
import coffee from "@/assets/images/menu/turkishcoffee.webp";
import whiteWine from "@/assets/images/menu/whitewine.webp";
import redWine from "@/assets/images/menu/redwine.webp";
import beer from "@/assets/images/menu/beerfridge.webp";

const savedMenuImages: Record<string, StaticImageData> = {
  "/menu/hummuspita.JPG": appetizers,
  "/menu/wrapfront.JPG": wraps,
  "/menu/chickenkaboboutside.JPG": kabobs,
  "/menu/platterangle.JPG": specialties,
  "/menu/turkishcoffee.jpeg": coffee,
  "/menu/whitewine.jpeg": whiteWine,
  "/menu/redwine.jpeg": redWine,
  "/menu/beerfridge.JPG": beer,
};

export function getMenuImageSource(url: string) {
  return savedMenuImages[url] ?? url;
}
