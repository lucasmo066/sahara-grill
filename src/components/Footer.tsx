import Image from "next/image";
import Link from "next/link";
import { openingHours } from "@/lib/hours";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="site-container space-y-10 py-12 sm:py-16">
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          <div className="flex flex-col items-center gap-6 md:items-start">
            <Link href="/" aria-label="Sahara Grill home">
              <Image
                src="/saharagrillgray.svg"
                alt="The Sahara Grill"
                width={200}
                height={140}
                className="h-auto w-44 dark:brightness-0 dark:invert"
              />
            </Link>
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-start"
            >
              <Link className="hover:underline" href="/menu">
                Menu
              </Link>
              <Link className="hover:underline" href="/about">
                About
              </Link>
              <Link className="hover:underline" href="/#catering">
                Catering
              </Link>
              <Link className="hover:underline" href="/sitemap">
                Sitemap
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p>
              <a
                href="tel:470-787-2200"
                className="underline-offset-4 hover:underline"
              >
                470-787-2200
              </a>
            </p>
            <address className="not-italic leading-7 text-muted-foreground">
              12910 Highway 92
              <br />
              Suite 105
              <br />
              Woodstock, Georgia 30188
            </address>
            <p className="text-sm text-muted-foreground">
              Catering:{" "}
              <a
                href="tel:770-926-3446"
                className="underline-offset-4 hover:underline"
              >
                770-926-3446
              </a>
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Hours</h2>
            <dl className="space-y-3 text-sm leading-6">
              {openingHours.map(({ days, hours }) => (
                <div key={days}>
                  <dt className="font-medium">{days}</dt>
                  <dd className="text-muted-foreground">{hours}</dd>
                </div>
              ))}
            </dl>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Kitchen closes 15 minutes before closing.
            </p>
          </div>
        </div>
        <p className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} The Sahara Grill. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
