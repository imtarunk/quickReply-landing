"use client";

import React, { useRef, useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { ProgressBar } from "@/app/components/ui/ProgressBar"; // Assuming this is your progress bar component
import Image from "next/image"; // Using Next.js Image for optimization
import frame121 from "../../../../../public/Frame-121.png"
import pic4 from "../../../../../public/pic4.png"
import ScrollingImages from "../../ui/ScrollingImages";
import ProfileGrid from "../../ui/ProfileGrid";
interface HeroSectionProps {
  id?: string;
}

export const HeroSection = ({ id }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "1",
      title: "Missed call happens",
      description: "Customer calls and no one picks up.",
    },
    {
      number: "2",
      title: "ReplyQuick Activates Instantly",
      description:
        "An immediate response is triggered, keeping the conversation alive.",
    },
    {
      number: "3",
      title: "Lead is Qualified and Booked",
      description: "From missed call to booked client in minutes.",
    },
  ];

  return (
    // Responsive: Adjusted vertical padding for mobile
    <section id={id} className="w-full py-16 lg:py-20 flex justify-center">
      <div
        ref={sectionRef}
        // Responsive: The core of the responsive behavior. Stacks vertically on mobile, row on large screens.
        // Adjusted gap for better spacing on smaller screens.
        className="relative max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16"
      >
        {/* --- Left side (Graphic) --- */}
        {/* Responsive: Uses max-width and aspect-ratio for fluid sizing */}
        <div className="flex items-center justify-center relative w-full max-w-md lg:max-w-[450px] lg:w-full h-auto aspect-[450/572] rounded-[19px] bg-[#97DBFF] shadow-xl p-2 sm:p-4">
          <div className="w-[90%] h-[90%] rounded-[19px] bg-white/90 shadow-2xl flex items-center justify-center overflow-hidden">
            {/* Main Image */}
            {/* <img src={frame121.src} alt="Phone showing a calling photo" /> */}
            {activeStep === 0 && (
              <Image
                style={{ marginLeft: '12%', marginBottom: '11%' }}
                src={frame121}
                alt="Step 1 - Missed call"
                className="w-[80%] h-[95%]"
                priority
              />
            )}
            {activeStep === 1 && (
              <ScrollingImages />
            )}
            {activeStep === 2 && (
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center gap-2">
                  <strong className="text-base font-bold">
                    LEADS CLOSED AND BOOKED
                  </strong>
                  <Image src={pic4.src} width={30} height={30} alt="" />
                </div>

                <ProfileGrid />
              </div>

            )}
          </div>
        </div>


        {/* --- Progress Bar --- */}
        {/* This component's own implementation needs to be responsive. */}
        {/* Its placement here is correct for both layouts: */}
        {/* - Mobile (flex-col): It sits between the graphic and the steps. */}
        {/* - Desktop (lg:flex-row): It sits between the two columns. */}
        <ProgressBar targetRef={sectionRef} />

        {/* --- Right side (Steps) --- */}
        {/* Responsive: flex-grow allows it to take available space */}
        <div className="relative flex flex-col w-full lg:max-w-[582px] gap-6 z-10">
          {/* Responsive: Centered on mobile, left-aligned on desktop */}
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center lg:text-left leading-tight">
            How ReplyQuick Recovers Leads for Service Businesses
          </h2>

          {/* Responsive: Using space-y for consistent vertical spacing */}
          <div className="flex flex-col space-y-5">
            {steps.map((step, index) => (
              <Card
                key={`step-${index}`}
                className={`w-full rounded-[15px] transition-all duration-300 cursor-pointer ${activeStep === index ? "bg-blue-100/70 scale-[1.01]" : "hover:bg-blue-100/50"
                  } shadow-lg border-none`}
                onClick={() => setActiveStep(index)}
              >
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-9 h-9 bg-[#258bbe] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bold text-black">
                        {step.title}
                      </h3>
                      <p className="text-base text-black/80 mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
