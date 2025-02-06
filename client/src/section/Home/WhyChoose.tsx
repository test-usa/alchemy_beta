
import { Card, CardContent } from "@/components/ui/card";
import { MdOutlineArrowOutward } from "react-icons/md";
import Title from "@/shared/Title";

const services = [
  {
    title: "Body Balance",
    image:
      "https://img.freepik.com/free-photo/young-man-hoodie-showing-namaste-gesture-looking-pleased-front-view_176474-65179.jpg?t=st=1738732240~exp=1738735840~hmac=e1e5f105a619fbaef9b41c0de16c41a831bd78120e2438893e260006a590d518&w=1380",
  },
  {
    title: "Self Defence",
    image:
      "https://img.freepik.com/free-photo/young-man-hoodie-showing-namaste-gesture-looking-pleased-front-view_176474-65179.jpg?t=st=1738732240~exp=1738735840~hmac=e1e5f105a619fbaef9b41c0de16c41a831bd78120e2438893e260006a590d518&w=1380",
  },
  {
    title: "Self Defence",
    image:
      "https://img.freepik.com/free-photo/young-man-hoodie-showing-namaste-gesture-looking-pleased-front-view_176474-65179.jpg?t=st=1738732240~exp=1738735840~hmac=e1e5f105a619fbaef9b41c0de16c41a831bd78120e2438893e260006a590d518&w=1380",
  },
];

const WhyChoose = () => {
  return (
    <div className="text-center py-12 px-4 md:px-16 bg-white">
      <Title
        heading="WHY CHOOSE US"
        subHeading="We offer top-notch fitness services designed to help you reach your goals. From personalized workout plans to expert nutrition guidance, our team is dedicated to your success."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1320px] relative mx-auto">
        {services.map((service, index) => (
          <Card key={index} className="relative w-full h-full shadow-lg">
            <img
              src="https://img.freepik.com/free-photo/young-man-hoodie-showing-namaste-gesture-looking-pleased-front-view_176474-65179.jpg?t=st=1738732240~exp=1738735840~hmac=e1e5f105a619fbaef9b41c0de16c41a831bd78120e2438893e260006a590d518&w=1380"
              alt={service.title}
              className="w-full h-96 object-cover"
            />
            <CardContent
              className={`absolute bottom-0 left-0 w-full p-6 text-white flex items-center justify-between ${
                index === 2 ? "bg-primary" : "bg-black bg-opacity-50"
              }`}
            >
              <h2 className="font-bold text-xl">{service.title}</h2>

              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <span
                  className={`text-2xl ${
                    index === 2 ? "text-primary" : "text-black"
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
