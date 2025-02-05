import MidNavCom from "./MidNavCom";

const CustomerSay = () => {
  return (
    <div className="">
      <MidNavCom />
      <div className="">
        <h1 className="text-[24px] leading-[31.68px] font-inter font-semibold tracking-[-0.02em] text-center text-[#6636EE] py-8">
          Customer Say
        </h1>

        <div className=" mx-auto flex justify-center items-center">
          <div>
            <div className="w-[1024px] h-[392px] bg-gray-100 flex items-center relative overflow-hidden pr-2">
              <div className="w-[294.65px] h-[328.14px] mt-[31.15px] ml-[50.62px] gap-[225.85px] flex items-end flex-col">
                <div className="w-[294.65px] h-[27px] font-inter font-bold text-[20.77px] leading-[27.41px] tracking-[-1%]">
                  <h1>Pacific Sterio</h1>
                </div>
                <div className="w-[294.65px] h-[75.28px] gap-[20.77px] flex">
                  <div className="">
                    <img
                      src="https://images.app.goo.gl/iHxwCtTUStLB1YKD9"
                      alt=""
                      className="w-[75.28px] h-[75.28px]"
                    />
                  </div>
                  <div className="w-[198.6px] h-[62.19px] gap-[5.19px] flex ">
                    <div className="w-[198.6px] h-[30px]">
                      <p className="font-inter font-bold text-[20.77px] leading-[27.41px] tracking-[-0.01em]">
                        Rhonda Rhodes
                      </p>
                    </div>
                  </div>

                  <div className="w-[198.6px] h-[30px]">
                    <p className="font-inter font-normal text-[18.17px] leading-[29.8px]">
                      Founder, Pacific Stereo
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[190.81px] h-[190.81px] mt-[99.95px] ml-[-102.54px] border-[14.97px] border-solid border-transparent rounded-full absolute bg-gradient-to-r from-[#8155FF80] to-[#8155FF80] p-[14.97px]">
                <div className="w-full h-full bg-gray-100 rounded-full"></div>
              </div>
              <div className="w-[506.23px] h-[363.76px] mt-[14.12px] ml-[502.33px] rounded-[5.19px] p-[31.15px] gap-[12.98px] bg-[#FFFFFF]">
                <div className="w-[433.54px] h-[301.46px] gap-[62.3px]  ">
                  <div className="pb-20">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas itaque repellat deserunt neque veritatis
                      repellendus nesciunt nobis, ea expedita enim iste quis cum
                      omnis placeat, corrupti tempore dicta sed quia rem vel
                      consectetur eos facilis accusantium consequatur!
                      Architecto ut nesciunt unde amet ducimus .
                    </p>
                  </div>
                  <div className="lg:w-[213.46px] h-[69.15px] rounded-[5.19px] pt-[15.58px] pr-[46.73px] pb-[15.58px] pl-[46.73px] gap-[12.98px] bg-[#6636EE] font-inter font-normal text-[23.36px] leading-[38.32px] text-[#FFFFFF]">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
