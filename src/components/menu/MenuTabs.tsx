"use client";

import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MenuTabs({
  food,
  drinks,
  foodLabel = "Food",
  drinksLabel = "Drinks",
}: {
  food: ReactNode;
  drinks: ReactNode;
  foodLabel?: string;
  drinksLabel?: string;
}) {
  return (
    <Tabs defaultValue="food" className="w-full min-w-0">
      <div className="mb-6 border-b border-border pb-4">
        <TabsList
          aria-label="Menu categories"
          className="h-12 w-full sm:w-auto"
        >
          <TabsTrigger value="food" className="h-10 flex-1 px-8 text-base">
            {foodLabel}
          </TabsTrigger>
          <TabsTrigger value="drinks" className="h-10 flex-1 px-8 text-base">
            {drinksLabel}
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="food">{food}</TabsContent>
      <TabsContent value="drinks">{drinks}</TabsContent>
    </Tabs>
  );
}
