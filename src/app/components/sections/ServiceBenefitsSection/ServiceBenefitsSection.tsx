"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../../ui/button";

export const ServiceBenefitsSection = () => {
  // Navigation items data - updated with anchor links
  const navItems = [
    {
      label: "Key Features",
      href: "#key-features"
    },
    {
      label: "How it works",
      href: "#how-it-works"
    },
    {
      label: "FAQ",
      href: "#faq"
    },
    {
      label: "Policies",
      href: "#policies"
    },
  ];

  // Smooth scroll function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  

  return (
    <header className=" z-100 w-full h-[72px] bg-white shadow-[0px_0px_22px_#4ebff740] backdrop-blur-[8.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8.5px)_brightness(100%)] flex items-center justify-between lg:px-20 md:px-10 sm:px-4">
      {/* Logo */}
      <Image
        className="w-[79px] h-[46px] object-cover rounded-lg "
        alt="Logo"
        src="/image-1.png"
        width={79}
        height={46}
      />

      {/* Navigation Links */}
      <nav className="flex items-center justify-between w-[480px]">
        {navItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="md:gap-1 lg:gap-2 font-medium text-black text-base font-sans hover:text-gray-600 transition-colors cursor-pointer"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <Button className="bg-[#4ebff7] hover:bg-[#3da8e0] text-white font-semibold px-5 py-2.5 rounded-lg">
        Get Started
      </Button>
    </header>
  );
};
