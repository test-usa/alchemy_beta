import { StepperContext } from "@/providers/StepperProvider";
import { useContext, useEffect } from "react";

const YourGoal = () => {
  const { setState3, userData, setUserData } = useContext(StepperContext)

  // const handleClick = (g: string) => {
  //   setSelectedOption(prev => (prev === g ? null : g));
  // };

  const handleClick = (goal: string) => {
    const updatedGoal = userData?.goal === goal ? null : goal;
    setUserData((prevData : {goal: string}) => ({ ...prevData, goal: updatedGoal }));
};

  useEffect(() => {
    if (userData?.goal !== null) {
      setState3(true);
    } else {
      setState3(false);
    }
  }, [userData?.goal, setState3]);

  return (
    <div>
      <h2 className="text-4xl text-center font-semibold my-10">What is your goal</h2>
      <div className="max-w-lg mx-auto">

        {/* Lose weight */}
        <div
          className="flex justify-between items-center border border-[#6636EE] px-3 py-2 mb-5 cursor-pointer"
          onClick={() => handleClick("Lose weight")}
        >
          <label
            className="text-[#6636EE] cursor-pointer"
            htmlFor="lw"
            onChange={() => handleClick("Lose weight")}
            onClick={() => handleClick("Lose weight")}
          >
            Lose weight
          </label>

          <input
            id="lw"
            type="checkbox"
            className="cursor-pointer"
            checked={userData?.goal === "Lose weight"}
            onChange={() => handleClick("Lose weight")}
            onClick={() => handleClick("Lose weight")}
          />
        </div>

        {/* Gain weight */}
        <div
          className="flex justify-between items-center border border-[#6636EE] px-3 py-2 mb-5 cursor-pointer"
          onClick={() => handleClick("Gain weight")}
        >
          <label
            className="text-[#6636EE] cursor-pointer"
            htmlFor="gw"
            onChange={() => handleClick("Gain weight")}
            onClick={() => handleClick("Gain weight")}
          >
            Gain weight
          </label>

          <input
            id="gw"
            type="checkbox"
            className="cursor-pointer"
            checked={userData?.goal === "Gain weight"}
            onChange={() => handleClick("Gain weight")}
            onClick={() => handleClick("Gain weight")}
          />
        </div>

        {/* Muscle Mass Gain */}
        <div
          className="flex justify-between items-center border border-[#6636EE] px-3 py-2 mb-5 cursor-pointer"
          onClick={() => handleClick("Muscle Mass Gain")}
        >
          <label
            className="text-[#6636EE] cursor-pointer"
            htmlFor="mmg"
            onChange={() => handleClick("Muscle Mass Gain")}
            onClick={() => handleClick("Muscle Mass Gain")}
          >
            Muscle Mass Gain
          </label>

          <input
            id="mmg"
            type="checkbox"
            className="cursor-pointer"
            checked={userData?.goal === "Muscle Mass Gain"}
            onChange={() => handleClick("Muscle Mass Gain")}
            onClick={() => handleClick("Muscle Mass Gain")}
          />
        </div>

        {/* Shape body */}
        <div
          className="flex justify-between items-center border border-[#6636EE] px-3 py-2 mb-5 cursor-pointer"
          onClick={() => handleClick("Shape body")}
        >
          <label
            className="text-[#6636EE] cursor-pointer"
            htmlFor="sb"
            onChange={() => handleClick("Shape body")}
            onClick={() => handleClick("Shape body")}
          >
            Shape body
          </label>

          <input
            id="sb"
            type="checkbox"
            className="cursor-pointer"
            checked={userData?.goal === "Shape body"}
            onChange={() => handleClick("Shape body")}
            onClick={() => handleClick("Shape body")}
          />
        </div>

        {/* Others */}
        <div
          className="flex justify-between items-center border border-[#6636EE] px-3 py-2 mb-5 cursor-pointer"
          onClick={() => handleClick("Others")}
        >
          <label
            className="text-[#6636EE] cursor-pointer"
            htmlFor="o"
            onChange={() => handleClick("Others")}
            onClick={() => handleClick("Others")}
          >
            Others
          </label>

          <input
            id="o"
            type="checkbox"
            className="cursor-pointer"
            checked={userData?.goal === "Others"}
            onChange={() => handleClick("Others")}
            onClick={() => handleClick("Others")}
          />
        </div>


      </div>
    </div>
  );
}

export default YourGoal