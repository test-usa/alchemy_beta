

/* import photo1 from "../../assets/image/card1.jpg";
import photo2 from "../../assets/image/card1.jpg";
import photo3 from "../../assets/image/card1.jpg";
import photo4 from "../../assets/image/card1.jpg"; */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Title from '@/shared/Title';
import { Card, CardContent } from '@/components/ui/card';

/* const images = [photo1, photo2, photo3, photo4, photo1, photo2, photo3]; */

const OurGallery = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 md:px-16 bg-white">
      <Title
        heading="View Our Gallery"
        subHeading="We offer top-notch fitness services designed to help you reach your goals. From personalized workout plans to expert nutrition guidance, our team is dedicated to your success."
      />

      <Carousel
        opts={{ align: "center" }}
        className="w-full max-w-[1320px] relative"
      >
        <div className="absolute right-4 -mt-16 mr-10 mb-6 flex gap-2 z-10">
          <CarouselPrevious className="bg-[#EDE7FF] text-primary rounded-full p-2 hover:bg-purple-300" />
          <CarouselNext className="bg-[#EDE7FF] text-primary rounded-full p-2 hover:bg-purple-300" />
        </div>

        <CarouselContent className="flex items-center justify-center">
          {[0, 1, 2, 3].map((photo, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/3 p-2 flex justify-center"
            >
              <Card
                className={`transition-transform duration-300 ${
                  index === 1
                    ? "w-[650px] h-[414px] scale-105"
                    : "w-[315px] h-[414px] opacity-90"
                }`}
              >
                <CardContent className="p-0 w-full h-full">
                  <img
                    src="https://img.freepik.com/free-photo/young-man-hoodie-showing-namaste-gesture-looking-pleased-front-view_176474-65179.jpg?t=st=1738732240~exp=1738735840~hmac=e1e5f105a619fbaef9b41c0de16c41a831bd78120e2438893e260006a590d518&w=1380"
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default OurGallery;
