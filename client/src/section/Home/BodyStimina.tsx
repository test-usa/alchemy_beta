import { useState } from "react";
import { HiCheck } from "react-icons/hi";

const BodyStamina = () => {
  const [clickedButton, setClickedButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setClickedButton(index);
  };

  return (
    <div className="bg-[#F9F9F9] flex justify-center py-16 px-4 md:px-0">
      <div className="flex flex-col md:flex-row w-full max-w-[1320px] items-center gap-12">

        {/* Left - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="max-w-[700px] h-auto md:h-[610px] overflow-hidden rounded-lg shadow-md">
            <img
              src="https://img.freepik.com/free-photo/front-view-sporty-woman-with-copy-space_23-2148499108.jpg?t=st=1738747270~exp=1738750870~hmac=67625eb21d8cf6cd2993ec4ba52abf187644dff48dcf9ad66b61b0e7d0672778&w=826"
              alt="Body Stamina"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right - Text & List */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight md:leading-[63.36px] tracking-[-1%] mb-6">
            Body of Stamina <br /> Strength
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            tempore debitis repellat adipisci unde veritatis dolore earum
            explicabo inventore consequatur.
          </p>

          {/* Features */}
          <div className="space-y-3">
            {[
              "Vite quam touror enim est pharetra integer",
              "Morbi vitae tortor at enim est pharetra integer",
              "Curabitur non nulla sit amet nisl tempus",
              "Vestibulum ante ipsum primis in faucibus",
              "Vestibulum ante ipsum primis in faucibus",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-3">
                <button
                  onClick={() => handleButtonClick(index)}
                  className={`p-2 w-8 h-8 md:w-10 md:h-10 transition-all duration-300 
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

          <button className="mt-6 w-full md:w-[180px] h-12 bg-primary text-white rounded-md flex justify-center items-center transition duration-300 text-base font-medium">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodyStamina;
