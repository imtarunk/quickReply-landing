import React from "react";
import { Card, CardContent } from "../../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Button } from "../../ui/button";
import Image from "next/image";

export const DemoSection = () => {
  const comparisonData = [
    {
      feature: "Lead Follow-Up Speed",
      others: "Manual/ Delayed",
      replyQuick: "Instant,automated",
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

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white flex flex-col items-center">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 flex flex-col items-center gap-12">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-center [font-family:'Inter',Helvetica] bg-gradient-to-r from-black to-[#4ebff7] bg-clip-text text-transparent">
          No Setup Hassle. No Missed Leads. Just More Sales.
        </h2>

        {/* CTA Button */}
        <Button className="flex items-center justify-center gap-2.5 px-6 py-4 bg-[#2a8fc1] rounded-full text-white font-semibold text-base sm:text-lg shadow-md transition hover:opacity-90">
          Book a Demo
          <div className="relative w-6 h-6 -rotate-90">
            <Image
              alt="Vector"
              src="/vector-10.svg"
              width={18}
              height={15}
              className="absolute w-[18px] h-[15px] top-1 left-[3px] rotate-90"
            />
          </div>
        </Button>

        {/* Subheading */}
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-black [font-family:'Inter',Helvetica]">
          How we compare
        </h3>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <Card className="w-full max-w-[1192px] rounded-[20px] sm:rounded-[40px] lg:rounded-[60px] border border-solid border-[#c9c9c9] shadow-[0px_0px_20px_#4ebff740] overflow-hidden">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-none">
                    <TableHead className="py-6 text-center font-medium text-lg sm:text-xl lg:text-2xl text-black">
                      Feature
                    </TableHead>
                    <TableHead className="py-6 text-center font-medium text-lg sm:text-xl lg:text-2xl text-black">
                      Others
                    </TableHead>
                    <TableHead className="py-6 text-center font-medium text-lg sm:text-xl lg:text-2xl text-black">
                      ReplyQuick
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow
                      key={index}
                      className="border-t border-solid border-gray-200"
                    >
                      <TableCell className="py-4 sm:py-6 text-center font-semibold text-base sm:text-lg lg:text-xl text-black">
                        {row.feature}
                      </TableCell>
                      <TableCell className="py-4 sm:py-6 text-center font-normal text-base sm:text-lg lg:text-xl text-black">
                        {row.others}
                      </TableCell>
                      <TableCell className="py-4 sm:py-6 text-center font-normal text-base sm:text-lg lg:text-xl text-black">
                        {row.replyQuick}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
