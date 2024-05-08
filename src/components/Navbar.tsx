'use client'

import ModeToggle from "@/components/ui/toggle-mode"
import { Button } from "./ui/button"


export default function Navbar() {
    return (
        <header className="border-4">
          <nav className="flex flex-row justify-center">
            <ul className="flex items-center justify-center gap-4 py-10">
              <div className="flex items-center text-primary text-center text-md sm:text-lg lg:text-xl justify-center font-mono gap-2 sm:gap-10">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/menu">Menu</a>
                </li>
                <li>
                  <a href="">Catering & Events</a>
                </li>
                <li>
                  <a href="#contact">About Us</a>
                </li>
              </div>
              <li>
                <ModeToggle />
              </li>
            </ul>
            <div className="flex flex-row items-center justify-end">
                <Button variant="outline" className="border-2 border-primary text-primary my-10">Delivery</Button>
                <Button variant="outline" className="border-2 border-primary text-primary my-10">Takeout</Button>
            </div>
          </nav>
        </header>
    )
}
