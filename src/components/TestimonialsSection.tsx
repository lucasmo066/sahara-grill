import { InfiniteMovingCardsDemo } from "@/components/MovingCards";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

export default function TestimonialsSection() {
  return (
    <section
      className="section-space border-y border-border bg-muted/30 text-center"
      aria-labelledby="testimonials-heading"
    >
      <div className="site-container space-y-8 sm:space-y-10">
        <BlurFade>
          <h2
            id="testimonials-heading"
            className="section-heading mx-auto max-w-4xl"
          >
            See What Our Customers are Saying
          </h2>
        </BlurFade>
        <BlurFade>
          <InfiniteMovingCardsDemo />
        </BlurFade>
        <BlurFade className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <h3 className="text-2xl font-semibold leading-snug sm:text-3xl">
            Have you recently had a great experience at The Sahara Grill?
          </h3>
          <p className="section-intro">Share your thoughts with us on Yelp!</p>
          <Button asChild size="lg">
            <a
              href="https://www.yelp.com/writeareview/biz/c8PYlGjAYNB2v0WVB5ZR6A?return_url=/biz/c8PYlGjAYNB2v0WVB5ZR6A&review_origin=biz-details-war-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Review Us
            </a>
          </Button>
        </BlurFade>
      </div>
    </section>
  );
}
