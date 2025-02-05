import { Card, CardContent } from "@/components/ui/card";
import photo1 from "../../assets/image/card1.jpg";
import photo2 from "../../assets/image/card1.jpg";
import photo3 from "../../assets/image/card1.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";
import Title from "@/shared/Title";

const services = [
  {
    title: "Body Balance",
    image: photo1,
  },
  {
    title: "Self Defence",
    image: photo2,
  },
  {
    title: "Self Defence",
    image: photo3,
  },
];

const WhyChoose = () => {
  return (
    <div className="text-center py-12 px-4 md:px-16 bg-white">
      <Title
        heading="WHY CHOOSE US"
        subHeading="We offer top-notch fitness services designed to help you reach your goals. From personalized workout plans to expert nutrition guidance, our team is dedicated to your success."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1320px] mx-auto">
        {services.map((service, index) => (
          <Card key={index} className="relative w-full h-full shadow-lg">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-96 object-cover"
            />

            <CardContent
              className={`absolute bottom-0 left-0 w-full p-6 text-white flex items-center justify-between ${
                index === 2 ? "bg-[#6636EE]" : "bg-black bg-opacity-50"
              }`}
            >
              <h2 className="font-bold text-xl">{service.title}</h2>

              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <span
                  className={`text-2xl ${
                    index === 2 ? "text-[#6636EE]" : "text-black"
                  }`}
                >
                  <MdOutlineArrowOutward />
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
