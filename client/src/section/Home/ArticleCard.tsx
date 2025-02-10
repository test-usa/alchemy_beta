import { title } from "process";

const ArticleCard = ({ category, title, date, comments, imageUrl }:{category:String,title:String,date: String,comments:Number,imageUrl:String}) => {
  return (
    <div className="w-[315px] min-h-[561px] flex flex-col gap-[26px] mr-5 ">
      <div className="w-full max-w-[315px] h-[398px] flex flex-col gap-[10px] bg-gray-400">
        {/* this is image */}
      </div>
      <div className="w-[293px] min-h-[137px] flex flex-col gap-[24px]">

        <div className="w-full max-w-[293px] min-h-[87px] flex flex-col gap-[9px]">
          <div className="max-w-[293px] min-h-[26px] self-start">
            <h1>{category}</h1>
          </div>
          <div className="max-w-[293px] min-h-[52px] ">

            <p className="font-inter font-bold text-[20px] leading-[26.4px] tracking-[-0.01em] text-[#6636EE]">
           {title}
            </p>
          </div>
          <div className="w-[273px] h-[26px] flex  gap-[25px] items-center">
            <div className="">OCTOBER 4, 2022</div>
            <div className="">O COMMENTS</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard;