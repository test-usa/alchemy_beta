import { MdStarRate } from "react-icons/md";

const MidNavCom = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto text-white bg-primary shadow-md border-b px-4 md:px-6 py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center justify-items-center">
        {[
          "FITNESS AND GYM",
          "MEDITATION",
          "TRACKER",
          "NUTRITION",
        ].map((text, index) => (
          <div key={index} className="flex items-center gap-2 md:gap-4">
            <MdStarRate className="w-6 h-6 md:w-[28px] md:h-[28px]" />
            <h1 className="text-sm md:text-[32px]  font-bold leading-tight md:leading-[42.24px] tracking-tight md:tracking-[-0.02em]">
              {text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MidNavCom;
