import { useState } from "react";

const WorkoutCard = ({
  image,
  title,
  description,
  additionalImage,
}: {
  image: string;
  title: string;
  description: string;
  additionalImage: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle between showing and hiding full description
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Determine the content to show based on isExpanded state
  const displayDescription = isExpanded ? description : description;

  return (
    <div className="w-full lg:max-w-[953.32px] h-auto rounded-lg overflow-hidden shadow-lg">
      {/* Image Section */}
      <div className="w-full lg:h-[512px] relative">
        <img
          src={image}
          alt="Workout Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="w-full py-8 px-6">
        {/* Full Title Section - Show full title when expanded */}
        <div className="text-[32px] font-inter font-bold leading-[42.24px] tracking-[-1%] text-[#333333]">
          {isExpanded ? title : title}
        </div>

        {/* Main Description */}
        <div className="w-full mt-4">
          <p className="font-inter font-normal text-[16px] leading-[26.24px] text-[#5A5C5F]">
            {displayDescription}
          </p>
        </div>

        {/* Additional Content shown when expanded */}
        {isExpanded && (
          <div className="w-full mt-8">
            {/* Heading for additional content */}
            <h3 className="text-[24px] font-inter font-semibold leading-[32.24px] text-[#333333] mb-4">
              More Information
            </h3>
            {/* Lorem Ipsum description */}
            <p className="font-inter font-normal text-[16px] leading-[26.24px] text-[#5A5C5F] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
            {/* Additional Image shown when expanded */}
            <img
              src={additionalImage}
              alt="Additional Workout Image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        )}

        {/* Read More/Show Less Button */}
        <div
          onClick={toggleDescription}
          className="mt-6 w-[157px] h-[48px] rounded-[4px] flex justify-center items-center bg-[#6636EE] text-white font-semibold cursor-pointer  transition-colors"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
