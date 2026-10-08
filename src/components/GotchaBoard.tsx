import HoursCard from "@/components/HoursCard";
import LocationCard from "@/components/LocationCard";
import CateringCard from "@/components/CateringCard";
import WhatsNewCard from "@/components/WhatsNewCard";

export default function GotchaBoard() {
  return (
    <section
      aria-label="Plan your visit"
      className="site-container section-space grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-6"
    >
      <LocationCard />
      <HoursCard />
      <CateringCard />
      <WhatsNewCard />
    </section>
  );
}
