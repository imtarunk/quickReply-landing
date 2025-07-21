"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react"; // Import Plus and Minus icons
import * as React from "react";
import { cn } from "@/lib/utils"; // Make sure this path is correct

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-gray-200", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      // Add 'group' to the trigger to control child icons based on state
      className={cn(
        "group flex flex-1 items-center justify-between py-4 font-medium text-left transition-all hover:no-underline",
        className
      )}
      {...props}
    >
      {children}
      {/* Icon container */}
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#4ebff7] transition-colors duration-200 group-hover:bg-[#3aa8e0]">
        {/* Plus icon is shown when state is 'closed' */}
        <Plus className="h-4 w-4 text-white transition-opacity duration-300 group-data-[state=open]:hidden" />
        {/* Minus icon is shown when state is 'open' */}
        <Minus className="hidden h-4 w-4 text-white transition-opacity duration-300 group-data-[state=open]:block" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm text-gray-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
