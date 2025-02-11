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

  return (
    <div className="w-full max-w-4xl mx-auto h-auto rounded-lg overflow-hidden  bg-white">
      {/* Image Section */}
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[512px] relative">
        <img
          src={image}
          alt="Workout Image"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Content Section */}
      <div className="py-4 ">
        {/* Title Section */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h2>

        {/* Main Description */}
        <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600">
          {description}
        </p>

        {/* Additional Content when expanded */}
        {isExpanded && (
          <div className="mt-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
              More Information
            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi.
            </p>
            <img
              src={additionalImage}
              alt="Additional Workout Image"
              className="mt-4 w-full h-auto object-cover rounded-lg"
            />
          </div>
        )}

        {/* Read More/Show Less Button */}
        <button
          onClick={toggleDescription}
          className="mt-6 w-full sm:w-40 h-12 rounded-md flex justify-center items-center bg-purple-600 text-white font-semibold text-sm sm:text-base cursor-pointer transition hover:bg-purple-700"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;
