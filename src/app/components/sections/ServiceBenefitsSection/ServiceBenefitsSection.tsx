"use client";
import React, { useState } from "react"; // Import useState
import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";
import { navItems } from "../../../../../public/config/data.config";

export const ServiceBenefitsSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative z-100 w-full h-[72px] bg-white shadow-[0px_0px_22px_#4ebff740] backdrop-blur-[8.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8.5px)_brightness(100%)] flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Logo */}
      <Link href="/" className="inline-block z-20">
        {" "}
        {/* Higher z-index for logo */}
        <Image
          className="w-[79px] h-[46px] object-cover rounded-lg"
          alt="Logo"
          src="/logo.png"
          width={79}
          height={46}
        />
      </Link>

      {/* Navigation Links - Hidden on small screens, shown on medium and up */}
      <nav className="hidden md:flex items-center justify-between gap-x-6 lg:gap-x-10">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-medium text-black text-base font-sans hover:text-gray-600 transition-colors whitespace-nowrap"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* CTA Button - Always visible, adjust size for mobile */}
      <Button className="bg-[#4ebff7] hover:bg-[#3da8e0] text-white font-semibold px-4 py-2 rounded-lg hover:cursor-pointer text-sm sm:px-5 sm:py-2.5 sm:text-base hidden md:block">
        {/* Hide on mobile, show on md and up */}
        Get Started
      </Button>

      {/* Mobile Menu Button (Hamburger Icon) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            // Close icon (X)
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu (Conditional Rendering) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col items-center space-y-4 animate-slideInDown z-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-black text-lg hover:text-gray-600 transition-colors w-full text-center py-2"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              {item.label}
            </a>
          ))}
          <Button
            className="bg-[#4ebff7] hover:bg-[#3da8e0] text-white font-semibold px-6 py-3 rounded-lg hover:cursor-pointer text-base w-full mt-4"
            onClick={toggleMobileMenu} // Close menu on button click
          >
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
};
