import FoodContentSections from "@/components/menu/FoodContentSections";

const FoodContent = () => {
  return (
    <div>
      <FoodContentSections
        title="Appetizers"
        imageUrl="/menu/hummuspita.JPG"
        menuItems={[
          { name: "Hummus & Pita", price: "$5.99", description: "Creamy hummus served with warm pita bread" },
          { name: "Baba Ghanoush & Pita", price: "$6.99", description: "Smoky eggplant dip served with pita bread" },
          { name: "Falafel & Pita", price: "$7.99", description: "Crispy falafel balls served with pita bread" },
          { name: "Cauliflower", price: "$5.99", description: "Fried florets drizzled with tahini" },
          { name: "Dolmas", price: "$4.99", description: "Stuffed grape leaves with rice and herbs" },
          { name: "Greek Potatoes", price: "$4.99", description: "Oven-roasted potatoes with herbs and spices" }
        ]}
      />
    </div>
  );
};

export default FoodContent;
