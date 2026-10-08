import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Sitemap | The Sahara Grill" };

export default function Sitemap() {
  return (
    <main
      id="main-content"
      className="site-container section-space min-h-[60vh]"
    >
      <h1 className="section-heading mb-8">Sitemap</h1>
      <nav aria-label="Sitemap">
        <ul className="space-y-6 text-xl [&_a]:underline-offset-4 [&_a:hover]:underline">
          <li>
            <Link href="/" className="font-semibold text-[hsl(var(--heading))]">
              Home
            </Link>
            <ul className="mt-4 space-y-3 border-l border-border pl-6 text-base text-muted-foreground">
              <li>
                <Link href="/#location">Location</Link>
              </li>
              <li>
                <Link href="/#hours">Hours</Link>
              </li>
              <li>
                <Link href="/#whatsnew">What&apos;s New</Link>
              </li>
              <li>
                <Link href="/#cateringcard">Catering</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/menu"
              className="font-semibold text-[hsl(var(--heading))]"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-semibold text-[hsl(var(--heading))]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#catering"
              className="font-semibold text-[hsl(var(--heading))]"
            >
              Private Events
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
