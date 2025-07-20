import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ServiceBenefitsSection as Header } from "./components/sections/ServiceBenefitsSection";
import { Footer } from "./components/sections/FAQSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReplyQuick | Lead Recovery for Service Businesses", // Example of a better title
  description:
    "Never miss a lead again. ReplyQuick instantly follows up on missed calls to qualify and book customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* --- CORE IMPROVEMENT: Flexible layout with flexbox --- */}
      {/* This ensures the footer is pushed to the bottom of the screen on short pages. */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-gray-50 antialiased text-gray-900`}
      >
        {/* Accessibility: Skip link (already well-implemented) */}
        <a
          href="#main-content"
          className="sr-only absolute top-2 left-2 z-[9999] rounded bg-white px-4 py-2 shadow focus:not-sr-only"
        >
          Skip to main content
        </a>

        {/* Use semantic <header> tag */}
        <Header />

        {/* Use semantic <main> tag. `flex-grow` makes it fill available space. */}
        <main id="main-content" className="w-full flex-grow">
          {children}
        </main>

        {/* Use semantic <footer> tag */}
        <Footer />
      </body>
    </html>
  );
}
