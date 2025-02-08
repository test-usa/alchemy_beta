import { HiCheck } from 'react-icons/hi'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const WeightLossProgram = () => {
  return (
    <div>

      {/* First section */}
      <div className='md:grid grid-cols-2 gap-3 md:gap-5 lg:gap-8 mb-5 lg:mb-10'>
        <img className='w-full mb-3' src="https://img.freepik.com/premium-photo/happy-young-woman-joggling-oranges-kitchen-background_116317-3349.jpg?w=996" alt="" />

        <div className="grid grid-cols-1 gap-1">
          <div>
            <h3 className='font-bold text-xl md:text-3xl'>Planning and Prep</h3>
            <p className='mt-2 mb-3'>Our nutrition team love the benefit of exercise and healthy food Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laboriosam quis ullam quisquam repellat </p>
            <div className="flex items-center gap-2 bg-white p-2">
              <button className="flex items-center justify-center rounded-full text-[#6636EE]  border border-[#6636EE] p-1">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm">
                Nutrition assessment
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-2">
              <button className="flex items-center justify-center rounded-full text-[#6636EE] border border-[#6636EE] p-1">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm">
                Meal Planning and Analysis
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-2">
              <button className="flex items-center justify-center rounded-full text-[#6636EE]  border border-[#6636EE] p-1">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm">
                Weight assessment
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Second Section */}
      <div className='flex flex-col-reverse md:grid grid-cols-2 gap-3 md:gap-5 lg:gap-8 mb-5 lg:mb-10'>
        <div className="grid grid-cols-1 gap-1">
          <div>
            <h3 className='font-bold text-xl md:text-3xl'>Planning and Prep</h3>
            <p className='mt-2 mb-3'>Our nutrition team love the benefit of exercise and healthy food Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laboriosam quis ullam quisquam repellat perspiciatis provident. Odio minima asperiores</p>
            <div className="flex items-center gap-2 bg-white p-2">
              <button className="flex items-center justify-center rounded-full text-[#6636EE]  border border-[#6636EE] p-1">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm">
                Nutrition assessment
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-2">
              <button className="flex items-center justify-center rounded-full text-[#6636EE] border border-[#6636EE] p-1">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm">
                Meal Planning and Analysis
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-2">
              <button className="flex items-center justify-center rounded-full text-[#6636EE]  border border-[#6636EE] p-1">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm">
                Weight assessment
              </p>
            </div>
          </div>

        </div>

        <img className='w-full' src="https://img.freepik.com/free-photo/expressive-pretty-woman-posing_344912-1393.jpg?t=st=1739001537~exp=1739005137~hmac=4ee33ff6daf5b9155bd6675d18fbc932bb97cc9d4e7256b0edf1a13cfcb00ca7&w=1380" alt="" />
      </div>

{/* Weight Loss Program */}
<h2 className="text-xl lg:text-3xl font-bold mb-4">Weight Loss Program</h2>
<p className="mb-4">Our nutrition team love the benefit of exercise and healthy food Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laboriosam quis ullam quisquam repellat perspiciatis provident. Odio minima asperiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolorem, ducimus in cum incidunt, eligendi vero dignissimos qui officiis laudantium error quaerat neque laboriosam harum perferendis possimus beatae? Voluptas, sunt.</p>
<p className='mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium nihil officia aspernatur magnam eos tempora minus! Voluptatum, nihil inventore.</p>
      <p className="border-b-2 border-b-gray-300 mt-4 mb-2"></p>

      {/* Three Photos */}
      <div className="grid grid-cols-3 gap-4 my-5">
        <img
          src="https://img.freepik.com/free-photo/portrait-smiling-senior-man-juggling-whole-lemons-while-preparing-kitchen_23-2148128075.jpg?t=st=1739001771~exp=1739005371~hmac=29add6b106d7367b8439245f12af4b129359a6afb8a751a1cfd5e3e2ddea7764&w=826"
          alt=""
          className="w-full rounded"
        />
        <img
          src="https://img.freepik.com/premium-photo/high-resolution-digital-art-wallpaper-background_783884-370112.jpg?w=826"
          alt=""
          className="w-full rounded"
        />
        <img
          src="https://img.freepik.com/free-photo/smiling-man-leaning-desk-with-many-colorful-fruits_23-2147855392.jpg?t=st=1739001732~exp=1739005332~hmac=c512c2f3aed27a9cb038aa74f12aaa008bc9623bad65e47630ff119581b04122&w=826"
          alt=""
          className="w-full rounded"
        />
      </div>

      {/* FAQ */}
      <div>
        <h3 className='font-bold text-xl lg:text-3xl'>Frequently Asked Questions</h3>
        <p className='mt-2 mb-3'>Our nutrition team love the benefit of exercise and healthy food Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laboriosam quis ullam quisquam repellat </p>

        <Accordion className='mt-5 mb-10' type="single" collapsible>
          <AccordionItem className='border border-zinc-200 rounded px-5 mb-4' value="item-1">
            <AccordionTrigger className='text-lg'>How can I start nutrition diet?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta dolore aliquam, labore maxime laboriosam suscipit velit ipsa recusandae quo tenetur nemo nihil beatae, id veniam veritatis perferendis voluptatum neque dolor amet adipisci quibusdam esse reprehenderit. Numquam ut et alias.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='border border-zinc-200 rounded px-5 mb-4' value="item-2">
            <AccordionTrigger className='text-lg'>What fees do you charge?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta dolore aliquam, labore maxime laboriosam suscipit velit ipsa recusandae quo tenetur nemo nihil beatae, id veniam veritatis perferendis voluptatum neque dolor amet adipisci quibusdam esse reprehenderit. Numquam ut et alias.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='border border-zinc-200 rounded px-5 mb-4' value="item-3">
            <AccordionTrigger className='text-lg'>How does your weight loss program work?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta dolore aliquam, labore maxime laboriosam suscipit velit ipsa recusandae quo tenetur nemo nihil beatae, id veniam veritatis perferendis voluptatum neque dolor amet adipisci quibusdam esse reprehenderit. Numquam ut et alias.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='border border-zinc-200 rounded px-5 mb-4' value="item-4">
            <AccordionTrigger className='text-lg'>How long do you need to follow the advice?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta dolore aliquam, labore maxime laboriosam suscipit velit ipsa recusandae quo tenetur nemo nihil beatae, id veniam veritatis perferendis voluptatum neque dolor amet adipisci quibusdam esse reprehenderit. Numquam ut et alias.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>


    </div>
  )
}

export default WeightLossProgram