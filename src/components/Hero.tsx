"use client";

import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  // Use the relative path to the hero image in the public folder
  const images = ["/hero.jpeg"];

  return (
    <ImagesSlider className="h-[60rem] p-6 md:p-10" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <Image
          src="/navigation/herologo.svg"
          alt="The Sahara Grill Logo"
          width={600}
          height={600}
        />
        <motion.p
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center font-light text-xl md:text-2xl text-white mt-6 z-70"
        >
         Fresh and Delicious Mediterranean Food
        </motion.p>

        {/* Wrap paragraph and button in a flex container */}
        <div className="flex justify-center items-center mt-10 space-x-6">
          <Link href="/menu">
          <motion.button
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="bg-transparent text-primary text-lg py-4 px-6 md:text-xl md:px-10 border-2 border-primary transition duration-200 rounded-xl hover:bg-primary hover:text-white"
          >
            See Menu
          </motion.button>
          </Link>

          <Link href="https://www.ubereats.com/store/the-sahara-grill/v4HUaqXXV1GjYP0_TbW-Dw?diningMode=PICKUP&sc=SEARCH_SUGGESTION">
          <motion.button
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="bg-primary text-white text-lg py-4 px-6 md:text-xl md:px-10 border-2 border-primary transition duration-200 rounded-xl hover:bg-rose-700 hover:text-white
             hover:border-rose-700"
          >
            Order Now
          </motion.button>
          </Link>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
