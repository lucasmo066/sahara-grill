"use client";

import { useEffect, useState } from "react";
import { isRestaurantOpen, openingHours } from "@/lib/hours";
import { BlurFade } from "@/components/ui/blur-fade";

export default function HoursCard() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setIsOpen(isRestaurantOpen());
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BlurFade
      as="section"
      className="bento-card lg:col-span-5"
      id="hours"
      aria-labelledby="hours-heading"
    >
      <div className="space-y-4">
        <h2 className="card-heading" id="hours-heading">
          Hours
        </h2>
        <p className="text-left text-muted-foreground">
          Join us for lunch and dinner!
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-6 text-center">
        <p
          role="status"
          className={`rounded-full border px-4 py-3 text-xl font-semibold ${isOpen ? "border-green-600/50 text-green-700 dark:text-green-400" : "border-primary/40 text-[hsl(var(--heading))]"}`}
        >
          {isOpen === null
            ? "Woodstock, GA hours"
            : isOpen
              ? "Open now"
              : "Currently closed"}
        </p>
        <dl className="space-y-5">
          {openingHours.map(({ days, hours }) => (
            <div key={days}>
              <dt className="text-lg font-semibold sm:text-xl">{days}</dt>
              <dd className="mt-1 text-lg text-muted-foreground">{hours}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
          Kitchen closes 15 minutes before closing.
          <br />
          All times are Eastern.
        </p>
      </div>
    </BlurFade>
  );
}
