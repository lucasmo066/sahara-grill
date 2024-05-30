"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export interface Testimonial {
    quote: string;
    name: string;
    title: string;
    }

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-neutral-950 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Neighborhood friendly place with very delicious Mediterranean food. Seems to be a family owned place and the staff is very friendly. 100% recommended!",
    name: "Molly S.",
    title: "Google Review",
  },
  {
    quote:
      "Food is delicious and made to order. Every meal has been great. Lots of healthy options and vegtarian options. The staff has been nice. Order at the cashier and wait for takeout or dine in just take a seat....",
    name: "Agatha Christie D.",
    title: "Yelp Review",
  },
  {
    quote: "The food was great, but what was better was the people. Everyone that was working was so very accommodating and sweet. I really enjoyed eating here. So many regulars came in for dine in and take out and it was really great to see.",
    name: "Kristen T.",
    title: "Yelp Review",
  },
  {
    quote:
      "Vegi platter delicious. Others had lamb and chicken platters. Hummus was outstanding; babaganoush as good as I have ever had. Family run restaurant. Well worth the trip.",
    name: "Tom W.",
    title: "Trip Advisor Review",
  },
  {
    quote:
      "Very nice and accommodating to menu requests.. Dietary restrictions: Accommodating for those who are gluten free.",
    name: "Valerie B.",
    title: "Restaurant Guru Review",
  },
];
