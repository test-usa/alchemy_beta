
import Hero from "@/section/Home/Hero"
import LatestArticle from "@/section/Home/LatestArticle"
import BodyStimina from "@/section/Home/BodyStimina";
import BestServices from "@/section/Home/BestServices";
import WhyChoose from "@/section/Home/WhyChoose";
import OurGallery from "@/section/Home/OurGallery";
import FindRoute from "@/section/Home/FindRoute";
import Badge from "@/section/Home/Badge";
import { WickendList } from "@/section/Home/WickendList";
import MidNavCom from "@/shared/MidNavCom";
import CustomerSay from "@/section/Home/CustomerSay";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <MidNavCom />
      <BestServices />
      <Badge />
      <BodyStimina />
      <MidNavCom />
      <WhyChoose />
      <OurGallery />
      <MidNavCom />
      <FindRoute />
      <WickendList />
      <LatestArticle />
      <CustomerSay />
    </div>
  );
};

export default HomePage;
