"use client";

import React, { useState } from "react";
import { Button } from "../../ui/button";
import { motion } from "framer-motion";
import { LiveDemoDialog } from "../../contectSalesModel"; // Adjust path as needed
import { HeroImageSection } from "../../trustImgae";

export const TrustSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-16 gap-x-20">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="max-w-[700px] font-extrabold text-4xl md:text-[65px] leading-tight mb-8 font-sans text-black">
            Lead Recovery Infrastructure <br /> for Service Businesses
          </h1>

          <p className="text-xl font-medium text-black leading-[30px] mb-12 max-w-[541px]">
            Join the growing number of service providers using ReplyQuick to
            instantly follow up on missed calls, recover lost leads, and book
            qualified customers — all without hiring extra staff. Pay only for
            real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="w-full sm:w-[243px] h-[54px] rounded-[15px] bg-[#4ebff7] hover:bg-[#3eaae2] text-white font-semibold transform transition-transform duration-300 hover:scale-[1.05] cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Contact Sales
            </Button>

            <Button
              className="w-full sm:w-[243px] h-[54px] rounded-[15px] bg-black hover:bg-gray-800 text-white font-semibold border border-solid transform transition-transform duration-300 hover:scale-[1.05] cursor-pointer"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Demo
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Images */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-full max-w-2xl">
            {" "}
            {/* Increase max-w-2xl or use max-w-3xl for even larger */}
            <HeroImageSection />
          </div>
        </motion.div>
      </div>
      <LiveDemoDialog open={open} setOpen={setOpen} />
    </section>
  );
};
