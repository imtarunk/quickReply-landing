"use client";

import { Send } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Label } from "@/components/ui/label"; // Assuming consistent Shadcn UI imports
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";

// Renamed from "ContectSectionRight" to "ContactSectionRight" for correctness
export const ContactSectionRight = () => {
  return (
    // --- CORE RESPONSIVE FIX ---
    // Changed fixed 'w-3xl' to fluid 'w-full' with a 'max-w-3xl'.
    // This allows the card to shrink on smaller screens while capping its width on larger ones.
    <Card className="w-full max-w-3xl rounded-2xl sm:rounded-3xl shadow-lg border-gray-100">
      <CardContent className="p-6 sm:p-8">
        <form className="space-y-6">
          {/* This grid is already perfectly responsive, stacking on mobile and going to 2 columns on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-medium">
                Name *
              </Label>
              <Input id="name" placeholder="Your full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-medium">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="font-medium">
                Company Name *
              </Label>
              <Input id="company" placeholder="Your company" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-medium">
                Phone *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="font-medium">
              Message *
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your current challenges..."
              rows={4}
              required
            />
          </div>
          <Button
            type="submit"
            size="lg"
            // The w-full class is great for mobile, making the button a large, easy tap target.
            className="w-full bg-[#4ebff7] hover:bg-[#3eaae2] text-white font-semibold transition-transform duration-300 hover:scale-[1.01] cursor-pointer text-base"
          >
            Send Message
            <Send className="h-4 w-4 ml-2" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
