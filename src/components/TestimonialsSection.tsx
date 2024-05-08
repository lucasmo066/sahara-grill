import { InfiniteMovingCardsDemo } from "@/components/MovingCards";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
    return (
        <div className="flex flex-col items-center w-full border-4 border-yellow-500">
            <h2 className="text-3xl font-extralight text-primary mt-10">What our customers are saying</h2>
            <InfiniteMovingCardsDemo />
            <div className="flex flex-col border-4 items-center justify-center border-green-500 w-full">
                <h3 className="text-xl font-semibold pb-5">
                Leave us a review on Yelp!
                </h3>
                <Button>Go to Yelp</Button>
            </div>
        </div>
    );
}