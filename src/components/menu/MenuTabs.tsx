"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DrinksContent from "@/components/menu/DrinksContent";
import FoodContent from "@/components/menu/FoodContent";
import React, { useState } from "react";
import type { MenuSectionView } from "@/sanity/types";

interface MenuTabsProps {
  foodSections: MenuSectionView[];
  drinksSections: MenuSectionView[];
}

const MenuTabs = ({ foodSections, drinksSections }: MenuTabsProps) => {
  const [activeTab, setActiveTab] = useState<"food" | "drinks">("food");

  const handleTabChange = (value: string) => {
    setActiveTab(value as "food" | "drinks");
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      className="w-[1000px] xl:w-[1500px]"
    >
      <div className="border-b rounded-l-lg mb-5">
        <TabsList>
          <TabsTrigger value="food">Food</TabsTrigger>
          <TabsTrigger value="drinks">Drinks</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="food">
        <FoodContent sections={foodSections} />
      </TabsContent>
      <TabsContent value="drinks">
        <DrinksContent sections={drinksSections} />
      </TabsContent>
    </Tabs>
  );
};

export default MenuTabs;
