import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StepperContext } from "@/providers/StepperProvider";
import { ChangeEvent, useContext, useEffect, useState } from "react";

type TMeasurements = {
    age: number
    height: number
    weight: number
};

const Measurements = () => {
    const { setState2, userData, setUserData } = useContext(StepperContext); // Assuming `userData` stores state
    const [age, setAge] = useState<number | null>(userData?.age || null); // Initialize with context data
    const [height, setHeight] = useState<number | null>(userData?.height || null);
    const [weight, setWeight] = useState<number | null>(userData?.weight || null);
    const [ft, setFt] = useState<number | null>(userData?.ft || null);
    const [inch, setInch] = useState<number | null>(userData?.inch || null);

    useEffect(() => {
        if (ft && inch) {
            setHeight((inch * 12 + ft));
        }
    }, [ft, inch]);

    useEffect(() => {
        setUserData((prevData: TMeasurements) => ({
            ...prevData,
            age,
            height,
            weight,
        }));

        // Check if all required fields are filled
        if (age && height && weight) {
            setState2(true);
        } else {
            setState2(false);
        }
    }, [age, height, weight, ft, inch, setState2, setUserData]);

    console.log(userData);

    return (
        <div>
            <h2 className="text-4xl text-center font-semibold my-10">Measurements</h2>
            <Tabs defaultValue="metric" className="mx-auto">

                {/* Tabs Header */}
                <TabsList>
                    <TabsTrigger value="metric">Metric</TabsTrigger>
                    <TabsTrigger value="imperial">Imperial</TabsTrigger>
                </TabsList>

                {/* Metric */}
                <TabsContent value="metric">

                    {/* Age */}
                    <div className="max-w-lg mx-auto">
                        <label className="block mb-2 font-semibold" htmlFor="age"> Age </label>
                        <input
                            id="age"
                            type="number"
                            min="10"
                            max="90"
                            className="w-full border border-[#6636EE] outline-none px-3 py-2 mb-5"
                            placeholder="Enter your age"
                            value={age || ""}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value))}
                        />
                    </div>

                    {/* Height */}
                    <div className="max-w-lg mx-auto mb-7">
                        <label className="block mb-2 font-semibold" htmlFor="height"> Height </label>
                        <input
                            id="height"
                            type="number"
                            min="0"
                            className="w-full border border-[#6636EE] outline-none px-3 py-2 mb-5"
                            placeholder="Enter your height"
                            value={height || ""}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setHeight(Number(e.target.value))}
                        />
                        <p className="text-right -mt-[51px] mr-3 text-zinc-500">cm</p>
                    </div>

                    {/* Weight */}
                    <div className="max-w-lg mx-auto mb-">
                        <label className="block mb-2 font-semibold" htmlFor="weight"> Weight </label>
                        <input
                            id="weight"
                            type="number"
                            min="0"
                            className="w-full border border-[#6636EE] outline-none px-3 py-2 mb-5"
                            placeholder="Enter your weight"
                            value={weight || ""}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setWeight(Number(e.target.value))}
                        />
                        <p className="text-right -mt-[51px] mr-3 text-zinc-500">kg</p>
                    </div>
                </TabsContent>

                {/* Imperial */}
                <TabsContent value="imperial">

                    {/* Age */}
                    <div className="max-w-lg mx-auto">
                        <label className="block mb-2 font-semibold" htmlFor="age"> Age </label>
                        <input
                            id="age"
                            type="number"
                            min="10"
                            max="90"
                            className="w-full border border-[#6636EE] outline-none px-3 py-2 mb-5"
                            placeholder="Enter your age"
                            value={age || ""}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value))}
                        />
                    </div>

                    {/* Height */}
                    <div className="max-w-lg mx-auto">
                        <label className="block mb-2 font-semibold"> Height </label>

                        <div className="flex justify-between items-center gap-3">
                            {/* Height in ft */}
                            <input
                                type="number"
                                min="0"
                                className="w-full border border-[#6636EE] outline-none px-3 py-2 mb-5"
                                placeholder="Ft"
                                value={ft || ""}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setFt(Number(e.target.value))}
                            />
                            {/* Height in inch */}
                            <input
                                type="number"
                                min="0"
                                className="w-full border border-[#6636EE] outline-none px-3 py-2 mb-5"
                                placeholder="In"
                                value={inch || ""}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setInch(Number(e.target.value))}
                            />
                        </div>
                    </div>

                    {/* Weight */}
                    <div className="max-w-lg mx-auto mb-5">
                        <label className="block mb-2 font-semibold" htmlFor="weight"> Weight </label>
                        <input
                            id="weight"
                            type="number"
                            min="0"
                            className="w-full border border-[#6636EE] outline-none px-3 py-2 mb-5"
                            placeholder="Enter your weight"
                            value={weight || ""}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setWeight(Number(e.target.value))}
                        />
                        <p className="text-right -mt-[51px] mr-3 text-zinc-500">lb</p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Measurements;
