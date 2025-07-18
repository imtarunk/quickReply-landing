"use client";

import { ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Button } from "../../ui/button";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "What happens when a lead doesn't respond?",
    answer:
      "What happens when a lead doesn't respond What happens when a lead doesn't respond What happens when a lead doesn't respond",
  },
  { question: "How does Replyquick get more sales?", answer: "" },
  { question: "Is Replyquick's AI messaging personalized?", answer: "" },
  { question: "What happens if a lead doesn't respond?", answer: "" },
  { question: "How secure is my data with ReplyQuick?", answer: "" },
  {
    question: "How does ReplyQuick schedule meetings automatically?",
    answer: "",
  },
];

export const ComparisonSection = () => {
  return (
    <section className="flex flex-col w-full max-w-[1200px] mx-auto items-center justify-center gap-20 py-[37px] px-4">
      <div className="h-4" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6 w-full"
      >
        <h2 className="font-bold text-6xl text-center text-black [font-family:'Inter',Helvetica]">
          Frequently Asked Questions
        </h2>

        <p className="w-full max-w-[949px] font-medium text-[25px] text-center text-black leading-8 [font-family:'Inter',Helvetica]">
          Everything you want to know about ReplyQuick&apos;s lead recovery
          system.
        </p>
      </motion.div>

      <Accordion type="single" collapsible className="w-full space-y-6">
        {faqItems.map((item, index) => (
          <motion.div
            key={`faq-motion-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <AccordionItem
              key={`faq-${index}`}
              value={`item-${index}`}
              className="mb-0"
            >
              <div className="bg-white rounded-[25px] border border-solid border-[#b4b4b480] shadow-[0px_4px_4px_#0000001a] overflow-hidden">
                <AccordionTrigger className="px-11 py-[29px] hover:no-underline">
                  <span className="font-medium text-3xl text-black [font-family:'Inter',Helvetica] text-left">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-11 pb-6 text-lg text-gray-600">
                  {item.answer || "Content for this FAQ item will be provided."}
                </AccordionContent>
              </div>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-extrabold text-6xl text-center text-black [font-family:'Inter',Helvetica]"
      >
        Still not sure yet? Book a Demo!
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Button className="w-[265px] h-[63px] bg-[#2a8fc1] hover:bg-[#237aa5] transition-colors duration-300 rounded-[30px] font-semibold text-base text-white font-inter flex items-center justify-center cursor-pointer">
          Book a Demo
          <ChevronRightIcon className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </section>
  );
};
