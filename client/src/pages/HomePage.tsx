import React from "react";
import CustomerSay from "../section/Home/CustomerSay";
import Hero from "../section/Home/Hero";
import LatestArticle from "../section/Home/LatestArticle";
import BodyStimina from "../section/Home/BodyStimina";
import BestServices from "../section/Home/BestServices";
import MidNavCom from "../section/Home/MidNavCom";
import WhyChoose from "@/section/Home/WhyChoose";
import OurGallery from "@/section/Home/OurGallery";
import FindRoute from "@/section/Home/FindRoute";
import BmiSection from "@/section/Home/BmiSection";
import VideoSection from "@/section/Home/VideoSection";
import { BmiChart } from "@/components/ui/BmiChart";

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
      <LatestArticle />
      <VideoSection />

      <BmiSection />
      <CustomerSay />
    </div>
  );
};

export default HomePage;
