import DrinksContentSection from "@/components/menu/DrinksContentSection";

const DrinksContent = () => {
  return (
    <div className="">
      <DrinksContentSection
        title= "Beverages"
        sectionDescription= "Non-alcoholic beverages"
        menuItems={[
          { name: "Fountain Drinks or Iced Tea", price: "$2.00", description: "" },
          { name: "Bottled Soda, Water, or Juices", price: "$2.00", description: "" },
          { name: "Hot Coffee or Tea", price: "$2.00", description: "" },
          { name: "Turkish Coffee", price: "$3.00", description: "Very strong coffee prepared the authentic way"},
        ]}
        variant= "left"
        />
        <DrinksContentSection
        title= "White Wine"
        imageUrl="/menu/winesection.jpg"
        menuItems={[
          { name: "Sterling Chardonnay", price: "8.00 / 29.00", description: "A rich and buttery white wine" },
          { name: `Harken "Bottle Fermented" Chardonnay`, price: "9.00 / 33.00", description: "A rich and buttery white wine" },
          { name: "The Champion Sauvignon Blanc", price: "$8.00 / $29.00", description: "A crisp and refreshing white wine" },
          { name: "Beroni Fini Pinot Grigio", price: "$9.00 / $33.00", description: "A light and refreshing white wine" },
          { name: "Stella Rosa Moscato", price: "$8.00 / $29.00", description: "A sweet and fruity white wine" },
        ]}
        variant= "left"
        />
        <DrinksContentSection
            title= "Red Wine"
            menuItems={[
              { name: "Sterling Merlot", price: "$8.00 / $29.00", description: "A rich and fruity red wine" },
              { name: "Sterling Cabernet Sauvignon", price: "$9.00 / $33.00", description: "A bold and full-bodied red wine" },
              { name: "Sterling Pinot Noir", price: "$8.00 / $29.00", description: "A light and fruity red wine" },
              { name: "Sterling Malbec", price: "$9.00 / $33.00", description: "A bold and spicy red wine" },
              { name: "Sterling Shiraz", price: "$8.00 / $29.00", description: "A bold and spicy red wine" },
            ]}
            variant= "right"
            />
        <DrinksContentSection
            title= "Beer"
            sectionDescription= "Imported and domestic beers"
            imageUrl="/menu/beerfridge.jpg"
            menuItems={[
              { name: "Bud Light", price: "$3.00", description: "" },
              { name: "Miller Lite", price: "$3.00", description: "" },
              { name: "Coors Light", price: "$3.00", description: "" },
              { name: "Corona", price: "$4.00", description: "" },
              { name: "Heineken", price: "$4.00", description: "" },
              { name: "Stella Artois", price: "$4.00", description: "" },
            ]}
            variant= "right"
            />
  
    </div>
  );
};

export default DrinksContent;
