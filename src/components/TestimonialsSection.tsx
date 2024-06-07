import { InfiniteMovingCardsDemo } from "@/components/MovingCards";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function TestimonialsSection() {
    return (
        <div className="flex flex-col items-center w-full h-full mt-20 pb-10">
            <h2 className="aladin-regular text-center text-7xl py-4 px-5 md:text-8xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">See What Our Customers are Saying</h2>
           
            <InfiniteMovingCardsDemo />
            <Image
                src= "/arrowdown.svg"
                alt="Down arrow"
                width={100}
                height={100}
                className="dark:invert mb-10 pb-4"
            />
            <div className="flex flex-col items-center justify-center w-full">
                <h3 className="text-4xl xl:text-5xl font-medium pb-5 mx-10">
                   Have you recently had a great experience<br /> at The Sahara Grill?
                </h3>
                <p className="text-xl md:text-2xl font-light pb-5 mx-10">
                    Share your thoughts with us on Yelp!
                </p>
                <Link href="https://www.yelp.com/writeareview/biz/c8PYlGjAYNB2v0WVB5ZR6A?return_url=/biz/c8PYlGjAYNB2v0WVB5ZR6A&review_origin=biz-details-war-button" target="_blank">
                    <Button className="px-10 py-6 mt-4 text-lg hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary">Review Us</Button>
                </Link>
            </div>
        </div>
    );
}