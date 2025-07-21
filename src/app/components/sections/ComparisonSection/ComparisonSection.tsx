"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion"; // Assuming this is your Shadcn UI import
import { motion } from "framer-motion";
import { faqItems } from "../../../../../public/config/data.config";

interface ComparisonSectionProps {
  id?: string;
}

export const ComparisonSection = ({ id }: ComparisonSectionProps) => {
  const [showAll, setShowAll] = useState(false);

  // No change to logic, it's already perfect
  const visibleFaqs = showAll ? faqItems : faqItems.slice(0, 6);

  return (
    <section
      id={id}
      // Responsive: Reduced vertical padding on mobile
      className="flex w-full max-w-5xl mx-auto flex-col items-center justify-center gap-10 md:gap-12 py-12 md:py-16 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4 w-full text-center"
      >
        {/* This was already responsive, which is great! No changes needed here. */}
        <h2 className="font-bold text-4xl md:text-5xl text-black">
          Frequently Asked Questions
        </h2>
        {/* Responsive: Adjusted font size and line height for better readability on mobile */}
        <p className="w-full max-w-3xl font-medium text-base md:text-lg text-gray-700 leading-normal md:leading-relaxed">
          Everything you want to know about ReplyQuick&apos;s lead recovery
          system.
        </p>
      </motion.div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {visibleFaqs.map((item, index) => (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <AccordionItem
              value={`item-${index}`}
              className="border border-solid border-gray-200/80 bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Responsive: Adjusted padding for smaller screens */}
              <AccordionTrigger className="px-4 py-4 md:px-6 md:py-5 hover:no-underline text-left">
                {/* Responsive: Adjusted font size of the question */}
                <span className="font-medium text-base md:text-lg text-black">
                  {item.question}
                </span>
              </AccordionTrigger>
              {/* Responsive: Adjusted padding and line height for the answer */}
              <AccordionContent className="px-4 pb-4 md:px-6 md:pb-5 text-base text-gray-600 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>

      {/* This button is already responsive and doesn't need changes */}
      {faqItems.length > 6 && (
        <button
          className="mt-6 px-6 py-2 rounded-lg bg-[#4ebff7] text-white font-semibold transition-all duration-200 hover:bg-[#35A3E8] hover:scale-105 hover:shadow-lg hover:cursor-pointer"
          onClick={() => setShowAll((v) => !v)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
};
