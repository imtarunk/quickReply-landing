"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export function ContactSection() {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    console.log(formData)

    // send form data to your email address
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const result = await res.json()
      console.log(res)
      if (result.success) {
        alert("Email sent successfully!");
        form.reset();
      } else {
        alert("Failed to send email.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }


  }
  return (
    // Responsive: More gradual vertical padding for different screen sizes.
    <section
      id="contact"
      className="w-full bg-[#4EBFF7] py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* --- Heading Section --- */}
        <div className="mb-12 text-center text-white">
          {/* Responsive: Adjusted font size and line height for better mobile readability. */}
          <h2 className="text-3xl font-black sm:text-4xl md:text-5xl leading-tight sm:leading-snug">
            Let&apos;s Start Recovering Your Missed Leads
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
            We&apos;ll show you exactly how much revenue you&apos;re leaving on
            the table.
          </p>
        </div>

        {/* --- Form Container --- */}
        {/* Responsive: More gradual padding for the form card. */}
        <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 sm:p-8 md:p-12 shadow-2xl">
          {/* This grid layout is already perfectly responsive. No changes needed. */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Name *
              </Label>
              <Input id="name" placeholder="Your full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
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
              <Label htmlFor="company" className="text-sm font-medium">
                Company Name
              </Label>
              <Input id="company" placeholder="Your company" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"

              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your current challenges with customer communication..."
                className="min-h-[120px]"

              />
            </div>
            <div className="text-center md:col-span-2 mt-4">
              {/* This button is also already perfectly responsive. No changes needed. */}
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
