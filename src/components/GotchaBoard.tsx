import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import HoursCard from '@/components/HoursCard';
import LocationCard from '@/components/LocationCard';
import CateringCard from '@/components/CateringCard';

const GotchaBoard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full h-full p-5">
      {/* First row */}
      <LocationCard />
      <HoursCard />

      {/* Second row */}
     <CateringCard />

      <div className="col-span-12 md:col-span-7 p-5 h-[70rem] md:h-[60rem] border-2 border-primary rounded-3xl">
        <h2 className="aladin-regular text-start text-9xl font-medium mb-10 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
          What&apos;s New
        </h2>
        <div className=" h-[30rem] grid grid-cols-1 gap-4">
            <div className="col-span-1">
               <Image 
                src="/dailyspecials.png"
                alt="Sahara Grill has Daily Specials on Wraps and Plates"
                width={400}
                height={400}
                className=" object-fill h-[30rem] w-[40rem]"
                />
            </div>
            <div className="col-span-1 mt-10">
                <h3 className="text-5xl font-extrabold text-center mb-4">Get the Latest</h3>
                <p className="text-center text-xl font-light mb-6">Sign up with your email to receive exclusive news + events for The Sahara Grill.</p>
                <input type="text" placeholder="Enter your email" className="border-2 rounded-2xl p-2 m-2 mb-4" />
                <Button className="text-white px-14 py-4">Sign Up</Button>
            </div>
        </div>
             
      </div>
    </div>
  );
};

export default GotchaBoard;
