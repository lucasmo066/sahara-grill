'use client'

import ModeToggle from "@/components/ui/toggle-mode"
import { Button } from "./ui/button"
import Image from 'next/image'
import Link from 'next/link'


export default function Navbar() {
    return (
        <header className="">
          <nav className="flex flex-row justify-evenly">
            <ul className="flex items-center justify-center gap-4 py-6">
              <div className="flex items-center text-primary text-center text-md sm:text-lg lg:text-xl justify-center font-mono gap-2 sm:gap-10">
                <li>
                  <Link href="/">
                    <Image
                      src="/navigation/home.png"
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </Link>
                </li>
                <li>
                <Link href="/menu">
                    <Image
                      src="/navigation/Menu.png"
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </Link>
                </li>
                <li>
                <Link href="/about">
                    <Image
                      src="/navigation/about.png"
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </Link>
                </li>
                <li>
                <Link href="#catering">
                    <Image
                      src="/navigation/privateEvents.png"
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </Link>
                </li>
              </div>
            
               
              
            </ul>
            <div className="flex flex-row items-center justify-center gap-4">
                <ModeToggle />
                <Link href="tel:470-787-2200">
                <Button variant="outline" className="border-2 border-primary text-primary px-10 my-10">Delivery</Button>
                </Link>
                <Link href="/order">
                <Button variant="outline" className="border-2 border-primary text-primary px-10 my-10">Takeout</Button>
                </Link>
            </div>
          </nav>
        </header>
    )
}
