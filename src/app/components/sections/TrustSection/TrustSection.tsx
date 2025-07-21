"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { LiveDemoDialog } from "../../contectSalesModel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const TrustSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-20 sm:px-6 lg:px-8 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-12 md:gap-y-16 gap-x-20">
        {/* --- Left Column --- */}
        <motion.div
          className="flex flex-col text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-[65px] leading-tight lg:leading-snug mb-6 lg:mb-8 text-black">
            Lead Recovery Infrastructure for Service Businesses
          </h1>

          <p className="text-lg md:text-xl font-medium text-black/90 leading-relaxed mb-10 lg:mb-12 mx-auto lg:mx-0 max-w-lg">
            Join the growing number of service providers using ReplyQuick to
            instantly follow up on missed calls, recover lost leads, and book
            qualified customers — all without hiring extra staff. Pay only for
            real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start z-10 relative">
            <button
              onClick={() => setOpen(true)}
              className="shimmer-effect bg-gradient-to-r from-[#4EBFF7] to-[#35A3E8] text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-300/40 hover:saturate-150 inline-flex items-center justify-center"
            >
              Live Demo <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button
              className="shimmer-effect bg-black text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-800/40 inline-flex items-center justify-center"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book a Demo
            </button>
          </div>
        </motion.div>

        {/* --- Right Column: Image --- */}
        <div className="w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-full max-w-[1000px] sm:max-w-[1200px] md:max-w-[1400px] lg:max-w-[1600px]"
          >
            <Image
              src="/heroC.png"
              alt="Inbound leads dashboard showing metrics and conversations"
              width={1800}
              height={1100}
              priority={true}
              className="rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-1 w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>

      <LiveDemoDialog open={open} setOpenAction={setOpen} />
    </section>
  );
};
