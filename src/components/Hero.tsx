import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import heroImage from "@/assets/images/hero.webp";
import heroLogo from "@/assets/images/hero-logo.webp";

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[34rem] items-center justify-center overflow-hidden py-16 sm:min-h-[42rem] sm:py-20"
      aria-labelledby="hero-heading"
    >
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="(min-width: 1008px) 100vw, (min-width: 640px) 1008px, 816px"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <BlurFade
        inView={false}
        duration={0.45}
        className="site-container flex flex-col items-center gap-8 text-center"
      >
        <Image
          src={heroLogo}
          alt="The Sahara Grill"
          unoptimized
          priority
          className="h-auto w-full max-w-[22rem] sm:max-w-[30rem]"
        />
        <h1
          id="hero-heading"
          className="max-w-xl text-xl font-normal leading-relaxed text-white sm:text-2xl"
        >
          Fresh and Delicious Mediterranean Food
        </h1>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/80 text-white hover:border-primary"
          >
            <Link href="/menu">See Menu</Link>
          </Button>
          <Button asChild size="lg">
            <a
              href="https://order.toasttab.com/online/the-sahara-grill-12910-georgia-92"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now
            </a>
          </Button>
        </div>
      </BlurFade>
    </section>
  );
}
