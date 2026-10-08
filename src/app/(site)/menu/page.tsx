import type { Metadata } from "next";
import MenuTabs from "@/components/menu/MenuTabs";
import MenuSections from "@/components/menu/MenuSections";
import {
  getDrinksSections,
  getFoodSections,
  getMenuPageSettings,
} from "@/sanity/lib/menu";
import { BlurFade } from "@/components/ui/blur-fade";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getMenuPageSettings();
  return {
    title: settings.seoTitle,
    description: settings.seoDescription,
  };
}

export default async function MenuPage() {
  const [foodSections, drinksSections, settings] = await Promise.all([
    getFoodSections(),
    getDrinksSections(),
    getMenuPageSettings(),
  ]);

  return (
    <main id="main-content" className="site-container section-space">
      <BlurFade>
        <h1 className="section-heading mb-8 sm:mb-10">{settings.heading}</h1>
        {settings.intro ? (
          <p className="mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:mb-10 sm:text-lg">
            {settings.intro}
          </p>
        ) : null}
      </BlurFade>
      <MenuTabs
        foodLabel={settings.foodTabLabel}
        drinksLabel={settings.drinksTabLabel}
        food={<MenuSections sections={foodSections} />}
        drinks={<MenuSections sections={drinksSections} />}
      />
    </main>
  );
}
