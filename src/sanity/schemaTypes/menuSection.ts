import { defineArrayMember, defineField, defineType } from "sanity";

export const menuSection = defineType({
  name: "menuSection",
  title: "Menu Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section title",
      type: "string",
      description: "Category heading on the menu page (for example, Wraps).",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "menuType",
      title: "Food or Drinks",
      type: "string",
      description: "Controls which tab this section appears under.",
      options: {
        list: [
          { title: "Food", value: "food" },
          { title: "Drinks", value: "drinks" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sectionDescription",
      title: "Section note",
      type: "text",
      rows: 3,
      description:
        "Optional note under the title (sides, upcharges, serving info).",
    }),
    defineField({
      name: "image",
      title: "Section photo",
      type: "image",
      description: "Optional photo shown beside this section.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Photo description (alt text)",
          type: "string",
          description:
            "Short description for accessibility and SEO. Example: Hummus and pita.",
          validation: (rule) =>
            rule.custom((value, context) => {
              const parent = context.parent as { asset?: unknown } | undefined;
              if (parent?.asset && !value) {
                return "Add a short photo description when an image is uploaded.";
              }
              return true;
            }),
        }),
      ],
    }),
    defineField({
      name: "variant",
      title: "Photo alignment",
      type: "string",
      description:
        "Image left or image right. Keep the current layout unless you intentionally want to change it.",
      options: {
        list: [
          { title: "Photo on the left", value: "left" },
          { title: "Photo on the right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "left",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sortOrder",
      title: "Section order",
      type: "number",
      description:
        "Lower numbers appear first within Food or Drinks. Use 0, 1, 2…",
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({
      name: "isVisible",
      title: "Show on website",
      type: "boolean",
      description:
        "Turn off to hide the whole section without deleting it. Drafts stay private until Publish.",
      initialValue: true,
    }),
    defineField({
      name: "menuItems",
      title: "Items in this section",
      type: "array",
      description:
        "Drag to reorder. Item order here is the order guests see on the website.",
      of: [defineArrayMember({ type: "menuItem" })],
      validation: (rule) => rule.min(1).error("Add at least one menu item."),
    }),
  ],
  orderings: [
    {
      title: "Section order",
      name: "sortOrderAsc",
      by: [
        { field: "menuType", direction: "asc" },
        { field: "sortOrder", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      menuType: "menuType",
      media: "image",
      sortOrder: "sortOrder",
      isVisible: "isVisible",
      itemCount: "menuItems",
    },
    prepare({ title, menuType, media, sortOrder, isVisible, itemCount }) {
      const count = Array.isArray(itemCount) ? itemCount.length : 0;
      const hidden = isVisible === false ? " · hidden" : "";
      return {
        title,
        subtitle: `${menuType ?? "?"} · order ${sortOrder ?? "?"} · ${count} items${hidden}`,
        media,
      };
    },
  },
});
