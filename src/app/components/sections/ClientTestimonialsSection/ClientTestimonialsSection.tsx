"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { allTestimonials } from "../../../../../public/config/data.config";

export function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [progress, setProgress] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onScroll = () => {
      setProgress(api.scrollProgress() * 100);
    };

    api.on("scroll", onScroll);
    api.on("resize", onScroll); // Also update on resize

    // Initial call
    onScroll();

    return () => {
      api.off("scroll", onScroll);
      api.off("resize", onScroll);
    };
  }, [api]);

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Real Results from Real Businesses
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            See how service businesses are transforming missed calls into
            revenue with ReplyQuick
          </p>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {allTestimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full p-1">
                  <div className="h-full bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center">
                    <Image
                      src={testimonial.logo}
                      alt={`${testimonial.name} logo`}
                      width={160}
                      height={64}
                      className="h-16 w-auto mb-8 object-contain"
                    />
                    <blockquote className="italic text-gray-500 mb-8 leading-relaxed flex-grow text-base">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <p className="font-semibold text-sky-400">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation with Progress Bar */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            <CarouselPrevious className="relative -left-0 translate-y-0 bg-white hover:bg-gray-100 border border-gray-200 text-gray-600" />

            <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-sky-400 transition-all duration-200"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <CarouselNext className="relative -right-0 translate-y-0 bg-white hover:bg-gray-100 border border-gray-200 text-gray-600" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
