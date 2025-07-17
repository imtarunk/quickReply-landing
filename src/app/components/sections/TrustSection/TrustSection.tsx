import React from "react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";

export const TrustSection = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row gap-8 py-12">
      <div className="flex-1">
        <h1 className="font-extrabold text-5xl md:text-[65px] leading-tight mb-8 font-sans text-black">
          Lead Recovery Infrastructure for Service Businesses
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

      <div className="flex-1 relative min-h-[417px]">
        <Card className="absolute w-[505px] h-[364px] top-0 right-0 bg-[#e9e4e4] rounded-none border-none" />
        <Card className="absolute w-[184px] h-[349px] top-[68px] left-0 bg-[#edebeb] rounded-[10px] border-none" />
      </div>
    </section>
  );
};
