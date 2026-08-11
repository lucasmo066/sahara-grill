import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";

const resolvedProjectId = projectId || "unconfigured";

export default defineConfig({
  name: "sahara-grill",
  title: "Sahara Grill",
  projectId: resolvedProjectId,
  dataset,
  basePath: "/studio",
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
