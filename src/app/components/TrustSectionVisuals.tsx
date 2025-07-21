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
      // This part is good, it allows the component to take full width on mobile
      // and half width on desktop, suggesting it sits next to text.
      className="w-full lg:w-1/2"
      variants={cardContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* --- CORE RESPONSIVE CHANGE #1: Fluid Container --- */}
      {/* Replaced fixed height with aspect-ratio and CSS Grid for layout. */}
      {/* This container will now maintain a 4:3 shape and scale fluidly. */}
      {/* `place-items-center` puts the grid cell in the middle. */}
      <div className="relative grid w-full max-w-lg mx-auto aspect-[4/3]">
        {/* --- CORE RESPONSIVE CHANGE #2: Overlapping with Grid --- */}
        {/* Both cards are placed in the same grid cell to create the overlap. */}
        {/* This is more robust than absolute positioning. */}

        {/* Secondary card (background) */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          // Placed in the single grid cell and then shifted with transforms.
          className="col-start-1 row-start-1 w-3/5 h-3/5"
          style={{ justifySelf: "start", alignSelf: "end" }} // Pushes to bottom-left
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
          // Placed in the same grid cell and shifted.
          className="col-start-1 row-start-1 w-4/5 h-4/5 z-10"
          style={{ justifySelf: "end", alignSelf: "start" }} // Pushes to top-right
        >
          <Card className="w-full h-full bg-slate-200 rounded-xl border-none shadow-2xl" />
        </motion.div>
      </div>
    </motion.div>
  );
};
