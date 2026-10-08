import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

const resolvedProjectId = projectId || "unconfigured";

export default defineConfig({
  name: "sahara-grill",
  title: "Sahara Grill Menu",
  projectId: resolvedProjectId,
  dataset,
  basePath: "/studio",
  schema: {
    ...schema,
    templates: (templates) => templates.filter((template) => template.schemaType !== "menuPage"),
  },
  document: {
    actions: (actions, context) => context.schemaType === "menuPage"
      ? actions.filter((action) => action.action !== "duplicate")
      : actions,
  },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
