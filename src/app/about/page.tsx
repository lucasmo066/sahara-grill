import Head from 'next/head';
import { AnimatedTooltipPreview } from '@/components/StaffTooltip';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - The Sahara Grill</title>
        <meta name="description" content="Learn more about the family behind Sahara Grill, our history, and our dedication to serving fresh, delicious Mediterranean cuisine in Woodstock, GA." />
      </Head>
      <main className="flex flex-col items-center min-h-screen my-5 mx-10 lg:mx-20">
        <h1 className="aladin-regular text-start text-9xl font-medium mb-5 pb-4 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
          About Us
        </h1>
        <Image
          src="/menu/oldpic.png"
          alt="Picture of the Edwar family working together at The Sahara Grill"
          width={600}
          height={600}
          className="mb-6 w-[30rem] h-[30rem] lg:mb-0 lg:w-3/4 xl:w-3/7 lg:h-auto object-cover rounded-3xl"
        />
        <div className="flex flex-col items-center mt-8 md:mx-20 lg:flex-row lg:items-start lg:justify-between w-full">
          <p className="text-xl font-extralight text-center mb-10">
            The Sahara Grill is a family-owned and operated restaurant located in Woodstock, Georgia. Our family has been serving the Woodstock community for over 20 years, and we take pride in providing our customers with delicious, authentic Mediterranean cuisine in a warm and welcoming atmosphere.
          </p>
        </div>
        
        <Image
          src="/menu/falafelpitaclose.JPG"
          alt="Picture of a falafel pita sandwich from The Sahara Grill"
          width={300}
          height={200}
          className="pt-20 w-[40rem] h-[30rem] lg:w-3/4 xl:w-3/7 lg:h-auto object-cover rounded-3xl"
        />
        <p className="text-xl font-extralight text-center py-20 md:mx-20 mb-10 border-b border-dotted dark:border-white border-neutral-800">
          Our menu features a wide variety of Mediterranean dishes, including falafel, shawarma, kebabs, and more. We use only the freshest ingredients and traditional cooking methods to ensure that every dish is bursting with flavor. Whether you&apos;re looking for a quick and healthy lunch or a hearty dinner, we have something for everyone.
        </p>
        <Image
          src="/menu/ambianceiraq.JPG"
          alt="Picture of the inside of The Sahara Grill"
          width={300}
          height={300}
          className="mb-10 w-[40rem] h-[30rem] lg:mb-20 lg:w-3/4 xl:w-3/7 lg:h-auto object-cover rounded-3xl"
        />
        <p className="text-xl font-extralight text-center md:mx-20 mb-20 border-b border-dotted dark:border-white border-neutral-800">
          Authentic Mediterranean cuisine isn&apos;t the only thing we&apos;re known for. Our warm and inviting atmosphere makes The Sahara Grill the perfect place to relax and enjoy a meal with family and friends. Whether you&apos;re dining in our cozy restaurant or taking your meal to go, you&apos;ll always feel welcome at The Sahara Grill.
        </p>
      </main>
    </>
  );
}
