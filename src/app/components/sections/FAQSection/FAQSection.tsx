import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MessageSquareIcon,
  PhoneIcon,
  YoutubeIcon,
} from "lucide-react";
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
    { name: "Linkedin", icon: <LinkedinIcon className="h-4 w-4" /> },
    { name: "Instagram", icon: <InstagramIcon className="h-4 w-4" /> },
    { name: "Facebook", icon: <FacebookIcon className="h-4 w-4" /> },
    { name: "Youtube", icon: <YoutubeIcon className="h-4 w-4 mt-0.5" /> },
    { name: "Reddit", icon: <MessageSquareIcon className="h-4 w-4" /> },
  ];

  // Contact information data
  const contactInfo = [
    {
      info: "sales@replyquick.ai",
      icon: (
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-5"
        >
          <path
            d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 2V3.5C17.1 4.2 15.8 5.1 13 7.2C12.1 7.9 10.5 9.2 10 9.2C9.5 9.2 7.9 7.9 7 7.2C4.2 5.1 2.9 4.2 2 3.5V2H18ZM2 14V6.2C2.9 6.9 4.5 8 6.7 9.7C7.8 10.5 9.6 12 10 12C10.4 12 12.2 10.5 13.3 9.7C15.5 8 17.1 6.9 18 6.2V14H2Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      info: "+1 941-271-7374",
      icon: <PhoneIcon className="h-[18px] w-[18px]" />,
    },
  ];

  return (
    <div className="w-full bg-white py-12">
      <footer className="bg-[#2a8fc1] rounded-xl shadow-md px-6 py-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between gap-12">
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
