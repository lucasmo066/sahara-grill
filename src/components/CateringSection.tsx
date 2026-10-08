import { Button } from "./ui/button";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CateringSection() {
  return (
    <section
      className="section-space border-t border-border bg-muted/30"
      id="catering"
      aria-labelledby="catering-heading"
    >
      <div className="site-container space-y-8 sm:space-y-10">
        <div className="space-y-4 text-center">
          <BlurFade>
            <h2 id="catering-heading" className="section-heading">
              Private Events
            </h2>
          </BlurFade>
          <BlurFade>
            <p className="section-intro">
              We offer catering for all events. From weddings to corporate
              events, we have you covered.
            </p>
          </BlurFade>
          <BlurFade>
            <p className="section-intro">
              We&apos;ve put together some of the more frequently asked
              questions regarding catering below.
            </p>
          </BlurFade>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <BlurFade direction="left">
            <Image
              src="/menu/tabboulehcatering.jpeg"
              alt="Fresh tabbouleh prepared for catering"
              width={800}
              height={600}
              sizes="(min-width: 1280px) 584px, (min-width: 1024px) 45vw, 100vw"
              className="card-media aspect-[4/3]"
            />
          </BlurFade>
          <Accordion type="single" collapsible className="min-w-0">
            {faqs.map(({ question, answer }, index) => (
              <BlurFade key={question} direction="right">
                <AccordionItem value={`question-${index}`}>
                  <AccordionTrigger className="gap-4 text-left text-base leading-relaxed">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              </BlurFade>
            ))}
          </Accordion>
        </div>
        <BlurFade className="flex flex-col items-center gap-5 pt-4 text-center">
          <h3 className="text-2xl font-semibold sm:text-3xl">
            Ready to book catering for your event?
          </h3>
          <Button asChild size="lg">
            <a href="tel:770-926-3446">Contact Us</a>
          </Button>
        </BlurFade>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "How far in advance should I book catering for my event?",
    answer:
      "We recommend booking catering services for your event as far in advance as possible to ensure availability. We can accommodate last-minute requests, but we recommend booking at least two weeks in advance for most events.",
  },
  {
    question: "What types of events do you cater?",
    answer:
      "We cater a wide variety of events, including weddings, corporate events, birthday parties, and more. Our catering team can work with you to create a customized menu that fits your event's needs and preferences.",
  },
  {
    question: "Do you offer delivery for catering orders?",
    answer:
      "Yes, we offer delivery for catering orders. Delivery fees may apply depending on the size and location of your event. Please contact us for more information on delivery options for your event.",
  },
  {
    question: "What if I need to cancel my event or catering request?",
    answer:
      "If you need to cancel your event or catering request, please contact us as soon as possible. Cancellation policies may vary depending on the specifics of your event, so we recommend reaching out to discuss your situation in detail.",
  },
  {
    question: "Is there a minimum food and drink purchase required?",
    answer:
      "Yes, there is a minimum food and drink purchase required for catering services. The minimum amount depends on the size and type of your event. Please contact us for more details on our minimum purchase requirements.",
  },
  {
    question: "Will I be able to order from the full menu for my event?",
    answer:
      "We offer a wide variety of menu options for catering events, but the full menu may not be available for every event. Our catering team will work with you to create a customized menu that fits your needs and preferences. Please contact us to discuss your options.",
  },
  {
    question: "Do you provide staff for the event?",
    answer:
      "Yes, we can provide staff for your event. Our staff can assist with serving food, setting up, and cleaning up after the event. Please let us know your specific needs when you contact us.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer:
      "Yes, we can accommodate various dietary restrictions, including vegetarian, vegan, gluten-free, and more. Please inform us of any dietary restrictions when you contact us so we can tailor the menu to meet your needs.",
  },
];
