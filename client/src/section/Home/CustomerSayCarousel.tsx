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
    <div className="mb-36">
      <p className="text-[#6636EE] text-[24px] font-inter font-semibold leading-[31.68px] tracking-[-0.02em] text-center py-5">
        Customer Say
      </p>

      <div className="flex lg:flex-col items-center justify-center bg-white">
        <Carousel opts={{ align: "center" }} className="w-full relative">
          <CarouselContent className="flex items-center justify-center">
            {[0, 1, 2].map((photo, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 p-2 flex justify-center lg:w-full lg:flex-shrink-0 lg:mr-0 "
              >
                <Card
                  className={`transition-transform duration-300 ${index === 1
                    ? "lg:max-w-[1024.13px] lg:h-[363px] scale-105 bg-[#F5F5F5] lg:flex overflow-hidden"
                    : "lg:w-[795px] lg:h-[302px] overflow-hidden"
                    }`}
                >
                  <CardContent>
                    <div className="flex flex-col lg:flex-row  relative">
                      <div
                        className={`${index === 1
                          ? "w-[294.65px] h-[328.14px] flex flex-col gap-48 lg:w-[35%]"
                          : "w-[260px] h-[253px] mt-6 ml-10 gap-[150px] flex flex-col lg:w-[35%]"
                          }`}
                      >
                        <div
                          className={`${index === 1
                            ? "w-[294.65px] h-[27px] flex flex-col gap-48 p-5 "
                            : "w-[294.65px] h-[21px]"
                            }`}
                        >


                          <div className="w-[294.65px] h-[27px] font-inter font-bold text-[20.77px] leading-[27.41px] tracking-[-1%]">
                            <p>Rhonda Rhodes</p>
                          </div>

                        </div>
                        <div className="w-[294.65px] h-[75.28px] gap-[20.77px] mx-auto">
                          <div className="w-full h-[62.19px] gap-[5.19px] flex pr-5 justify-center">
                            <div
                              className={`${index === 1
                                ? "w-[294.65px] h-[75px] flex gap-2"
                                : "w-[260.65px] h-[58px] flex gap-2"
                                }`}
                            >
                              <div className="w-[150.81px] h-[150.81px] top-[80.95px] left-[-102.54px] border-[14.97px] absolute rounded-full border-[#8155FF] ">

                              </div>


                              <div>
                                <img
                                  className="w-[75px] h-[75px] rounded-full"
                                  src="https://img.freepik.com/free-photo/young-man-hoodie-showing-namaste-gesture-looking-pleased-front-view_176474-65179.jpg?t=st=1738732240~exp=1738735840~hmac=e1e5f105a619fbaef9b41c0de16c41a831bd78120e2438893e260006a590d518&w=1380"
                                />
                              </div>
                              <div className="flex flex-col ">

                                <div className="w-full">
                                  <p>Rhonda Rhodes</p>
                                </div>


                                <div className="font-inter font-normal text-[18.17px] leading-[29.8px]">
                                  <h1>Founder, Pacific Stereo</h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:w-[506.23px] lg:h-[363.76px] top-[14.12px] lg:left-[502.33px] rounded-[5.19px] lg:p-[31.15px] lg:gap-[12.98px]">
                        <div className="lg:w-[433.54px] lg:h-[250.46px] gap-[62.3px] bg-[#FFFFFF] p-3">
                          <div className="flex flex-col gap-10 text-center">
                            <p>
                              We offer top-notch fitness services designed to help
                              you reach your goals. From personalized workout
                              plans to expert nutrition guidance, our team is
                              dedicated to your success.
                            </p>
                            <button className="w-[213.46px] h-[69.15px] rounded-[5.19px] pt-[15.58px] pr-[46.73px] pb-[15.58px] pl-[46.73px] gap-[12.98px] bg-[#6636EE] text-white font-bold text-center">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Controls */}
          <div className="absolute left-1/2 transform -translate-x-1/2  flex gap-2 z-10 mx-auto lg:top-[500px] lg:top-[420px]">
            <CarouselPrevious className="bg-[#EDE7FF] text-primary rounded-full p-2 hover:bg-purple-300" />
            <CarouselNext className="bg-[#EDE7FF] text-primary rounded-full p-2 hover:bg-purple-300" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CustomerSayCarousel;
