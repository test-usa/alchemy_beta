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
    title: "Strength Training",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1321px] mx-auto">
        {services.map((service, index) => (
          <Card key={index} className="relative w-full h-[320px] sm:h-[400px] group">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <CardContent
              className="absolute bottom-0 left-0 w-full p-6 text-white flex items-center justify-between 
              transition-all duration-300 bg-[#353535]/50 backdrop-blur-md group-hover:bg-[#6636EE] group-hover:backdrop-blur-none"
            >
              <h2 className="text-xl sm:text-2xl font-bold">{service.title}</h2>
              <div
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full transition-all duration-300 
                group-hover:bg-[#6636EE]"
              >
                <MdOutlineArrowOutward className="text-[#6636EE] text-xl transition-all duration-300 group-hover:text-white" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
