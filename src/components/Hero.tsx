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
    <ImagesSlider className="h-[70rem]" images={images}>
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
          alt="logo"
          width={500}
          height={500}
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
          className="text-center font-light text-xl md:text-2xl text-white mt-6"
        >
          Fresh and delicious Mediterranean cuisine
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
            className="bg-transparent text-primary text-lg py-4 px-10 border-2 border-primary transition duration-200 rounded-xl"
          >
            See Menu
          </motion.button>
          </Link>

          <Link href="/order">
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
            className="bg-primary text-white text-lg py-4 px-10 border-2 border-primary transition duration-200 rounded-xl"
          >
            Order Now
          </motion.button>
          </Link>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
