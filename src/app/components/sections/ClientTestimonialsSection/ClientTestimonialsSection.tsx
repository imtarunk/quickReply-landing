import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../../ui/card";

export const ClientTestimonialsSection = () => {
  const testimonials = [
    {
      text: "Before ReplyQuick, we were missing tons of calls during jobs and after hours...",
      company: "Airflow Conditioning",
      image: "/ellipse-1.png",
    },
    {
      text: "ReplyQuick has completely changed how we handle incoming leads...",
      company: "Arctic Mechanical",
      image: "/ellipse-1-1.png",
    },
    {
      text: "Game changer! ReplyQuick saves us time and boosts client engagement.",
      company: "HVAC Pros",
      image: "/ellipse-1.png",
    },
    {
      text: "We're booking 30% more appointments monthly thanks to ReplyQuick!",
      company: "CoolTech Services",
      image: "/ellipse-1-1.png",
    },
  ];

  // Duplicate testimonials for seamless looping
  const loopingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-black">
          What Our Clients Say
        </h2>
        <Image
          src="/frame-30.svg"
          alt="Decorative"
          width={160}
          height={20}
          className="mx-auto mt-4"
        />
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-6">
          {loopingTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="min-w-[320px] max-w-[400px] bg-white rounded-2xl shadow-md"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                <p className="text-base text-black leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt="Client"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <span className="font-semibold text-black text-sm">
                    {testimonial.company}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
