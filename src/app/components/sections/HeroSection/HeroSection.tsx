'use client';

import React,{useRef} from "react";
import { Card, CardContent } from "../../ui/card";
import recoverLeads from "../../../../../public/recoverLeads.png"
import bell from "../../../../../public/bell.png"
import { motion } from "framer-motion";
import { ProgressBar } from "@/app/components/ui/ProgressBar"

interface props{
  id?:string
}
export const HeroSection = ({id}:props) => {

  const sectionRef=useRef<HTMLDivElement>(null)

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
    <section id={id} className="w-full py-20 flex justify-center">
      <div ref={sectionRef} className="relative max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start justify-between gap-16">
        {/* Left side (Image/Graphic placeholder) */}
        <div style={{
          backgroundColor: "#97DBFF",
          boxShadow: "0px 30px 50px rgba(13, 39, 80, 0.16)",
        }}
          className="bg-[#97DBFF]/50 w-full lg:w-[450px] h-[300px] sm:h-[400px] lg:h-[572px] rounded-[19px] shadow-xl flex items-center justify-center ">
          {/* Replace below with actual image or animation */}
          <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.93)",
            boxShadow: `0px 30px 48px rgba(0, 0, 0, 0.25),0px -30px 48px rgba(255, 255, 255, 0.7)`,
          }}
            className="lg:w-[400px] h-[230px] sm:h-[330px] lg:h-[502px] m-[8%] bg-white rounded-[19px] shadow-2xl flex items-center justify-center ">
            <img src={bell.src} alt="bell" className="h-40 w-40 absolute mr-[14%] mb-[16%]" />
            <img src={recoverLeads.src} alt="recover" className="h-110 " />
          </div>
        </div>

        <ProgressBar targetRef={sectionRef}/>

        {/* Vertical Progress Divider - now takes layout space */}
        


        {/* Right side (Steps) */}
        <div className="relative flex flex-col w-full lg:w-[582px] gap-8 z-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black font-['Inter',Helvetica] text-center lg:text-left leading-snug">
            How ReplyQuick Recovers Leads for Service Businesses
          </h2>


          <div className="flex flex-col gap-15 ">
            {steps.map((step, index) => (
              <Card
                key={`step-${index}`}
                className={` hover:bg-[#B3DFF0] w-full rounded-[15px] overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-lg border-none`}
              >
                <CardContent className="px-5 py-6 ">
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
