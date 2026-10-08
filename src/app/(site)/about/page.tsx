import type { Metadata } from "next";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

export const metadata: Metadata = {
  title: "About Us | The Sahara Grill",
  description:
    "Learn about the family behind Sahara Grill and our dedication to fresh Mediterranean cuisine in Woodstock, GA.",
};

export default function AboutPage() {
  return (
    <main
      id="main-content"
      className="site-container section-space space-y-10 sm:space-y-14"
    >
      <BlurFade>
        <h1 className="section-heading text-center">About Us</h1>
      </BlurFade>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <BlurFade direction="left">
          <Image
            src="/menu/outsidesignfront.JPG"
            alt="The Sahara Grill storefront in Woodstock, Georgia"
            width={800}
            height={600}
            sizes="(min-width: 1280px) 584px, (min-width: 1024px) 45vw, 100vw"
            className="card-media aspect-[4/3]"
            priority
          />
        </BlurFade>
        <div className="space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
          <BlurFade direction="right">
            <p>
              The Sahara Grill is a family-owned and operated restaurant located
              in Woodstock, Georgia. Our family has been serving the Woodstock
              community for over 20 years, and we take pride in providing our
              customers with delicious, authentic Mediterranean cuisine in a
              warm and welcoming atmosphere.
            </p>
          </BlurFade>
          <BlurFade direction="right">
            <p>
              Our menu features a wide variety of Mediterranean dishes,
              including falafel, shawarma, kebabs, and more. We use only the
              freshest ingredients and traditional cooking methods to ensure
              that every dish is bursting with flavor. Whether you&apos;re
              looking for a quick and healthy lunch or a hearty dinner, we have
              something for everyone.
            </p>
          </BlurFade>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <BlurFade direction="left">
          <Image
            src="/menu/falafelpitaclose.JPG"
            alt="A freshly prepared falafel pita"
            width={800}
            height={600}
            sizes="(min-width: 1280px) 596px, (min-width: 640px) 45vw, 100vw"
            className="card-media aspect-[4/3]"
          />
        </BlurFade>
        <BlurFade direction="right">
          <Image
            src="/menu/ambianceiraq.JPG"
            alt="The dining room at Sahara Grill"
            width={800}
            height={600}
            sizes="(min-width: 1280px) 596px, (min-width: 640px) 45vw, 100vw"
            className="card-media aspect-[4/3]"
          />
        </BlurFade>
      </div>
      <BlurFade className="mx-auto max-w-3xl text-center text-base leading-8 text-muted-foreground sm:text-lg">
        <p>
          Authentic Mediterranean cuisine isn&apos;t the only thing we&apos;re
          known for. Our warm and inviting atmosphere makes The Sahara Grill the
          perfect place to relax and enjoy a meal with family and friends.
          Whether you&apos;re dining in our cozy restaurant or taking your meal
          to go, you&apos;ll always feel welcome at The Sahara Grill.
        </p>
      </BlurFade>
    </main>
  );
}
