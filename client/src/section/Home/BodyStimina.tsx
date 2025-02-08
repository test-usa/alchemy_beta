import { useState } from "react";
import { HiCheck } from "react-icons/hi";

const BodyStamina = () => {
  const [clickedButton, setClickedButton] = useState<number | null>(null); // No default active button

  const handleButtonClick = (index: number) => {
    setClickedButton(index);
  };

  return (
    <div className="bg-[#F9F9F9] h-[797px] mx-auto flex justify-center">
      <div className="mt-[93.5px] mb-[93.5px] relative flex flex-col md:flex-row w-full max-w-[1320px] h-auto md:h-[610px] gap-6 md:gap-[132px] mx-auto md:px-0">
        <div className="md:w-1/3 w-full flex justify-center items-center">
          <div className="h-[610px] w-[650] md:h-[610px] md:w-[700px] overflow-hidden shadow-md">
            <img
              src="https://img.freepik.com/free-photo/front-view-sporty-woman-with-copy-space_23-2148499108.jpg?t=st=1738747270~exp=1738750870~hmac=67625eb21d8cf6cd2993ec4ba52abf187644dff48dcf9ad66b61b0e7d0672778&w=826"
              alt="Body Stamina"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3 w-full h-auto md:h-[610px] flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-[48px] font-[700] text-primary leading-tight md:leading-[63.36px] tracking-[-1%] mb-4">
              Body of Stamina <br /> Strength
            </h1>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              <br className="hidden md:block" /> tempore debitis repellat adipisci
              unde veritatis dolore earum
              <br className="hidden md:block" /> explicabo inventore consequatur.
            </p>

            <div className="grid grid-cols-1 gap-2">
              {[
                "Vite quam touror enim est pharetra integer",
                "Morbi vitae tortor at enim est pharetra integer",
                "Curabitur non nulla sit amet nisl tempus",
                "Vestibulum ante ipsum primis in faucibus",
                "Vestibulum ante ipsum primis in faucibus",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-2 p-2">
                  <button
                    onClick={() => handleButtonClick(index)}
                    className={`p-1 w-8 h-8 md:w-10 md:h-10 transition-all duration-300 
                    ${clickedButton === index
                        ? "bg-primary text-white"
                        : "bg-transparent text-gray-400"
                      } 
                    rounded-full shadow-md flex items-center justify-center border border-gray-400`}
                  >
                    <HiCheck />
                  </button>
                  <p className="text-gray-700 text-sm md:text-base">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="mt-6 w-full md:w-[157px] h-10 md:h-[48px] bg-primary text-white p-4 rounded-[4px] flex justify-center items-center hover:bg-blue-700 transition duration-300 text-sm md:text-[16px] leading-[26.24px]">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodyStamina;
