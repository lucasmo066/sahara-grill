import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridCards() {
  return <LayoutGrid cards={cards} />;
}

const cards = [
  {
    id: 1,
    title: "Family Owned and Operated",
    description:
      "We are a family-owned and operated business that has been serving the community for over a decade. Our goal is to provide our customers with the best possible service and quality products at an affordable price.",
    className: "md:col-span-2",
    thumbnail: "/menu/outsideside.JPG",
    alt: "The Sahara Grill restaurant exterior",
  },
  {
    id: 2,
    title: "Prepared Fresh",
    description:
      "All of our dishes are prepared fresh daily using only the finest ingredients. We take pride in the quality of our food and strive to provide our customers with the best possible dining experience.",
    className: "",
    thumbnail: "/menu/kuftalambchickenlampgreen.JPG",
    alt: "Freshly prepared kebab platter",
  },
  {
    id: 3,
    title: "Authentic Mediterranean",
    description:
      "Our menu features a wide variety of authentic Mediterranean dishes that are sure to satisfy even the most discerning palate. From our delicious kebabs to our mouth-watering baklava, we have something for everyone.",
    className: "",
    thumbnail: "/menu/plattertop.JPG",
    alt: "A Mediterranean platter with pita and sides",
  },
  {
    id: 4,
    title: "Friendly Service",
    description:
      "Our friendly and knowledgeable staff is always ready to help you find the perfect dish to suit your tastes. Whether you are a regular or a first-time visitor, we will make you feel right at home.",
    className: "md:col-span-2",
    thumbnail: "/menu/ambiancelamp.JPG",
    alt: "Warm lighting inside Sahara Grill",
  },
];
