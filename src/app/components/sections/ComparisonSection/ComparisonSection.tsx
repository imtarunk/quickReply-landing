import { ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Button } from "../../ui/button";

export const ComparisonSection = () => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What happens when a lead doesn't respond?",
      answer: "",
    },
    {
      question: "How does Replyquick get more sales?",
      answer: "",
    },
    {
      question: "Is Replyquick's AI messaging personalized?",
      answer: "",
    },
    {
      question: "What happens if a lead doesn't respond?",
      answer: "",
    },
    {
      question: "How secure is my data with ReplyQuick?",
      answer: "",
    },
    {
      question: "How does ReplyQuick schedule meetings automatically?",
      answer: "",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1200px] mx-auto items-center justify-center gap-20 py-[37px]">
      <div className="flex flex-col items-center gap-6 w-full">
        <h2 className="font-bold text-6xl text-center text-black [font-family:'Inter',Helvetica]">
          Frequently Asked Questions
        </h2>

        <p className="w-full max-w-[949px] font-medium text-[25px] text-center text-black leading-8 [font-family:'Inter',Helvetica]">
          Everything you want to know about ReplyQuick&apos;s lead recovery
          system.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={`faq-${index}`}
            value={`item-${index}`}
            className="mb-10 last:mb-0"
          >
            <div className="bg-white rounded-[25px] border border-solid border-[#b4b4b480] shadow-[0px_4px_4px_#0000001a] overflow-hidden">
              <AccordionTrigger className="px-11 py-[29px] hover:no-underline">
                <span className="font-medium text-3xl text-black [font-family:'Inter',Helvetica] text-left">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-11 pb-6">
                {item.answer || "Content for this FAQ item will be provided."}
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-extrabold text-6xl text-center text-black [font-family:'Inter',Helvetica]">
        Still not sure yet? Book a Demo!
      </h3>

      <Button className="w-[265px] h-[63px] bg-[#2a8fc1] rounded-[30px] font-semibold text-base [font-family:'Inter',Helvetica]">
        Book a Demo
        <ChevronRightIcon className="ml-2 h-6 w-6 rotate-90" />
      </Button>
    </section>
  );
};
