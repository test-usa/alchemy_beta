import { StepperContext } from "@/providers/StepperProvider";
import { useContext, useEffect } from "react";

const Gender = () => {
    const { setState1, userData, setUserData } = useContext(StepperContext);

    const handleClick = (gender: string) => {
        const updatedGender = userData?.gender === gender ? null : gender;
        setUserData((prevData : {gender: string}) => ({ ...prevData, gender: updatedGender }));
    };

    useEffect(() => {
        if (userData?.gender !== null) {
            setState1(true);
        } else {
            setState1(false);
        }
    }, [userData?.gender, setState1]);

    return (
        <div>
            <h2 className="text-4xl text-center font-semibold my-10">Select your gender</h2>
            <div className="max-w-lg mx-auto">

                {/* Female */}
                <div
                    className="flex justify-between items-center border border-[#6636EE] px-3 py-2 mb-5 cursor-pointer"
                    onClick={() => handleClick("Female")}
                >
                    <label
                        className="text-[#6636EE] cursor-pointer"
                        htmlFor="Female"
                    >
                        Female
                    </label>
                    <input
                        id="Female"
                        type="checkbox"
                        className="cursor-pointer"
                        checked={userData?.gender === "Female"}
                        onChange={() => handleClick("Female")}
                    />
                </div>

                {/* Male */}
                <div
                    className="flex justify-between items-center border border-[#6636EE] px-3 py-2 cursor-pointer"
                    onClick={() => handleClick("Male")}
                >
                    <label
                        className="text-[#6636EE] cursor-pointer"
                        htmlFor="Male"
                    >
                        Male
                    </label>
                    <input
                        id="Male"
                        type="checkbox"
                        className="cursor-pointer"
                        checked={userData?.gender === "Male"}
                        onChange={() => handleClick("Male")}
                    />
                </div>
            </div>
        </div>
    );
};

export default Gender;
