"use client";

import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { motion } from "framer-motion";
import { LiveDemoDialog } from "../../contectSalesModel"; // Adjust path as needed

export const TrustSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full flex flex-col md:flex-row gap-8 px-4 sm:px-6 md:px-8 py-16 overflow-hidden">
      {/* Left Content */}
      <motion.div
        className="flex-1"
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
              const el = document.getElementById("bookdemosection");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a Demo
          </Button>
        </div>
      </motion.div>

      {/* Right Cards */}
      <motion.div
        className="flex-1 relative min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[417px]"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {/* Main Card with hover effect */}
        <motion.div
          whileHover={{
            y: -10,
            boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute w-[85%] sm:w-[85%] md:w-[80%] lg:w-[505px] h-[250px] sm:h-[300px] md:h-[340px] top-0 right-0"
        >
          <Card className="w-full h-full bg-[#e9e4e4] rounded-none border-none shadow-md" />
        </motion.div>

        {/* Secondary card with soft hover tilt */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: -1 }}
          transition={{ type: "spring", stiffness: 150, damping: 12 }}
          className="absolute w-[50%] sm:w-[40%] md:w-[35%] lg:w-[184px] h-[230px] sm:h-[300px] md:h-[330px] top-[80px] left-0"
        >
          <Card className="w-full h-full bg-[#edebeb] rounded-[10px] border-none shadow-md" />
        </motion.div>
      </motion.div>
      <LiveDemoDialog open={open} setOpen={setOpen} />
    </section>
  );
};
