import Image from 'next/image';
import { use } from 'react';
import { Button } from './ui/button';
import Mapbox from './Mapbox';
import Link from 'next/link';
import HoursCard from '@/components/HoursCard';

const GotchaBoard = () => {


    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full h-full p-5">
          {/* First row */}
          <div className="col-span-12 md:col-span-7 p-5 h-[40rem] border-2 border-primary rounded-3xl">
            <h2 className="aladin-regular text-start text-9xl font-medium mb-10 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
                Location
            </h2>
            <div className="items-center justify-center m-5">
            {/* mapbox of location goes here */}
            <div className="h-60 w-full items-center rounded-3xl">
                <Mapbox />
            </div>

            <div className="items-center justify-center m-5">
                <p className="text-xl md:text-2xl font-light">
                    12910 Hwy 92 suite 105
                </p>
                <p className="text-xl md:text-2xl font-light ">
                    Woodstock, GA 30188
                </p>
            <Link href="tel:770-926-3446">
                <Button variant="outline" className="border-2 border-primary text-primary m-5 px-10 py-4 hover:bg-primary hover:text-white">
                    Call Us
                </Button>
            </Link>
            </div>  
          </div>
            </div>

        <HoursCard />
    
          {/* Second row */}
          <div className="col-span-12 md:col-span-5 p-5 h-[40rem] border-2 border-primary rounded-3xl">
          <h2 className="aladin-regular text-start text-9xl font-semibold mb-10 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
                We<br />Cater
            </h2>

          </div>


          <div className="col-span-12 md:col-span-7 p-5 h-[40rem] border-2 border-primary rounded-3xl">
          <h2 className="aladin-regular text-start text-9xl font-semibold mb-10 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
                Reach Out<br />To Us
            </h2>
          </div>
        </div>
      );
  };
  
  export default GotchaBoard;
  