
import CustomerSay from "@/section/home/CustomerSay"
import Hero from "@/section/home/Hero"
import LatestArticle from "@/section/home/LatestArticle"
import BodyStimina from "@/section/home/BodyStimina";
import BestServices from "@/section/home/BestServices";
import MidNavCom from "@/section/home/MidNavCom";
import WhyChoose from "@/section/home/WhyChoose";
import OurGallery from "@/section/home/OurGallery";
import FindRoute from "@/section/home/FindRoute";


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
      <LatestArticle/>
      <CustomerSay/>
    </div>
  );
};

export default HomePage;
