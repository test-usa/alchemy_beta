<<<<<<< HEAD
import Title from "@/shared/Title";
=======

import { Button } from '@/components/ui/button';
import Title from '@/shared/Title';
>>>>>>> 41eee23d4e99347dcb6e6364f20734c2161976ee

const FindRoute = () => {
  return (
    <div className="text-center justify-center py-4 px-4 md:px-16 bg-white">
      <Title
        heading="Find Your Suitable Routine"
        subHeading="We offer top-notch fitness services designed to help you reach your goals. From personalized workout plans to expert nutrition guidance, our team is dedicated to your success."
      />

      <div className="inline-flex flex-wrap justify-center gap-4 border-purple-500 rounded-lg overflow-hidden md:border">
        <button className="h-[60px] w-[116px] sm:w-[130px] md:w-[160px] bg-primary text-white hover:bg-purple-700 rounded-md px-6 py-2">
          Beginner
        </button>
        <button className="h-[60px] w-[116px] sm:w-[130px] md:w-[160px] text-purple-600 hover:bg-purple-100 rounded-md px-6 py-2">
          Intermediate
        </button>
        <button className="h-[60px] w-[116px] sm:w-[130px] md:w-[160px] text-purple-600 hover:bg-purple-100 rounded-md px-6 py-2">
          Advance
        </button>
      </div>
    </div>
  );
};

export default FindRoute;
