import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.webp";
import WorkoutCard from "@/section/ArticleAndTips/WorkoutCard";

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

const BodyBuildingPage = () => {
  return (
    <div className="flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full max-w-[1200px] space-y-6">
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
  );
};

export default BodyBuildingPage;
