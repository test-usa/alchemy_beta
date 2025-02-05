import { HiCheck } from "react-icons/hi";
import body from "../../assets/image/body1.jpg";

const BodyStamina = () => {
  return (
    <div className=" mt-12 flex w-[1320px] h-[610px] gap-[132px]  mx-auto">
      <div className="md:w-1/3  flex justify-center items-center">
        <div className=" h-[610px] w-[700px]  overflow-hidden shadow-md">
          <img
            src={body}
            alt="Body Stamina"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="md:w-2/3 h-[610px]  flex flex-col justify-between">
        <div>
          <h1 className="text-[48px] font-[700] text-primary leading-[63.36px] tracking-[-1%] mb-4">
            Body of Stamina <br /> Strength
          </h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            <br /> tempore debitis repellat adipisci unde veritatis dolore earum{" "}
            <br /> explicabo inventore consequatur.
          </p>

          <div className="grid grid-cols-1 gap-1">
            <div className="flex items-center gap-2 bg-white p-2">
              <button className="p-1 w-10 h-10 bg-transparent text-gray-400 rounded-full shadow-md flex items-center justify-center border border-gray-400">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm">
                Vite quam touror enim est pharetra integer
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-2">
              <button className="p-1 w-10 h-10 bg-primary text-gray-400 rounded-full shadow-md flex items-center justify-center border border-gray-400">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm">
                Morbi vitae tortor at enim est pharetra integer
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-2">
              <button className="p-1 w-10 h-10 bg-transparent text-gray-400 rounded-full shadow-md flex items-center justify-center border border-gray-400">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm">
                Curabitur non nulla sit amet nisl tempus
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-2">
              <button className="p-1 w-10 h-10 bg-transparent text-gray-400 rounded-full shadow-md flex items-center justify-center border border-gray-400">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm">
                Vestibulum ante ipsum primis in faucibus
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-2">
              <button className="p-1 w-10 h-10 bg-transparent text-gray-400 rounded-full shadow-md flex items-center justify-center border border-gray-400">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm">
                Vestibulum ante ipsum primis in faucibus
              </p>
            </div>
          </div>
        </div>

        <button className=" mt-6 w-[157px] h-[48px] bg-primary text-white p-4 rounded-[4px] px-[11px] flex justify-center items-center hover:bg-blue-700 transition duration-300 font-poppins font-normal text-[16px] leading-[26.24px]">
          See More
        </button>
      </div>
    </div>
  );
};

export default BodyStamina;
