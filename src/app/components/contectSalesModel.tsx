"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Phone, ArrowRight, Mail } from "lucide-react";

export function LiveDemoDialog({
  open,
  setOpenAction,
}: {
  open: boolean;
  setOpenAction: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpenAction}>
      <DialogContent
        // Responsive: The default max-width is good. We adjust padding for mobile.
        className="sm:max-w-md p-6 sm:p-8 rounded-2xl"
      >
        {/* The 'X' close button is automatically included by DialogContent */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Live Demo Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-[#4ebff7]">
            <Phone className="h-4 w-4 text-[#3eade4]" />
            Live Demo
          </div>

          {/* Header */}
          {/* Responsive: Adjusted font size for better mobile display */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
            Get a Live Demo of{" "}
            <span className="text-[#4ebff7]">ReplyQuick</span>
          </h2>

          {/* Description */}
          {/* Responsive: Increased font size for better readability */}
          <p className="text-sm text-gray-600">
            Enter your email to see how ReplyQuick turns missed calls into
            paying clients—no setup changes needed.
          </p>

          {/* --- CORE RESPONSIVE IMPROVEMENT: Flexible Sizing --- */}
          {/* Phone Input with Icon */}
          <div className="relative w-full pt-2">
            <Mail className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              id="mail"
              type="email"
              placeholder="Email address"
              // Responsive: Replaced fixed height with padding for flexibility.
              // Added accessible focus ring.
              className="w-full rounded-xl border-gray-300 py-3 pl-11 pr-4 text-base focus-visible:ring-2 focus-visible:ring-[#4ebff7] focus-visible:ring-offset-2"
            />
          </div>

          {/* Call to Action Button */}
          <Button
            type="submit"
            // Responsive: Replaced fixed height with padding.
            className="w-full py-3 text-base bg-[#4ebff7] hover:bg-[#3eaae2] text-white font-semibold transition-transform duration-300 hover:scale-[1.02] cursor-pointer rounded-xl"
          >
            Contact Sales
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
