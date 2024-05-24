import FoodContentSections from "@/components/menu/FoodContentSections";

const FoodContent = () => {
  return (
    <div>
      <FoodContentSections
        title="Appetizers"
        sectionDescription="Mezza before the main entree"
        imageUrl="/menu/hummuspita.JPG"
        menuItems={[
          { name: "Hummus & Pita", price: "$5.00", description: "Creamy hummus served with warm pita bread" },
          { name: "Baba Ghanoush & Pita", price: "$5.00", description: "Smoky eggplant dip served with pita bread" },
          { name: "Falafel & Pita", price: "$5.00", description: "Crispy falafel balls served with pita bread" },
          { name: "Cauliflower", price: "$5.00", description: "Fried florets drizzled with tahini" },
          { name: "Dolmas", price: "$5.00", description: "Stuffed grape leaves with rice and herbs" },
          { name: "Greek Potatoes", price: "$5.00", description: "Oven-roasted potatoes with herbs and spices" }
        ]}
      />
        <FoodContentSections
            title="Salads"
            imageUrl="/menu/saladbarbetter.JPG"
            menuItems={[
            { name: "Fattoush", price: "$6.00", description: "Mixed greens, tomatoes, cucumbers, radishes, and crispy pita chips" },
            { name: "Greek Salad", price: "$6.00", description: "Mixed greens, tomatoes, cucumbers, red onions, olives, and feta cheese" },
            { name: "Tabbouleh", price: "$6.00", description: "Parsley, tomatoes, onions, and bulgur wheat" },
            { name: "Sahara Salad", price: "$6.00", description: "" },
            { name: "House Salad", price: "$6.00", description: "" },
            ]}
        />      
        <FoodContentSections
            title="Soups"
            menuItems={[
                { name: "Lentil Soup", price: "$4.00", description: "Lentils, onions, and spices served with Pita Bread" },
                { name: "Soup and Small Salad", price: "$8.00", description: "Served with Pita Bread" },
            ]}
        />
        <FoodContentSections
            title="Salad Plates"
            sectionDescription="Choices between the salads are Kale salad, Arugula salad, Cabbage salad, and Chickpea's"
            menuItems={[
                { name: "One Item Salad Plate", price: "$4.00", description: "" },
                { name: "Two Item Salad Plate", price: "$7.00", description: "" },
                { name: "Three Item Salad Plate", price: "$9.00", description: "" },
                { name: "Four Item Salad Plate", price: "$10.00", description: "" },
            ]}
        />
        <FoodContentSections
            title="Wraps"
            imageUrl="/menu/wrapfront.JPG"
            menuItems={[
                { name: "Gyro Wrap", price: "$6.00", description: "Lamb, lettuce, tomatoes, onions, feta cheese and tzatziki sauce" },
                { name: "Falafel Wrap", price: "$6.00", description: "Crispy falafel balls, lettuce, tomatoes, pickles, and tahini sauce" },
                { name: "Chicken Shawarma Wrap", price: "$6.00", description: "Marinated chicken, lettuce, tomatoes, pickles, and garlic sauce" },
                { name: "Beef Shawarma Wrap", price: "$6.00", description: "Marinated beef, lettuce, tomatoes, pickles, and tahini sauce" },
                { name: "Kafta Wrap", price: "$6.00", description: "Ground beef, parsley, onions, and spices" },
            ]}
        />
    </div>
  );
};

export default FoodContent;
