import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import HoursCard from '@/components/HoursCard';
import LocationCard from '@/components/LocationCard';

const GotchaBoard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full h-full p-5">
      {/* First row */}
      <LocationCard />
      <HoursCard />

      {/* Second row */}
      <div className="col-span-12 md:col-span-5 p-5 h-[50rem] md:h-[60rem] border-2 border-primary rounded-3xl">
        <h2 className="aladin-regular text-start text-9xl font-medium pb-6 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
          Catering
        </h2>
        <div className="text-center text-3xl font-semibold mt-4 mb-6 p-4 rounded-3xl">
          <p className="text-center text-xl md:text-xl font-light mb-2">
            Let us cater your next event!
          </p>
          <p className="text-center text-2xl md:text-3xl font-semibold mb-6">
            Questions about an upcoming event? Do not hesitate to call us.
          </p>
          <Image
            src="/menu/ambiancetable.JPG"
            alt="Catering event"
            width={400}
            height={400}
            className="rounded-3xl items-center justify-center"
          />
          <div className="text-center text-3xl font-semibold mt-4 mb-6 p-4 rounded-3xl">
            <Link href="tel:770-926-3446">
              <Button variant="outline" className="border-2 border-primary text-primary m-5 px-10 py-4 hover:bg-primary hover:text-white">
                Set up an event
              </Button>
            </Link>
            <Link href="#catering">
              <Button className="text-white px-14 py-4">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-7 p-5 h-[70rem] md:h-[60rem] border-2 border-primary rounded-3xl">
        <h2 className="aladin-regular text-start text-9xl font-medium mb-10 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
          Reach Out<br />To Us
        </h2>
        <div className="border-2 h-[30rem] grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-red-500 col-span-1">
               <Image 
                src="/dailyspecials.png"
                alt="Sahara Grill has Daily Specials on Wraps and Plates"
                width={400}
                height={400}
                className="items-center justify-center object-fill h-[30rem] w-[30rem]"
                />
            </div>
            <div className="border border-blue-500 col-span-1">
                <h3 className="text-5xl font-medium text-center mb-4">Receive Deals!</h3>
                <p className="text-center text-xl font-light mb-4">Sign up for our email club and receive special deals and announcements</p>
                <input type="text" placeholder="Enter your email" className="border-2 rounded-2xl p-2 m-2 mb-4" />
                <Button className="text-white px-14 py-4">Sign Up</Button>
            </div>
        </div>
             
      </div>
    </div>
  );
};

export default GotchaBoard;
