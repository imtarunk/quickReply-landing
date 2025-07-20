import React from "react";
import { FeatureItem } from "../../ui/FeatureCard";
import { features } from "../../../../../public/config/data.config";

interface props {
  id?: string;
}

export const CallToActionSection = ({ id }: props): React.JSX.Element => {
  return (
    // --- MAIN LAYOUT: Preserved from your original code ---
    <section
      id={id}
      className="mx-auto flex w-full max-w-[1029px] flex-col items-center gap-[79px] py-12 px-4 sm:px-6 md:px-8"
    >
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
