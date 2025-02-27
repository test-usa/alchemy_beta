import athlete from "../../assets/Running-athlete.png";

const Hero = () => {
  return (
    <div className="relative lg:w-full md:h-[975px] md:py-1 py-20 flex items-center justify-center bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('https://gymfluencerscom-1eff6.kxcdn.com/wp-content/uploads/2023/05/Screenshot-2023-05-24-at-12.47.20-1024x564.png.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left">
        {/* Text Section */}
        <div className="w-full md:w-[900px] text-white max-w-3xl font-sans relative">
          <h2 className="text-4xl md:text-6xl font-light">TOTALU YOUR</h2>
          <h1 className="text-4xl md:text-6xl leading-[1.2] font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9E7CFE] to-[#FFFFFF]">
              PERSONALIZED
            </span>
          </h1>
          <h1 className="text-4xl md:text-6xl leading-[1.2] font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9E7CFE] to-[#FFFFFF]">
              PATHWAY TO
            </span>
          </h1>
          <h1 className="text-4xl md:text-6xl leading-[1.2] font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9E7CFE] to-[#FFFFFF]">
              ACHIEVING{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#9E7CFE]">
                YOUR
              </span>
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-light">DREAMS!</h2>
        </div>

        {/* Athlete Image */}
        <div className="w-full md:w-[900px] lg:w-[1000px] hidden relative mt-10 md:mt-0 z-30 lg:flex justify-center">
          <div className="absolute inset-0 flex justify-center items-center ">
            <div className="relative top-10 w-[300px] h-[300px] md:w-[972px] md:h-[672px] lg:w-[752px] lg:h-[772px] bg-gradient-to-r from-[#C6C6C600]/30 via-[#FFFFFF]/30 to-[#C6C6C600]/30 rounded-full blur-[84px]"></div>
          </div>
          <img
            src={athlete}
            alt="Athlete"
            className="relative w-[450px] h-[550px] md:w-[738px] md:h-[825px] lg:top-[75px] top-[88px] z-10 object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
