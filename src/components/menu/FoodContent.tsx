import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import FoodContentSections from "@/components/menu/FoodContentSections";

interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface Section {
  title: string;
  sectionDescription?: string;
  imageUrl?: string;
  menuItems: MenuItem[];
  variant: 'left' | 'right';
}

const FoodContent = () => {
  const sections: Section[] = [
    {
      title: "Appetizers",
      sectionDescription: "Mezza before the main entree",
      imageUrl: "/menu/hummuspita.JPG",
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
      variant: "left",
    },
    {
      title: "Salads",
      
      menuItems: [
        { name: "House Salad", price: "$6.00", description: "Romaine lettuce topped with red onion, cucumber, cherry tomatoes, with balsamic dressing" },
        { name: "Fattoush", price: "$6.00", description: "Mixed greens, tomatoes, cucumbers, radishes, and crispy pita chips" },
        { name: "Greek Salad", price: "$6.00", description: "Mixed greens, tomatoes, cucumbers, red onions, olives, and feta cheese" },
        { name: "Tabbouleh", price: "$7.00", description: "Parsley, tomatoes, onions, and bulgur wheat" },
        { name: "Sahara Salad", price: "$7.00", description: "Diced cucumber, tomatoes, and red onion marinated in a vinegar based dressing" },
      ],
      variant: "right",
    },
    {
      title: "Salad Bar",
      sectionDescription: "Choices between the salads are Kale salad, Arugula salad, Cabbage salad, and Chickpeas",
      menuItems: [
        { name: "One Item Salad Plate", price: "$6.00", description: "" },
        { name: "Two Item Salad Plate", price: "$8.00", description: "" },
        { name: "Three Item Salad Plate", price: "$10.00", description: "" },
        { name: "Four Item Salad Plate", price: "$12.00", description: "" },
      ],
      variant: "right",
    },
    {
      title: "Soups",
      sectionDescription: "Served with Pita bread",
      menuItems: [
        { name: "Lentil Soup", price: "$5.00", description: "Lentils, onions, and spice" },
      ],
      variant: "left",
    },
    {
      title: "Wraps",
      imageUrl: "/menu/wrapfront.JPG",
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
      variant: "right",
    },
    {
      title: "Wrap Specials",
      sectionDescription: "Sides: Fries, Rice, or Salad Bar. All combos include a Fountain Drink. Wrap choices of Beef Shawarma, Cream Chop, or Shrimp is an up-charge of $3.",
      menuItems: [
        { name: "Any Wrap Choice with One Side", price: "$12.00", description: "" },
        { name: "Any Wrap Choice with Two Sides", price: "$13.00", description: "" },
      ],
      variant: "left",
    },
    {
      title: "Off the Grill Kabobs",
      imageUrl: "/menu/chickenkaboboutside.JPG",
      sectionDescription: "All the Kabob Platters are served with yellow rice, house salad, and pita bread",
      menuItems: [
        { name: "Veggie Kabob", price: "$13.00", description: "Marinated veggies skewered and grilled" },
        { name: "Chicken Kabob", price: "$18.00", description: "Marinated chicken breast skewered and grilled" },
        { name: "Kufta Kabob", price: "$18.00", description: "Ground beef skewered and grilled" },
        { name: "Shrimp Kabob", price: "$18.00", description: "Marinated shrimp skewered and grilled" },
        { name: "Beef Kabob", price: "$20.00", description: "Marinated beef skewered and grilled" },
        { name: "Lamb Kabob", price: "$20.00", description: "Marinated lamb skewered and grilled" },
      ],
      variant: "left",
    },
    {
      title: "House Specialties",
      imageUrl: "/menu/platterangle.JPG",
      menuItems: [
        { name: "Mezza Platter", price: "$15.00", description: "Stuffed Grape leaves, Hummus, Tabbouleh salad, Baba Ghanoush, falafel, Sahara salad and Pita bread" },
        { name: "Mediterranean Platter", price: "$15.00", description: "Meat choice of Chicken Shawarma or Gyro that is served with Greek salad, Hummus, and Pita bread" },
        { name: "Combo Platter", price: "$18.00", description: "Two types of meats which are Grilled Chicken, and Gyro this is served with house salad, Hummus, and Pita bread" },
        { name: "Ultimate Meat Platter", price: "$22.00", description: "Three types of meats which are Gyro, Grill Chicken, and kofta that is served with rice, hummus, and Pita bread" },
        { name: "Sahara Signature Dish", price: "$28.00", description: "Four types of meats which are gyro meat, grilled chicken, beef skewer, and a kofta skewer that is served with rice, house salad, hummus, and pita bread" },
      ],
      variant: "right",
    },
    {
      title: "À La Carte",
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
      variant: "left",
    },
    {
      title: "Kids",
      sectionDescription: "The kids meal has a side choice of French Fries or Yellow Rice and a choice of a Fountain Drink",
      menuItems: [
        { name: "Sliced Gyro Meat", price: "$9.00", description: "" },
        { name: "Fried Chicken Tenders", price: "$9.00", description: "" },
        { name: "Chicken Skewer", price: "$10.00", description: "" },
        { name: "Shrimp Skewer", price: "$10.00", description: "" },
        { name: "Beef Skewer", price: "$12.00", description: "" },
        { name: "Lamb Skewer", price: "$12.00", description: "" },
      ],
      variant: "right",
    },
    {
      title: "Desserts",
      sectionDescription: "Something sweet to end your meal!",
      menuItems: [
        { name: "Rice Pudding", price: "$3.00", description: "" },
        { name: "Woodstock Pie", price: "$5.00", description: "" },
        { name: "Baklava", price: "$6.00", description: "" },
      ],
      variant: "left",
    },
    {
      title: "Extra Add-On",
      menuItems: [
        { name: "Grilled Tomato", price: "$1.00", description: "" },
        { name: "Pita Bread", price: "$1.50", description: "" },
        { name: "Yellow Rice", price: "$4.00", description: "" },
        { name: "French Fries", price: "$4.00", description: "" },
        { name: "Sautéed Veggies", price: "$5.00", description: "Marinated zucchini, squash, mixed peppers, and red onions" },
      ],
      variant: "right",
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <SectionWithAnimation key={index} section={section} delay={index * 0.2} />
      ))}
    </div>
  );
};

interface SectionWithAnimationProps {
  section: Section;
  delay: number;
}

const SectionWithAnimation: React.FC<SectionWithAnimationProps> = ({ section, delay }) => {
  const controls = useAnimation();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.2 }}
    >
      <FoodContentSections
        title={section.title}
        sectionDescription={section.sectionDescription}
        imageUrl={section.imageUrl}
        menuItems={section.menuItems}
        variant={section.variant}
      />
    </motion.div>
  );
};

export default FoodContent;
