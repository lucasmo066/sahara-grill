"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";


export interface Cards {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    className: string;
    thumbnail: string;
    }

export function LayoutGridCards() {
  return (
    <div className="h-screen py-10 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Family Owned and Operated</p>
      <p className="font-normal text-lg my-4 max-w-lg text-neutral-300">
        We are a family-owned and operated business that has been serving the
        community for over a decade. Our goal is to provide our customers with
        the best possible service and quality products at an affordable price.
      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Prepared Fresh</p>
      <p className="font-normal text-lg my-4 max-w-lg text-neutral-200">
        All of our dishes are prepared fresh daily using only the finest
        ingredients. We take pride in the quality of our food and strive to
        provide our customers with the best possible dining experience.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Authentic Mediterranean</p>
      <p className="font-normal text-lg my-4 max-w-lg text-neutral-200">
        Our menu features a wide variety of authentic Mediterranean dishes that
        are sure to satisfy even the most discerning palate. From our delicious
        kebabs to our mouth-watering baklava, we have something for everyone.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Friendly Serivce</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our friendly and knowledgeable staff is always ready to help you find
        the perfect dish to suit your tastes. Whether you are a regular or a
        first-time visitor, we will make you feel right at home.
      </p>
    </div>
  );
};
 
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/menu/outsideside.JPG",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/menu/kuftalambchickenlampgreen.JPG",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/menu/plattertop.JPG",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/menu/ambiancelamp.JPG",
  },
];
