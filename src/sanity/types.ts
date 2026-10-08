export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  isVisible?: boolean;
};

export type MenuSection = {
  _id: string;
  title: string;
  menuType: "food" | "drinks";
  sectionDescription?: string;
  variant: "left" | "right";
  sortOrder: number;
  isVisible?: boolean;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
    hotspot?: unknown;
  };
  menuItems: MenuItem[];
};

export type MenuSectionView = {
  _id: string;
  title: string;
  sectionDescription?: string;
  imageUrl?: string;
  imageAlt?: string;
  menuItems: MenuItem[];
  variant: "left" | "right";
};

export type MenuPageSettings = {
  heading: string;
  intro?: string;
  foodTabLabel: string;
  drinksTabLabel: string;
  seoTitle: string;
  seoDescription: string;
};

export const defaultMenuPageSettings: MenuPageSettings = {
  heading: "The Sahara Grill Menu",
  intro: undefined,
  foodTabLabel: "Food",
  drinksTabLabel: "Drinks",
  seoTitle: "Menu | The Sahara Grill",
  seoDescription:
    "Explore our Mediterranean food and drinks menu, from freshly prepared falafel and kebabs to platters, salads, and more.",
};
