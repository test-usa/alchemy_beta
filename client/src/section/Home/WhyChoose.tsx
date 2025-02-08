
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-[1321px] h-[436px] mx-auto">
        {services.map((service, index) => (
          <Card key={index} className="relative w-full h-full ">
            <img
              src='https://img.freepik.com/free-photo/young-man-hoodie-showing-namaste-gesture-looking-pleased-front-view_176474-65179.jpg?t=st=1738732240~exp=1738735840~hmac=e1e5f105a619fbaef9b41c0de16c41a831bd78120e2438893e260006a590d518&w=1380'
              alt={service.title}
              width={427}
              height={436}
              className="w-full h-full object-cover"
            />

            <CardContent
              className={`absolute bottom-0 left-0 w-full p-9 text-white flex items-center justify-between ${index === services.length - 1
                ? "bg-[#6636EE]" // Solid purple for last card
                : "bg-[#353535]/50 backdrop-blur-md" // Blurred overlay for first two cards with #353535 at 50% opacity
                }`}
            >
              <div className="flex items-center gap-2">
                <h2 className="font-[Inter] font-bold text-2xl leading-[31.68px] tracking-[-1%]">
                  {service.title}
                </h2>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${index === services.length - 1
                  ? "bg-[#6636EE]"
                  : "bg-white bg-opacity-50"
                  }`}
              >
                <div className="w-[54px] h-[54px] rounded-full bg-white flex items-center justify-center p-[18.74px] gap-[7.94px]">
                  <span
                    className={`text-[#6636EE] text-2xl${index === services.length - 1
                      ? "text-white"
                      : "text-[#6636EE]"
                      }`}
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
