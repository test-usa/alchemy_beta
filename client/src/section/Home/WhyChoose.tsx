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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1321px] h-[436px] mx-auto">
        {services.map((service, index) => (
          <Card key={index} className="relative w-full h-full group">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />

            {/* Background becomes solid primary color on hover */}
            <CardContent
              className={`absolute bottom-0 left-0 w-full p-9 text-white flex items-center justify-between transition-all duration-300 
              bg-[#353535]/50 backdrop-blur-md group-hover:bg-[#6636EE] group-hover:backdrop-blur-none`}
            >
              <h2 className="font-[Inter] font-bold text-2xl leading-[31.68px] tracking-[-1%]">
                {service.title}
              </h2>

              {/* Icon button background changes on hover */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 
                bg-white bg-opacity-50 group-hover:bg-[#6636EE]`}
              >
                <div className="w-[54px] h-[54px] rounded-full bg-white flex items-center justify-center p-[18.74px]">
                  <span
                    className="text-[#6636EE] text-2xl transition-all duration-300 group-hover:text-gray-500"
                  >
                    <MdOutlineArrowOutward />
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
