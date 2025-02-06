import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqPage = () => {
  return (
    <div className="py-10">
      <h1 className="text-5xl flex justify-center">
        Frequently Asked Questions (FAQ)
      </h1>
      <div>
        <div className="mt-12 relative flex flex-col md:flex-row w-full max-w-[1320px] h-auto md:h-[610px] gap-6 md:gap-[132px] mx-auto px-4 md:px-0">
          <div className="md:w-1/3 w-full flex justify-center items-center">
            <div className="h-[650px] w-[650px] md:h-[610px] md:w-[700px] overflow-hidden shadow-md grid grid-cols-2 gap-4">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/beautiful-sportive-girl-posing-with-crossed-arms-dark-wall_176420-621.jpg"
                  alt=""
                  className="w-[315px] h-[315px] object-cover"
                />
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/beautiful-sportive-girl-posing-with-crossed-arms-dark-wall_176420-621.jpg"
                  alt=""
                  className="w-[315px] h-[315px] object-cover"
                />
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/beautiful-sportive-girl-posing-with-crossed-arms-dark-wall_176420-621.jpg"
                  alt=""
                  className="w-[315px] h-[315px] object-cover"
                />
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/beautiful-sportive-girl-posing-with-crossed-arms-dark-wall_176420-621.jpg"
                  alt=""
                  className="w-[315px] h-[315px] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:w-2/3 w-full h-auto md:h-[610px] flex flex-col justify-between">
            <div>
              <Accordion type="single" defaultValue="item-1" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-2xl p-4 text-white bg-primary mb-6 rounded-md shadow-md">
                    What membership plans do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-800 p-4">
                    Yes, our certification can design a personalized workout
                    plan tailored to your fitness goals, schedule, and any
                    physical limitations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="mb-6">
                  <AccordionTrigger className="text-2xl p-4">
                    Do you offer personalized workout plans?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-800 p-4">
                    Yes, our certification can design a personalized workout
                    plan tailored to your fitness goals, schedule, and any
                    physical limitations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="mb-6">
                  <AccordionTrigger className="text-2xl p-4">
                    Do you offer diet or nutrition guidance?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-800 p-4">
                    Yes, our certification can design a personalized workout
                    plan tailored to your fitness goals, schedule, and any
                    physical limitations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="mb-6">
                  <AccordionTrigger className="text-2xl p-4">
                    Can I get a custom meal plan?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-800 p-4">
                    Yes, our certification can design a personalized workout
                    plan tailored to your fitness goals, schedule, and any
                    physical limitations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="mb-4">
                  <AccordionTrigger className="text-2xl p-4">
                    Are the trainers certified?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-800 p-4">
                    Yes, our certification can design a personalized workout
                    plan tailored to your fitness goals, schedule, and any
                    physical limitations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="shadow-md">
                  <AccordionTrigger className="text-2xl p-4">
                    Can I get a customer meal plan?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-800 p-4">
                    Yes, our certification can design a personalized workout
                    plan tailored to your fitness goals, schedule, and any
                    physical limitations.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
