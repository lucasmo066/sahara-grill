import { groq } from "next-sanity";

export const menuSectionsQuery = groq`
  *[_type == "menuSection"] | order(sortOrder asc) {
    _id,
    title,
    menuType,
    sectionDescription,
    variant,
    sortOrder,
    image,
    menuItems[] {
      name,
      price,
      description
    }
  }
`;

export const foodSectionsQuery = groq`
  *[_type == "menuSection" && menuType == "food"] | order(sortOrder asc) {
    _id,
    title,
    menuType,
    sectionDescription,
    variant,
    sortOrder,
    image,
    menuItems[] {
      name,
      price,
      description
    }
  }
`;

export const drinksSectionsQuery = groq`
  *[_type == "menuSection" && menuType == "drinks"] | order(sortOrder asc) {
    _id,
    title,
    menuType,
    sectionDescription,
    variant,
    sortOrder,
    image,
    menuItems[] {
      name,
      price,
      description
    }
  }
`;
