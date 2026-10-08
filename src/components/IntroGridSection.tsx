import { LayoutGridCards } from "@/components/LayoutGrid";
import { BlurFade } from "@/components/ui/blur-fade";

export default function IntroGridSection() {
  return (
    <section
      className="site-container section-space space-y-8 sm:space-y-10"
      aria-labelledby="about-heading"
    >
      <BlurFade className="space-y-4 text-center">
        <h2 id="about-heading" className="section-heading">
          Learn About Us
        </h2>
        <p className="section-intro">
          Explore the pictures below to learn more about us and our values.
        </p>
      </BlurFade>
      <LayoutGridCards />
    </section>
  );
}
