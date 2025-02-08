import CustomerSay from "@/section/Home/CustomerSay"
import Hero from "@/section/Home/Hero"
import LatestArticle from "@/section/Home/LatestArticle"
import BodyStimina from "@/section/Home/BodyStimina";
import BestServices from "@/section/Home/BestServices";
import MidNavCom from "@/section/Home/MidNavCom";
import WhyChoose from "@/section/Home/WhyChoose";
import OurGallery from "@/section/Home/OurGallery";
import FindRoute from "@/section/Home/FindRoute";
import Badge from "@/section/Home/Badge";
import { WickendList } from "@/section/Home/WickendList";
import Checkout from "@/section/SidePage/Checkout";
import AddCardInfo from "@/section/SidePage/AddCardInfo";
import Confirm from "@/section/SidePage/Confirm";
import FaqPage from "@/section/SidePage/FaqPage";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="mt-[-80px]"><MidNavCom /></div>
      <BestServices />
      <Badge />
      <BodyStimina />
      <MidNavCom />
      <WhyChoose />
      <OurGallery />
      <MidNavCom />
      <FindRoute />
      <WickendList />
      {/* TOday */}
      <Checkout />
      <AddCardInfo />
      <Confirm />
      <FaqPage />

      <LatestArticle />
      <CustomerSay />

    </div>
  );
};

export default HomePage;
