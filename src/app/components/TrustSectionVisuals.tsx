"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card"; // Assuming path is correct

const cardContainerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut" as const,
    },
  },
};

export const TrustSectionVisuals = () => {
  return (
    <motion.div
      className="lg:w-1/2 w-full"
      variants={cardContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Relative container for positioning cards */}
      <div className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-96">
        {/* Secondary card (background) */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="absolute w-1/2 h-2/3 bottom-0 left-0"
        >
          <Card className="w-full h-full bg-slate-100 rounded-xl border-none shadow-lg" />
        </motion.div>

        {/* Main Card (foreground) */}
        <motion.div
          whileHover={{
            y: -15,
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute w-4/5 h-4/5 top-0 right-0"
        >
          <Card className="w-full h-full bg-slate-200 rounded-xl border-none shadow-2xl" />
        </motion.div>
      </div>
    </motion.div>
  );
};
