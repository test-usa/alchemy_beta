import { TiTick } from "react-icons/ti";

const PlanCardCard = () => {
    return (
        <div className="w-[338px] h-[452px] border border-gray-300 rounded-[4px] p-[24px] flex flex-col gap-[24px] bg-[#FFFFFF]">
         {/* basic plan */}
            <div className="w-[241px] h-[71px] flex flex-col gap-[3px] ">
            <div className="w-[241px] h-[42px] ">
            <h2 className="font-inter font-semibold text-[32px] leading-[42.24px] tracking-[-0.02em]">
              Basic Plan
            </h2>

            </div>

             <div className="w-[241px] h-[26px] ">
             <p className="font-inter font-normal text-[16px] leading-[26.24px] ">
              For Small Team Getting Started
             </p>
             </div>
            </div> 
            {/* basic plan end */}

            <div className="w-[179px] h-[63px] flex  gap-[13px]  ">
              <div className="w-[94px] h-[63px] ">
              <h1 className="font-inter font-bold text-[48px] leading-[63.36px] tracking-[-0.01em] text-center">
              $59
             </h1>
              </div>

              <div className="w-[72px] h-[26px] pt-7">
              <p className="font-inter font-normal text-[16px] leading-[26.24px] text-center">
              / Monthly
              </p>
             </div>
           </div>
           {/* pricing end */}

           {/* tick */}
           <div className="w-[265px] h-[140px] flex flex-col gap-[12px]">

            <div className="flex">
            <div className="">
                <TiTick size={26} />
                </div>
           <div className="">
                <p className="font-inter font-normal text-[16px] leading-[26.24px] ">Unlimited access</p>
            </div>

            </div>    

            <div className="flex">
            <div className="">
                <TiTick size={26} />
                </div>
           <div className="">
                <p className="font-inter font-normal text-[16px] leading-[26.24px] ">Free Drinking Package</p>
            </div>

            </div> 


            <div className="flex">
            <div className="">
                <TiTick size={26} />
                </div>
           <div className="">
                <p className="font-inter font-normal text-[16px] leading-[26.24px] ">Free Drinking Package</p>
            </div>

            </div> 

            <div className="flex">
                <div className="">
                   <TiTick size={26} />
                 </div>
                 <div className="">
                     <p className="font-inter font-normal text-[16px] leading-[26.24px] ">3 Month free Personal Training</p>
                </div>
            </div> 
               {/*--------------button section------------------ */}
           <div className="w-[290px] h-[58px] border border-gray-300 rounded-[4px] px-[16px] py-[17px] flex items-center gap-[10px]">
                <div className="w-[258px] h-[24px]">
                   <h2 className="font-inter font-semibold text-[18px] leading-[23.76px] tracking-[-0.02em] text-center text-[#6636EE]">
                   Get Started
                   </h2>
                </div>
            </div>
      </div>
      </div>
      
    )
  }
  
  export default PlanCardCard