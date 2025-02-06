import CheckoutStepper from "@/components/Stepper";
import Gender from "./Gender";
import Measurements from "./Measurements";
import YourGoal from "./YourGoal";
import ActivityLevel from "./ActivityLevel";
import Transformation from "./Transformation";

const CHECKOUT_STEPS = [
    {
        name: "Customer Info",
        Component: () => <Gender />,
    },
    {
        name: "Shipping Info",
        Component: () => <Measurements />,
    },
    {
        name: "Payment",
        Component: () => <YourGoal />,
    },
    {
        name: "Delivered",
        Component: () => <ActivityLevel />,
    },
    {
        name: "Sent",
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