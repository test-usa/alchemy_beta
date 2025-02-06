import { FaRunning } from "react-icons/fa";
import { MdWoman2 } from "react-icons/md";

const Badge = () => {
  return (
    <div className="lg:pt-5 pb-44">
      <div className="text-[#A1A1A1] lg:h-[76px] lg:mb-12 ">
        <div className="hidden w-full md:flex justify-center">
          <ul className="flex gap-7 w-[850px] justify-between border-[1px] border-gradient-border mt-8 px-[119px] py-[39px] rounded-full">
            <li>
              <FaRunning className="w-[76px] h-[76px] text-[#A1A1A1]" />
            </li>
            <li>
              <FaRunning className="w-[76px] h-[76px] text-[#A1A1A1]" />
            </li>
            <li>
              <FaRunning className="w-[76px] h-[76px] text-[#A1A1A1]" />
            </li>
            <li>
              <FaRunning className="w-[76px] h-[76px] text-[#A1A1A1]" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Badge;
