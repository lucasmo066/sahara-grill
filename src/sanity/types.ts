export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export type MenuSection = {
  _id: string;
  title: string;
  menuType: "food" | "drinks";
  sectionDescription?: string;
  variant: "left" | "right";
  sortOrder: number;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
    };
    hotspot?: unknown;
  };
  menuItems: MenuItem[];
};

export type MenuSectionView = {
  _id: string;
  title: string;
  sectionDescription?: string;
  imageUrl?: string;
  menuItems: MenuItem[];
  variant: "left" | "right";
};
