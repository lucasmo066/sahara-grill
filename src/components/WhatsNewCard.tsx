import React from 'react';
import Image from 'next/image';
import GetLatestForm from '@/components/GetLatestForm';

const WhatsNewCard = () => {
  return (
    <div className="col-span-12 md:col-span-7 p-2 md:p-5 h-[70rem] md:h-[60rem] border-2 border-primary rounded-3xl">
      <h2 className="aladin-regular text-start text-8xl md:text-9xl font-medium mb-10 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
        What&apos;s New
      </h2>
      <div className="h-[30rem] flex flex-col items-center gap-4">
        <div className="flex justify-center items-center w-full">
          <Image
            src="/daily.png"
            alt="Sahara Grill has Daily Specials on Wraps and Plates"
            width={400}
            height={400}
            className="object-fill h-[25rem] w-[30rem]"
          />
        </div>
        <GetLatestForm />
      </div>
    </div>
  );
};

export default WhatsNewCard;
