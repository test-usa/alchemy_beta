import { BmiChart } from "@/components/ui/BmiChart";
import { IoIosMale } from "react-icons/io";
import { MdOutlineFemale } from "react-icons/md";

const BmiSection = () => {
  return (
    <div className="bg-[#F9F9F9] px-4 sm:px-6 md:px-8 lg:px-[327px] py-20">
      <div className=" bg-white p-10 max-w-screen-lg mx-auto flex flex-col gap-6 lg:flex-row lg:gap-16">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold">What is my BMI?</h2>
          <p className="text-base sm:text-lg text-gray-600">
            We offer top-notch fitness services designed to help you reach your goals. 
            From personalized workout plans to expert nutrition guidance.
          </p>

          {/* Gender Selection */}
          <div className="w-full max-w-sm">
            <h3 className="font-semibold text-lg">Gender</h3>
            <div className="flex gap-4 mt-2">
              <button className="flex items-center gap-2 w-1/2 p-3 border rounded-lg">
                <IoIosMale size={25} />
                Male
              </button>
              <button className="flex items-center gap-2 w-1/2 p-3 border rounded-lg">
                <MdOutlineFemale size={25} />
                Female
              </button>
            </div>
          </div>

          {/* Inputs: Age, Height, Weight */}
          <div className="w-full max-w-sm flex flex-col gap-4">
            {["Age", "Height", "Weight"].map((label, index) => (
              <div key={index} className="w-full">
                <h3 className="font-semibold text-lg">{label}</h3>
                <div className="flex items-center gap-2 p-3 border rounded-lg">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-lg"
                    placeholder={`Enter ${label.toLowerCase()}`}
                  />
                  {(label === "Height" || label === "Weight") && (
                    <select className="border p-2 rounded-md">
                      <option>{label === "Height" ? "CM" : "KG"}</option>
                      <option>{label === "Height" ? "M" : "Gram"}</option>
                    </select>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Calculate Button */}
          <button className="w-full max-w-sm p-4 bg-primary text-white font-semibold rounded-sm">
            Calculate
          </button>
        </div>

        {/* Right Section - BMI Chart */}
        <div className="flex-1 flex flex-col gap-6 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#6636EE]">Your Current BMI:</h3>
          <BmiChart />
          <div className="flex flex-col gap-3 text-lg">
            <p><strong>Healthy BMI range:</strong> 18.5 - 25 kg/m²</p>
            <p><strong>BMI Prime:</strong> 0.78</p>
            <p><strong>Healthy weight for height:</strong> 53.5 - 72.3 kg</p>
            <p><strong>Ponderal Index:</strong> 18.5 - 25 kg/m²</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiSection;
