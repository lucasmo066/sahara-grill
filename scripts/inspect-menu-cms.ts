/** Read-only CMS audit using the existing Sanity CLI login. */
import { getCliClient } from "sanity/cli";

async function main() {
  const client = getCliClient({ apiVersion: "2025-02-19" }).withConfig({ useCdn: false });
  const sections = await client.fetch<{ title: string; menuType: string; items: number; variant: string; hasImage: boolean }[]>(
    '*[_type == "menuSection"] | order(menuType asc, sortOrder asc) {title, menuType, "items": count(menuItems), variant, "hasImage": defined(image.asset)}',
    {},
    { perspective: "published" },
  );
  const [settings, draft] = await client.getDocuments(["menuPage", "drafts.menuPage"]);
  const hooks = await client.withConfig({ useProjectHostname: false }).request<
    { id: string; name: string; url: string; isDisabled: boolean }[]
  >({ uri: `/hooks/projects/${client.config().projectId}` });
  console.log(JSON.stringify({
    project: client.config().projectId,
    dataset: client.config().dataset,
    sections: sections.length,
    items: sections.reduce((count, section) => count + section.items, 0),
    photos: sections.filter((section) => section.hasImage).length,
    layout: sections.map(({ title, variant }) => ({ title, variant })),
    menuPage: settings ? { heading: settings.heading, intro: settings.intro || null } : null,
    menuPageHasDraft: !!draft,
    hooks: hooks.map(({ id, name, url, isDisabled }) => ({ id, name, url, isDisabled })),
  }, null, 2));
}

main().catch((error) => {
  console.error(`CMS audit failed (HTTP ${error.statusCode || "unknown"}).`);
  process.exitCode = 1;
});
