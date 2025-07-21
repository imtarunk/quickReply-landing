"use client";

import React from "react";
import { Card, CardContent } from "../../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Button } from "../../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { comparisonData } from "../../../../../public/config/data.config";
import DifferenceSection from "./demoMobile-view";
// --- 1. Import the new component for mobile view ---

export const DemoSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white flex flex-col items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-screen-xl px-4 sm:px-6 flex flex-col items-center gap-8 md:gap-12"
      >
        {/* Headline, CTA, and Subheading remain the same */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center leading-tight sm:leading-snug bg-gradient-to-r from-black to-[#4ebff7] bg-clip-text text-transparent">
          No Setup Hassle. No Missed Leads. Just More Sales.
        </h2>

        <Button onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        } className="flex items-center justify-center gap-2.5 px-8 py-4 md:px-6 md:py-6 bg-[#2a8fc1] rounded-full text-white font-semibold text-base sm:text-lg shadow-md transition hover:opacity-90 hover:scale-[1.01] cursor-pointer">
          Book a Demo
          <div className="relative w-6 h-6">
            <Image
              alt="Arrow Icon"
              src="/vector-10.svg"
              width={18}
              height={15}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </Button>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-black">
          How we compare
        </h3>

        {/* --- 2. Conditional Rendering for Desktop View --- */}
        {/* This table will be HIDDEN on mobile and VISIBLE on medium screens and up (md:block) */}
        <div className="w-full overflow-x-auto hidden md:block">
          <Card className="w-full min-w-[600px] md:min-w-full max-w-[1192px] mx-auto rounded-[20px] sm:rounded-[40px] border border-[#c9c9c9] shadow-[0_4px_15px_#4ebff730] overflow-hidden">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-none bg-[#f9f9f9]">
                    <TableHead className="p-4 sm:p-5 text-center font-bold text-sm sm:text-base lg:text-lg text-black">
                      Feature
                    </TableHead>
                    <TableHead className="p-4 sm:p-5 text-center font-bold text-sm sm:text-base lg:text-lg text-black">
                      Others
                    </TableHead>
                    <TableHead className="p-4 sm:p-5 text-center font-bold text-sm sm:text-base lg:text-lg text-black">
                      ReplyQuick
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow
                      key={index}
                      className="border-t border-gray-200 hover:bg-[#f1f9fc] transition"
                    >
                      <TableCell className="p-4 sm:p-5 text-center font-semibold text-sm sm:text-base lg:text-lg text-black whitespace-nowrap">
                        {row.feature}
                      </TableCell>
                      <TableCell className="p-4 sm:p-5 text-center text-sm sm:text-base lg:text-lg text-black">
                        {row.others}
                      </TableCell>
                      <TableCell className="p-4 sm:p-5 text-center text-sm sm:text-base lg:text-lg text-black font-medium">
                        {row.replyQuick}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* --- 3. Conditional Rendering for Mobile View --- */}
        {/* This component will be VISIBLE on mobile and HIDDEN on medium screens and up (md:hidden) */}
        <div className="w-full md:hidden">
          <DifferenceSection />
        </div>
      </motion.div>
    </section>
  );
};
