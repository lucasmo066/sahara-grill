import Link from 'next/link';
import { Button } from './ui/button';
import Mapbox from '@/components/Mapbox';

export default function LocationCard() {
    return (
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
                    12910 Hwy 92 
                    <br />
                    Suite 105
                </p>
                <p className="text-xl md:text-2xl font-light ">
                    Woodstock, GA 30188
                </p>
            <Link href="tel:770-926-3446">
                <Button variant="outline" className="border-2 border-primary text-primary m-5 px-10 py-4 hover:bg-primary hover:text-white">
                    Get Directions
                </Button>
            </Link>
            </div>  
          </div>
        </div>
    );
}
            