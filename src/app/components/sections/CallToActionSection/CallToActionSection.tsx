"use client";

import React from "react";
import { FeatureItem } from "../../ui/FeatureCard"; // This component must also be responsive
import { features } from "../../../../../public/config/data.config";

interface CallToActionSectionProps {
  id?: string;
}

export const CallToActionSection = ({
  id,
}: CallToActionSectionProps): React.JSX.Element => {
  return (
    // Responsive: Using standard max-width and padding for consistency.
    <section
      id={id}
      className="w-full max-w-6xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Container for the heading and subheading */}
      <div className="flex flex-col items-center gap-4 text-center">
        {/* --- CORE RESPONSIVE FIX: Removed whitespace-nowrap --- */}
        {/* Responsive: Using standard Tailwind text sizes for a harmonious type scale. */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight sm:leading-snug">
          Why Service Businesses Trust ReplyQuick
        </h1>

        {/* Responsive: Using standard text sizes and a slightly lighter color for hierarchy. */}
        <p className="max-w-3xl text-lg md:text-xl text-black/80">
          Everything you need to capture leads and convert them into loyal
          clients.
        </p>
      </div>

      {/* --- CORE LAYOUT IMPROVEMENT: Using CSS Grid --- */}
      {/* This grid provides explicit control over the number of columns at different breakpoints,
          which is more robust and predictable than flex-wrap. */}
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 pt-16">
        {/* The mapping logic remains the same. */}
        {features.map((feature, index) => (
          // It's crucial that FeatureItem is designed to fill its grid container.
          <FeatureItem key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};
