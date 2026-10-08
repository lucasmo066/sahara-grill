import { groq } from "next-sanity";

const sectionFields = `
  _id,
  title,
  menuType,
  sectionDescription,
  variant,
  sortOrder,
  isVisible,
  image{
    ...,
    alt
  },
  menuItems[isVisible != false] {
    name,
    price,
    description,
    isVisible
  }
`;

export const foodSectionsQuery = groq`
  *[_type == "menuSection" && menuType == "food" && isVisible != false]
  | order(sortOrder asc) {
    ${sectionFields}
  }
`;

export const drinksSectionsQuery = groq`
  *[_type == "menuSection" && menuType == "drinks" && isVisible != false]
  | order(sortOrder asc) {
    ${sectionFields}
  }
`;

export const menuPageQuery = groq`
  *[_type == "menuPage" && _id == "menuPage"][0] {
    heading,
    intro,
    foodTabLabel,
    drinksTabLabel,
    seoTitle,
    seoDescription
  }
`;

/** Used by seed verification — includes hidden docs so counts stay accurate. */
export const allMenuSectionsAdminQuery = groq`
  *[_type == "menuSection"] | order(menuType asc, sortOrder asc) {
    _id,
    title,
    menuType,
    sortOrder,
    isVisible,
    "itemCount": count(menuItems)
  }
`;
