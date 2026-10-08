"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main
      id="main-content"
      className="site-container section-space flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center"
    >
      <h1 className="section-heading">Something went wrong</h1>
      <p className="section-intro">
        We couldn&apos;t load this page. Please try again.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button onClick={reset}>Try Again</Button>
        <Button asChild variant="outline">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </main>
  );
}
