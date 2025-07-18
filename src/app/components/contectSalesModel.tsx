import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Phone, ArrowRight, Mail } from "lucide-react";

export function LiveDemoDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Remove DialogTrigger, as the button is now outside */}
      <DialogContent className="sm:max-w-md p-8 rounded-3xl ">
        {/* The 'X' close button is automatically included by DialogContent */}
        <div className="flex flex-col items-center text-center gap-4">
          {/* Live Demo Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-[#4ebff7]">
            <Phone className="h-4 w-4 text-[#3eade4]" />
            Live Demo
          </div>

          {/* Header */}
          <h2 className="text-2xl font-bold text-gray-900">
            Get a Live Demo of{" "}
            <span className="text-[#4ebff7]">ReplyQuick</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-xs">
            Enter your email to see how ReplyQuick turns missed calls into
            paying clients—no setup changes needed.
          </p>

          {/* Phone Input with Icon */}
          <div className="relative w-full mt-2">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              id="mail"
              type="email"
              placeholder="Email address"
              className="h-12 pl-10 text-base rounded-2xl  shadow-[#4ebff7]"
            />
          </div>

          {/* Call to Action Button */}
          <Button
            type="submit"
            className="w-full h-12 text-base bg-[#4ebff7] hover:bg-[#3eaae2] text-white font-semibold transform transition-transform duration-300 hover:scale-[1] cursor-pointer rounded-2xl"
          >
            Contact Sales
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
