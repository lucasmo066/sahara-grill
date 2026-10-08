import { defineField, defineType } from "sanity";

export const menuItem = defineType({
  name: "menuItem",
  title: "Menu Item",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Item name",
      type: "string",
      description: "How the dish or drink appears on the menu.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: 'Examples: "$8.00" or "$8.00 / $29.00" for glass / bottle.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      description: "Optional short description. Leave blank if not needed.",
    }),
    defineField({
      name: "isVisible",
      title: "Show on website",
      type: "boolean",
      description:
        "Turn off to hide this item without deleting it. Unpublished drafts are never shown until you Publish.",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "price",
      isVisible: "isVisible",
    },
    prepare({ title, subtitle, isVisible }) {
      return {
        title: isVisible === false ? `${title} (hidden)` : title,
        subtitle,
      };
    },
  },
});
