"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ModeToggle from "@/components/ui/toggle-mode";
import { Button } from "./ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/#catering", label: "Catering" },
];
const orderUrl =
  "https://order.toasttab.com/online/the-sahara-grill-12910-georgia-92";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    const closeOnFocusOutside = (event: FocusEvent) => {
      if (!headerRef.current?.contains(event.target as Node))
        setMenuOpen(false);
    };

    desktop.addEventListener("change", closeOnDesktop);
    document.addEventListener("focusin", closeOnFocusOutside);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("focusin", closeOnFocusOutside);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-border bg-background md:relative md:top-auto"
    >
      {menuOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 bg-black/10 backdrop-blur-[2px] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-background focus:p-4"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main navigation"
        className="site-container relative py-4 md:py-6"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setMenuOpen(false);
            document.getElementById("navigation-toggle")?.focus();
          }
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="hidden items-center gap-6 md:flex lg:gap-10">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className="aladin-regular text-3xl text-[hsl(var(--heading))] underline-offset-8 hover:underline aria-[current=page]:underline"
              >
                {label}
              </Link>
            ))}
          </div>
          <Button
            id="navigation-toggle"
            variant="ghost"
            size="icon"
            className="text-[hsl(var(--heading))] md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
          <div className="flex items-center gap-2 sm:gap-3">
            <ModeToggle />
            <Button asChild variant="outline" className="px-3 sm:px-5">
              <a
                href={`${orderUrl}?diningOption=delivery`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Delivery
              </a>
            </Button>
            <Button asChild className="px-3 sm:px-5">
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">
                Takeout
              </a>
            </Button>
          </div>
        </div>
        <div
          id="mobile-navigation"
          hidden={!menuOpen}
          className="mobile-nav-glass absolute inset-x-4 top-[calc(100%_+_0.5rem)] rounded-2xl border p-4 sm:inset-x-6 md:hidden"
        >
          <div className="grid grid-cols-2 gap-2">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                aria-current={pathname === href ? "page" : undefined}
                className="rounded-lg bg-background/60 px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-background/80 aria-[current=page]:bg-background/90 aria-[current=page]:text-[hsl(var(--heading))]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
