import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChangeEvent, useState } from "react";

const Measurements = () => {
    const [age, setAge] = useState<string | null>(null);
    const [height, setHeight] = useState<string | { ft: string, inch: string } | null>(null);
    const [weight, setWeight] = useState<string | null>(null);
    const [ft, setFt] = useState<string | null>(null);
    const [inch, setInch] = useState<string | null>(null);

    if (ft && inch) {
        setHeight({ ft, inch })
    }

    console.log(age, height, weight)
    return (
        <div>
             <h2 className="text-4xl text-center font-semibold my-10">Measurements</h2>
            <Tabs defaultValue="metric" className="mx-auto">

                {/* Metric */}
                <TabsList>
                    <TabsTrigger value="metric">Metric</TabsTrigger>
                    <TabsTrigger value="imperial">Imperial</TabsTrigger>
                </TabsList>
                <TabsContent value="metric">
                    <div className="max-w-lg mx-auto">
                        <label className="block mb-2 font-semibold" htmlFor="age"> Age </label>
                        <input
                            id="age"
                            type="text"
                            className="w-full border border-[#6636EE] outline-none px-3 py-2 mb-5"
                            placeholder="Enter your age"
                            onBlur={(e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="max-w-lg mx-auto mb-7">
                        <label className="block mb-2 font-semibold" htmlFor="height"> Height </label>
                        <input
                            id="height"
                            type="text"
                            className="w-full border border-[#6636EE] outline-none px-3 py-2 mb-5"
                            placeholder="Enter your height"
                            onBlur={(e: ChangeEvent<HTMLInputElement>) => setHeight(e.target.value)}
                        />
                        <p className="text-right -mt-[51px] mr-3 text-zinc-500">cm</p>
                    </div>
                    <div className="max-w-lg mx-auto mb-">
                        <label className="block mb-2 font-semibold" htmlFor="weight"> Weight </label>
                        <input
                            id="weight"
                            type="text"
                            className="w-full border border-[#6636EE] outline-none px-3 py-2 mb-5"
                            placeholder="Enter your weight"
                            onBlur={(e: ChangeEvent<HTMLInputElement>) => setWeight(e.target.value)}
                        />
                        <p className="text-right -mt-[51px] mr-3 text-zinc-500">kg</p>
                    </div>
                </TabsContent>

                {/* Imperial */}
                <TabsContent value="imperial">
                    <div className="max-w-lg mx-auto ">
                        <label className="block mb-2 font-semibold" htmlFor="age"> Age </label>
                        <input
                            id="age"
                            type="text"
                            className="w-full border border-[#6636EE] outline-none px-3 py-2 mb-5"
                            placeholder="Enter your age"
                            onBlur={(e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="max-w-lg mx-auto ">
                        <label className="block mb-2 font-semibold"> Height </label>
                        <div className="flex justify-between items-center gap-3">
                            <input
                                type=""
                                className="w-full border border-[#6636EE] outline-none px-3 py-2 mb-5"
                                placeholder="Ft"
                                onBlur={(e: ChangeEvent<HTMLInputElement>) => setFt(e.target.value)}
                            />
                            <input
                                type="text"
                                className="w-full border border-[#6636EE] outline-none px-3 py-2 mb-5"
                                placeholder="In"
                                onBlur={(e: ChangeEvent<HTMLInputElement>) => setInch(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="max-w-lg mx-auto">

                    </div>
                    <div className="max-w-lg mx-auto mb-5">
                        <label className="block mb-2 font-semibold" htmlFor="weight"> Weight </label>
                        <input
                            id="weight"
                            type="text"
                            className="w-full border border-[#6636EE] outline-none px-3 py-2 mb-5"
                            placeholder="Enter your weight"
                            onBlur={(e: ChangeEvent<HTMLInputElement>) => setWeight(e.target.value)}
                        />
                        <p className="text-right -mt-[51px] mr-3 text-zinc-500">lb</p>
                    </div>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default Measurements