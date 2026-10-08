import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MenuSectionView } from "@/sanity/types";
import { BlurFade } from "@/components/ui/blur-fade";
import { getMenuImageSource } from "@/lib/menu-images";

export default function MenuSections({
  sections,
}: {
  sections: MenuSectionView[];
}) {
  if (!sections.length) {
    return (
      <p className="py-10 text-muted-foreground">
        There are no items in this menu right now.
      </p>
    );
  }

  const firstImageIndex = sections.findIndex((section) => section.imageUrl);

  return (
    <div className="divide-y divide-border">
      {sections.map((section, sectionIndex) => {
        const imageOnRight = section.variant === "right";
        const direction = imageOnRight ? "right" : "left";
        const imageSource = section.imageUrl
          ? getMenuImageSource(section.imageUrl)
          : undefined;

        return (
          <section
            key={section._id}
            aria-labelledby={`menu-${section._id}`}
            data-menu-side={direction}
            className="py-8 first:pt-4 sm:py-12"
          >
            <BlurFade
              direction={direction}
              className={cn(
                "mb-6 space-y-2 sm:mb-8",
                imageOnRight && "md:text-right",
              )}
            >
              <h2
                id={`menu-${section._id}`}
                className="aladin-regular text-4xl sm:text-5xl"
              >
                {section.title}
              </h2>
              {section.sectionDescription && (
                <p
                  className={cn(
                    "max-w-3xl leading-relaxed text-muted-foreground",
                    imageOnRight && "md:ml-auto",
                  )}
                >
                  {section.sectionDescription}
                </p>
              )}
            </BlurFade>
            <div
              className={cn(
                "grid items-start gap-6 lg:gap-10",
                section.imageUrl && "md:grid-cols-2",
              )}
            >
              {imageSource && (
                <BlurFade
                  direction={direction}
                  duration={0.45}
                  inView={sectionIndex !== firstImageIndex}
                  className={cn("min-w-0", imageOnRight && "md:order-2")}
                >
                  <Image
                    src={imageSource}
                    alt={section.imageAlt || section.title}
                    width={800}
                    height={600}
                    sizes="(min-width: 1280px) 588px, (min-width: 1024px) calc((100vw - 104px) / 2), (min-width: 768px) calc((100vw - 72px) / 2), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                    priority={sectionIndex === firstImageIndex}
                    placeholder={
                      typeof imageSource === "string" ? "empty" : "blur"
                    }
                    className="card-media aspect-[4/3]"
                  />
                </BlurFade>
              )}
              <ul
                className={cn(
                  "min-w-0",
                  !section.imageUrl && "grid gap-x-10 md:grid-cols-2",
                )}
              >
                {section.menuItems.map((item, index) => (
                  <BlurFade
                    as="li"
                    key={`${item.name}-${index}`}
                    direction={
                      section.imageUrl
                        ? imageOnRight
                          ? "left"
                          : "right"
                        : index % 2 === 0
                          ? "left"
                          : "right"
                    }
                    className={cn(
                      "border-b border-border py-5 first:pt-0 last:border-0",
                      !section.imageUrl && "md:[&:nth-child(2)]:pt-0",
                    )}
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="min-w-0 text-base font-semibold leading-relaxed sm:text-lg">
                        {item.name}
                      </h3>
                      <span className="shrink-0 whitespace-nowrap text-sm font-medium tabular-nums sm:text-base">
                        {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {item.description}
                      </p>
                    )}
                  </BlurFade>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}
