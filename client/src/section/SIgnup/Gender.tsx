import { useState } from "react";

const Gender = () => {
    const [selectedGender, setSelectedGender] = useState<string | null>(null);

    const handleClick = (gender: string) => {
        setSelectedGender(prevGender => (prevGender === gender ? null : gender));
    };

    return (
        <div>
            <h2 className="text-4xl text-center font-semibold my-10">Select your gender</h2>
            <div className="max-w-lg mx-auto">
                <div
                    className="flex justify-between items-center border border-[#6636EE] px-3 py-2 mb-5 cursor-pointer"
                    onClick={() => handleClick("Female")}
                >
                    <label
                        className="text-[#6636EE] cursor-pointer"
                        htmlFor="Female"
                        onChange={() => handleClick("Female")}
                        onClick={() => handleClick("Female")}
                    >
                        Female
                    </label>

                    <input
                        id="Female"
                        type="checkbox"
                        className="cursor-pointer"
                        checked={selectedGender === "Female"}
                        onChange={() => handleClick("Female")}
                        onClick={() => handleClick("Female")}
                    />
                </div>
                <div
                    className="flex justify-between items-center border border-[#6636EE] px-3 py-2 cursor-pointer"
                    onClick={() => handleClick("Male")}
                >
                    <label
                        className="text-[#6636EE] cursor-pointer"
                        htmlFor="Male"
                        onChange={() => handleClick("Male")}
                        onClick={() => handleClick("Male")}
                    >
                        Male
                    </label>
                    <input
                        id="Male"
                        type="checkbox"
                        className="cursor-pointer"
                        checked={selectedGender === "Male"}
                        onChange={() => handleClick("Male")}
                        onClick={() => handleClick("Male")}
                    />
                </div>
            </div>
        </div>
    );
};

export default Gender;
