import React from "react";
import Image from "next/image";

interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface FoodContentSectionsProps {
  title: string;
  sectionDescription?: string;
  imageUrl?: string;
  menuItems: MenuItem[];
}

const FoodContentSections: React.FC<FoodContentSectionsProps> = ({ title, sectionDescription, imageUrl, menuItems }) => {
  return (
    <div className="border-b border-dotted border-neutral-600 pb-8 pt-6">
      <h2 className="text-3xl font-semibold mb-2 text-start">{title}</h2>
        <p className="text-neutral-400 text-md font-light mb-6">{sectionDescription}</p>
      <div className="flex">
        {imageUrl && (
          <div className="w-1/2">
            <Image src={imageUrl} alt={title} layout="responsive" width={200} height={200} className="rounded-3xl border border-neutral-800" />
          </div>
        )}
        <div className={`w-${imageUrl ? '1/2' : 'full'} px-8`}>
          <ul className="pl-6 py-4">
            {menuItems.map((item, index) => (
              <li key={index} className="mb-3">
                <div className="flex justify-between">
                  <span className="font-semibold">{item.name}</span>
                  <span className="dark:text-white text-black font-extralight">{item.price}</span>
                </div>
                <div className="text-neutral-400 text-sm font-mono mb-2">{item.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodContentSections;
