import { HiCheck } from "react-icons/hi";

const BodyStamina = () => {
  return (
    <div className="mt-12 flex flex-col md:flex-row w-full max-w-[1320px] h-auto md:h-[610px] gap-6 md:gap-[132px] mx-auto px-4 md:px-0">
      <div className="md:w-1/3 w-full flex justify-center items-center">
        <div className="h-[300px] md:h-[610px] w-full md:w-[700px] overflow-hidden shadow-md">
          <img
            src="https://img.freepik.com/free-photo/incognito-shirtless-sportsman-posing-gym_7502-5122.jpg?t=st=1738732350~exp=1738735950~hmac=b5b393923209c7229ceadd75e995bace1fb67dd7ceed9906ddc9bc29272a5fbf&w=996"
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
            <div className="flex items-center gap-2 bg-white p-2">
              <button className="p-1 w-8 h-8 md:w-10 md:h-10 bg-transparent text-gray-400 rounded-full shadow-md flex items-center justify-center border border-gray-400">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm md:text-base">
                Vite quam touror enim est pharetra integer
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-2">
              <button className="p-1 w-8 h-8 md:w-10 md:h-10 bg-primary text-gray-400 rounded-full shadow-md flex items-center justify-center border border-gray-400">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm md:text-base">
                Morbi vitae tortor at enim est pharetra integer
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-2">
              <button className="p-1 w-8 h-8 md:w-10 md:h-10 bg-transparent text-gray-400 rounded-full shadow-md flex items-center justify-center border border-gray-400">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm md:text-base">
                Curabitur non nulla sit amet nisl tempus
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-2">
              <button className="p-1 w-8 h-8 md:w-10 md:h-10 bg-transparent text-gray-400 rounded-full shadow-md flex items-center justify-center border border-gray-400">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm md:text-base">
                Vestibulum ante ipsum primis in faucibus
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-2">
              <button className="p-1 w-8 h-8 md:w-10 md:h-10 bg-transparent text-gray-400 rounded-full shadow-md flex items-center justify-center border border-gray-400">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm md:text-base">
                Vestibulum ante ipsum primis in faucibus
              </p>
            </div>
          </div>
        </div>

        <button className="mt-6 w-full md:w-[157px] h-10 md:h-[48px] bg-primary text-white p-4 rounded-[4px] flex justify-center items-center hover:bg-blue-700 transition duration-300 text-sm md:text-[16px] leading-[26.24px]">
          See More
        </button>
      </div>
    </div>
  );
};

export default BodyStamina;
