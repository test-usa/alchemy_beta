
import { MdStarRate } from "react-icons/md";

const MidNavCom = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto text-white bg-primary flex flex-wrap md:flex-nowrap justify-around items-center px-4 md:px-6 shadow-md border-b mt-16 md:h-[80px] py-4 md:py-0">
      <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-0">
        <p className="text-xl font-bold">
          <MdStarRate className="w-6 h-6 md:w-[28px] md:h-[28px]" />
        </p>
        <h1 className="text-lg md:text-[32px] font-bold text-white leading-tight md:leading-[42.24px] tracking-tight md:tracking-[-0.02em]">
          FITNESS AND GYM
        </h1>
      </div>
      <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-0">
        <p className="text-xl font-bold">
          <MdStarRate className="w-6 h-6 md:w-[28px] md:h-[28px]" />
        </p>
        <h1 className="text-lg md:text-[32px] font-bold text-white leading-tight md:leading-[42.24px] tracking-tight md:tracking-[-0.02em]">
          MEDITATION
        </h1>
      </div>
      <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-0">
        <p className="text-xl font-bold">
          <MdStarRate className="w-6 h-6 md:w-[28px] md:h-[28px]" />
        </p>
        <h1 className="text-lg md:text-[32px] font-bold text-white leading-tight md:leading-[42.24px] tracking-tight md:tracking-[-0.02em]">
          TRACKER
        </h1>
      </div>
      <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-0">
        <p className="text-xl font-bold">
          <MdStarRate className="w-6 h-6 md:w-[28px] md:h-[28px]" />
        </p>
        <h1 className="text-lg md:text-[32px] font-bold text-white leading-tight md:leading-[42.24px] tracking-tight md:tracking-[-0.02em]">
          NUTRITION
        </h1>
      </div>
    </div>
  );
};

export default MidNavCom;
