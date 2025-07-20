"use client";

import React, { useState } from "react";
import { Button } from "../../ui/button";
import { motion } from "framer-motion";
import { LiveDemoDialog } from "../../contectSalesModel";
import { HeroImageSection } from "../../trustImgae";
import { ArrowRight } from "lucide-react"; // Import the arrow icon

export const TrustSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-20 sm:px-6 lg:px-8 overflow-hidden">
      {/* --- CORE ALIGNMENT CHANGE --- */}
      {/* Changed `items-center` to `lg:items-start` to align content to the top on large screens, matching the reference image. */}
      {/* The layout remains centered vertically on smaller screens where it's a single column. */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:items-start gap-y-12 md:gap-y-16 gap-x-20">
        {/* --- Left Column: Text Content --- */}
        <motion.div
          className="flex flex-col text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Removed the <br /> for natural, responsive text wrapping. */}
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-[65px] leading-tight lg:leading-snug mb-6 lg:mb-8 text-black">
            Lead Recovery Infrastructure for Service Businesses
          </h1>

          <p className="text-lg md:text-xl font-medium text-black/90 leading-relaxed mb-10 lg:mb-12 mx-auto lg:mx-0 max-w-lg">
            Join the growing number of service providers using ReplyQuick to
            instantly follow up on missed calls, recover lost leads, and book
            qualified customers — all without hiring extra staff. Pay only for
            real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* --- Buttons updated to match the reference image --- */}
            <Button
              className="w-full sm:w-auto px-8 py-3 text-base font-semibold rounded-lg bg-[#4ebff7] hover:bg-[#3eaae2] text-white transition-transform duration-300 hover:scale-[1.05]"
              onClick={() => setOpen(true)}
            >
              Live Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              className="w-full sm:w-auto px-8 py-3 text-base font-semibold rounded-lg bg-black hover:bg-gray-800 text-white transition-transform duration-300 hover:scale-[1.05]"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Demo
            </Button>
          </div>
        </motion.div>

        {/* --- Right Column: Images --- */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Ensure the HeroImageSection itself is responsive */}
          <div className="w-full max-w-md lg:max-w-2xl">
            <HeroImageSection />
          </div>
        </motion.div>
      </div>

      <LiveDemoDialog open={open} setOpenAction={setOpen} />
    </section>
  );
};
