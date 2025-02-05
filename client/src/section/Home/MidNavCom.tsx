import React from "react";

import { MdStarRate } from "react-icons/md";

const MidNavCom = () => {
  return (
    <div className="w-[1920px] h-[80px] max-auto text-white bg-[#6636EE] flex justify-around items-center px-6 shadow-md border-b mt-20">
      <div className="flex items-center gap-4">
        <p className="text-xl font-bold">
          <MdStarRate className="w-[28px] h-[28px]" />
        </p>

        <h1 className="text-[32px] font-bold text-white leading-[42.24px] tracking-[-0.02em]">
          FITNESS AND GYM
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-xl font-bold">
          <MdStarRate className="w-[28px] h-[28px]" />
        </p>
        <h1 className="text-[32px] font-bold text-white leading-[42.24px] tracking-[-0.02em]">
          MEDITATION
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-xl font-bold">
          <MdStarRate className="w-[28px] h-[28px]" />
        </p>
        <h1 className="text-[32px] font-bold text-white leading-[42.24px] tracking-[-0.02em]">
          TRACKER
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-xl font-bold">
          <MdStarRate className="w-[28px] h-[28px]" />
        </p>
        <h1 className="text-[32px] font-bold text-white leading-[42.24px] tracking-[-0.02em]">
          NUTRITION
        </h1>
      </div>
    </div>
  );
};

export default MidNavCom;
