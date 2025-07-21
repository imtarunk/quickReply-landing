"use client";

import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Data for the statistics
const statistics = [
  { value: "3X", description: "More Qualified Leads" },
  { value: "80%", description: "Lower Staffing Costs" },
  { value: "47%", description: "Higher Conversion Rates" },
  { value: "20Hr", description: "Hours Saved Weekly" },
];

// A dedicated component for each statistic for cleanliness
const StatCard = ({
  stat,
  index,
}: {
  stat: { value: string; description: string };
  index: number;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      // Responsive: Adjusted vertical gap for smaller screens
      className="flex flex-col items-center justify-center gap-2"
    >
      {/* Responsive: Scaled font sizes for better readability across devices */}
      <div className="font-extrabold text-[#258bbe] text-4xl md:text-5xl lg:text-6xl text-center">
        {stat.value}
      </div>
      {/* Responsive: Scaled font sizes and color for better hierarchy */}
      <div className="font-medium text-black/80 text-base lg:text-lg text-center leading-snug">
        {stat.description}
      </div>
    </motion.div>
  );
};

export const LeadRecoverySection = () => {
  return (
    // Standard section with responsive vertical padding
    <section className="w-full py-16 sm:py-20 bg-white">
      {/* --- CORE RESPONSIVE CHANGE --- */}
      {/* Using a standard max-width container for robust centering and padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full bg-[#f3f8fa] rounded-2xl shadow-sm border-none">
          {/* Responsive padding inside the card */}
          <CardContent className="p-8 sm:p-10 lg:p-12">
            {/* --- RESPONSIVE GRID --- */}
            {/* This grid is 2-col on mobile and 4-col on large screens */}
            {/* Responsive gaps provide better spacing on different layouts */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 sm:gap-8">
              {statistics.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
