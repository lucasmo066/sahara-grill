import MenuTabs from "@/components/menu/MenuTabs";
import { getDrinksSections, getFoodSections } from "@/sanity/lib/menu";

export const revalidate = 60;

export default async function MenuPage() {
  const [foodSections, drinksSections] = await Promise.all([
    getFoodSections(),
    getDrinksSections(),
  ]);

  return (
    <main className="flex min-h-screen flex-col py-16 px-10 md:px-24">
      <h1 className="aladin-regular text-start text-6xl md:text-8xl lg:text-9xl font-medium mb-5 pb-4 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
        The Sahara Grill Menu
      </h1>
      <div className="flex flex-row items-center justify-center">
        <MenuTabs
          foodSections={foodSections}
          drinksSections={drinksSections}
        />
      </div>
    </main>
  );
}
