import BestServices from "../section/Home/BestServices";
import BmiSection from "../section/Home/BmiSection";
import Hero from "../section/Home/Hero";
import LatestArticle from "../section/Home/LatestArticle";
import PricingPlan from "../section/Home/PricingPlan";
import VideoSection from "../section/Home/VideoSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <BestServices />
      <VideoSection />
      <BmiSection />
      <LatestArticle />
      <PricingPlan />
    </div>
  );
};

export default HomePage;
