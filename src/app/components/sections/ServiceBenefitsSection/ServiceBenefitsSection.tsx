import React from "react";
import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";
import { navItems } from "../../../../../public/config/data.config";

export const ServiceBenefitsSection = () => {
  return (
    <header className=" z-100 w-full h-[72px] bg-white shadow-[0px_0px_22px_#4ebff740] backdrop-blur-[8.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8.5px)_brightness(100%)] flex items-center justify-between lg:px-20 md:px-10 sm:px-4">
      {/* Logo */}
      <Link href="/" className="inline-block">
        <Image
          className="w-[79px] h-[46px] object-cover rounded-lg "
          alt="Logo"
          src="/logo.png"
          width={79}
          height={46}
        />
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center justify-between w-[480px]">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="md:gap-1 lg:gap-2 font-medium text-black text-base font-sans hover:text-gray-600 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <Button className="bg-[#4ebff7] hover:bg-[#3da8e0] text-white font-semibold px-5 py-2.5 rounded-lg hover:cursor-pointer">
        Get Started
      </Button>
    </header>
  );
};
