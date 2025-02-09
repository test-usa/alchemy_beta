import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HeartPulse } from "lucide-react"

const Meditations = () => {
    return (
        <div className="mb-10 ">
            <div className="w-[953px] h-[762px] max-auto ">
                <img className='w-[953px] h-[505.36px]  rounded ' src="https://plus.unsplash.com/premium_photo-1667249323404-d150e397493d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8" alt="" />
                <div className="w-[953px] h-[225.36px]">
                    <h2 className='text-xl font-semibold mt-3 mb-2'>Relaxation & Stress Relief</h2>
                    <p className="w-[953px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minima officia, facilis incidunt unde nisi debitis! Id minus dignissimos reprehenderit unde, dicta iste libero maiores a laboriosam similique perferendis earum!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae distinctio reprehenderit quae repellendus consequuntur est eaque. Debitis, dignissimos blanditiis? Odit neque labore voluptatem nesciunt ex amet atque doloremque quam vel laudantium quas, temporibus accusamus sapiente consectetur, totam veniam deserunt possimus!
                    </p>


                </div>
            </div>
            {/* 2 photo part */}
            <div className="max-w-fit w-[953px] h-[762px]">
                <div className="grid grid-cols-[auto_auto] gap-4 justify-start">
                    <div className="flex flex-col w-full">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1667250623097-f4ede6f24727?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8"
                            alt="Breathing Exercises"
                            className="w-full h-[375px] object-cover rounded"
                        />
                        <h1 className="text-3xl text-left mt-2">Breathing Exercises</h1>
                    </div>

                    <div className="flex flex-col w-full">
                        <img
                            src="https://cdn.pixabay.com/photo/2024/09/06/15/06/yoga-9027709_1280.jpg"
                            alt="Going Meditations"
                            className="w-full h-[375px] object-cover rounded"
                        />
                        <h1 className="text-3xl text-left mt-2">Going Meditations</h1>
                    </div>
                </div>
            </div>

            {/* part-3 Video Mediation  */}
            <div className="flex flex-col items-start justify-start py-4 px-4 md:px-16 bg-white">
                <Carousel opts={{ align: "start" }} className="w-[953px] h-[470px] relative">
                    {/* Navigation Buttons */}
                    <div className="absolute right-4 -mt-16 mr-10 flex gap-2 z-10">
                        <CarouselPrevious className="bg-[#EDE7FF] text-primary rounded-full p-2 hover:bg-purple-300" />
                        <CarouselNext className="bg-[#EDE7FF] text-primary rounded-full p-2 hover:bg-purple-300" />
                    </div>

                    {/* Carousel Content */}
                    <CarouselContent className="flex items-start justify-start">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                            <CarouselItem key={index} className="p-2 basis-1/2">
                                <Card className="transition-transform duration-300">
                                    <CardContent className="p-0 w-full h-full">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://www.youtube.com/embed/jGy4T_jY9NQ"
                                            title={`YouTube Video ${index + 1}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="rounded-md w-[460px] h-[324px]"
                                        ></iframe>
                                    </CardContent>
                                    <h1 className="text-lg font-semibold mt-2 text-center">Meditation Name {index + 1}</h1>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>




        </div>
    )
}


export default Meditations;
