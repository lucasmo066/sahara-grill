import { type SchemaTypeDefinition } from "sanity";
import { menuItem } from "./menuItem";
import { menuPage } from "./menuPage";
import { menuSection } from "./menuSection";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menuItem, menuSection, menuPage],
};
