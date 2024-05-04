import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Hero} from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-center">
      <Hero />
      <div className="flex border-4 border-blue-500 w-full py-20">
        location, hours, contact, services layout grid here
      </div>
      <div className="flex border-4 border-yellow-500 w-full">
       infinite moving cards reviews section
      </div>
      <div className="flex border-4 border-green-500 w-full">
        footer
      </div>
    </main>
  );
}
