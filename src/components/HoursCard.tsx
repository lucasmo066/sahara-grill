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
        (day >= 1 && day <= 4 && time >= 1100 && time <= 2030) || // Monday - Thursday 11:00 - 20:30
        ((day === 5 || day === 6) && time >= 1100 && time <= 2100) // Friday - Saturday 11:00 - 21:00
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
    <div className="col-span-12 md:col-span-5 p-5 xl:p-8 h-[40rem] md:h-[50rem] border-2 border-primary rounded-3xl" id="hours">
      <h2 className="aladin-regular text-start text-8xl md:text-9xl font-medium mb-10 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
        Hours
      </h2>
      <p className="text-center text-xl md:text-xl font-light mb-2">
        Join us for lunch and dinner daily!
      </p>
      <div className={`mx-10 text-center text-3xl font-semibold my-8 p-4 border-2 rounded-full ${isOpen ? 'text-green-500 border-green-500' : 'text-primary border-primary'}`}>
        {isOpen ? 'Open' : 'Closed'}
      </div>
      <p className="text-center text-2xl md:text-3xl font-semibold mb-6">
        Monday - Saturday
        <br />
        <span className="font-extralight">
          11am - 8:00pm
        </span>
      </p>
      
      <p className="text-center text-2xl md:text-3xl font-semibold">
        Sunday
        <br />
        <span className="font-extralight">
          Closed
        </span>
      </p>
    </div>
  );
};

export default HoursCard;
