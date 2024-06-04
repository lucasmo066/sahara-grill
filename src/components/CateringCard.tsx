import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const CateringCard = () => {
  return (
    <div className="col-span-12 md:col-span-5 p-5 h-[50rem] md:h-[60rem] border-2 border-primary rounded-3xl" id="cateringcard">
      <h2 className="aladin-regular text-start text-8xl md:text-9xl font-medium pb-3 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
        Catering
      </h2>
      <div className="flex flex-col mb-6 p-4">
        <p className="text-center text-xl font-light mb-2">
          Let us cater your next event!
        </p>
        <p className="text-center text-2xl md:text-3xl font-semibold mb-6">
          Questions about an upcoming event? Do not hesitate to call us!
        </p>
        <Image
          src="/menu/ambiancetable.JPG"
          alt="Catering event"
          width={400}
          height={400}
          className="rounded-3xl object-cover h-[20rem] w-[30rem] xl:h-[25rem] lg:w-[40rem] mx-auto"
        />
        <div className="text-center text-3xl font-semibold p-2 md:pt-5 rounded-3xl">
          <Link href="tel:770-926-3446">
            <Button variant="outline" className="border-2 border-primary text-primary m-3 px-10 py-4 md:px-12 md:py-6 hover:bg-primary hover:text-white">
              Set up an event
            </Button>
          </Link>
          <Link href="#catering">
            <Button className="text-white px-14 py-4 md:px-14 lg:px-12 md:py-6 hover:bg-rose-700 hover:text-white
             hover:border-rose-700">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CateringCard;
