"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "How does ReplyQuick improve our customer experience?",
    answer:
      "ReplyQuick follows up with missed calls in seconds, so customers get fast answers instead of voicemail or silence. That means better service, less frustration, and more business for you, without adding to your team’s workload.",
  },
  {
    question: "How fast can we get ReplyQuick running?",
    answer:
      "Most businesses are live within 48–72 hours. No downtime, no disruption, we handle the full setup while you keep running like normal.",
  },
  {
    question: "Will this disrupt our current phone or system setup?",
    answer:
      "Not at all. ReplyQuick works alongside your existing phone system. Your team keeps doing their job, we just handle the missed calls you don’t have time for.",
  },
  {
    question: "What’s the real cost savings?",
    answer:
      "ReplyQuick costs far less than hiring staff and works 24/7. Most businesses save 60–80% on missed call losses and avoid paying for extra phone support or after-hours coverage.",
  },
  {
    question: "How secure is our customer data?",
    answer:
      "We use bank-level encryption to protect every message and call. No data is shared or sold, your customers’ privacy is fully protected, always.",
  },
  {
    question: "What happens when a customer needs human help?",
    answer:
      "We instantly pass the conversation to your team with full context. Your staff sees the full history and can jump in without missing a beat, no repeating, no confusion.",
  },
  {
    question: "What kind of insights and analytics will we get?",
    answer:
      "You’ll see when calls come in, which ones turn into leads, and where you’re losing opportunities. All data is organized in a simple dashboard to help you improve follow-up and conversions.",
  },
  {
    question: "Can ReplyQuick collect payments and schedule appointments?",
    answer:
      "Yes. We can trigger payment links through your CRM or invoicing tools and fully book appointments using your connected calendar or system, all automated.",
  },
  {
    question: "Can ReplyQuick make outbound calls too?",
    answer:
      "Yes. We can run outbound campaigns to follow up with leads, re-engage past customers, or confirm appointments. Just let us know and we’ll activate it for you.",
  },
  {
    question: "Can I manage multiple businesses with ReplyQuick?",
    answer:
      "Absolutely. You can manage multiple brands under one account, each with its own scripts, settings, and messaging, all easily organized in one dashboard.",
  },
];


interface FAQSectionProps {
  id?: string;
}
export const ComparisonSection = ({ id }: FAQSectionProps) => {
  return (
    <section id={id} className="flex flex-col w-full max-w-[1200px] mx-auto items-center justify-center gap-20 py-[37px] px-4">
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
              className="mb-0 border-none"
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
    </section>
  );
};
