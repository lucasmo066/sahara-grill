"use client";

import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import DrinksContentSection from "@/components/menu/DrinksContentSection";
import type { MenuSectionView } from "@/sanity/types";

interface DrinksContentProps {
  sections: MenuSectionView[];
}

const DrinksContent = ({ sections }: DrinksContentProps) => {
  return (
    <div>
      {sections.map((section) => (
        <SectionWithAnimation key={section._id} section={section} />
      ))}
    </div>
  );
};

interface SectionWithAnimationProps {
  section: MenuSectionView;
}

const SectionWithAnimation: React.FC<SectionWithAnimationProps> = ({
  section,
}) => {
  const controls = useAnimation();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <DrinksContentSection
        title={section.title}
        sectionDescription={section.sectionDescription}
        imageUrl={section.imageUrl}
        menuItems={section.menuItems.map((item) => ({
          name: item.name,
          price: item.price,
          description: item.description ?? "",
        }))}
        variant={section.variant}
      />
    </motion.div>
  );
};

export default DrinksContent;
