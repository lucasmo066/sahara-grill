'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ModeToggle from "@/components/ui/toggle-mode";
import { Button } from "./ui/button";
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen]);

  return (
    <header>
      <nav className="flex flex-row justify-evenly items-center p-4">
        <div className="hidden md:flex items-center sm:gap-2 lg:gap-10">
          <Link href="/">
            <Image
              src="/navigation/home.png"
              alt="Home"
              width={100}
              height={100}
            />
          </Link>
          <Link href="/menu">
            <Image
              src="/navigation/menu.png"
              alt="Menu"
              width={100}
              height={100}
            />
          </Link>
          <Link href="/about">
            <Image
              src="/navigation/about.png"
              alt="About Us"
              width={100}
              height={100}
            />
          </Link>
          <Link href="/#catering">
            <Image
              src="/navigation/privateEvents.png"
              alt="Catering"
              width={100}
              height={100}
            />
          </Link>
        </div>
       
        <div className="flex items-center gap-4 py-4">
          <div className="md:hidden flex items-center">
            <Menu className="w-14 h-14 font-extralight mr-4 text-primary cursor-pointer" onClick={toggleMenu} />
          </div>
          <ModeToggle />
          <div className="flex flex-row gap-2 md:gap-4">
            <Link href="https://order.toasttab.com/online/the-sahara-grill-12910-georgia-92?diningOption=delivery&rwg9TEAjTKr8FgdHbPKEb8n0O8cMMCDccL1w%3D%3Dtoken=ACgRB3cAeVD-eatrJT8rDNZNpHkiGyEFYHYRw-QZ5zWn6zUVO92nTSVE4ZwMs4Cxr" target="_blank">
              <Button variant="outline" className="border-2 border-primary text-primary px-6 my-2 md:py-4 md:px-10 md:my-0 lg:py-4 lg:px-12 hover:bg-primary hover:text-white">Delivery</Button>
            </Link>
            <Link href="https://order.toasttab.com/online/the-sahara-grill-12910-georgia-92" target="_blank">
              <Button variant="outline" className="border-2 border-primary text-primary px-6 my-2 md:py-4 md:px-10 md:my-0 lg:py-4 lg:px-12 hover:bg-primary hover:text-white">Takeout</Button>
            </Link>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 dark:bg-black dark:bg-opacity-90 bg-zinc-200 bg-opacity-90 flex flex-col items-start justify-center z-50">
          <div className="absolute bottom-6 right-14">
            <X className="w-20 h-20 m-10 dark:text-white text-primary cursor-pointer" onClick={toggleMenu} />
          </div>
          <div className="flex flex-col items-start gap-6 m-20">
            <Link href="/" onClick={toggleMenu}>
              <Image
                src="/navigation/home.png"
                alt="Home"
                width={130}
                height={130}
              />
            </Link>
            <Link href="/menu" onClick={toggleMenu}>
              <Image
                src="/navigation/menu.png"
                alt="Menu"
                width={130}
                height={130}
              />
            </Link>
            <Link href="/about" onClick={toggleMenu}>
              <Image
                src="/navigation/about.png"
                alt="About"
                width={130}
                height={130}
              />
            </Link>
            <Link href="/#catering" onClick={toggleMenu}>
              <Image
                src="/navigation/privateEvents.png"
                alt="Catering"
                width={130}
                height={130}
              />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
