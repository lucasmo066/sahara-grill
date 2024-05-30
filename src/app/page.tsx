import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Hero} from "@/components/Hero";
import IntroGridSection from "@/components/IntroGridSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GotchaBoard from "@/components/GotchaBoard";
import CateringSection from "@/components/CateringSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-center">
      <Hero />
      <GotchaBoard />
      <TestimonialsSection />
      <IntroGridSection />
      <CateringSection />
    </main>
  );
}
