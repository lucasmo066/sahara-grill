import { InfiniteMovingCardsDemo } from "@/components/MovingCards";

export default function TestimonialsSection() {
    return (
        <div className="flex flex-col items-center w-full border-4 border-yellow-500">
            <h2 className="text-3xl font-extralight text-primary mt-10">What our customers are saying</h2>
            <InfiniteMovingCardsDemo />
        </div>
    );
}