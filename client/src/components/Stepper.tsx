import { StepperContext } from "@/providers/StepperProvider";
import { ComponentType, useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface StepConfig {
  Component: ComponentType;
}

interface CheckoutStepperProps {
  stepsConfig: StepConfig[];
}

const CheckoutStepper = ({ stepsConfig }: CheckoutStepperProps) => {
  const { state1, state2, state3, state4, state5, userData } = useContext(StepperContext);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [margins, setMargins] = useState<{ marginLeft: number; marginRight: number }>({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Ensure that the refs are set and offsetWidth is available before performing calculations
    const firstStepWidth = stepRef.current[0]?.offsetWidth ?? 0;
    const lastStepWidth = stepRef.current[stepsConfig.length - 1]?.offsetWidth ?? 0;

    setMargins({
      marginLeft: firstStepWidth / 2,
      marginRight: lastStepWidth / 2,
    });
  }, [stepsConfig.length]);

  useEffect(() => {
    // If clicked is set to true, perform the fetch
    if (clicked) {
      const updateUserData = async () => {
        try {
          const res = await fetch(
            "https://alchemy-beta-server-3.onrender.com/api/user/info",
            {
              method: "PUT",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            }
          );
          if(res?.ok){
            navigate("/")
            toast.success('User registered successfully')
          }
        } catch (error: any) {
          console.log(error.message);
        }
      };
      updateUserData();
    }
  }, [clicked, userData]); // Only run the effect when `clicked` changes

  if (!stepsConfig.length) {
    return <></>;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <>
      <div className="stepper">
        {stepsConfig.map((step, index) => {
          return (
            <div
              key={index}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number rounded-full border border-[#6636EE]">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  "0" + `${index + 1}`
                )}
              </div>
            </div>
          );
        })}

        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      {ActiveComponent && <ActiveComponent />}

      {!isComplete && (
        <button
          className={`flex justify-end ml-auto  text-white px-8 py-2 mt-10 
          ${
            (currentStep === 1 && !state1) ||
            (currentStep === 2 && !state2) ||
            (currentStep === 3 && !state3) ||
            (currentStep === 4 && !state4) ||
            (currentStep === 5 && !state5)
              ? "cursor-not-allowed bg-gray-300 text-muted"
              : "cursor-pointer bg-[#6636EE]"
          }`}
          onClick={() => {
            if (currentStep === stepsConfig.length) {
              setClicked(true); 
            }
            handleNext(); 
          }}
          disabled={
            (currentStep === 1 && !state1) ||
            (currentStep === 2 && !state2) ||
            (currentStep === 3 && !state3) ||
            (currentStep === 4 && !state4) ||
            (currentStep === 5 && !state5)
          }
        >
          {currentStep === stepsConfig.length ? "Finish" : "Continue"}
        </button>
      )}
    </>
  );
};

export default CheckoutStepper;
