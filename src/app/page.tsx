import React from "react";
import { CallToActionSection } from "./components/sections/CallToActionSection";
import { ClientTestimonialsSection } from "./components/sections/ClientTestimonialsSection";
import { ComparisonSection } from "./components/sections/ComparisonSection";
import { DemoSection } from "./components/sections/DemoSection";
import { HeroSection } from "./components/sections/HeroSection";
import { LeadRecoverySection } from "./components/sections/LeadRecoverySection";
import { TrustSection } from "./components/sections/TrustSection";
import { ContactSection } from "./components/ContactSection"; // Make sure this component exists and is imported correctly

export default function Home() {
  return (
    // Use <main> for the primary content of the page for better semantics.
    // overflow-hidden on the main container prevents any stray elements from causing horizontal scroll.
    <main className="flex w-full flex-col items-center bg-white overflow-hidden">
      {/* --- Trust Section with a RESPONSIVE gradient background --- */}
      {/* This section now contains both the content and its decorative background,
          and 'overflow-hidden' clips the large gradient blob. */}
      <section className="relative w-full flex justify-center mt-20 md:mt-24">
        {/* Responsive Gradient Blob */}
        {/* This div creates the soft background effect without breaking the layout. */}
        {/* It's large but is clipped by the parent's overflow-hidden. */}
        <div
          aria-hidden="true" // Decorative element, hidden from screen readers
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-lg h-[40rem] rounded-full bg-[linear-gradient(90deg,rgba(200,223,234,0.8)_36%,rgba(37,139,190,0.5)_83%)] blur-3xl opacity-50"
        />

        {/* The TrustSection content sits on top of the gradient blob. */}
        {/* `position: relative` ensures it has a higher stacking context. */}
        <div className="relative w-full">
          <TrustSection />
        </div>
      </section>

      {/* All other sections are stacked vertically. This is inherently responsive, */}
      {/* assuming each individual component is also built to be responsive. */}

      <CallToActionSection id="call-to-action" />

      <LeadRecoverySection />

      <HeroSection id="how-it-works" />

      <DemoSection />

      <ClientTestimonialsSection />

      <ComparisonSection id="faq-section" />

      <ContactSection />
    </main>
  );
}
