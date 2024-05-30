'use client'

import React, { useEffect, useState } from 'react';

const HoursCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const day = now.getDay();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      const time = hours * 100 + minutes;

      if (
        (day >= 1 && day <= 4 && time >= 1100 && time <= 2100) || // Monday - Thursday 11:00 - 21:00
        ((day === 5 || day === 6) && time >= 1100 && time <= 2200) // Friday - Saturday 11:00 - 22:00
      ) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkIfOpen();
    const intervalId = setInterval(checkIfOpen, 60000); // Check every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="col-span-12 md:col-span-5 p-10 h-[40rem] border-2 border-primary rounded-3xl">
      <h2 className="aladin-regular text-start text-9xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
        Hours
      </h2>
      <p className="text-center text-xl md:text-xl font-light mb-2">
        Join us for lunch and dinner daily!
      </p>
      <div className={` mx-5 text-center text-3xl font-medium my-6 p-4 border-2 rounded-full ${isOpen ? 'text-green-500 border-green-500' : 'text-primary border-primary'}`}>
        {isOpen ? 'Open' : 'Closed'}
      </div>
      <p className="text-center text-2xl md:text-3xl font-semibold mb-6">
        Monday - Thursday
        <br />
        <span className="font-extralight">
          11am - 9pm
        </span>
      </p>
      <p className="text-center text-2xl md:text-3xl font-semibold mb-6">
        Friday - Saturday
        <br />
        <span className="font-extralight">
          11am - 10pm
        </span>
      </p>
      <p className="text-center text-2xl md:text-3xl font-semibold">
        Sunday
        <br />
        <span className="font-extralight text-xl md:text-3xl">
          Closed
        </span>
      </p>
     
    </div>
  );
};

export default HoursCard;
