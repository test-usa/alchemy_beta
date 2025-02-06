import { BmiChart } from "@/components/ui/BmiChart";
import React from "react";
import MidNavCom from "./MidNavCom";
import { IoIosMale } from "react-icons/io";
import { MdOutlineFemale } from "react-icons/md";

const BmiSection = () => {
  return (
    <div className="w-full">
      <MidNavCom />
      <div className="max-w-full h-auto pt-16 px-8 lg:px-[327px] pb-16 flex flex-col gap-4 lg:flex-row lg:gap-16">
        <div className="lg:w-[1266px] h-auto rounded-[4px] p-[32px] flex flex-col gap-4 lg:flex-row justify-between">
          {/* First section */}
          <div className="lg:w-[587px] flex flex-col gap-12 flex-1">
            <div className="max-w-[587px] flex flex-col gap-3">
              <div className="max-w-[587px] h-auto">
                <p className="font-inter font-bold text-4xl leading-[52.8px] tracking-[-0.01em]">
                  What is my BMI?
                </p>
              </div>
              <div className="max-w-[574px] h-auto">
                <p className="font-inter font-normal text-[16px] leading-[26.24px]">
                  We offer top-notch fitness services designed to help you reach
                  your goals. From personalized workout plans to expert
                  nutrition guidance.
                </p>
              </div>

              <div className="w-full lg:w-[360px] flex flex-col gap-6">
                <div className="w-full flex flex-col gap-4">
                  <div className="w-full">
                    <h2 className="font-inter font-semibold text-[16px] leading-[21.12px] tracking-[-0.02em] text-[#141414]">
                      Gender
                    </h2>
                  </div>

                  <div className="w-full flex gap-4">
                    <div className="w-[172px] rounded-[4px] border border-solid p-4 flex flex-col gap-2">
                      <div className="w-[55px] h-[26px] flex">
                        <button className="font-inter font-normal text-[16px] leading-[26.24px] text-center">
                          <div className="flex ">
                          <IoIosMale size={25} className="pt-2" />    Female
                          </div>
                      
                        </button>
                      </div>
                    </div>
                    <div className="w-[172px] rounded-[4px] border border-solid p-4 flex flex-col gap-2">
                      <div className="w-[55px] h-[26px] flex">
                      <button className="font-inter font-normal text-[16px] leading-[26.24px] text-center flex">
                          <div className="flex ">
                          <MdOutlineFemale  size={27} className="pt-2" />    Female
                          </div>
                      
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-[360px] h-auto flex flex-col gap-4">
                  <div className="w-full">
                    <h2 className="font-inter font-semibold text-[16px] leading-[21.12px] tracking-[-0.02em] text-[#141414]">
                      Age
                    </h2>
                  </div>
                  <div className="w-full flex items-center gap-[10px] p-4 border border-gray-300 rounded-[4px]">
                    <input
                      type="number"
                      className="text-[16px] leading-[26.24px] font-inter font-normal w-full p-2 border-none outline-none"
                      value={16}
                      onChange={(e) => console.log(e.target.value)} // Add your change handler here
                    />
                  </div>
                </div>

                <div className="w-full max-w-[360px] h-auto flex flex-col gap-4">
                  <div className="w-full">
                    <h2 className="font-inter font-semibold text-[16px] leading-[21.12px] tracking-[-0.02em] text-[#141414]">
                      Height
                    </h2>
                  </div>
                  <div className="w-full flex items-center gap-[10px] p-4 border border-gray-300 rounded-[4px]">
                  
                      <input
                        type="number"
                        className="font-inter font-semibold text-[16px] leading-[21.12px] tracking-[-0.02em] text-[#141414] w-full p-2 border-none outline-none"
                        value={170}
                        onChange={(e) => console.log(e.target.value)} // Add your change handler here
                      />
                  

                    <select className="w-auto max-w-[97px] h-[58px] p-4 border border-gray-300 rounded-[4px] bg-white focus:outline-none">
                      <option value="option1">CM</option>
                      <option value="option2">M</option>
                    </select>
                  </div>
                </div>

                <div className="w-full max-w-[360px] h-auto flex flex-col gap-4">
                  <div className="w-full">
                    <h2 className="font-inter font-semibold text-[16px] leading-[21.12px] tracking-[-0.02em] text-[#141414]">
                      Weight
                    </h2>
                  </div>
                  <div className="w-full flex items-center gap-[10px] p-4 border border-gray-300 rounded-[4px]">
           
                      <input
                        type="number"
                        className="font-inter font-semibold text-[16px] leading-[21.12px] tracking-[-0.02em] text-[#141414] w-full p-2 border-none outline-none"
                        value={58}
                        onChange={(e) => console.log(e.target.value)} // Add your change handler here
                      />
              

                    <select className="w-auto max-w-[97px] h-[58px] p-4 border border-gray-300 rounded-[4px] bg-white focus:outline-none">
                      <option value="option1">KG</option>
                      <option value="option2">Gram</option>
                    </select>
                  </div>
                </div>
                <div className="w-full max-w-[360px] h-auto p-4 border border-gray-300 rounded-[4px] gap-2 bg-[#6636EE]">
                  <div className="w-auto text-center text-[18px] font-semibold text-white">
                    Calculate
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second part */}
          <div className="lg:w-[504px] flex flex-col gap-12 flex-1 rounded-[4px] p-8">
            <div className="w-full text-2xl font-bold text-[#6636EE]">
              YOUR CURRENT BMI :
            </div>

            <div className="w-full flex flex-col gap-[52px]">
              <BmiChart />
              <div className="w-full max-w-[440px] flex flex-col gap-6">
                <p className="text-lg ">
                  <span className="font-semibold "> Healthy BMI range:</span>{" "}
                  18.5 kg/m2 - 25 kg/m2
                </p>
                <p className="text-lg">
                  <span className="font-semibold ">Bmi Prime: </span> 0.78
                </p>
                <p className="text-lg ">
                  <span className="font-semibold">
                    Healthy weight for the height:{" "}
                  </span>
                  53.5 kg - 72.3 kg
                </p>
                <p className="text-lg ">
                  <span className="font-semibold">Ponderal index:</span> 18.5
                  kg/m2 - 25 kg/m2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiSection;
