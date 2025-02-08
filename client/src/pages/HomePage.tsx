
import Hero from "@/section/Home/Hero"
import LatestArticle from "@/section/Home/LatestArticle"
import BodyStimina from "@/section/Home/BodyStimina";
import BestServices from "@/section/Home/BestServices";
import WhyChoose from "@/section/Home/WhyChoose";
import OurGallery from "@/section/Home/OurGallery";
import FindRoute from "@/section/Home/FindRoute";
<<<<<<< HEAD
import MidNavCom from "@/shared/MidNavCom";
import { WickedList } from "@/section/Home/WickedList";
=======
import Badge from "@/section/Home/Badge";
import { WickendList } from "@/section/Home/WickendList";
import MidNavCom from "@/shared/MidNavCom";
import CustomerSay from "@/section/Home/CustomerSay";
>>>>>>> 36869fe2932f7445d4ce9d2996bf9e490b8223ad

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
      <WickedList />
      <LatestArticle />
<<<<<<< HEAD
=======
      <CustomerSay />
>>>>>>> 36869fe2932f7445d4ce9d2996bf9e490b8223ad
    </div>
  );
};

export default HomePage;
