'use client';

import Head from 'next/head';
import { AnimatedTooltipPreview } from '@/components/StaffTooltip';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - The Sahara Grill</title>
        <meta
          name="description"
          content="Learn more about the family behind Sahara Grill, our history, and our dedication to serving fresh, delicious Mediterranean cuisine in Woodstock, GA."
        />
      </Head>
      <main className="flex flex-col items-center min-h-screen py-10 px-6 lg:px-20">
        <motion.h1
          className="aladin-regular text-center text-8xl md:text-9xl font-medium mb-12 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/menu/outsidesignfront.JPG"
              alt="Picture of the Edwar family working together at The Sahara Grill"
              width={600}
              height={600}
              className="w-[40rem] h-[30rem] lg:w-full lg:h-auto object-cover rounded-3xl"
              priority // Makes the image load faster
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-light text-center lg:text-left"
          >
            <p className="mb-6">
              The Sahara Grill is a family-owned and operated restaurant located in Woodstock, Georgia. Our family has been serving the Woodstock community for over 20 years, and we take pride in providing our customers with delicious, authentic Mediterranean cuisine in a warm and welcoming atmosphere.
            </p>
            <p>
              Our menu features a wide variety of Mediterranean dishes, including falafel, shawarma, kebabs, and more. We use only the freshest ingredients and traditional cooking methods to ensure that every dish is bursting with flavor. Whether you&apos;re looking for a quick and healthy lunch or a hearty dinner, we have something for everyone.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <Image
              src="/menu/falafelpitaclose.JPG"
              alt="Picture of a falafel pita sandwich from The Sahara Grill"
              width={600}
              height={400}
              className="w-[40rem] h-[30rem] lg:w-full lg:h-auto object-cover rounded-3xl"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/menu/ambianceiraq.JPG"
              alt="Picture of the inside of The Sahara Grill"
              width={600}
              height={400}
              className="w-[40rem] h-[30rem] lg:w-full lg:h-auto object-cover rounded-3xl"
              priority
            />
          </motion.div>
        </div>
        <motion.p
          className="text-xl font-light text-center md:mx-20 mt-16 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Authentic Mediterranean cuisine isn&apos;t the only thing we&apos;re known for. Our warm and inviting atmosphere makes The Sahara Grill the perfect place to relax and enjoy a meal with family and friends. Whether you&apos;re dining in our cozy restaurant or taking your meal to go, you&apos;ll always feel welcome at The Sahara Grill.
        </motion.p>
      </main>
    </>
  );
}
