import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { dataset, projectId } from "../env";

export function urlFor(source: SanityImageSource) {
  if (!projectId) {
    throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
  }

  return createImageUrlBuilder({ projectId, dataset }).image(source);
}

/** Responsive CDN URL used by next/image for Sanity-hosted photos. */
export function menuImageUrl(source: SanityImageSource) {
  return urlFor(source).width(1200).height(900).fit("crop").auto("format").url();
}
