
import ArticleCard from "./ArticleCard";

const LatestArticle = () => {
  return (
    <div className="lg:max-w-[1916px] lg:max-h-[846px] my-10">
      <div className="lg:max-w-[821px] lg:max-h-[117px] gap-[12px]   mx-auto">
        <h1 className="text-center text-[#6636EE] font-inter font-semibold text-700 text-[40px] leading-[52.8px]">
          OUR LATEST ARTICLE & TIPS
        </h1>
        <div className="w-full font-inter font-normal text-[16px] leading-[26.24px] text-center">
          <p>
            We offer top-notch fitness services designed to help you reach your
            goals. From personalized workout plans to expert nutrition guidance,
            our team is dedicated to your success.{" "}
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </div>
  );
};

export default LatestArticle;
