import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

export default function CateringCard() {
  return (
    <BlurFade
      as="section"
      className="bento-card lg:col-span-5"
      id="cateringcard"
      aria-labelledby="catering-card-heading"
    >
      <h2 className="card-heading" id="catering-card-heading">
        Catering
      </h2>
      <Image
        src="/menu/ambiancetable.JPG"
        alt="Mediterranean platters and pita served at Sahara Grill"
        width={800}
        height={600}
        sizes="(min-width: 1280px) 440px, (min-width: 768px) 45vw, 90vw"
        className="card-media aspect-[4/3] max-h-80 lg:h-72 xl:h-80"
      />
      <div className="flex flex-1 flex-col items-start gap-4 text-left">
        <h3 className="text-xl font-semibold sm:text-2xl">
          Let us cater your next event!
        </h3>
        <p className="max-w-md leading-relaxed text-muted-foreground">
          Questions about an upcoming event? Do not hesitate to call us!
        </p>
        <div className="mt-auto flex w-full flex-wrap justify-center gap-3 pt-2">
          <Button asChild variant="outline">
            <a href="tel:770-926-3446">Set up an event</a>
          </Button>
          <Button asChild>
            <Link href="#catering">Learn More</Link>
          </Button>
        </div>
      </div>
    </BlurFade>
  );
}
