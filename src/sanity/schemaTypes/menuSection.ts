import { defineArrayMember, defineField, defineType } from "sanity";

export const menuSection = defineType({
  name: "menuSection",
  title: "Menu Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "menuType",
      title: "Menu Type",
      type: "string",
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
      title: "Section Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "variant",
      title: "Layout Variant",
      type: "string",
      options: {
        list: [
          { title: "Image Left", value: "left" },
          { title: "Image Right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "left",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Lower numbers appear first within Food or Drinks.",
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({
      name: "menuItems",
      title: "Menu Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "menuItem",
          title: "Menu Item",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "string",
              description: 'e.g. "$8.00" or "$8.00 / $29.00"',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "price",
            },
          },
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      menuType: "menuType",
      media: "image",
      sortOrder: "sortOrder",
    },
    prepare({ title, menuType, media, sortOrder }) {
      return {
        title,
        subtitle: `${menuType ?? "?"} · #${sortOrder ?? "?"}`,
        media,
      };
    },
  },
});
