import React from "react";
import { Card, CardContent } from "../../ui/card";

export const HeroSection = () => {
  const steps = [
    {
      number: "1",
      title: "Missed call happens",
      description: "Customer calls and no one picks up.",
      highlighted: true,
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
    <section className="w-full py-20 flex justify-center">
      <div className="relative max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start justify-between gap-16">
        {/* Left side (Image/Graphic placeholder) */}
        <div className="w-full lg:w-[476px] h-[300px] sm:h-[400px] lg:h-[592px] bg-[#f6f6f6] rounded-[19px] shadow-md flex items-center justify-center text-gray-400 text-xl font-semibold">
          {/* Replace below with actual image or animation */}
          Visual Goes Here
        </div>

        {/* Vertical Progress Divider */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex-col items-center">
          <div className="w-2.5 h-[467px] bg-[#dddddd] rounded-[10px] flex flex-col items-center transition-all duration-500">
            <div className="w-2.5 h-[103px] bg-[#4ebff7] rounded-[10px] transition-all duration-500" />
          </div>
        </div>

        {/* Right side (Steps) */}
        <div className="flex flex-col w-full lg:w-[582px] gap-10 z-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black font-['Inter',Helvetica] text-center lg:text-left leading-snug">
            How ReplyQuick Recovers Leads for Service Businesses
          </h2>

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <Card
                key={`step-${index}`}
                className={`w-full rounded-[15px] overflow-hidden transition-all duration-300 hover:scale-[1.01] ${
                  step.highlighted
                    ? "bg-[#b3def0] shadow-[0px_0px_6px_#258bbe80]"
                    : "bg-[#f2f7fa] shadow-[0px_4px_4px_#72727240]"
                }`}
              >
                <CardContent className="px-5 py-6">
                  <div className="flex items-start gap-5">
                    <div className="w-[37px] h-[37px] bg-[#258bbe] rounded-full flex items-center justify-center shrink-0 text-white font-bold text-lg font-['Inter',Helvetica]">
                      {step.number}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-bold text-black font-['Inter',Helvetica]">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-black font-['Inter',Helvetica]">
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
