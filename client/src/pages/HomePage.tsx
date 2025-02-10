import BestServices from "@/section/Home/BestServices";
import BodyStamina from "@/section/Home/BodyStimina";
import FindRoute from "@/section/Home/FindRoute";
import Hero from "@/section/Home/Hero";
import LatestArticle from "@/section/Home/LatestArticle";
import OurGallery from "@/section/Home/OurGallery";
import WhyChoose from "@/section/Home/WhyChoose";
import { WickedList } from "@/section/Home/WickedList";
import MidNavCom from "@/shared/MidNavCom";
import WorkoutPage from "./WorkoutPage";
import { useAuth } from "@/auth/AuthContext";

const HomePage = () => {

  const { user } = useAuth(); // Destructure `user` from the context
  const { id, email } = user || { id: null, email: null }; // Fallback if user is null

  console.log(user)

  return (
    <div>
      <Hero />
      <MidNavCom />
      <BestServices />
      <BodyStamina />
      <MidNavCom />
      <WhyChoose />
      <OurGallery />
      <MidNavCom />
      <FindRoute />
      <WickedList />
      <LatestArticle />
      <WorkoutPage />
    </div>
  );
};

export default HomePage;
