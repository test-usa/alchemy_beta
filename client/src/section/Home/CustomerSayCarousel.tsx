import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CustomerSayCarousel = () => {
  return (
    <div className="mb-36 ">
      <p className="text-[#6636EE] text-[24px] font-inter font-semibold leading-[31.68px] tracking-[-0.02em] text-center py-5">
        Customer Say
      </p>

      <div className="flex flex-col items-center justify-center bg-white">
        <Carousel opts={{ align: "center" }} className="w-full relative">
          <CarouselContent className="flex items-center justify-center">
            {[0, 1, 2].map((photo, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 p-2 flex justify-center mr-28 "
              >
                <Card
                  className={`transition-transform duration-300 ${
                    index === 1
                      ? "w-[1024.13px] h-[392px] scale-105 bg-[#F5F5F5] " // The middle card (index 1) will be larger
                      : "w-[789px] h-[302px]" // Other cards remain the same size
                  }`}
                >
                  <CardContent>
                    <div className="flex mt-3">
                      <div className="w-[294.65px] h-[328.14px] top-[31.15px] left-[50.62px] gap-[225.85px] ">
                        <div className="w-[294.65px] h-[27px] flex flex-col  ">
                          <div className="w-[294.65px] h-[27px] font-inter font-bold text-[20.77px] leading-[27.41px] tracking-[-1%]">
                            <p>Rhonda Rhodes</p>
                          </div>
                          <div className="w-[294.65px] h-[75.28px] gap-[20.77px] mt-28 mx-auto">
                            <div className="w-[198.6px] h-[62.19px] gap-[5.19px] flex pr-5 justify-center">
                              <div className="flex">
                                <div>
                                  <img
                                    className="w-[75px] h-[75px] rounded-full "
                                    src="https://img.freepik.com/free-photo/young-man-hoodie-showing-namaste-gesture-looking-pleased-front-view_176474-65179.jpg?t=st=1738732240~exp=1738735840~hmac=e1e5f105a619fbaef9b41c0de16c41a831bd78120e2438893e260006a590d518&w=1380"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <div className="">
                                    <p>Rhonda Rhodes</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[506.23px] h-[363.76px] top-[14.12px] left-[502.33px] rounded-[5.19px] p-[31.15px] gap-[12.98px] bg-[#FFFFFF] ">
                        <div className="w-[433.54px] h-[301.46px] gap-[62.3px] ">
                          <p className="mb-16">
                            We offer top-notch fitness services designed to help
                            you reach your goals. From personalized workout
                            plans to expert nutrition guidance, our team is
                            dedicated to your success.
                          </p>
                          <button className="w-[213.46px] h-[69.15px] rounded-[5.19px] pt-[15.58px] pr-[46.73px] pb-[15.58px] pl-[46.73px] gap-[12.98px] bg-[#6636EE] text-white font-bold text-center mb-24">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Controls */}
          <div className="absolute left-1/2 transform -translate-x-1/2 mb-32 flex gap-2 z-10 mx-auto top-[500px]">
            <CarouselPrevious className="bg-[#EDE7FF] text-primary rounded-full p-2 hover:bg-purple-300" />
            <CarouselNext className="bg-[#EDE7FF] text-primary rounded-full p-2 hover:bg-purple-300" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CustomerSayCarousel;
