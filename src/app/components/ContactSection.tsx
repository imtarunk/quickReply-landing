import { Button } from "@/components/ui/button";

import { MessageSquare } from "lucide-react";
import { ContectSectionRight } from "./contectSectionRight";

export function ContactSection() {
  return (
    <section
      className="w-full bg-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
      id="bookdemosection"
    >
      <div className="h-4"></div>
      <div className="w-full max-w-6xl mx-auto">
        {/* Top "Get in Touch" Button */}
        <div className="text-center mb-6">
          <Button variant="outline" className="rounded-lg" disabled>
            <MessageSquare className="h-4 w-4 mr-2" />
            Get in Touch
          </Button>
        </div>

        {/* Header Text */}
        <div className="text-center mb-12">
          <div className="py-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-black">
              Let&apos;s Start Recovering Your Missed{" "}
              <span style={{ color: "#4ebff7" }}>Leads</span>
            </h1>
            <p className="mt-4 text-lg text-center text-gray-600">
              We&apos;ll show you exactly how much revenue you&apos;re leaving
              on the table.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid place-items-center w-full">
          <ContectSectionRight />
        </div>
      </div>
    </section>
  );
}
