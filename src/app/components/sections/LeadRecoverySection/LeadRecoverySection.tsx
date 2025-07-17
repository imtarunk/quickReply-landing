import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const LeadRecoverySection = () => {
  const statistics = [
    {
      value: "3X",
      description: "More Qualified Leads",
    },
    {
      value: "80%",
      description: "Lower Staffing Costs",
    },
    {
      value: "47%",
      description: "Higher Conversion Rates",
    },
    {
      value: "20Hr",
      description: "Hours Saved Weekly",
    },
  ];

  return (
    <Card className="w-full max-w-[1200px] mx-auto my-8 bg-[#f3f8fa] rounded-2xl  sm:mx-6 lg:mx-auto">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-[54px]">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-[30px]"
            >
              <div className="font-['Inter',Helvetica] font-extrabold text-[#258bbe] text-3xl sm:text-4xl lg:text-6xl text-center tracking-[0] leading-normal">
                {stat.value}
              </div>
              <div className="font-['Inter',Helvetica] font-medium text-black text-sm sm:text-base lg:text-xl text-center tracking-[0] leading-normal">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
