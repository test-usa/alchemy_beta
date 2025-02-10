
import ArticleCard from "./ArticleCard";


const articles = [
  {
    category: "Fitness",
    title: "10 Best Exercises for a Stronger Core",
    date: "January 15, 2024",
    comments: 5,
    imageUrl:     "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=816,fit=crop/mxBla5o3NpcqD48W/john-fornander-TAZoUmDqzXk-unsplash-m2WWO71JQGcjDvKE.jpeg",
  },
  {
    category: "Health",
    title: "How to Maintain a Balanced Diet",
    date: "February 2, 2024",
    comments: 8,
    imageUrl: "https://lifebyfitness.com/cdn/shop/files/web_photo_3_-_Copy.jpg?v=1684056160&width=1500",
  },
  {
    category: "Yoga",
    title: "The Benefits of Morning Yoga",
    date: "March 10, 2024",
    comments: 12,
    imageUrl: "https://i.pinimg.com/736x/74/16/2b/74162b35e24a03a3f162b814b9d56b16.jpg",
  },
  {
    category: "Yoga",
    title: "The Benefits of Morning Yoga",
    date: "March 10, 2024",
    comments: 12,
    imageUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c9b127481e7002724185c869",
  },
];


const LatestArticle = () => {
  return (
    <div className="w-full max-w-[1916px] mx-auto py-20">
  <div className="max-w-[821px] mx-auto text-center px-4">
    <h1 className="text-[#6636EE] font-inter font-semibold text-[32px] md:text-[40px] leading-[42px] md:leading-[52.8px]">
      OUR LATEST ARTICLE & TIPS
    </h1>
    <p className="font-inter font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[26.24px] text-center">
      We offer top-notch fitness services designed to help you reach your
      goals. From personalized workout plans to expert nutrition guidance,
      our team is dedicated to your success.
    </p>
  </div>

  <div className="mt-10 flex justify-center items-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-6 w-full max-w-[1600px] place-items-center">
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  </div>
</div>
  );
};

export default LatestArticle;
