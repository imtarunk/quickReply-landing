import React from "react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";

export const TrustSection = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row gap-8 px-4 sm:px-6 md:px-8 ">
      <div className="flex-1 ">
        <h1 className="w-99 font-extrabold text-4xl md:text-[65px] leading-tight mb-8 font-sans text-black">
          Lead Recovery Infrastructure <br/>for Service Businesses
        </h1>

        <p className="text-xl font-medium text-black leading-[30px] mb-12 max-w-[541px]">
          Join the growing number of service providers using ReplyQuick to
          instantly follow up on missed calls, recover lost leads, and book
          qualified customers — all without hiring extra staff. Pay only for
          real results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="w-[243px] h-[54px] rounded-[15px] bg-[#4ebff7] hover:bg-[#3eaae2] text-white font-semibold">
            Contact Sales
          </Button>

          <Button className="w-[243px] h-[54px] rounded-[15px] bg-black hover:bg-gray-800 text-white font-semibold border border-solid">
            Book a Demo
          </Button>
        </div>
      </div>

      {/* Right: Overlapping Cards */}
  <div className="flex-1 relative min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[417px]">
    <Card className="absolute w-[85%] sm:w-[85%] md:w-[80%] lg:w-[505px] h-[250px] sm:h-[300px] md:h-[340px] top-0 right-0 bg-[#e9e4e4] rounded-none border-none shadow-md" />
    <Card className="absolute w-[50%] sm:w-[40%] md:w-[35%] lg:w-[184px] h-[230px] sm:h-[300px] md:h-[330px] top-[80px] left-0 bg-[#edebeb] rounded-[10px] border-none shadow-md" />
  </div>

    </section>
  );
};
