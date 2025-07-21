"use client";

import React from "react";
import { FeatureItem } from "../../ui/FeatureCard";
import { features } from "../../../../../public/config/data.config";

interface CallToActionSectionProps {
  id?: string;
}

export const CallToActionSection = ({
  id,
}: CallToActionSectionProps): React.JSX.Element => {
  return (
    <section
      id={id}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
          Why Service Businesses Trust ReplyQuick
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-black/80 max-w-2xl mx-auto">
          Everything you need to capture leads and convert them into loyal
          clients.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {features.map((feature, index) => (
          <FeatureItem key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};
