"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeroImageSection = () => {
  return (
    // The main container stacks elements on mobile and uses a grid for desktop. This is correct.
    <div className="w-full flex flex-col items-center lg:grid lg:place-items-center">
      {/* --- Main Dashboard Image (Bottom Layer) --- */}
      {/* This component's layout is correct and doesn't need changes. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="w-full max-w-2xl mt-[-20%] sm:mt-[-15%] lg:mt-0 lg:col-start-1 lg:row-start-1"
      >
        <Image
          src="/heroC.png"
          alt="Inbound leads dashboard showing metrics and conversations"
          width={1000}
          height={625}
          priority={true}
          className="rounded-xl shadow-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-1"
        />
      </motion.div>

      {/* --- Overlapping Mobile Image (Top Layer) --- */}
      {/* --- CORE ALIGNMENT CHANGE TO MATCH REFERENCE IMAGE --- */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        // Responsive Layout & Sizing:
        // - Mobile: w-1/2 is good.
        // - Desktop (lg): The width is increased to w-1/2, and translate values are
        //   adjusted to move the image to the BOTTOM-LEFT of the dashboard.
        className="w-1/2 sm:w-2/5 lg:w-1/2 z-10 lg:col-start-1 lg:row-start-1 lg:translate-x-[-55%] lg:translate-y-[20%]"
      >
        <Image
          src="/mobile-108.png"
          alt="Mobile phone showing a text conversation about booking a service"
          width={800}
          height={600}
          className="rounded-lg  transition-all duration-300 hover:-translate-y-1 hover:scale-105"
        />
      </motion.div>
    </div>
  );
};
