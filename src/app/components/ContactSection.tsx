"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#4EBFF7] py-24 sm:py-32">
      {/* The main container for all content, centered with a max-width */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading Section - Unchanged as requested */}
        <div className="mb-12 text-center text-white">
          <h2 className="text-4xl font-black sm:text-5xl">
            Let&apos;s Start Recovering Your Missed Leads
          </h2>
          <p className="mt-4 text-lg text-white/90">
            We&apos;ll show you exactly how much revenue you&apos;re leaving on
            the table.
          </p>
        </div>

        {/* Form Container - Now centered and with a medium width */}
        <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-2xl sm:p-12">
          <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your current challenges with customer communication..."
                className="min-h-[120px]"
                required
              />
            </div>
            <div className="text-center md:col-span-2">
              <Button
                type="submit"
                size="lg"
                className="shimmer-effect w-full bg-gradient-to-r from-[#4EBFF7] to-[#35A3E8] text-white transition-all duration-300 hover:saturate-150 sm:w-auto hover:cursor-pointer"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
