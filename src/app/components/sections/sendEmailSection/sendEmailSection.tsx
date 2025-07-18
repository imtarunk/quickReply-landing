import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, ArrowRight, Mail } from "lucide-react";

export function SendEmailSection() {
  return (
    <section className="w-full  flex items-center justify-center py-20 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-2xl w-full flex flex-col items-center text-center gap-4">
        {/* Top "Live Demo" Pill Button */}
        <div className="h-6"></div>
        <Button
          variant="outline"
          className="rounded-full border-[#4ebff7] text-[#4ebff7] hover:bg-[#4ebff7]/10 hover:text-[#4ebff7]"
        >
          <Phone className="h-4 w-4 mr-2" />
          Live Demo
        </Button>

        {/* Main Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 whitespace-nowrap">
          Experience <span className="text-[#4ebff7]">ReplyQuick</span>{" "}
          instantly
        </h1>

        {/* Description Text */}
        <p className="text-gray-600 text-lg max-w-xl">
          Enter your email to see how ReplyQuick turns missed calls into paying
          clients—no setup changes needed.
        </p>
        {/* Form Area */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 w-full max-w-md">
          {/* Phone Input with Icon */}
          <div className="relative w-full">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#4ebff7]" />
            <Input
              type="email"
              placeholder="Email address"
              className="h-14 pl-12 text-base rounded-lg border-gray-300 focus:border-[#4ebff7] focus:ring-1 focus:ring-offset-0 focus:ring-[#4ebff7]"
            />
          </div>

          {/* Call to Action Button */}
          <Button
            size="lg"
            className="w-full sm:w-auto h-14 bg-[#4ebff7] hover:bg-[#4ebff7]/90 cursor-pointer text-white font-semibold text-base px-6"
          >
            Send Email
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-3">
          We&apos;ll send you within 30 seconds. The call is free.
        </p>
        <div className="h-6"></div>
      </div>
    </section>
  );
}
