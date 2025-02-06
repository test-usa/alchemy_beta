import { useState } from "react";

const YourGoal = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleClick = (g: string) => {
    setSelectedOption(prev => (prev === g ? null : g));
  };
 
  return (
    <div>
      <h2 className="text-4xl text-center font-semibold my-10">Activity level</h2>
      <div className="max-w-lg mx-auto">
        {/* Beginner */}
        <div
          className="flex justify-between items-center border border-[#6636EE] px-3 py-2 mb-5 cursor-pointer"
          onClick={() => handleClick("Beginner")}
        >
          <label
            className="text-[#6636EE] cursor-pointer"
            htmlFor="b"
            onChange={() => handleClick("Beginner")}
            onClick={() => handleClick("Beginner")}
          >
            Beginner
          </label>

          <input
            id="b"
            type="checkbox"
            className="cursor-pointer"
            checked={selectedOption === "Beginner"}
            onChange={() => handleClick("Beginner")}
            onClick={() => handleClick("Beginner")}
          />
        </div>

        {/* Intermediate */}
        <div
          className="flex justify-between items-center border border-[#6636EE] px-3 py-2 mb-5 cursor-pointer"
          onClick={() => handleClick("Intermediate")}
        >
          <label
            className="text-[#6636EE] cursor-pointer"
            htmlFor="i"
            onChange={() => handleClick("Intermediate")}
            onClick={() => handleClick("Intermediate")}
          >
            Intermediate
          </label>

          <input
            id="i"
            type="checkbox"
            className="cursor-pointer"
            checked={selectedOption === "Intermediate"}
            onChange={() => handleClick("Intermediate")}
            onClick={() => handleClick("Intermediate")}
          />
        </div>

        {/* Expert */}
        <div
          className="flex justify-between items-center border border-[#6636EE] px-3 py-2 mb-5 cursor-pointer"
          onClick={() => handleClick("Expert")}
        >
          <label
            className="text-[#6636EE] cursor-pointer"
            htmlFor="e"
            onChange={() => handleClick("Expert")}
            onClick={() => handleClick("Expert")}
          >
            Expert
          </label>

          <input
            id="e"
            type="checkbox"
            className="cursor-pointer"
            checked={selectedOption === "Expert"}
            onChange={() => handleClick("Expert")}
            onClick={() => handleClick("Expert")}
          />
        </div>
      </div>
    </div>
  );
}

export default YourGoal