import Image from "next/image";
import GetLatestForm from "@/components/GetLatestForm";
import { BlurFade } from "@/components/ui/blur-fade";

export default function WhatsNewCard() {
  return (
    <BlurFade
      as="section"
      className="bento-card lg:col-span-7"
      id="whatsnew"
      aria-labelledby="whats-new-heading"
    >
      <h2 className="card-heading" id="whats-new-heading">
        What&apos;s New
      </h2>
      <Image
        src="/menu/drinkswinecabinetfront.JPG"
        alt="Wine and drinks selection at Sahara Grill"
        width={800}
        height={600}
        sizes="(min-width: 1280px) 640px, (min-width: 768px) 45vw, 90vw"
        className="card-media aspect-[4/3] max-h-80 lg:h-72 xl:h-80"
      />
      <GetLatestForm />
    </BlurFade>
  );
}
