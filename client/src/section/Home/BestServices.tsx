import Title from "@/shared/Title";

import { ArrowUpRight } from "lucide-react";

const gymCards = [
  {
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=816,fit=crop/mxBla5o3NpcqD48W/john-fornander-TAZoUmDqzXk-unsplash-m2WWO71JQGcjDvKE.jpeg",
    heading: "ENTHUSIASTIC COACH",
  },
  {
    image:
      "https://lifebyfitness.com/cdn/shop/files/web_photo_3_-_Copy.jpg?v=1684056160&width=1500",
    heading: "GROUP FITNESS COACH",
  },
  {
    image:
      "https://i.pinimg.com/736x/74/16/2b/74162b35e24a03a3f162b814b9d56b16.jpg",
    heading: "WEIGHT AND CARDIO",
  },
  {
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c9b127481e7002724185c869",
    heading: "WEIGHT AND CARDIO",
  },
];

const BestServices = () => {
  return (
    <div className="py-[60px]">
      <Title
        heading="WE PROVIDE BEST SERVICES"
        subHeading="We offer top-notch fitness services designed to help you reach your goals. From personalized workout plans to expert nutrition guidance, our team is dedicated to your success. "
      />

<div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-5">
  {gymCards?.map((card, index) => (
    <div
      key={index}
      className="relative w-[315px] h-[398px] rounded-md overflow-hidden"
    >
      {/* Main Image */}
      <img
        src={card.image}
        alt="Weight and Cardio"
        className="w-full h-full object-cover"
      />

      {/* Blurred Overlay Behind Text */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between hover:bg-primary items-center px-6 py-5 transition-all duration-300 cursor-pointer">
        <div className="absolute inset-0 backdrop-blur-sm bg-[#35353580]/10  rounded-md"></div>

        {/* Text */}
        <div className="flex items-center gap-3 relative z-10">
          <h2 className="text-white text-lg font-semibold w-[158px]">
            {card.heading}
          </h2>

          {/* Arrow Button */}
          <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
            <ArrowUpRight className="text-primary" size={28} />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default BestServices;
