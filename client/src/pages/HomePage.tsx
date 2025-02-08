
<<<<<<< HEAD
import CustomerSay from "../section/Home/CustomerSay"
import Hero from "../section/Home/Hero"
import LatestArticle from "../section/Home/LatestArticle"
import BodyStimina from "../section/Home/BodyStimina";
import BestServices from "../section/Home/BestServices";
import MidNavCom from "../section/Home/MidNavCom";
import WhyChoose from "../section/Home/WhyChoose";
import OurGallery from "../section/Home/OurGallery";
import FindRoute from "../section/Home/FindRoute";
import Badge from "@/section/Home/Badge";
=======
import CustomerSay from "@/section/home/CustomerSay"
import Hero from "@/section/home/Hero"
import LatestArticle from "@/section/home/LatestArticle"
import BodyStimina from "@/section/home/BodyStimina";
import BestServices from "@/section/home/BestServices";
import MidNavCom from "@/section/home/MidNavCom";
import WhyChoose from "@/section/home/WhyChoose";
import OurGallery from "@/section/home/OurGallery";
import FindRoute from "@/section/home/FindRoute";

>>>>>>> 965d04d7726e779935eb632a89f58bff080d204e

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="mt-[-80px]"><MidNavCom/></div>
      <BestServices />
      <Badge/>
      <BodyStimina />
      <MidNavCom />
      <WhyChoose />
      <OurGallery />
      <MidNavCom />
      <FindRoute />
      <LatestArticle/>
      <CustomerSay/>
    </div>
  );
};

export default HomePage;
