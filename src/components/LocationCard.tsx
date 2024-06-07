'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';
import Mapbox from '@/components/Mapbox';

export default function LocationCard() {
  const [addressCopied, setAddressCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("12910 Hwy 92 Suite 105 Woodstock, GA 30188");
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="col-span-12 md:col-span-7 p-5 h-[40rem] md:h-[50rem] border-2 border-primary rounded-3xl" id="location">
      <h2 className="aladin-regular text-start text-8xl md:text-9xl font-medium mb-10 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
        Location
      </h2>
      <div className="items-center justify-center m-5 lg:mx-10 xl:mx-20">
        {/* mapbox of location goes here */}
        <div className="h-60 w-full items-center rounded-3xl">
          <Mapbox />
        </div>

        <div className="items-center justify-center py-8 md:py-12">
          <p className="text-xl md:text-2xl lg:text-3xl font-light">
            12910 Hwy 92
            <br />
            Suite 105
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-light">
            Woodstock, GA 30188
          </p>
          <Button
            onClick={handleCopyAddress}
            variant="outline"
            className={`m-5 px-10 py-6 lg:m-10 ${
              addressCopied
                ? 'bg-green-500 text-white border-green-500 hover:bg-green-500 hover:text-white'
                : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
            }`}
          >
            {addressCopied ? 'Address Copied!' : 'Copy Address'}
          </Button>
        </div>
      </div>
    </div>
  );
}
