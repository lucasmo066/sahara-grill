import React from 'react';
import Image from 'next/image';
import GetLatestForm from '@/components/GetLatestForm';

const WhatsNewCard = () => {
  return (
    <div className="col-span-12 md:col-span-7 p-5 xl:p-8 h-[60rem] border-2 border-primary rounded-3xl" id="whatsnew">
      <h2 className="aladin-regular text-start text-8xl lg:text-9xl font-medium pb-3 md:pb-5 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
        What&apos;s New
      </h2>
      <div className="h-[30rem] flex flex-col items-center gap-4">
        <div className="flex justify-center items-center w-full">
          <Image
            src="/menu/drinkswinecabinetfront.JPG"
            alt="Sahara Grill has Daily Specials on Wraps and Plates"
            width={400}
            height={400}
            className="object-fill mt-10 h-[20rem] w-[30rem] md:mt-3 md:h-[30rem] md:w-[40rem] rounded-3xl"
          />
        </div>
        <GetLatestForm />
      </div>
    </div>
  );
};

export default WhatsNewCard;
