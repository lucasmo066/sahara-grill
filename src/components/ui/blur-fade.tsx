"use client";

import {
  type CSSProperties,
  type HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";
type BlurFadeProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "section" | "header" | "li";
  direction?: Direction;
  delay?: number;
  duration?: number;
  inView?: boolean;
};

const listeners = new Map<Element, (visible: boolean) => void>();
let observer: IntersectionObserver | undefined;

function observe(element: HTMLElement, onChange: (visible: boolean) => void) {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) listeners.get(entry.target)?.(false);
        else if (entry.intersectionRatio >= 0.2)
          listeners.get(entry.target)?.(true);
      }
    },
    { rootMargin: "0px 0px -48px 0px", threshold: [0, 0.2] },
  );
  listeners.set(element, onChange);
  observer.observe(element);

  return () => {
    observer?.unobserve(element);
    listeners.delete(element);
    if (!listeners.size) {
      observer?.disconnect();
      observer = undefined;
    }
  };
}

export function BlurFade({
  as: Tag = "div",
  direction = "up",
  delay = 0,
  duration = 1.05,
  inView = true,
  className,
  style,
  children,
  ...props
}: BlurFadeProps) {
  const ref = useRef<HTMLElement | null>(null);
  // Server-rendered content stays visible until scrolling animation is available.
  const [revealed, setRevealed] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const element = ref.current;
    if (!inView || !element || !("IntersectionObserver" in window)) return;
    return observe(element, setRevealed);
  }, [inView]);

  return (
    <Tag
      {...props}
      ref={(element: HTMLElement | null) => {
        ref.current = element;
      }}
      data-blur-fade=""
      data-direction={direction}
      data-revealed={inView ? revealed : true}
      className={cn("blur-fade", className)}
      style={
        {
          "--reveal-delay": `${0.04 + delay}s`,
          "--reveal-duration": `${duration}s`,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
