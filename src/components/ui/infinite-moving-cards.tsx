"use client";

import { useState, type CSSProperties } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type Testimonial = { quote: string; name: string; title: string };

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: Testimonial[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const [paused, setPaused] = useState(false);
  const style = {
    "--animation-duration": { fast: "20s", normal: "40s", slow: "80s" }[speed],
    "--animation-direction": direction === "left" ? "normal" : "reverse",
  } as CSSProperties;
  return (
    <div>
      <div
        className={cn(
          "overflow-hidden motion-reduce:overflow-x-auto",
          className,
        )}
        style={style}
      >
        <ul
          style={{ animationPlayState: paused ? "paused" : undefined }}
          className={cn(
            "flex w-max gap-4 py-2 motion-safe:animate-scroll",
            pauseOnHover &&
              "hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]",
          )}
        >
          {[...items, ...items].map((item, index) => (
            <li
              key={`${item.name}-${index}`}
              aria-hidden={index >= items.length ? true : undefined}
              className={cn(
                "w-[min(20rem,75vw)] shrink-0 rounded-2xl border border-border bg-card p-6 text-left sm:w-96",
                index >= items.length && "motion-reduce:hidden",
              )}
            >
              <blockquote className="flex h-full flex-col justify-between gap-6">
                <p className="text-sm leading-7 sm:text-base">{item.quote}</p>
                <footer className="text-sm leading-6">
                  <p className="font-semibold text-[hsl(var(--heading))]">
                    {item.name}
                  </p>
                  <p className="text-muted-foreground">{item.title}</p>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3 flex justify-end motion-reduce:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setPaused(!paused)}
          aria-pressed={paused}
        >
          {paused ? "Resume reviews" : "Pause reviews"}
        </Button>
      </div>
    </div>
  );
}
