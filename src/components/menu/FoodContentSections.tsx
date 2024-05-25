import React from "react";
import Image from "next/image";
import classNames from "classnames";

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
  variant: 'left' | 'right';
}

const FoodContentSections: React.FC<FoodContentSectionsProps> = ({ title, sectionDescription, imageUrl, menuItems, variant }) => {
  return (
    <div className="border-b border-dotted border-neutral-600 pb-8 pt-6">
      <h2 className="aladin-regular text-3xl md:text-4xl font-semibold mb-2 text-start">{title}</h2>
      {sectionDescription && <p className="text-neutral-400 text-md font-light mb-6">{sectionDescription}</p>}
      <div className={classNames("flex flex-col md:flex-row md:items-center", { "md:flex-row-reverse": variant === 'right' })}>
        {imageUrl && (
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:h-auto">
            <Image
              src={imageUrl}
              alt={title}
              layout="responsive"
              width={400}
              height={300}
              className="rounded-3xl border border-neutral-800 object-cover"
            />
          </div>
        )}
        <div className={`w-full md:w-${imageUrl ? '1/2' : 'full'} px-2 md:px-8`}>
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
