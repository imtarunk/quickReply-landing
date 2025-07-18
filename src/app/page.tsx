import React from "react";
import { CallToActionSection } from "./components/sections/CallToActionSection";
import { ClientTestimonialsSection } from "./components/sections/ClientTestimonialsSection";
import { ComparisonSection } from "./components/sections/ComparisonSection";
import { DemoSection } from "./components/sections/DemoSection";
import { FAQSection } from "./components/sections/FAQSection";
import { HeroSection } from "./components/sections/HeroSection";
import { LeadRecoverySection } from "./components/sections/LeadRecoverySection";
import { ServiceBenefitsSection } from "./components/sections/ServiceBenefitsSection";
import { TrustSection } from "./components/sections/TrustSection";
import { ContactSection } from "./components/ContactSection";
import { SendEmailSection } from "./components/sections/sendEmailSection/sendEmailSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      {/* Service Benefits Section */}
      <ServiceBenefitsSection />

      {/* Trust Section with gradient background */}
      <div className="relative w-full max-w-[1246px] mt-[120px] mx-auto">
        <div className="absolute w-[1239px] h-[470px] top-0 left-[7px] rounded-[619.5px/235px] blur-[200px] bg-[linear-gradient(90deg,rgba(200,223,234,1)_36%,rgba(37,139,190,1)_83%)]" />
        <TrustSection />
      </div>

      {/* Call To Action Section */}
      <CallToActionSection />

      {/* Lead Recovery Section */}
      <LeadRecoverySection />

      {/* Hero Section with progress bar */}
      {/* Background and layout */}
      <HeroSection />

      {/* Demo Section */}
      <DemoSection />

      {/* Client Testimonials Section */}
      <ClientTestimonialsSection />

      {/* Pagination or navigation controls */}

      {/* Comparison Section */}
      <ComparisonSection />

      <SendEmailSection />
      {/* FAQ Section */}
      <ContactSection />

      <FAQSection />
    </div>
  );
}
