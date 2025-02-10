
import ArticleCard from "./ArticleCard";
const articles = [
  {
    category: "Fitness",
    title: "10 Best Exercises for a Stronger Core",
    date: "January 15, 2024",
    comments: 5,
    imageUrl: "https://source.unsplash.com/315x398/?fitness,exercise",
  },
  {
    category: "Health",
    title: "How to Maintain a Balanced Diet",
    date: "February 2, 2024",
    comments: 8,
    imageUrl: "https://source.unsplash.com/315x398/?healthy,food",
  },
  {
    category: "Yoga",
    title: "The Benefits of Morning Yoga",
    date: "March 10, 2024",
    comments: 12,
    imageUrl: "https://source.unsplash.com/315x398/?yoga,meditation",
  },
  {
    category: "Yoga",
    title: "The Benefits of Morning Yoga",
    date: "March 10, 2024",
    comments: 12,
    imageUrl: "https://source.unsplash.com/315x398/?yoga,meditation",
  },
];


const LatestArticle = () => {
  return (
    <div className="lg:w-[1916px] lg:h-[846px] ">
      <div className="lg:w-[821px] lg:h-[117px] gap-[12px]   mx-auto">
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
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestArticle;
