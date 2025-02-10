import { FaRunning } from "react-icons/fa";

const Badge = () => {
  return (
    <div className="lg:pt-5 pb-20 mx-10">
      <div className="text-[#A1A1A1]">
        <div className="w-full flex justify-center">
          <ul className="flex flex-wrap md:flex-nowrap gap-5 sm:gap-7 w-full max-w-[850px] justify-evenly border border-gradient-border mt-8 px-6 sm:px-12 md:px-[119px] py-6 sm:py-8 md:py-[39px] rounded-full">
            <li>
              <FaRunning className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[76px] md:h-[76px] text-[#A1A1A1]" />
            </li>
            <li>
              <FaRunning className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[76px] md:h-[76px] text-[#A1A1A1]" />
            </li>
            <li>
              <FaRunning className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[76px] md:h-[76px] text-[#A1A1A1]" />
            </li>
            <li>
              <FaRunning className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[76px] md:h-[76px] text-[#A1A1A1]" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Badge;
