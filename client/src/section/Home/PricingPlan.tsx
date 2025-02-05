import PlanCardCard from "./PlanCardCard";


const PricingPlan = () => {
    return (
        <div className="lg:max-w-[1920px] h-[827px]  top-[588px] px-[298px] pt-[60px] pb-[60px] gap-[10px]">
            {/* ---------------header part -----------------*/}
             <div className="lg:w-[1148 h-[707px] left-[386px]">
                <div className="w-[821px] h-[201px]  mx-auto">
                      <div className="lg:w-[821px] h-[53px] ">
                              <h1 className="font-inter font-bold text-[40px] leading-[52.8px] tracking-[-1%] text-center text-[#6636EE]">
                              CHOOSE YOUR PRICING PLAN
                              </h1>

                       </div>
                       <div className="lg:w-[821px] h-[52px]">
                          <p className="font-inter font-normal text-[16px] leading-[26.24px] text-center">
                            We offer top-notch fitness services designed to help you reach your goals. 
                            From personalized workout plans to expert nutrition guidance, our team is dedicated to your success.
                          </p>
                       </div>
                 </div>

                 <div className="lg:w-[205px] h-[60px]   rounded-[3px] px-[16px] py-[16px] flex items-center justify-center border-[1px] border-[#6636EE] mx-auto">
                      <div className="lg:w-[110px] h-[60px] rounded-tl-[4px] rounded-bl-[4px] px-[24px] py-[12px] gap-[10px] bg-[#6636EE] ">
                    <div className="w-[62px] h-[26px]">
                        <p className="font-inter font-normal text-[16px] leading-[26.24px] text-center text-[#FFFFFF]">
                            Monthly
                        </p>
                    </div>
                  </div>
                  <div className="lg:w-[110px] h-[60px] rounded-tl-[4px] rounded-bl-[4px] px-[24px] py-[12px] gap-[10px] ">
                    <div className="lg:w-[62px] h-[26px]">
                        <p className="font-inter font-normal text-[16px] leading-[26.24px] text-center text-[#6636EE]">
                            Yearly
                        </p>
                    </div>
                  </div>
            </div>
            {/*-------------------------------------end of header part------------------------------------------ */}
            <div className="lg:w-[1148px] h-[452px] flex   mt-10 justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
              <PlanCardCard/>
              <PlanCardCard/>
               <PlanCardCard/>
              </div>
           
            </div>


           

            </div>
   
        </div>
       
      
    )
  }
  
  export default PricingPlan;