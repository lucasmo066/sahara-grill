'use client';

import { useState } from 'react';
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

  return (
    <header>
      <nav className="flex flex-row justify-evenly items-center p-5">
        <div className="hidden md:flex items-center sm:gap-6 lg:gap-10">
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
              src="/navigation/Menu.png"
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
       
        <div className="flex items-center gap-6">
        <div className="md:hidden flex items-center">
          <Menu className="w-14 h-14 font-extralight mr-6 text-primary cursor-pointer" onClick={toggleMenu} />
        </div>
          <ModeToggle />
          <Link href="https://www.doordash.com/store/the-sahara-grill-woodstock-2839622/">
            <Button variant="outline" className="border-2 border-primary text-primary px-10 my-10 hover:bg-primary hover:text-white">Delivery</Button>
          </Link>
          <Link href="tel:470-787-2200">
            <Button variant="outline" className="border-2 border-primary text-primary px-10 my-10 hover:bg-primary hover:text-white">Takeout</Button>
          </Link>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-4 fixed inset-0 dark:bg-black dark:bg-opacity-90 bg-zinc-200 bg-opacity-90 flex flex-col items-start justify-center z-50">
          <div className="absolute bottom-5 right-5">
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
                src="/navigation/Menu.png"
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
            <Link href="#catering" onClick={toggleMenu}>
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
