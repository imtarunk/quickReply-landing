import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../../ui/card";

export const CallToActionSection = (): React.JSX.Element => {
  // Feature data for mapping
  const features = [
    {
      icon: "/vector-2.svg",
      iconWidth: "w-[26px]",
      iconHeight: "h-[15px]",
      iconPosition: "top-2 left-[3px]",
      title: "Instant Lead Rescue",
    },
    {
      icon: "/vector-1.svg",
      iconWidth: "w-[21px]",
      iconHeight: "h-[30px]",
      iconPosition: "top-0 left-[5px]",
      title: "24/7 Call Handling",
    },
    {
      icon: [
        {
          src: "/vector.svg",
          width: "w-[18px]",
          height: "h-[18px]",
          position: "top-[5px] left-[7px]",
        },
        {
          src: "/vector-5.svg",
          width: "w-8",
          height: "h-7",
          position: "top-0 left-0",
        },
        {
          src: "/vector-11.svg",
          width: "w-1.5",
          height: "h-1.5",
          position: "top-[11px] left-[13px]",
        },
      ],
      isComplex: true,
      title: "Seamless Integration",
    },
    {
      icon: "/vector-4.svg",
      iconWidth: "w-[19px]",
      iconHeight: "h-6",
      iconPosition: "top-1 left-[7px]",
      title: "Enterprise Security",
    },
    {
      icon: "/vector-10.svg",
      iconWidth: "w-[25px]",
      iconHeight: "h-[25px]",
      iconPosition: "top-1 left-1",
      title: "Real-Time Analytics",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1029px] items-center gap-[79px] mx-auto py-12">
      <div className="flex flex-col items-center gap-12 w-full">
        <h2 className="font-['Inter',Helvetica] font-extrabold text-black text-[50px] text-center tracking-[0] leading-normal">
          Why Service Businesses Trust ReplyQuick
        </h2>

        <p className="max-w-[949px] font-['Inter',Helvetica] font-medium text-black text-[25px] text-center tracking-[0] leading-8">
          Everything you need to capture leads and convert them into loyal
          clients
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[106px] w-full">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="w-[191px] border-none bg-transparent shadow-none"
          >
            <CardContent className="flex flex-col items-center gap-3 p-0">
              <div className="flex w-[67.32px] h-[68px] items-center justify-center p-[5.44px] bg-[#4ebff7] rounded-[10.2px]">
                {feature.isComplex ? (
                  <div className="relative w-8 h-8 overflow-hidden">
                    <div className="relative h-7 top-0.5">
                      {feature.icon.map((iconPart, idx) => (
                        <Image
                          key={idx}
                          className={`absolute ${iconPart.width} ${iconPart.height} ${iconPart.position}`}
                          alt="Vector"
                          src={iconPart.src}
                          width={
                            iconPart.width.includes("18px")
                              ? 18
                              : iconPart.width.includes("8")
                              ? 32
                              : 6
                          }
                          height={
                            iconPart.height.includes("18px")
                              ? 18
                              : iconPart.height.includes("7")
                              ? 28
                              : 6
                          }
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="relative w-8 h-8">
                    <Image
                      className={`absolute ${feature.iconWidth} ${feature.iconHeight} ${feature.iconPosition}`}
                      alt="Vector"
                      src={feature.icon as string}
                      width={
                        feature.iconWidth?.includes("26px")
                          ? 26
                          : feature.iconWidth?.includes("21px")
                          ? 21
                          : feature.iconWidth?.includes("19px")
                          ? 19
                          : 25
                      }
                      height={
                        feature.iconHeight?.includes("15px")
                          ? 15
                          : feature.iconHeight?.includes("30px")
                          ? 30
                          : feature.iconHeight?.includes("6")
                          ? 24
                          : 25
                      }
                    />
                  </div>
                )}
              </div>

              <div className="font-['Inter',Helvetica] font-medium text-black text-xl text-center tracking-[0] leading-normal whitespace-nowrap">
                {feature.title}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
