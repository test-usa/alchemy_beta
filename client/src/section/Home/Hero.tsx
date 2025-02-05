import athlete from "../../assets/Running-athlete.png"

const Hero = () => {
  return (
    <div className="h-[975px]">
       <div className="relative w-full min-h-screen flex items-center justify-center bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('https://gymfluencerscom-1eff6.kxcdn.com/wp-content/uploads/2023/05/Screenshot-2023-05-24-at-12.47.20-1024x564.png.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="w-[864px] h-[390px] text-white max-w-lg">
          <h2 className="text-3xl md:text-5xl font-light">
            TOTALU YOUR
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
              PERSONALIZED PATHWAY TO
            </span>
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
              ACHIEVING YOUR
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-light">DREAMS!</h2>
        </div>

        {/* Athlete Image */}
        <div className=" w-[538px] h-[825px] relative  mt-10 md:mt-0">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          <img
            src={athlete}
            alt="Athlete"
            className="relative w-[538px] h-[825px] top-[64px] object-cover"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero