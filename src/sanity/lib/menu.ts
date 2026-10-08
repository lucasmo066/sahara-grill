import { seedSections } from "@/data/menu";
import { projectId } from "../env";
import {
  defaultMenuPageSettings,
  type MenuPageSettings,
  type MenuSection,
  type MenuSectionView,
} from "../types";
import { menuImageUrl } from "./image";
import {
  drinksSectionsQuery,
  foodSectionsQuery,
  menuPageQuery,
} from "./queries";
import { sanityFetch } from "./client";

function toSectionView(section: MenuSection): MenuSectionView {
  return {
    _id: section._id,
    title: section.title,
    sectionDescription: section.sectionDescription,
    imageUrl: section.image?.asset
      ? menuImageUrl(section.image)
      : undefined,
    imageAlt: section.image?.alt || section.title,
    menuItems: (section.menuItems ?? []).map((item) => ({
      name: item.name,
      price: item.price,
      description: item.description ?? "",
    })),
    variant: section.variant,
  };
}

function getSavedSections(menuType: "food" | "drinks"): MenuSectionView[] {
  return seedSections
    .filter((section) => section.menuType === menuType)
    .map((section) => ({
      _id: `saved-${menuType}-${section.sortOrder}`,
      title: section.title,
      sectionDescription: section.sectionDescription,
      imageUrl: section.imagePath?.replace(/^public/, ""),
      imageAlt: section.title,
      menuItems: section.menuItems,
      variant: section.variant,
    }));
}

async function getSections(
  menuType: "food" | "drinks",
): Promise<MenuSectionView[]> {
  // Keep the existing menu available while the client sets up their CMS account.
  if (!projectId) return getSavedSections(menuType);

  try {
    const query = menuType === "food" ? foodSectionsQuery : drinksSectionsQuery;
    const sections = await sanityFetch<MenuSection[]>({ query });
    // An explicitly empty published menu stays empty; do not resurrect removed items.
    return sections.map(toSectionView);
  } catch {
    console.error(
      `Unable to load the ${menuType} menu from Sanity; using the saved menu.`,
    );
    return getSavedSections(menuType);
  }
}

export async function getFoodSections(): Promise<MenuSectionView[]> {
  return getSections("food");
}

export async function getDrinksSections(): Promise<MenuSectionView[]> {
  return getSections("drinks");
}

export async function getMenuPageSettings(): Promise<MenuPageSettings> {
  if (!projectId) return defaultMenuPageSettings;

  try {
    const settings = await sanityFetch<Partial<MenuPageSettings> | null>({
      query: menuPageQuery,
    });

    if (!settings) {
      // Settings document not published yet — use safe defaults, not an error fallback.
      return defaultMenuPageSettings;
    }

    return {
      heading: settings.heading || defaultMenuPageSettings.heading,
      intro: settings.intro || undefined,
      foodTabLabel:
        settings.foodTabLabel || defaultMenuPageSettings.foodTabLabel,
      drinksTabLabel:
        settings.drinksTabLabel || defaultMenuPageSettings.drinksTabLabel,
      seoTitle: settings.seoTitle || defaultMenuPageSettings.seoTitle,
      seoDescription:
        settings.seoDescription || defaultMenuPageSettings.seoDescription,
    };
  } catch {
    console.error(
      "Unable to load menu page settings from Sanity; using defaults.",
    );
    return defaultMenuPageSettings;
  }
}
