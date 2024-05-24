'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DrinksContent from "@/components/menu/DrinksContent";
import FoodContent from "@/components/menu/FoodContent";
import React, { useState } from "react";

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState<'food' | 'drinks'>('food');

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'food' | 'drinks');
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-[1000px]">
      <div className="border-b rounded-l-lg mb-5">
        <TabsList>
          <TabsTrigger value="food">Food</TabsTrigger>
          <TabsTrigger value="drinks">Drinks</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="food">
            <FoodContent />
      </TabsContent>
      <TabsContent value="drinks">
            <DrinksContent />
      </TabsContent>
    </Tabs>
  );
};

export default MenuTabs;
