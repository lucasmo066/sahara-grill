import FoodContentSections from "@/components/menu/FoodContentSections";

const FoodContent = () => {
  return (
    <div>
      <FoodContentSections
        title= "Appetizers"
        sectionDescription= "Mezza before the main entree"
        imageUrl= "/menu/hummuspita.JPG"
        menuItems={[
          { name: "Hummus & Pita", price: "$5.00", description: "Creamy hummus served with warm pita bread" },
          { name: "Baba Ghanoush & Pita", price: "$5.00", description: "Smoky eggplant dip served with pita bread" },
          { name: "Falafel & Pita", price: "$5.00", description: "Crispy falafel balls served with pita bread" },
          { name: "Cauliflower", price: "$5.00", description: "Fried florets drizzled with tahini" },
          { name: "Dolmas", price: "$5.00", description: "Stuffed grape leaves with rice and herbs" },
          { name: "Greek Potatoes", price: "$5.00", description: "Oven-roasted potatoes with herbs and spices" }
        ]}
        variant= "left"
      />
        <FoodContentSections
            title= "Salads"
            menuItems={[
            { name: "Fattoush", price: "$6.00", description: "Mixed greens, tomatoes, cucumbers, radishes, and crispy pita chips" },
            { name: "Greek Salad", price: "$6.00", description: "Mixed greens, tomatoes, cucumbers, red onions, olives, and feta cheese" },
            { name: "Tabbouleh", price: "$6.00", description: "Parsley, tomatoes, onions, and bulgur wheat" },
            { name: "Sahara Salad", price: "$6.00", description: "" },
            { name: "House Salad", price: "$6.00", description: "" },
            ]}
            variant= "left"
        />     
        <FoodContentSections
            title= "Salad Plates"
            sectionDescription="Choices between the salads are Kale salad, Arugula salad, Cabbage salad, and Chickpea's"
            menuItems={[
            { name: "One Item Salad Plate", price: "$4.00", description: "" },
            { name: "Two Item Salad Plate", price: "$7.00", description: "" },
            { name: "Three Item Salad Plate", price: "$9.00", description: "" },
            { name: "Four Item Salad Plate", price: "$10.00", description: "" },
            ]}
            variant= "right"
        /> 
        <FoodContentSections
            title= "Soups"
            sectionDescription= "Served with Pita bread"
            menuItems={[
                { name: "Lentil Soup", price: "$4.00", description: "Lentils, onions, and spice" },
                { name: "Soup and Small Salad", price: "$8.00", description: "" },
            ]}
            variant= "left"
        />
        <FoodContentSections
            title="Wraps"
            imageUrl="/menu/wrapfront.JPG"
            menuItems={[
                { name: "Gyro Wrap", price: "$8.00", description: "Lamb, lettuce, tomatoes, onions, feta cheese and tzatziki sauce" },
                {name: "Grilled Chicken with Tzatziki Sauce", price: "$8.00", description: "Grilled chicken, lettuce, tomatoes, onions, feta cheese and tzatziki sauce"},
                {name: "Falafel Wrap", price: "$8.00", description: "Falafel, lettuce, tomatoes, hummus, and tahini sauce"},
                {name: "Fish Wrap", price: "$8.00", description: "Fried fish, lettuce, tomatoes, and tahini sauce"},
                {name: "Kufta Wrap", price: "$8.00", description: "Ground beef (Kufta), lettuce, tomatoes, and tahini sauce"},
                {name: "Chicken Shawarma Wrap", price: "$8.00", description: "Chicken Shawarma, Garlic Paste, Pickles, and Tomatoes"},
                {name: "Grilled Veggie Wrap", price: "$8.00", description: "Hummus, Lettuce, Tomatoes, but has a choice of Tahini or Tzatziki Sauce."},
            ]}
            variant= "right"
        />
        <FoodContentSections
            title= "Wrap Specials"
            sectionDescription= "The Choices of Wraps are Gyro, Chicken with tzatziki, Chicken Shawarma, Kofta, Falafel, Fish, or Grilled Veggies"
            menuItems={[
                { name: "Any Wrap with a side Fries or House Salad with a choice of Fountain Drink", price: "$10.00", description: "" },
                { name: "Any Wrap with a choice of 2 sides and a choice of Fountain Drink", price: "$11.00", description: "" },
                { name: "Make it a Plate served on Rice with salad", price: "$12.00", description: "Choice of one of these variety of meats to be put into a platter" },
            ]}
            variant= "left"
        />
        <FoodContentSections
            title= "Off the Grill Kabobs"
            imageUrl="/menu/chickenkaboboutside.JPG"
            sectionDescription="All the Kabob Platters are served with yellow rice, house salad, and pita bread"
            menuItems={[
                { name: "Chicken Kabob", price: "$12.00", description: "Marinated chicken breast skewered and grilled" },
                { name: "Beef Kabob", price: "$15.00", description: "Marinated beef skewered and grilled" },
                { name: "Kufta Kabob", price: "$15.00", description: "Ground beef skewered and grilled" },
                { name: "Lamb Kabob", price: "$18.00", description: "Marinated lamb skewered and grilled" },
                { name: "Veggie Kabob", price: "$18.00", description: "Marinated veggies skewered and grilled" },
                { name: "Rack of Lamb", price: "$29.00", description: "Marinated lamb chops grilled to perfection" },
            ]}
            variant= "left"
        />
        <FoodContentSections
            title= "House Specialties"
            imageUrl="/menu/platterangle.JPG"
            menuItems={[
                { name: "Mezza Platter", price: "$13.00", description: "Stuffed Grape leaves, Hummus, Tabbouleh salad, Baba Ghanoush, falafel, Sahara salad and Pita bread" },
                { name: "Mediterranean Platter", price: "$13.00", description: "Meat choice of Gyro that is served with Greek salad, Hummus, and Pita bread" },
                { name: "Combo Platter", price: "$15.00", description: "Two types of meats which are Grilled Chicken, and Gyro this is served with tabbouleh salad, Hummus, and Pita bread" },
                { name: "Ultimate Meat Platter", price: "$18.00", description: "Three types of meats which are Gyro, Grill Chicken, and kofta that is served with rice, hummus, and Pita bread" },
                { name: "Sahara Signature Dish", price: "$25.00", description: "Four types of meats which are gyro meat, grilled chicken, beef skewer, and a kofta skewer that is served with rice, house salad, hummus, and pita bread" },
            ]}
            variant= "right"
        />
        <FoodContentSections
            title= "Extra Meats"
            menuItems={[
                { name: "Gyro Meat", price: "$6.00", description: "" },
                { name: "Shawarma Meat", price: "$6.00", description: "" },
                { name: "Beef Skewer", price: "$5.00", description: "" },
                { name: "Lamb Skewer", price: "$5.00", description: "" },
                { name: "Kufta Skewer", price: "$5.00", description: "" },
                { name: "Chicken Skewer", price: "$5.00", description: "" },
                { name: "Veggie Skewer", price: "$4.50", description: "" },
            ]}
            variant= "left"
        />
        <FoodContentSections
            title= "Kids"
            sectionDescription= "The kids meal has a side choice of French Fries or Yellow Rice and a choice of a Fountain Drink"
            menuItems={[
                { name: "Kids Gyro Meat", price: "$8.00", description: "" },
                { name: "Kids Pita Cheese Sandwich", price: "$8.00", description: "" },
                { name: "Kids Chicken Tenders", price: "$8.00", description: "" },
                { name: "Shrimp Kabob", price: "$8.00", description: "" },
                { name: "Kids Chicken Kabob", price: "$8.00", description: "" },
                { name: "Kids Beef Kabob", price: "$9.00", description: "" },
                { name: "Kids Lamb Kabob", price: "$9.00", description: "" },
            ]}
            variant= "right"
        />
        <FoodContentSections
            title= "Desserts"
            sectionDescription= "Something sweet to end your meal!"
            menuItems={[
                { name: "Rice Pudding", price: "$3.00", description: "" },
                { name: "Baklava", price: "$4.00", description: "" },
                { name: "Woodstock Cream Pie", price: "$5.00", description: "" },
                { name: "Chocolate Cake", price: "$6.00", description: "" },
            ]} 
            variant= "left"       
        />
    </div>
  );
};

export default FoodContent;
