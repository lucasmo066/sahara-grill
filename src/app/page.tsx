import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Hero} from "@/components/Hero";
import IntroGridSection from "@/components/IntroGridSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-center">
      <Hero />
     <IntroGridSection />
      <TestimonialsSection />
      <div className="flex border-4 border-green-500 w-full">
        footer
      </div>
    </main>
  );
}
