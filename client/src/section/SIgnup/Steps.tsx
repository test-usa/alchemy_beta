import CheckoutStepper from "@/components/Stepper";
import Gender from "./Gender";
import Measurements from "./Measurements";
import YourGoal from "./YourGoal";
import ActivityLevel from "./ActivityLevel";
import Transformation from "./Transformation";



const CHECKOUT_STEPS = [
    {
        Component: () => <Gender />,
    },
    {
        Component: () => <Measurements />,
    },
    {
        Component: () => <YourGoal />,
    },
    {
        Component: () => <ActivityLevel />,
    },
    {
        Component: () => <Transformation />,
    },
];

const Steps = () => {
    return (
        <div className="max-w-2xl mx-auto px-3 mb-10">
            <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
        </div>
    )
}

export default Steps