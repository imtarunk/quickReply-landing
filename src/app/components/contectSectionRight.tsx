import { Send } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";

export const ContectSectionRight = () => {
  return (
    <Card className="rounded-3xl shadow-lg border-gray-100 w-3xl">
      <CardContent className="p-6 sm:p-8">
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" placeholder="Your full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name *</Label>
              <Input id="company" placeholder="Your company" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your current challenges with customer communication..."
              rows={4}
              required
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#4ebff7]  hover:bg-[#3eaae2] text-white font-semibold transform transition-transform duration-300 hover:scale-[1.01] cursor-pointer  text-base"
          >
            Send Message
            <Send className="h-4 w-4 ml-2" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
