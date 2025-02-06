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
      <BestServices />
      <BodyStimina />
      <MidNavCom />
      <WhyChoose />
      <OurGallery />
      <MidNavCom />
      <FindRoute />
      <WickendList />
      <FaqPage />
    </div>
  );
};

export default HomePage;
