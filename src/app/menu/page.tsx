import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function MenuPage() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-5xl font-bold mb-10 text-primary">The Sahara Grill Menu</h1>
      <div className="flex flex-row ">
      <Tabs defaultValue="food" className="w-[1000px]">
        <div className="border-b rounded-l-lg mb-10 ">
        <TabsList>
          <TabsTrigger value="food">Food</TabsTrigger>
          <TabsTrigger value="drinks">Drinks</TabsTrigger>
        </TabsList>
        </div>
        
        <TabsContent value="food">this is the food menu yum</TabsContent>
        <TabsContent value="drinks">these are the draaaaaaaaanks</TabsContent>
      </Tabs>

      </div>
      

    </main>
  );
}
