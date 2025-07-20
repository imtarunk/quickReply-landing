"use client";

import React from "react";
import Image from "next/image";
import { Card } from "../../ui/card";
import { motion } from "framer-motion";
import { testimonials } from "../../../../../public/config/data.config";

// Data updated to match the example in the image

const loopingTestimonials = [...testimonials, ...testimonials];

export const ClientTestimonialsSection = () => {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-extrabold text-black">
          What Our Clients Say
        </h2>
        <Image
          src="/frame-30.svg"
          alt="Decorative underline"
          width={160}
          height={20}
          className="mx-auto mt-4"
        />
      </motion.div>

      <div className="marquee-container">
        <div className="marquee-track flex gap-8 p-4">
          {loopingTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="min-w-[420px] w-[420px] flex-shrink-0 p-12 rounded-2xl bg-white shadow-lg border border-gray-100 flex flex-col hover:cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-10">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.company} logo`}
                  width={160}
                  height={40}
                  className="object-contain h-10 w-auto"
                />
                <blockquote className="text-sm italic text-gray-500 leading-relaxed">
                  {testimonial.text}
                </blockquote>
                <p className="font-semibold text-lg text-[#4EBFF7]">
                  {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
