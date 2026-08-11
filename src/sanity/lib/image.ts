import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from "../env";

export function urlFor(source: SanityImageSource) {
  if (!projectId) {
    throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
  }

  return createImageUrlBuilder({ projectId, dataset }).image(source);
}
