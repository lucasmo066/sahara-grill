export type SeedMenuItem = {
  name: string;
  price: string;
  description: string;
};

export type SeedSection = {
  title: string;
  menuType: "food" | "drinks";
  sectionDescription?: string;
  imagePath?: string;
  variant: "left" | "right";
  sortOrder: number;
  menuItems: SeedMenuItem[];
};

export const seedSections: SeedSection[] = [
  {
    title: "Appetizers",
    menuType: "food",
    sectionDescription: "Mezza before the main entree",
    imagePath: "public/menu/hummuspita.JPG",
    sortOrder: 0,
    variant: "left",
    menuItems: [
      { name: "Hummus & Pita", price: "$6.00", description: "Creamy hummus served with warm pita bread" },
      { name: "Baba Ghanoush & Pita", price: "$6.00", description: "Smoky eggplant dip served with pita bread" },
      { name: "Tzatziki & Pita Bread", price: "$4.00", description: "Creamy tzatziki served with warm pita bread" },
      { name: "Garlic & Pita Bread", price: "$4.00", description: "Garlic dip served with warm pita bread" },
      { name: "Sahara Trio Dip", price: "$10.00", description: "Contains Hummus, Garlic, and Baba Ghanoush" },
      { name: "Falafel & Pita", price: "$6.00", description: "Crispy falafel balls served with pita bread" },
      { name: "Cauliflower", price: "$6.00", description: "Fried florets drizzled with tahini" },
      { name: "Dolmas", price: "$6.00", description: "Stuffed grape leaves with rice and herbs" },
      { name: "Greek Potatoes", price: "$6.00", description: "Fried potato wedges marinated in a garlic lemon dressing drizzled with feta cheese" },
    ],
  },
  {
    title: "Salads",
    menuType: "food",
    sortOrder: 1,
    variant: "right",
    menuItems: [
      { name: "House Salad", price: "$6.00", description: "Romaine lettuce topped with red onion, cucumber, cherry tomatoes, with balsamic dressing" },
      { name: "Fattoush", price: "$6.00", description: "Mixed greens, tomatoes, cucumbers, radishes, and crispy pita chips" },
      { name: "Greek Salad", price: "$6.00", description: "Mixed greens, tomatoes, cucumbers, red onions, olives, and feta cheese" },
      { name: "Tabbouleh", price: "$7.00", description: "Parsley, tomatoes, onions, and bulgur wheat" },
      { name: "Sahara Salad", price: "$7.00", description: "Diced cucumber, tomatoes, and red onion marinated in a vinegar based dressing" },
    ],
  },
  {
    title: "Salad Bar",
    menuType: "food",
    sectionDescription: "Choices between the salads are Kale salad, Arugula salad, Cabbage salad, and Chickpeas",
    sortOrder: 2,
    variant: "right",
    menuItems: [
      { name: "One Item Salad Plate", price: "$6.00", description: "" },
      { name: "Two Item Salad Plate", price: "$8.00", description: "" },
      { name: "Three Item Salad Plate", price: "$10.00", description: "" },
      { name: "Four Item Salad Plate", price: "$12.00", description: "" },
    ],
  },
  {
    title: "Soups",
    menuType: "food",
    sectionDescription: "Served with Pita bread",
    sortOrder: 3,
    variant: "left",
    menuItems: [
      { name: "Lentil Soup", price: "$5.00", description: "Lentils, onions, and spice" },
    ],
  },
  {
    title: "Wraps",
    menuType: "food",
    imagePath: "public/menu/wrapfront.JPG",
    sortOrder: 4,
    variant: "right",
    menuItems: [
      { name: "Gyro Wrap", price: "$8.00", description: "mixture of lamb and beef instead of just lamb , lettuce, tomatoes, onions, feta cheese and tzatziki sauce" },
      { name: "Grilled Chicken with Tzatziki Sauce", price: "$8.00", description: "Grilled chicken, lettuce, tomatoes, onions, feta cheese and tzatziki sauce" },
      { name: "Falafel Wrap", price: "$8.00", description: "Falafel, lettuce, tomatoes, hummus, and tahini sauce" },
      { name: "Fish Wrap", price: "$8.00", description: "Fried fish, lettuce, tomatoes, and tahini sauce" },
      { name: "Shrimp Wrap", price: "$12.00", description: "Shrimp, onions, lettuce, tomatoes, and tzatziki sauce" },
      { name: "Kufta Wrap", price: "$8.00", description: "Ground beef (Kufta), lettuce, tomatoes, and tahini sauce" },
      { name: "Chicken Shawarma Wrap", price: "$8.00", description: "Chicken Shawarma, Garlic Paste, Pickles, and Tomatoes" },
      { name: "Beef Shawarma Wrap", price: "$12.00", description: "Beef Shawarma, Pickles, Lettuce, Tomatoes, and Tahini sauce" },
      { name: "Grilled Veggie Wrap", price: "$8.00", description: "Hummus, Lettuce, Tomatoes, but has a choice of Tahini or Tzatziki Sauce." },
    ],
  },
  {
    title: "Wrap Specials",
    menuType: "food",
    sectionDescription: "Sides: Fries, Rice, or Salad Bar. All combos include a Fountain Drink. Wrap choices of Beef Shawarma, Cream Chop, or Shrimp is an up-charge of $3.",
    sortOrder: 5,
    variant: "left",
    menuItems: [
      { name: "Any Wrap Choice with One Side", price: "$12.00", description: "" },
      { name: "Any Wrap Choice with Two Sides", price: "$13.00", description: "" },
    ],
  },
  {
    title: "Off the Grill Kabobs",
    menuType: "food",
    imagePath: "public/menu/chickenkaboboutside.JPG",
    sectionDescription: "All the Kabob Platters are served with yellow rice, house salad, and pita bread",
    sortOrder: 6,
    variant: "left",
    menuItems: [
      { name: "Veggie Kabob", price: "$13.00", description: "Marinated veggies skewered and grilled" },
      { name: "Chicken Kabob", price: "$18.00", description: "Marinated chicken breast skewered and grilled" },
      { name: "Kufta Kabob", price: "$18.00", description: "Ground beef skewered and grilled" },
      { name: "Shrimp Kabob", price: "$18.00", description: "Marinated shrimp skewered and grilled" },
      { name: "Beef Kabob", price: "$20.00", description: "Marinated beef skewered and grilled" },
      { name: "Lamb Kabob", price: "$20.00", description: "Marinated lamb skewered and grilled" },
    ],
  },
  {
    title: "House Specialties",
    menuType: "food",
    imagePath: "public/menu/platterangle.JPG",
    sortOrder: 7,
    variant: "right",
    menuItems: [
      { name: "Mezza Platter", price: "$15.00", description: "Stuffed Grape leaves, Hummus, Tabbouleh salad, Baba Ghanoush, falafel, Sahara salad and Pita bread" },
      { name: "Mediterranean Platter", price: "$15.00", description: "Meat choice of Chicken Shawarma or Gyro that is served with Greek salad, Hummus, and Pita bread" },
      { name: "Combo Platter", price: "$18.00", description: "Two types of meats which are Grilled Chicken, and Gyro this is served with house salad, Hummus, and Pita bread" },
      { name: "Ultimate Meat Platter", price: "$22.00", description: "Three types of meats which are Gyro, Grill Chicken, and kofta that is served with rice, hummus, and Pita bread" },
      { name: "Sahara Signature Dish", price: "$28.00", description: "Four types of meats which are gyro meat, grilled chicken, beef skewer, and a kofta skewer that is served with rice, house salad, hummus, and pita bread" },
    ],
  },
  {
    title: "À La Carte",
    menuType: "food",
    sortOrder: 8,
    variant: "left",
    menuItems: [
      { name: "Veggie Skewer", price: "$5.00", description: "" },
      { name: "Sliced Gyro Meat", price: "$7.50", description: "" },
      { name: "Chopped Chicken Shawarma", price: "$7.50", description: "" },
      { name: "Chicken Skewer", price: "$7.00", description: "" },
      { name: "Kufta Skewer", price: "$7.00", description: "" },
      { name: "Shrimp Skewer", price: "$7.00", description: "" },
      { name: "Beef Skewer", price: "$8.00", description: "" },
      { name: "Lamb Skewer", price: "$8.00", description: "" },
    ],
  },
  {
    title: "Kids",
    menuType: "food",
    sectionDescription: "The kids meal has a side choice of French Fries or Yellow Rice and a choice of a Fountain Drink",
    sortOrder: 9,
    variant: "right",
    menuItems: [
      { name: "Sliced Gyro Meat", price: "$9.00", description: "" },
      { name: "Fried Chicken Tenders", price: "$9.00", description: "" },
      { name: "Chicken Skewer", price: "$10.00", description: "" },
      { name: "Shrimp Skewer", price: "$10.00", description: "" },
      { name: "Beef Skewer", price: "$12.00", description: "" },
      { name: "Lamb Skewer", price: "$12.00", description: "" },
    ],
  },
  {
    title: "Desserts",
    menuType: "food",
    sectionDescription: "Something sweet to end your meal!",
    sortOrder: 10,
    variant: "left",
    menuItems: [
      { name: "Rice Pudding", price: "$3.00", description: "" },
      { name: "Woodstock Pie", price: "$5.00", description: "" },
      { name: "Baklava", price: "$6.00", description: "" },
    ],
  },
  {
    title: "Extra Add-On",
    menuType: "food",
    sortOrder: 11,
    variant: "right",
    menuItems: [
      { name: "Grilled Tomato", price: "$1.00", description: "" },
      { name: "Pita Bread", price: "$1.50", description: "" },
      { name: "Yellow Rice", price: "$4.00", description: "" },
      { name: "French Fries", price: "$4.00", description: "" },
      { name: "Sautéed Veggies", price: "$5.00", description: "Marinated zucchini, squash, mixed peppers, and red onions" },
    ],
  },
  {
    title: "Beverages",
    menuType: "drinks",
    sectionDescription: "Non-alcoholic beverages",
    imagePath: "public/menu/turkishcoffee.jpeg",
    sortOrder: 0,
    variant: "left",
    menuItems: [
      { name: "Fountain Drinks or Iced Tea", price: "$3.00", description: "" },
      { name: "Bottled Juices", price: "$4.00", description: "" },
      { name: "Bottled Water", price: "$3.00", description: "" },
      { name: "Sparkling Water", price: "$4.00", description: "" },
      { name: "Hot Tea", price: "$4.00", description: "" },
      { name: "Turkish Coffee", price: "$4.00", description: "Very strong coffee prepared the authentic way" },
    ],
  },
  {
    title: "White Wine",
    menuType: "drinks",
    imagePath: "public/menu/whitewine.jpeg",
    sortOrder: 1,
    variant: "right",
    menuItems: [
      { name: "Sterling Chardonnay", price: "8.00 / 29.00", description: "A rich and buttery white wine" },
      { name: 'Harken "Bottle Fermented" Chardonnay', price: "9.00 / 33.00", description: "A rich and buttery white wine" },
      { name: "The Champion Sauvignon Blanc", price: "$8.00 / $29.00", description: "A crisp and refreshing white wine" },
      { name: "Beroni Fini Pinot Grigio", price: "$9.00 / $33.00", description: "A light and refreshing white wine" },
      { name: "Stella Rosa Moscato", price: "$8.00 / $29.00", description: "A sweet and fruity white wine" },
    ],
  },
  {
    title: "Red Wine",
    menuType: "drinks",
    imagePath: "public/menu/redwine.jpeg",
    sortOrder: 2,
    variant: "left",
    menuItems: [
      { name: "Sterling Merlot", price: "$8.00 / $29.00", description: "A rich and fruity red wine" },
      { name: "Sterling Cabernet Sauvignon", price: "$9.00 / $33.00", description: "A bold and full-bodied red wine" },
      { name: "Sterling Pinot Noir", price: "$8.00 / $29.00", description: "A light and fruity red wine" },
      { name: "Sterling Malbec", price: "$9.00 / $33.00", description: "A bold and spicy red wine" },
      { name: "Sterling Shiraz", price: "$8.00 / $29.00", description: "A bold and spicy red wine" },
    ],
  },
  {
    title: "Beer",
    menuType: "drinks",
    sectionDescription: "Imported and domestic beers",
    imagePath: "public/menu/beerfridge.JPG",
    sortOrder: 3,
    variant: "right",
    menuItems: [
      { name: "Domestic Beer", price: "$5.00", description: "" },
      { name: "Craft/Import Beers", price: "$7.00", description: "" },
    ],
  },
];
