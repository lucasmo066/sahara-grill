"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

export default function LocationCard() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(
        "12910 Hwy 92 Suite 105 Woodstock, GA 30188",
      );
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  };

  return (
    <BlurFade
      as="section"
      className="bento-card lg:col-span-7"
      id="location"
      aria-labelledby="location-heading"
    >
      <h2 className="card-heading" id="location-heading">
        Location
      </h2>
      <div className="flex flex-1 flex-col gap-6 text-center">
        <iframe
          title="Sahara Grill location"
          src="https://maps.google.com/maps?q=12910+Hwy+92+Suite+105,+Woodstock,+GA+30188&output=embed"
          className="min-h-56 w-full flex-1 rounded-2xl border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <address className="text-lg not-italic leading-relaxed sm:text-xl">
          12910 Hwy 92, Suite 105
          <br />
          Woodstock, GA 30188
        </address>
        <div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=12910+Hwy+92+Suite+105+Woodstock+GA+30188"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
            <Button onClick={handleCopyAddress} variant="outline">
              {copyState === "copied" ? "Address Copied!" : "Copy Address"}
            </Button>
          </div>
          <p className="sr-only" role="status">
            {copyState === "copied" ? "Address copied to clipboard." : ""}
          </p>
          {copyState === "error" && (
            <p className="mt-3 text-sm text-muted-foreground" role="status">
              Unable to copy automatically. Please select the address above.
            </p>
          )}
        </div>
      </div>
    </BlurFade>
  );
}
