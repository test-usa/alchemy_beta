import athlete from "../../assets/Running-athlete.png"

const Hero = () => {
  return (

       <div className="relative w-full h-[975px] flex items-center justify-center bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('https://gymfluencerscom-1eff6.kxcdn.com/wp-content/uploads/2023/05/Screenshot-2023-05-24-at-12.47.20-1024x564.png.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-20 md:px-12 flex flex-col md:flex-row items-center justify-between">
  {/* Text Section */}
  <div className="w-[900px] text-white max-w-2xl font-sans relative">
    <h2 className="text-3xl md:text-6xl font-light">
      TOTALU YOUR
    </h2>
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
        ACHIEVING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#9E7CFE]">YOUR</span>
      </span>
    </h1>
    <h2 className="text-3xl md:text-6xl font-light">DREAMS!</h2>
  </div>

  {/* Athlete Image */}
  <div className="w-[900px] relative mt-10 md:mt-0 z-30">
    <div className="absolute inset-0 flex justify-center items-center ">
      <div className="w-[972px] h-[872px] md:w-[972px] md:h-[672px] bg-gradient-to-r from-[#FFFFFF]/30 to-[#C6C6C600]/30 rounded-full blur-[84px] relative  left-[26px]"></div>
    </div>
    <img
      src={athlete}
      alt="Athlete"
      className="relative w-[738px] h-[825px] top-[74px] z-10 object-fill"
    />
  </div>
</div>


    </div>
  
  )
}

export default Hero