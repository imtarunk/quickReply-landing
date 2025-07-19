import React from "react";
import { FeatureData } from "@/app/lib/types/types";
import { FeatureItem } from "../../ui/FeatureCard";

const features: FeatureData[] = [
  {
    title: "Instant Lead Rescue",
    icons: [
      { src: "/vector-2.svg", className: "w-[26px] h-[15px] top-2 left-[3px]" },
    ], // Preserved original classes
  },
  {
    title: "24/7 Call Handling",
    icons: [
      { src: "/vector-1.svg", className: "w-[21px] h-[30px] top-0 left-[5px]" },
    ], // Preserved original classes
  },
  {
    title: "Seamless Integration",
    icons: [
      {
        src: "/vector.svg",
        className: "w-[18px] h-[18px] top-[5px] left-[7px]",
      }, // Preserved original classes
      { src: "/vector-5.svg", className: "w-8 h-7 top-0 left-0" }, // Preserved original classes
      {
        src: "/vector-11.svg",
        className: "w-1.5 h-1.5 top-[11px] left-[13px]",
      }, // Preserved original classes
    ],
  },
  {
    title: "Enterprise Security",
    icons: [
      { src: "/vector-4.svg", className: "w-[19px] h-6 top-1 left-[7px]" },
    ], // Preserved original classes
  },
  {
    title: "Real-Time Analytics",
    icons: [
      { src: "/vector-10.svg", className: "w-[25px] h-[25px] top-1 left-1" },
    ], // Preserved original classes
  },
];

interface props {
  id?: string;
}

export const CallToActionSection = ({id}:props): React.JSX.Element => {
  return (
    // --- MAIN LAYOUT: Preserved from your original code ---
    <section id={id} className="mx-auto flex w-full max-w-[1029px] flex-col items-center gap-[79px] py-12 px-4 sm:px-6 md:px-8">
      <div className="h-4"></div>
      <div className="flex w-full flex-col items-center gap-12 text-center">
        {/* All heading and paragraph classes are identical to your original */}
        <h1 className="text-3xl font-extrabold text-black [font-family:'Inter',Helvetica] sm:text-4xl lg:text-6xl whitespace-nowrap">
          Why Service Businesses Trust ReplyQuick
        </h1>
        <p className="max-w-[949px] text-[20px] font-medium text-black [font-family:'Inter',Helvetica] leading-8 sm:text-[25px]">
          Everything you need to capture leads and convert them into loyal
          clients
        </p>
      </div>

      {/* --- FLEX CONTAINER: Preserved from your original code --- */}
      <div className="flex w-full flex-wrap justify-center gap-14 sm:gap-[70px] lg:gap-[106px]">
        {/* The mapping logic is now cleaner, but renders the same styled items */}
        {features.map((feature, index) => (
          <FeatureItem key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};
