import Breadcrumbs from "@/components/breadcrumbs";
import image1 from "../assets/image1.jpg";
import image from "../assets/image.png";
import image2 from "../assets/image2.webp";
import workoutImage from "../assets/workout.jpg";
import { LiaHeadphonesAltSolid } from "react-icons/lia";
import WorkoutCard from "@/section/workout/WorkoutCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { SlEnvolopeLetter, SlDocs } from "react-icons/sl";
import { FaAngleRight, FaAngleDown, FaRegFilePdf } from "react-icons/fa6";
import { useState } from "react";
import { CiPhone, CiLocationArrow1 } from "react-icons/ci";

const WorkoutPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(false);

  const dummyData = [
    {
      image: image1,
      title: "Transform Your Body with Our Personalized Programs",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: image2,
      title: "Boost Your Performance and Achieve Your Goals",
      description:
        "We offer top-notch fitness services designed to help you reach your goals.",
    },
    {
      image: image1,
      title: "Unlock Your Potential with Our Fitness Experts",
      description:
        "Whether you’re new to fitness or an experienced athlete, our coaching will help you.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full lg:h-[440px] overflow-hidden">
        <Breadcrumbs bg={workoutImage} title="Articles & Tips" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center mt-10 px-4 lg:px-0 ">
        {/* Left Sidebar */}
        <div className="w-full lg:w-[335px] space-y-6 mb-10">
          {/* Categories */}
          <div className="border p-5 rounded-md">
            <h2 className="text-xl font-semibold text-[#6636EE] mb-4">
              Category
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                "Body Building",
                "Fitness",
                "Nutrition",
                "Meditation",
                "Wellness & Recovery",
                "Corporate Wellness",
              ].map((category, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="w-full p-3 flex justify-between items-center border rounded bg-gray-100">
                    <span className="font-medium">{category}</span>
                    {isOpen ? <FaAngleDown /> : <FaAngleRight />}
                  </AccordionTrigger>
                  <AccordionContent className="p-3 text-sm text-gray-600">
                    This is the content for {category}.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Information */}
          <div className="border p-5 rounded-md">
            <h2 className="text-xl font-semibold text-[#6636EE] mb-4">
              Contact
            </h2>
            {[
              {
                icon: <SlEnvolopeLetter />,
                label: "Email",
                value: "info@totalu.com",
              },
              { icon: <CiPhone />, label: "Phone", value: "64388867" },
              {
                icon: <CiLocationArrow1 />,
                label: "Location",
                value: "Street Road",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#EDE7FF] rounded-full flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-sm text-gray-700">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Brochures */}
          <div className="border p-5 rounded-md">
            <h2 className="text-xl font-semibold text-[#6636EE] mb-4">
              Brochures
            </h2>
            {[
              { icon: <FaRegFilePdf />, label: "Download.pdf" },
              { icon: <SlDocs />, label: "Download.docx" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <p className="text-sm text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>

          {/* help */}
          <div className="w-[335px] h-[320px] rounded-[4px]  gap-[10px] relative  ">
            {
              <img
                src={image}
                alt="Additional Workout Image"
                className="w-full h-auto object-cover"
              />
            }

            <div className="w-[335px] h-[141px] absolute bg-[#6636EEE5] z-0">
              <div className="w-full h-full relative flex justify-center">
                <div className="w-[58px] h-[58px] bg-white rounded-full absolute -mt-7 z-20 flex justify-center items-center">
                  <LiaHeadphonesAltSolid size={25} className="relative z-10" />
                </div>
                <div className="w-[70px] h-[70px] rounded-full bg-[#6636EEE5] absolute -top-8 "></div>
                <div className="w-[213px] h-[87px]">
                  <div className="w-full h-full mt-8 flex justify-center">
                    <h1 className="text-white absolute text-center">
                      How can we help?
                    </h1>
                    <h1 className="text-center absolute mt-12 mx-3 text-white">
                      info.gmail.com
                    </h1>
                    <h1 className="text-center absolute pt-6 text-white">
                      +798725783
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-3/5 space-y-6">
          {dummyData.map((data, index) => (
            <WorkoutCard
              key={index}
              image={data.image}
              title={data.title}
              description={data.description}
              additionalImage={""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
