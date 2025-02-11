import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play } from "lucide-react";

const Meditations = () => {
    return (
        <div className="mb-10 flex flex-col space-y-8">
            {/* Meditation Introduction */}
            <div className="w-full lg:w-[953px] mx-auto">
                <img
                    className="w-full h-[250px] sm:h-[375px] md:h-[505px] rounded"
                    src="https://plus.unsplash.com/premium_photo-1667249323404-d150e397493d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8"
                    alt="Meditation Intro"
                />
                <div className="mt-4">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">Relaxation & Stress Relief</h2>
                    <p className="text-gray-700 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam nihil voluptas quis voluptatum aperiam quibusdam commodi, temporibus sunt nostrum error expedita autem necessitatibus ullam repellat esse omnis, soluta molestias?
                        <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias velit aperiam, dicta tempore sit natus amet soluta enim excepturi unde deserunt molestiae beatae! Ipsam impedit maxime, fuga dolorum voluptates nostrum.
                    </p>
                </div>
            </div>

            {/* Photo Section */}
            <div className="w-full lg:w-[953px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[{
                    src: "https://plus.unsplash.com/premium_photo-1667250623097-f4ede6f24727?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
                    title: "Breathing Exercises"
                },
                {
                    src: "https://cdn.pixabay.com/photo/2024/09/06/15/06/yoga-9027709_1280.jpg",
                    title: "Going Meditations"
                }].map(({ src, title }, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={src} alt={title} className="w-full h-[200px] sm:h-[300px] object-cover rounded" />
                        <h1 className="text-2xl sm:text-3xl mt-2">{title}</h1>
                    </div>
                ))}
            </div>

            {/* Video Meditation Section */}
            <div className="w-full lg:w-[953px] mx-auto">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Video Meditation</h2>
                <div className="relative">
                    <Carousel opts={{ align: "start" }} className="w-full">
                        <div className="absolute right-4 -top-10 flex gap-2 z-10">
                            <CarouselPrevious className="bg-[#EDE7FF] text-primary rounded-full p-2 hover:bg-purple-300" />
                            <CarouselNext className="bg-[#EDE7FF] text-primary rounded-full p-2 hover:bg-purple-300" />
                        </div>
                        <CarouselContent className="flex">
                            {[...Array(6)].map((_, index) => (
                                <CarouselItem key={index} className="basis-full sm:basis-1/2 p-2">
                                    <Card className="transition-transform duration-300">
                                        <CardContent className="relative p-0 w-full h-full">
                                            <img
                                                src="https://www.youtube.com/shorts/r4Vw2vcyvdo"
                                                alt="Meditation Video"
                                                className="w-full h-[250px] sm:h-[300px] object-cover rounded-md"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <button className="bg-white p-3 rounded-full shadow-md">
                                                    <Play className="text-purple-500 w-6 h-6" />
                                                </button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Meditations;
