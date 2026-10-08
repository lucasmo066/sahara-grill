import { Hero } from "@/components/Hero";
import IntroGridSection from "@/components/IntroGridSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GotchaBoard from "@/components/GotchaBoard";
import CateringSection from "@/components/CateringSection";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <GotchaBoard />
      <TestimonialsSection />
      <IntroGridSection />
      <CateringSection />
    </main>
  );
}
