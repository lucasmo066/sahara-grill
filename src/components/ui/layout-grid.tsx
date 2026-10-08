"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "./button";
import { BlurFade } from "./blur-fade";

type Card = {
  id: number;
  title: string;
  description: string;
  className: string;
  thumbnail: string;
  alt: string;
};

export function LayoutGrid({ cards }: { cards: Card[] }) {
  const [selected, setSelected] = useState<Card | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!selected) return;
    dialogRef.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  const close = () => dialogRef.current?.close();

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
        {cards.map((card) => (
          <BlurFade key={card.id} className={card.className}>
            <button
              type="button"
              onClick={() => setSelected(card)}
              aria-haspopup="dialog"
              className="group relative isolate h-full min-h-64 w-full overflow-hidden rounded-3xl text-left sm:min-h-72"
            >
              <Image
                src={card.thumbnail}
                alt={card.alt}
                fill
                sizes="(min-width: 1280px) 800px, (min-width: 768px) 65vw, 100vw"
                className="-z-20 object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="flex h-full flex-col justify-end gap-2 p-6 lg:p-8">
                <h3 className="text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <span className="text-sm text-white/85">
                  Learn more <span aria-hidden="true">↗</span>
                </span>
              </div>
            </button>
          </BlurFade>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        aria-labelledby="story-title"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        className="fixed inset-0 m-auto max-h-[90svh] w-[calc(100%_-_2rem)] max-w-2xl overflow-y-auto rounded-3xl border border-border bg-card p-0 text-card-foreground backdrop:bg-black/65"
      >
        {selected && (
          <div>
            <div className="relative aspect-[16/10]">
              <Image
                src={selected.thumbnail}
                alt={selected.alt}
                fill
                sizes="(min-width: 768px) 672px, 100vw"
                className="object-cover"
              />
              <Button
                autoFocus
                size="icon"
                variant="secondary"
                onClick={close}
                aria-label="Close story"
                className="absolute right-4 top-4"
              >
                <X aria-hidden="true" />
              </Button>
            </div>
            <div className="space-y-4 p-6 sm:p-8">
              <h2
                id="story-title"
                className="text-2xl font-semibold sm:text-3xl"
              >
                {selected.title}
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {selected.description}
              </p>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
