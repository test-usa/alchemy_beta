import BestServices from "@/section/Home/BestServices";
import BodyStamina from "@/section/Home/BodyStimina";
import FindRoute from "@/section/Home/FindRoute";
import Hero from "@/section/Home/Hero";
import LatestArticle from "@/section/Home/LatestArticle";
import OurGallery from "@/section/Home/OurGallery";
import WhyChoose from "@/section/Home/WhyChoose";
import { WickedList } from "@/section/Home/WickedList";
import MidNavCom from "@/shared/MidNavCom";
import Badge from "@/section/Home/Badge";
import VideoSection from "@/section/Home/VideoSection";
import BmiSection from "@/section/Home/BmiSection";
import CustomerSay from "@/section/Home/CustomerSay";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <MidNavCom />
      <BestServices />
      <Badge/>
      <BodyStamina />
      <MidNavCom />
      <WhyChoose />
      <OurGallery />
      <MidNavCom />
      <FindRoute />
      <WickedList />
      <VideoSection/>
      <MidNavCom />
      <BmiSection/>
      <CustomerSay/>
      <LatestArticle/>
    </div>
  );
};

export default HomePage;
