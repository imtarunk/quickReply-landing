"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
import { cn } from "../../lib/utils"; // Assumes you have a cn utility for merging classes

// Define props including a 'variant' for different styles
interface CtaButtonProps extends React.ComponentProps<typeof Button> {
  variant?: "default" | "secondary";
  children: React.ReactNode;
}

export const CtaButton = ({
  variant = "default",
  children,
  className,
  ...props
}: CtaButtonProps) => {
  const baseStyles =
    "w-full sm:w-60 h-14 rounded-xl text-base font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    default: "bg-sky-500 hover:bg-sky-600 text-white focus:ring-sky-500",
    secondary:
      "bg-slate-900 hover:bg-slate-800 text-white focus:ring-slate-900",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Button
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};
