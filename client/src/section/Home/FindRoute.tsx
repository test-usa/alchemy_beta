import { useState } from "react";
import Title from "@/shared/Title";

const FindRoute = () => {
  const [activeButton, setActiveButton] = useState<string>("Beginner"); // Default active button

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div className="text-center justify-center py-4 px-4 md:px-16 bg-white">
      <Title
        heading="Find Your Suitable Routine"
        subHeading="We offer top-notch fitness services designed to help you reach your goals. From personalized workout plans to expert nutrition guidance, our team is dedicated to your success."
      />

      <div className="inline-flex flex-wrap justify-center gap-4 border-purple-500 rounded-lg overflow-hidden md:border">
        {["Beginner", "Intermediate", "Advance"].map((level) => (
          <button
            key={level}
            onClick={() => handleButtonClick(level)}
            className={`h-[60px] w-[116px] sm:w-[130px] md:w-[160px] rounded-md px-6 py-2 transition-all duration-300 
              ${activeButton === level
                ? "bg-primary text-white"
                : "text-primary hover:bg-purple-100"
              }`}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FindRoute;
