
import CustomerSay from "../section/Home/CustomerSay"
import Hero from "../section/Home/Hero"
import LatestArticle from "../section/Home/LatestArticle"
import BodyStimina from "../section/Home/BodyStimina";
import BestServices from "../section/Home/BestServices";
import WhyChoose from "@/section/Home/WhyChoose";
import OurGallery from "@/section/Home/OurGallery";
import FindRoute from "@/section/Home/FindRoute";
import MidNavCom from "@/shared/MidNavCom";
import { WickedList } from "@/section/Home/WickedList";

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
      <WickedList />
      <LatestArticle />
    </div>
  );
};

export default HomePage;
