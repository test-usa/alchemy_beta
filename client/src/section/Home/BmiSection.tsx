import { SlSymbleFemale } from "react-icons/sl";
import { SlSymbolMale } from "react-icons/sl";

const BmiSection = () => {
  return (
    <div className="lg:max-w-[1920px] h-[1001px] pt-[60px] pr-[327px] pb-[60px] pl-[327px] flex flex-col gap-[10px]">
      <div className="lg:max-w-[1266px] h-[816px] rounded-[4px] p-[32px] flex  gap-[111px]">
        {/* first section */}
        <div className="w-[587px] h-[752px] flex flex-col gap-[48px] ">
          <div className="w-[587px] h-auto flex flex-col gap-[12px]">
            <div className="w-[587px] h-[53px]">
              <p className="font-inter font-bold text-[40px] leading-[52.8px] tracking-[-0.01em]">
                What is my BMI?
              </p>
            </div>
            <div className="w-[574px] h-[52px]">
              <p className="font-inter font-normal text-[16px] leading-[26.24px]">
                We offer top-notch fitness services designed to help you reach
                your goals. From personalized workout plans to expert nutrition
                guidance
              </p>
            </div>

            <div className="w-[360px] h-auto flex flex-col gap-[24px]">
              <div className="w-[360px] h-auto flex flex-col gap-[16px]">
                <div className="w-[360px] h-[21px]">
                  <h2 className="font-inter font-semibold text-[16px] leading-[21.12px] tracking-[-0.02em] text-[#141414]">
                    Gender
                  </h2>
                </div>

                <div className="w-[360px] h-auto flex gap-[16px]">
                  <div className="w-[172px] h-auto rounded-[4px] border border-solid p-[16px] flex flex-col gap-[10px] ">
                    <div className="w-[55px] h-[26px] flex ">
                      <div className="pr-3 pt-2">
                        <SlSymbleFemale />
                      </div>
                      <div className="">
                        <p className="font-inter font-normal text-[16px] leading-[26.24px] text-center">
                          {" "}
                          Female{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[172px] h-auto rounded-[4px] border border-solid p-[16px] flex flex-col gap-[10px] ">
                    <div className="w-[55px] h-[26px] flex ">
                      <div className="pr-3 pt-2">
                        <SlSymbolMale />
                      </div>
                      <div className="">
                        <p className="font-inter font-normal text-[16px] leading-[26.24px] text-center">
                          {" "}
                          Male{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second part */}

        <div className="w-[504px] h-[752px] rounded-[4px] p-[32px] flex flex-col gap-[58px] bg-gray-200"></div>
      </div>
    </div>
  );
};

export default BmiSection;
