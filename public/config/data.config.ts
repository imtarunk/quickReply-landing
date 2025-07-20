import { FeatureData } from "@/app/lib/types/types";

export const testimonials = [
  {
    // Text and image updated to match your example
    text: "Our front desk used to miss calls during busy hours, and we were losing appointments because of it. ReplyQuick now handles that follow-up instantly, and our calendar stays full, without overwhelming the staff.",
    company: "Celine Med Spa",
    image: "/celine-logo.png", // Assumes you have this logo in your public folder
  },
  {
    text: "ReplyQuick has completely changed how we handle incoming leads. The setup was seamless, and the results were immediate. Our customer satisfaction is through the roof.",
    company: "Arctic Mechanical",
    image: "/ellipse-1-1.png",
  },
  {
    text: "This is a game-changer. We save so much time and our client engagement has never been better. The AI handles the initial contact, and our team only jumps in for qualified leads.",
    company: "HVAC Pros",
    image: "/ellipse-1.png",
  },
];

// Navigation items data
export const navItems = [
  {
    index: 1,
    label: "Key Features",
    href: "/#call-to-action",
  },
  {
    index: 2,
    label: "How it works",
    href: "/#how-it-works",
  },
  {
    index: 3,
    label: "FAQ",
    href: "/#faq-section",
  },
];

export const features: FeatureData[] = [
  {
    title: "Instant Lead Rescue",
    icons: [
      { src: "/vector-2.svg", className: "w-[26px] h-[15px] top-2 left-[3px]" },
    ], // Preserved original classes
  },
  {
    title: "24/7 Call Handling",
    icons: [
      { src: "/vector-1.svg", className: "w-[21px] h-[30px] top-0 left-[5px]" },
    ], // Preserved original classes
  },
  {
    title: "Seamless Integration",
    icons: [
      {
        src: "/vector.svg",
        className: "w-[18px] h-[18px] top-[5px] left-[7px]",
      }, // Preserved original classes
      { src: "/vector-5.svg", className: "w-8 h-7 top-0 left-0" }, // Preserved original classes
      {
        src: "/vector-11.svg",
        className: "w-1.5 h-1.5 top-[11px] left-[13px]",
      }, // Preserved original classes
    ],
  },
  {
    title: "Enterprise Security",
    icons: [
      { src: "/vector-4.svg", className: "w-[19px] h-6 top-1 left-[7px]" },
    ], // Preserved original classes
  },
  {
    title: "Real-Time Analytics",
    icons: [
      { src: "/vector-10.svg", className: "w-[25px] h-[25px] top-1 left-1" },
    ], // Preserved original classes
  },
  {
    title: "Appointment Booking",
    icons: [{ src: "/vector-7.svg", className: "w-6 h-6 top-1 left-1" }],
  },
];

export const faqItems = [
  {
    question: "How does ReplyQuick improve our customer experience?",
    answer:
      "ReplyQuick follows up with missed calls in seconds, so customers get fast answers instead of voicemail or silence. That means better service, less frustration, and more business for you, without adding to your team’s workload.",
  },
  {
    question: "How fast can we get ReplyQuick running?",
    answer:
      "Most businesses are live within 48–72 hours. No downtime, no disruption, we handle the full setup while you keep running like normal.",
  },
  {
    question: "Will this disrupt our current phone or system setup?",
    answer:
      "Not at all. ReplyQuick works alongside your existing phone system. Your team keeps doing their job, we just handle the missed calls you don’t have time for.",
  },
  {
    question: "What’s the real cost savings?",
    answer:
      "ReplyQuick costs far less than hiring staff and works 24/7. Most businesses save 60–80% on missed call losses and avoid paying for extra phone support or after-hours coverage.",
  },
  {
    question: "How secure is our customer data?",
    answer:
      "We use bank-level encryption to protect every message and call. No data is shared or sold, your customers’ privacy is fully protected, always.",
  },
  {
    question: "What happens when a customer needs human help?",
    answer:
      "We instantly pass the conversation to your team with full context. Your staff sees the full history and can jump in without missing a beat, no repeating, no confusion.",
  },
  {
    question: "What kind of insights and analytics will we get?",
    answer:
      "You’ll see when calls come in, which ones turn into leads, and where you’re losing opportunities. All data is organized in a simple dashboard to help you improve follow-up and conversions.",
  },
  {
    question: "Can ReplyQuick collect payments and schedule appointments?",
    answer:
      "Yes. We can trigger payment links through your CRM or invoicing tools and fully book appointments using your connected calendar or system, all automated.",
  },
  {
    question: "Can ReplyQuick make outbound calls too?",
    answer:
      "Yes. We can run outbound campaigns to follow up with leads, re-engage past customers, or confirm appointments. Just let us know and we’ll activate it for you.",
  },
  {
    question: "Can I manage multiple businesses with ReplyQuick?",
    answer:
      "Absolutely. You can manage multiple brands under one account, each with its own scripts, settings, and messaging, all easily organized in one dashboard.",
  },
];

export const comparisonData = [
  {
    feature: "Lead Follow-Up Speed",
    others: "Manual/ Delayed",
    replyQuick: "Instant, automated",
  },
  {
    feature: "Missed Call Recovery",
    others: "Missed or lost",
    replyQuick: "Recovered automatically",
  },
  {
    feature: "Operating Hours",
    others: "Limited to staff availability",
    replyQuick: "24/7 lead capture",
  },
  {
    feature: "Staff Requirement",
    others: "Requires live receptionist",
    replyQuick: "Fully automated",
  },
  {
    feature: "Conversion Consistency",
    others: "Inconsistent",
    replyQuick: "Structured + trackable",
  },
  {
    feature: "Lead Tracking & Visibility",
    others: "Scattered notes",
    replyQuick: "Real-time dashboard",
  },
];
