import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MessageSquareIcon,
  PhoneIcon,
  YoutubeIcon,
} from "lucide-react";

import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaReddit, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


import React from "react";

export const FAQSection = () => {
  // Navigation links data
  const exploreLinks = [
    "Home",
    "How it works",
    "Case Studies",
    "FAQ",
    "Policies",
  ];

  // Social media data with icons
  const socialMedia = [
    { name: "Linkedin", icon: <FaLinkedin className="h-4 w-4" /> },
    { name: "Instagram", icon: <FaInstagram className="h-4 w-4" /> },
    { name: "Facebook", icon: <FaFacebook className="h-4 w-4" /> },
    { name: "Youtube", icon: <FaYoutube className="h-4 w-4 mt-0.5" /> },
    { name: "Reddit", icon: <FaReddit className="h-4 w-4" /> },
  ];

  // Contact information data
  const contactInfo = [
    {
      info: "sales@replyquick.ai",
      icon: <IoMdMail className="h-[18px] w-[18px]" />,
    },
    {
      info: "+1 941-271-7374",
      icon: <FaPhoneAlt className="h-[18px] w-[18px]" />,
    },
  ];

  return (
    <div className="w-full bg-white py-12">
      <footer className="bg-[#2a8fc1] rounded-xl shadow-md px-6 py-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start lg:gap-50 md:gap-24 gap-20">
          {/* Explore */}
          <div className="flex flex-col items-start gap-[22px]">
            <h3 className="font-bold text-white text-sm">Explore</h3>
            <nav className="flex flex-col items-start gap-[9px]">
              {exploreLinks.map((link, index) => (
                <a
                  key={`explore-${index}`}
                  href="#"
                  className="text-white text-sm hover:underline"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-start gap-[22px]">
            <h3 className="font-bold text-white text-sm">Social Media</h3>
            <div className="flex flex-col items-start gap-[9px]">
              {socialMedia.map((social, index) => (
                <a
                  key={`social-${index}`}
                  href="#"
                  className="inline-flex items-center gap-2 text-white text-sm hover:underline"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    {social.icon}
                  </div>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start gap-[22px]">
            <h3 className="font-bold text-white text-sm">Contact</h3>
            <div className="flex flex-col items-start gap-[9px]">
              {contactInfo.map((contact, index) => (
                <div
                  key={`contact-${index}`}
                  className="inline-flex items-center gap-2 text-white text-sm"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    {contact.icon}
                  </div>
                  <span>{contact.info}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-white text-sm">
          Copyright: ReplyQuick AI 2025
        </div>
      </footer>
    </div>
  );
};
