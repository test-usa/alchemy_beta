
import CustomerSay from "../section/Home/CustomerSay"
import Hero from "../section/Home/Hero"
import LatestArticle from "../section/Home/LatestArticle"
import BodyStimina from "../section/Home/BodyStimina";
import BestServices from "../section/Home/BestServices";
import MidNavCom from "../section/Home/MidNavCom";
import WhyChoose from "@/section/Home/WhyChoose";
import OurGallery from "@/section/Home/OurGallery";
import FindRoute from "@/section/Home/FindRoute";
import { WickendList } from "@/section/Home/WickendList";
import FaqPage from "@/section/SidePage/FaqPage";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <BestServices />
      <BodyStimina />
      <MidNavCom />
      <WhyChoose />
      <OurGallery />
      <MidNavCom />
      <FindRoute />
      <WickendList />
      <FaqPage />
      <LatestArticle/>
      <CustomerSay/>
    </div>
  );
};

export default HomePage;
