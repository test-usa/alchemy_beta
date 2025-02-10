import { StepperContext } from "@/providers/StepperProvider";
import { useContext, useEffect } from "react";

const YourGoal = () => {
    const { state4, setState4, userData, setUserData } = useContext(StepperContext)

  // const handleClick = (g: string) => {
  //   setSelectedOption(prev => (prev === g ? null : g));
  // };

  const handleClick = (activityLevel: string) => {
    const updatedActivityLevel = userData?.activityLevel === activityLevel ? null : activityLevel;
    setUserData((prevData : {activityLevel: string}) => ({ ...prevData, activityLevel: updatedActivityLevel }));
};

  useEffect(() => {
    if (userData?.activityLevel !== null) {
      setState4(true);
    } else {
      setState4(false);
    }
  }, [userData?.activityLevel, setState4, state4]);
 
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
            checked={userData?.activityLevel === "Beginner"}
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
            checked={userData?.activityLevel === "Intermediate"}
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
            checked={userData?.activityLevel === "Expert"}
            onChange={() => handleClick("Expert")}
            onClick={() => handleClick("Expert")}
          />
        </div>
      </div>
    </div>
  );
}

export default YourGoal