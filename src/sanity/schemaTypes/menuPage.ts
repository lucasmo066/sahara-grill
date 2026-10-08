import { defineField, defineType } from "sanity";

export const menuPage = defineType({
  name: "menuPage",
  title: "Menu Page Settings",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Page heading",
      type: "string",
      description: "Large title at the top of the menu page.",
      initialValue: "The Sahara Grill Menu",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Introductory copy",
      type: "text",
      rows: 3,
      description:
        "Optional short paragraph under the heading. Leave blank to hide it.",
    }),
    defineField({
      name: "foodTabLabel",
      title: "Food tab label",
      type: "string",
      description: "Label on the Food tab.",
      initialValue: "Food",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "drinksTabLabel",
      title: "Drinks tab label",
      type: "string",
      description: "Label on the Drinks tab.",
      initialValue: "Drinks",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
      description: "Browser tab / search result title for the menu page.",
      initialValue: "Menu | The Sahara Grill",
      validation: (rule) => rule.required().max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 3,
      description: "Short summary for search engines (about 150–160 characters).",
      initialValue:
        "Explore our Mediterranean food and drinks menu, from freshly prepared falafel and kebabs to platters, salads, and more.",
      validation: (rule) => rule.required().max(180),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Menu Page Settings",
        subtitle: "Heading, tabs, intro, and SEO",
      };
    },
  },
});
