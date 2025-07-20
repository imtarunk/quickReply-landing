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

export const DemoSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white flex flex-col items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-screen-xl px-4 sm:px-6 flex flex-col items-center gap-12"
      >
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-center [font-family:'Inter',Helvetica] bg-gradient-to-r from-black to-[#4ebff7] bg-clip-text text-transparent">
          No Setup Hassle. No Missed Leads. Just More Sales.
        </h2>

        {/* CTA Button */}
        <Button className="flex items-center justify-center gap-2.5 px-6 py-6 bg-[#2a8fc1] rounded-full text-white font-semibold text-base sm:text-lg shadow-md transition hover:opacity-90 hover:scale-[1.01] cursor-pointer ">
          Book a Demo
          <div className="relative w-6 h-6 -rotate-90">
            <Image
              alt="Arrow Icon"
              src="/vector-10.svg"
              width={18}
              height={15}
              className="absolute w-[18px] h-[15px] top-1 left-[3px] rotate-90"
            />
          </div>
        </Button>

        {/* Subheading */}
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-black [font-family:'Inter',Helvetica]">
          How we compare
        </h3>

        {/* Comparison Table */}
        <div className="w-full overflow-x-auto">
          <Card className="w-full max-w-[1192px] mx-auto rounded-[20px] sm:rounded-[40px] lg:rounded-[60px] border border-[#c9c9c9] shadow-[0_6px_20px_#4ebff740,0_-6px_20px_#4ebff740] overflow-hidden backdrop-blur">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-none bg-[#f9f9f9]">
                    <TableHead className="py-6 text-center font-medium text-lg sm:text-xl lg:text-2xl text-black">
                      Feature
                    </TableHead>
                    <TableHead className="py-6 text-center font-medium text-lg sm:text-xl lg:text-2xl text-black">
                      Others
                    </TableHead>
                    <TableHead className="py-6 text-center font-medium text-lg sm:text-xl lg:text-2xl text-black">
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
                      <TableCell className="py-4 sm:py-6 text-center font-semibold text-base sm:text-lg lg:text-xl text-black">
                        {row.feature}
                      </TableCell>
                      <TableCell className="py-4 sm:py-6 text-center text-base sm:text-lg lg:text-xl text-black">
                        {row.others}
                      </TableCell>
                      <TableCell className="py-4 sm:py-6 text-center text-base sm:text-lg lg:text-xl text-black font-medium">
                        {row.replyQuick}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};
