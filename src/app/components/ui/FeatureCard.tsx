// src/components/FeatureCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FeatureData } from "@/app/lib/types/types";
import { Card, CardContent } from "./card";

export const FeatureItem = ({
  feature,
  index,
}: {
  feature: FeatureData;
  index: number;
}) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center text-center"
    >
      {/* The Card component and its styling are identical to your original */}
      <Card className="w-fit cursor-pointer border-none bg-transparent shadow-none transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <CardContent className="flex flex-col items-center gap-3 p-0">
          {/* This container preserves your original dimensions and styling */}
          <div className="flex h-[68px] w-[67.32px] items-center justify-center rounded-[10.2px] bg-[#4ebff7] p-[5.44px]">
            <div className="relative h-8 w-8">
              {feature.icons.map((icon, idx) => (
                <Image
                  key={idx}
                  className={`absolute ${icon.className}`} // Applies the exact classes from the data
                  alt=""
                  src={icon.src}
                  width={30}
                  height={30}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      {/* The title preserves your original font, size, and color styles */}
      <div className="mt-2 font-['Inter',Helvetica] text-xl font-medium leading-normal text-black whitespace-nowrap">
        {feature.title}
      </div>
    </motion.div>
  );
};
