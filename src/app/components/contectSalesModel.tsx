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
            <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              id="mail"
              type="email"
              autoComplete="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 text-base text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ebff7] focus-visible:ring-offset-2"
            />
          </div>

          {/* Call to Action Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#4EBFF7] to-[#35A3E8] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/50 hover:-translate-y-0.5 hover:saturate-150 shimmer-effect hover:cursor-pointer"
          >
            Contact Sales
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
