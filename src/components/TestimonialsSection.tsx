import { InfiniteMovingCardsDemo } from "@/components/MovingCards";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function TestimonialsSection() {
    return (
        <div className="flex flex-col items-center w-full mt-20 pb-10">
            <h2 className="aladin-regular text-center text-6xl md:text-7xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">See What Our Customers are Saying</h2>
            <InfiniteMovingCardsDemo />
            <div className="border">

            </div>

            <div className="flex flex-col items-center justify-center w-full">
                <h3 className="text-3xl lg:text-4xl xl:text-6xl font-medium pb-5">
                    Leave a Review
                </h3>
                <Link href="https://www.yelp.com/biz/the-sahara-grill-woodstock-3?start=20" target="_blank">
                    <Button className="px-10 hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary">Review Us</Button>
                </Link>
            </div>
        </div>
    );
}