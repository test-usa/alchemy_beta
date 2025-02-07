import Breadcrumbs from "@/components/breadcrumbs";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.webp"
import workoutImage from "../assets/workout.jpg";
import WorkoutCard from "@/section/workout/WorkoutCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { CiPhone } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { SlDocs } from "react-icons/sl";
import { FaRegFilePdf } from "react-icons/fa6";
const WorkoutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dummyData = [
    {
      image: image1,
      title: "Transform Your Body with Our Personalized Programs",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      image: image2,
      title: "Boost Your Performance and Achieve Your Goals",
      description: "We offer top-notch fitness services designed to help you reach your goals. From personalized workout plans to expert nutrition guidance, our team is dedicated to your success."
    },
    {
      image: image1,
      title: "Unlock Your Potential with Our Fitness Experts",
      description: "Whether you’re new to fitness or an experienced athlete, our personalized coaching will help you unlock your true potential. Join our community of like-minded individuals."
    }
  ];

  return (
    <div>

      <div className="w-full lg:h-[440px] top-[88px] overflow-hidden">
        <Breadcrumbs bg={workoutImage} title="Articles & tips" />
      </div>

      <div className=" lg:w-full lg:h-full flex gap-5 justify-center mt-10  ">

        {/* left */}
        <div className=" ">
          {/* category */}
          <div className="lg:w-[335px] lg:max-h-[536px] top-[588px] left-[300px] gap-[32px] border pb-5 ">
            <div className="flex flex-col items-center  ">
              <div className="w-[287px] h-[36px] border-b-[1px] gap-[10px] ">
                <div className=" w-[287px] h-[58px]">
                  <p className="font-inter font-semibold text-[20px] leading-[26.4px] tracking-[-2%] text-[#6636EE] ">
                    Category
                  </p>
                </div>

              </div>
              <div className="w-[335px] h-auto max-h-[1178px] top-[588px] left-[300px] gap-[32px] ml-5 ">
                <Accordion type="single" collapsible className="flex flex-col gap-3">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="w-full max-w-[287px] h-auto min-h-[20px] rounded-[4px] border-[1px]  p-[17px] pr-[24px] pb-[17px] bg-[#6636EE]">

                      <div className="flex items-center justify-between w-full rounded-[4px] " onClick={() => setIsOpen(!isOpen)}>
                        <p className="font-inter font-semibold text-[16px] leading-[21.12px] tracking-tight text-white flex items-center gap-28">
                          Body Building   {isOpen ? <FaAngleDown /> : <FaAngleRight />}
                        </p>
                      </div>



                    </AccordionTrigger>
                    <AccordionContent>
                      This is the content for section 1.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="w-full max-w-[287px] h-auto min-h-[20px] rounded-[4px] border-[1px]  p-[17px] pr-[24px] pb-[17px] ">

                      <div
                        className="flex items-center justify-between w-full rounded-[4px] cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <div className="font-inter font-semibold text-[16px] leading-[21.12px] tracking-tight">
                          Fitness
                        </div>
                        <div>{isOpen ? <FaAngleDown /> : <FaAngleRight />}</div>
                      </div>





                    </AccordionTrigger>
                    <AccordionContent>
                      This is the content for section 2.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="w-full max-w-[287px] h-auto min-h-[20px] rounded-[4px] border-[1px]  p-[17px] pr-[24px] pb-[17px] ">

                      <div
                        className="flex items-center justify-between w-full rounded-[4px] cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <div className="font-inter font-semibold text-[16px] leading-[21.12px] tracking-tight">
                          Nutrition
                        </div>
                        <div>{isOpen ? <FaAngleDown /> : <FaAngleRight />}</div>
                      </div>



                    </AccordionTrigger>
                    <AccordionContent>
                      This is the content for section 3.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="w-full max-w-[287px] h-auto min-h-[20px] rounded-[4px] border-[1px]  p-[17px] pr-[24px] pb-[17px] ">

                      <div
                        className="flex items-center justify-between w-full rounded-[4px] cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <div className="font-inter font-semibold text-[16px] leading-[21.12px] tracking-tight">
                          Meditation
                        </div>
                        <div>{isOpen ? <FaAngleDown /> : <FaAngleRight />}</div>
                      </div>



                    </AccordionTrigger>
                    <AccordionContent>
                      This is the content for section 3.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="w-full max-w-[287px] h-auto min-h-[20px] rounded-[4px] border-[1px]  p-[17px] pr-[24px] pb-[17px] ">

                      <div
                        className="flex items-center justify-between w-full rounded-[4px] cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <div className="font-inter font-semibold text-[12px] leading-[21.12px] tracking-tight">
                          Wellness & Recovery
                        </div>
                        <div>{isOpen ? <FaAngleDown /> : <FaAngleRight />}</div>
                      </div>

                    </AccordionTrigger>
                    <AccordionContent>
                      This is the content for section 3.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="w-full max-w-[287px] h-auto min-h-[20px] rounded-[4px] border-[1px]  p-[17px] pr-[24px] pb-[17px] ">
                      <div
                        className="flex items-center justify-between w-full rounded-[4px] cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <div className="font-inter font-semibold text-[12px] leading-[21.12px] tracking-tight">
                          Corporate Wellness
                        </div>
                        <div>{isOpen ? <FaAngleDown /> : <FaAngleRight />}</div>
                      </div>

                    </AccordionTrigger>
                    <AccordionContent>
                      This is the content for section 3.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

          </div>
          {/* contracts */}
          <div className="w-[335px] h-[330px] top-[1782px] left-[300px] rounded-[4px] gap-[10px] border mt-2">
            <div className=" w-full h-full">
              <div className="py-3">
                <p className="font-inter font-semibold text-[20px] leading-[26.4px] tracking-[-2%] text-[#6636EE] ">
                  Contracts
                </p>
              </div>
              <div className="w-[287px] h-[36px]  pb-[10px] gap-[10px] flex mb-8">
                <div className="w-[58px] h-[58px] rounded-[41.08px] p-[13.29px] gap-[12.08px] bg-[#EDE7FF] flex justify-center items-center">
                  <SlEnvolopeLetter />
                </div>
                <div className="w-[124px] h-[54px] gap-[4px]">
                  <div className="w-[124px] h-[24px]">
                    <p className="font-inter font-semibold text-[12px] leading-[23.76px] tracking-[-2%]">
                      Email Address
                    </p>
                    <div className="w-[124px] h-[26px]">
                      info@totalu.com
                    </div>

                  </div>

                </div>

              </div>
              <div className="w-[287px] h-[36px]  pb-[10px] gap-[10px] flex mb-8">
                <div className="w-[58px] h-[58px] rounded-[41.08px] p-[13.29px] gap-[12.08px] bg-[#EDE7FF] flex justify-center items-center">
                  <CiPhone />
                </div>
                <div className="w-[124px] h-[54px] gap-[4px]">
                  <div className="w-[124px] h-[24px]">
                    <p className="font-inter font-semibold text-[12px] leading-[23.76px] tracking-[-2%]">
                      Phone Number
                    </p>
                    <div className="w-[124px] h-[26px]">
                      64388867
                    </div>

                  </div>

                </div>

              </div>
              <div className="w-[287px] h-[36px]  pb-[10px] gap-[10px] flex mb-5">
                <div className="w-[58px] h-[58px] rounded-[41.08px] p-[13.29px] gap-[12.08px] bg-[#EDE7FF] flex justify-center items-center">
                  <CiLocationArrow1 />
                </div>
                <div className="w-[124px] h-[54px] gap-[4px]">
                  <div className="w-[124px] h-[24px]">
                    <p className="font-inter font-semibold text-[12px] leading-[23.76px] tracking-[-2%]">
                      Loaction
                    </p>
                    <div className="w-[124px] h-[26px]">
                      street road
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
          {/* brocer */}
          <div className="w-[335px]  rounded-[4px] p-[24px] gap-[10px] pb-8 border mt-3 ">
            <div className="w-[287px] gap-[24px] ">
              <div className="py-3">
                <p className="font-inter font-semibold text-[20px] leading-[26.4px] tracking-[-2%] text-[#6636EE] ">
                  Brochures
                </p>
              </div>
              <div className="w-[287px] h-[36px]  pb-[10px] gap-[10px] flex mb-8">
                <div className="w-[58px] h-[58px] rounded-[41.08px] p-[13.29px] gap-[12.08px]">
                  <FaRegFilePdf />
                </div>
                <div className="w-[124px] h-[54px] gap-[4px]">
                  <div className="w-full h-auto gap-[22px]">
                    Download.pdf
                  </div>

                </div>

              </div>
              <div className="w-[287px] h-[36px]  pb-[10px] gap-[10px] flex mb-8">
                <div className="w-[58px] h-[58px] rounded-[41.08px] p-[13.29px] gap-[12.08px]">
                  <SlDocs />

                </div>
                <div className="w-full h-auto gap-[22px]">
                  Download.docx
                </div>

              </div>

            </div>
          </div>

          {/* help */}
          <div className="w-[335px] h-[320px] top-[1782px] left-[300px] rounded-[4px] gap-[10px]">

          </div>

        </div>

        {/* right */}
        <div className="">
          {dummyData.map((data, index) => {
            return (  // Add a return statement here
              <div className="pb-3">
                <WorkoutCard

                  key={index} // Add a unique key for each element in the map
                  image={data.image}
                  title={data.title}
                  description={data.description}
                />
              </div>

            );
          })}
        </div>

      </div>

    </div>
  );
};

export default WorkoutPage;