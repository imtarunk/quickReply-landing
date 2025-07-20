"use client";

import React from "react";
import Image from "next/image";
import { Card } from "../../ui/card";
import { motion } from "framer-motion";
import { testimonials } from "../../../../../public/config/data.config";

// Duplicate the array for a seamless looping effect
const loopingTestimonials = [...testimonials, ...testimonials];

export const ClientTestimonialsSection = () => {
  return (
    // Responsive: Adjusted vertical padding for smaller screens
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        // Responsive: Adjusted margin for smaller screens
        className="text-center mb-12 md:mb-16 px-4"
      >
        {/* Responsive: Adjusted font size for different screens */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-black">
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
        {/* Responsive: Adjusted gap for smaller screens */}
        <div className="marquee-track flex gap-6 md:gap-8 p-4">
          {loopingTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              // --- CORE RESPONSIVE CHANGE ---
              // Mobile: Card width is ~300px to fit on screen.
              // Desktop (md+): Card width becomes 420px.
              // Padding is also adjusted for screen size.
              className="min-w-[300px] w-[300px] md:min-w-[420px] md:w-[420px] flex-shrink-0 p-8 md:p-12 rounded-2xl bg-white shadow-lg border border-gray-100 flex flex-col hover:cursor-pointer"
            >
              {/* Responsive: Adjusted vertical spacing within the card */}
              <div className="flex flex-col items-center text-center space-y-6 md:space-y-10">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.company} logo`}
                  width={160}
                  height={40}
                  // Responsive: Adjusted image height for smaller cards
                  className="object-contain h-8 md:h-10 w-auto"
                />
                <blockquote className="text-sm text-gray-500 leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
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
