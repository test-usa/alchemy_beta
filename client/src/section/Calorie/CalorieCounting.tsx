import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CircularProgressbar } from "react-circular-progressbar"; // Import react-circular-progressbar
import "react-circular-progressbar/dist/styles.css"; // Import styles for the progress bar

export default function CalorieCalculator() {
    const [gender, setGender] = useState("female");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [heightFt, setHeightFt] = useState("");
    const [heightIn, setHeightIn] = useState("");
    const [activity, setActivity] = useState("sedentary");
    const [calories, setCalories] = useState<number | null>(null);

    const calculateCalories = () => {
        const weightKg = parseFloat(weight) * 0.453592; // Convert lbs to kg
        const heightCm = (parseFloat(heightFt) * 30.48) + (parseFloat(heightIn) * 2.54); // Convert ft + in to cm
        const ageNum = parseInt(age);

        let bmr = gender === "female"
            ? 655 + (9.6 * weightKg) + (1.8 * heightCm) - (4.7 * ageNum)
            : 66 + (13.7 * weightKg) + (5 * heightCm) - (6.8 * ageNum);

        const activityMultipliers: { [key: string]: number } = {
            sedentary: 1.2,
            lightly_active: 1.375,
            moderately_active: 1.55,
            very_active: 1.725
        };

        setCalories(Math.round(bmr * activityMultipliers[activity]));
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            <div className="w-full mb-16 mt-8">
                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold">FitLife Chronicles</h2>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Your go-to hub for fitness tips, success stories, and expert advice. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam quo laudantium quidem nostrum, numquam dolorem similique nemo, impedit cumque praesentium odio molestias ex unde repellat accusamus nobis minus tempora!
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full mb-16 ">
                <h1 className="text-2xl font-semibold">Calculate your calorie needs</h1>

                <Card>
                    <CardContent className="p-6 space-y-4">
                        <h2 className="text-lg font-medium">Your Information</h2>

                        <div>
                            <label className="block text-sm font-medium">Gender</label>
                            <Select onValueChange={setGender} defaultValue="female">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="male">Male</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Age (years)</label>
                            <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Weight (lbs)</label>
                            <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter weight" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Height (ft)</label>
                                <Input type="number" value={heightFt} onChange={(e) => setHeightFt(e.target.value)} placeholder="Feet" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">And (inches)</label>
                                <Input type="number" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} placeholder="Inches" />
                            </div>
                        </div>

                        <h2 className="text-lg font-medium mt-4">Your Activity Level</h2>
                        <RadioGroup defaultValue="sedentary" onValueChange={setActivity} className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <RadioGroupItem value="sedentary" /> <span>Sedentary: No purposeful exercise.</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <RadioGroupItem value="lightly_active" /> <span>Lightly Active: Walking 2 miles/day.</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <RadioGroupItem value="moderately_active" /> <span>Moderately Active: Brisk walking, sports.</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <RadioGroupItem value="very_active" /> <span>Very Active: Running, intense exercise.</span>
                            </label>
                        </RadioGroup>

                        <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700" onClick={calculateCalories}>
                            Calculate
                        </Button>
                    </CardContent>
                </Card>

                {calories !== null && (
                    <Card>
                        <CardContent className="p-6 flex flex-col items-center">
                            <div className="w-24 h-24">
                                <CircularProgressbar value={(calories / 3000) * 100} text={`${calories} kcal`} />
                            </div>
                            <p className="text-gray-700 text-center mt-3">
                                To Maintain Your Current Weight, You Can Eat Approximately <span className="font-semibold text-purple-600">{calories} Calories</span> Per Day!
                            </p>
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Circle Part */}
            <Card className="w-full sm:w-[953px] h-[308px] max-w-md mx-auto border-primary">
                <CardContent className="w-full h-[234px] flex flex-col items-center p-6">
                    <CircularProgressbar value={75} text="1899 kcal" className="w-[184px] h-[184px]" />
                    <p className="mt-4 text-center text-gray-600">
                        To Maintain Your Current Weight, You Can Eat Approximately <span className="font-semibold text-purple-500">1899 Calories</span> Per Day!
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
