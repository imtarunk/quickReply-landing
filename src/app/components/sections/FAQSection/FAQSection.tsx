"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "How it works", href: "/#how-it-works" },
  { name: "Case Studies", href: "/#case-studies" },
  { name: "FAQ", href: "/#faq-section" },
  { name: "Policies", href: "/privacy-policy/disclaimer" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/", target: "_blank" },
  { icon: Instagram, href: "https://www.instagram.com/", target: "_blank" },
  { icon: Facebook, href: "https://www.facebook.com/", target: "_blank" },
  { icon: Youtube, href: "https://www.youtube.com/", target: "_blank" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#4EBFF7] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Tagline */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png" // Make sure this path is correct
                alt="ReplyQuick Logo"
                width={60}
                height={60}
              />
            </Link>
            <p className="text-sm text-white/80 max-w-xs">
              Transforming missed calls into qualified leads for service
              businesses nationwide.
            </p>
          </div>

          {/* Spacer for layout */}
          <div className="hidden md:block"></div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            {/* Explore Links */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Explore
              </h3>
              <ul className="mt-4 space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-white/80 transition hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Contact Us
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:sales@replyquick.ai"
                    className="text-base text-white/80 transition hover:text-white"
                  >
                    sales@replyquick.ai
                  </a>
                </li>
                <li>
                  <a
                    href="tel:941-271-7374"
                    className="text-base text-white/80 transition hover:text-white"
                  >
                    941-271-7374
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/20 pt-8 sm:flex-row">
          <p className="text-sm text-white/80">
            &copy; {new Date().getFullYear()} ReplyQuick. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.target}
                rel="noopener noreferrer"
                className="text-white/80 transition hover:text-white"
              >
                <span className="sr-only">{social.icon.displayName}</span>
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
