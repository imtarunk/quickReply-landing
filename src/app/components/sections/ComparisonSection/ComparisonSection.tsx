"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { motion } from "framer-motion";
import { faqItems } from "../../../../../public/config/data.config";

interface ComparisonSection {
  id?: string;
}

export const ComparisonSection = ({ id }: ComparisonSection) => {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqItems : faqItems.slice(0, 6);

  return (
    <section
      id={id}
      className="flex w-full max-w-5xl mx-auto flex-col items-center justify-center gap-12 py-16 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4 w-full"
      >
        <h2 className="font-bold text-4xl md:text-5xl text-center text-black">
          Frequently Asked Questions
        </h2>
        <p className="w-full max-w-3xl font-medium text-lg text-center text-gray-700 leading-relaxed">
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
              <AccordionTrigger className="px-6 py-5 hover:no-underline text-left">
                <span className="font-medium text-lg text-black">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-base text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>

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
