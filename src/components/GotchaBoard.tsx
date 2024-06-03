import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import HoursCard from '@/components/HoursCard';
import LocationCard from '@/components/LocationCard';
import CateringCard from '@/components/CateringCard';
import WhatsNewCard from '@/components/WhatsNewCard';

const GotchaBoard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full h-full p-2 md:p-5">
      {/* First row */}
      <LocationCard />
      <HoursCard />

      {/* Second row */}
     <CateringCard />
     <WhatsNewCard />
    </div>
  );
};

export default GotchaBoard;
