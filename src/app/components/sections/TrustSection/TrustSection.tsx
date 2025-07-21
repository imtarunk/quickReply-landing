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
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-12 md:gap-y-16 gap-x-16">
        {/* --- Left Column (Text) --- */}
        <motion.div
          // Changed `text-center lg:text-left` to just `text-left` to make it the default for mobile
          className="flex flex-col text-left lg:col-span-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-[65px] gap-y-1-px mb-6 lg:mb-8 text-black">
            <span className="text-[#4EBFF7]">Lead Recovery Infrastructure</span>{" "}
            for Service Businesses
          </h1>

          <p className="text-lg md:text-xl font-medium text-black/90 leading-relaxed mb-10 lg:mb-12 max-w-lg">
            Join the growing number of service providers using ReplyQuick to
            instantly follow up on missed calls, recover lost leads, and book
            qualified customers — all without hiring extra staff. Pay only for
            real results.
          </p>

          <div
            // Changed `justify-center` to `justify-start` for consistent left alignment
            className="flex flex-col sm:flex-row gap-4 justify-start z-10 relative"
          >
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

        {/* --- Right Column (Image with Badges) - UNCHANGED --- */}
        <div className="lg:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-2">
              <Image
                src="/heroC.png"
                alt="Inbound leads dashboard showing metrics and conversations"
                width={1800}
                height={1100}
                priority={true}
                className="rounded-2xl shadow-none transition-transform duration-300 w-full h-auto object-contain hover:scale-105"
              />
            </div>
          </motion.div>

          {/* --- Top Right Badge --- */}
          <div className="absolute -top-3 -right-3 flex items-center gap-2.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl px-4 py-2.5 z-10">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
            <p className="font-semibold text-gray-700 text-sm">
              92% Response Rate
            </p>
          </div>

          {/* --- Bottom Left Badge --- */}
          <div className="absolute -bottom-3 -left-3 flex items-center gap-2.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl px-4 py-2.5 z-10">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-400"></span>
            <p className="font-semibold text-gray-700 text-sm">24/7 Active</p>
          </div>
        </div>
      </div>

      <LiveDemoDialog open={open} setOpenAction={setOpen} />
    </section>
  );
};
