import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Sahara Grill Menu")
    .items([
      S.listItem()
        .title("Food")
        .schemaType("menuSection")
        .child(
          S.documentTypeList("menuSection")
            .title("Food sections")
            .filter('_type == "menuSection" && menuType == "food"')
            .defaultOrdering([{ field: "sortOrder", direction: "asc" }]),
        ),
      S.listItem()
        .title("Drinks")
        .schemaType("menuSection")
        .child(
          S.documentTypeList("menuSection")
            .title("Drinks sections")
            .filter('_type == "menuSection" && menuType == "drinks"')
            .defaultOrdering([{ field: "sortOrder", direction: "asc" }]),
        ),
      S.divider(),
      S.listItem()
        .title("Menu Page Settings")
        .id("menuPage")
        .child(
          S.document()
            .schemaType("menuPage")
            .documentId("menuPage")
            .title("Menu Page Settings"),
        ),
    ]);
