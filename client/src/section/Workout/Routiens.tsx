import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Routines = () => {
    return (
        <div className="container mx-auto px-4">
            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {["Strength", "Flexibility", "Beginner"].map((title, index) => (
                    <div key={index} className="w-full text-left">
                        <img
                            src="https://firehousefitness.com/wp-content/uploads/2023/02/anastase-maragos-FP7cfYPPUKM-unsplash-2.png"
                            alt={title}
                            className="rounded-xl w-full h-64 object-cover"
                        />
                        <p className="mt-2 font-semibold">{title}</p>
                    </div>
                ))}
            </div>

            {/* Main Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-8">
                <div>
                    <img
                        src="https://firehousefitness.com/wp-content/uploads/2023/02/anastase-maragos-FP7cfYPPUKM-unsplash-2.png"
                        alt="Workout"
                        className="rounded-xl w-full h-80 object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        More Than A Workout, It's A Lifestyle Gym
                    </h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolor quaerat velit cum repellendus omnis voluptates? Esse, incidunt? Laborum maiores ad praesentium omnis quos harum nam fuga et perspiciatis ea.</p>

                    <div className="flex gap-8 mt-6 justify-between">
                        <div className="text-primary font-bold text-2xl">
                            2100+ <br />
                            <span className="text-gray-500 text-sm">Your BMI Score</span>
                        </div>
                        <div className="text-primary font-bold text-2xl">
                            200+ <br />
                            <span className="text-gray-500 text-sm">Our Instructors</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Community & Premium Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
                {/* Community Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">Our Community</h3>
                    <p className="text-gray-500 mb-6">
                        Here's what other subscribers had to say about Production Online.
                    </p>
                    <Card className="p-6 bg-[#F6F3FF]">
                        <CardContent>
                            <p className="text-gray-800 text-lg">
                                "Production Online has helped me become a better musician and producer than I ever thought possible."
                            </p>
                            <div className="flex items-center gap-4 mt-6">
                                <img
                                    src="https://w7.pngwing.com/pngs/134/822/png-transparent-computer-icons-business-man-people-logo-recruiter.png"
                                    alt="User"
                                    className="rounded-full w-12 h-12"
                                />
                                <div>
                                    <p className="font-semibold text-lg">Daniel Hamilton</p>
                                    <p className="text-sm text-gray-500">Stephanie Sharkey</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="flex justify-center gap-6 mt-6">
                        <Button variant="outline" className="bg-[#F6F3FF] rounded-full p-3 border-gray-300">
                            <IoIosArrowBack className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" className="bg-[#F6F3FF] rounded-full p-3 border-gray-300">
                            <IoIosArrowForward className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Premium Section */}
                <div>
                    <div className="h-80 mb-8">
                        <img
                            src="https://firehousefitness.com/wp-content/uploads/2023/02/anastase-maragos-FP7cfYPPUKM-unsplash-2.png"
                            alt="Premium Service"
                            className="rounded-xl w-full h-full object-cover"
                        />
                    </div>
                    <div className="bg-primary text-white p-6">
                        <div className="flex">
                            <div>
                                <h3 className="text-2xl font-bold">We Provide <br /> Premium Service</h3>
                                <p className="text-gray-200 mt-2">
                                    Here's what other subscribers had to say about Production Online.
                                </p>
                            </div>

                            <div className="mt-6 text-white font-bold text-2xl">
                                <div>
                                    100+ <span className="text-gray-300 text-sm">Members</span> <br />
                                </div>
                                <div>
                                    300+ <span className="text-gray-300 text-sm">Instruments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Routines;
