import { createClient, type QueryParams, type SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const MENU_CACHE_TAG = "menu";

let cachedClient: SanityClient | null = null;

export function getClient(): SanityClient {
  if (!projectId) {
    throw new Error(
      "Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Create a Sanity project and add the ID to .env",
    );
  }

  if (!cachedClient) {
    cachedClient = createClient({
      projectId,
      dataset,
      apiVersion,
      // Next.js caches these reads. Bypass the extra CDN cache so a publish
      // webhook refills the page with the latest published content.
      useCdn: false,
      perspective: "published",
    });
  }

  return cachedClient;
}

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [MENU_CACHE_TAG],
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<T> {
  return getClient().fetch<T>(query, params, {
    next: {
      tags,
      // Backup ISR if a webhook is delayed or misconfigured.
      revalidate: 60,
    },
  });
}
