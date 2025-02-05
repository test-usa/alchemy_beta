import React from 'react'
import { Button } from "@/components/ui/button";
import Title from "@/shared/Title";

const FindRoute = () => {
  return (
    <div className="text-center justify-center py-12 px-4 md:px-16 bg-white">
      <Title
        heading="Find Your Suitable Route"
        subHeading="We offer top-notch fitness services designed to help you reach your
        goals. From personalized workout plans to expert nutrition guidance, our
        team is dedicated to your success."
      ></Title>
      <div>
        <Button>Begineer</Button>
        <Button>Intermeidate</Button>
        <Button>Advance</Button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel
        accusantium nulla maxime, alias vitae totam praesentium repudiandae
        ratione. Nemo optio exercitationem quam consequuntur iusto incidunt
        ratione obcaecati ad maxime.
      </p>
    </div>
  );
};

export default FindRoute;
