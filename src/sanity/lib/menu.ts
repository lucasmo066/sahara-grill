import { projectId } from "../env";
import type { MenuSection, MenuSectionView } from "../types";
import { getClient } from "./client";
import { urlFor } from "./image";
import { drinksSectionsQuery, foodSectionsQuery } from "./queries";

function toSectionView(section: MenuSection): MenuSectionView {
  return {
    _id: section._id,
    title: section.title,
    sectionDescription: section.sectionDescription,
    imageUrl: section.image?.asset
      ? urlFor(section.image).width(800).height(600).url()
      : undefined,
    menuItems: (section.menuItems ?? []).map((item) => ({
      name: item.name,
      price: item.price,
      description: item.description ?? "",
    })),
    variant: section.variant,
  };
}

export async function getFoodSections(): Promise<MenuSectionView[]> {
  if (!projectId) {
    console.warn(
      "NEXT_PUBLIC_SANITY_PROJECT_ID is not set; returning empty food menu."
    );
    return [];
  }

  const sections = await getClient().fetch<MenuSection[]>(foodSectionsQuery);
  return sections.map(toSectionView);
}

export async function getDrinksSections(): Promise<MenuSectionView[]> {
  if (!projectId) {
    console.warn(
      "NEXT_PUBLIC_SANITY_PROJECT_ID is not set; returning empty drinks menu."
    );
    return [];
  }

  const sections = await getClient().fetch<MenuSection[]>(drinksSectionsQuery);
  return sections.map(toSectionView);
}
