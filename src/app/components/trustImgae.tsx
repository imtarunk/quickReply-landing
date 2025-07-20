"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeroImageSection = () => {
  return (
    <div className="lg:col-span-7 mt-16 lg:mt-0 ml-6">
      <div className="flex flex-col items-center gap-y-8 lg:relative lg:block">
        {/* Overlapping Mobile Image with Framer Motion */}{" "}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="w-3/4 lg:absolute lg:w-2/5 lg:-left-12 lg:top-1/2 lg:-translate-y-1 z-10"
        >
          <Image
            src="/mobile-108.png"
            alt="Mobile conversation about booking"
            width={800}
            height={600}
            className="lg:-translate-y-3 lg:-translate-x-10 transition-all duration-300 hover:-translate-y-2 rounded-md"
          />
        </motion.div>
        {/* Main Dashboard Image with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="w-full lg:-mt-16"
        >
          <Image
            src="/heroC.png"
            alt="Inbound dashboard"
            width={1000}
            height={625}
            priority={true}
            className="rounded-xl shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          />
        </motion.div>
      </div>
    </div>
  );
};
