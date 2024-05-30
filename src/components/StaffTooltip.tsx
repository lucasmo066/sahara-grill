"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Chef",
    image:
      "",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Chef",
    image:
      "",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Back of House",
    image:
      "",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Front of House",
    image:
      "",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "The Boss",
    image:
      "",
  },
  {
    id: 6,
    name: "Dora",
    designation: "Kabob Maker",
    image:
      "",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
