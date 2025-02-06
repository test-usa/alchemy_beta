import { useEffect, useRef, useState } from "react";

interface StepConfig {
  name: string;
  Component: React.ComponentType<any>;
}

interface CheckoutStepperProps {
  stepsConfig: StepConfig[];
}

const CheckoutStepper = ({ stepsConfig }: CheckoutStepperProps) => {
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
              key={step.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step ${currentStep > index + 1 || isComplete ? "complete" : ""} ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
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
          <div className="progress" style={{ width: `${calculateProgressBarWidth()}%` }}></div>
        </div>
      </div>

      {ActiveComponent && <ActiveComponent />}

      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export default CheckoutStepper;
