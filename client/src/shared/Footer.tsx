import Logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="h-[624px] bg-black text-white flex items-center justify-center">
      <div className=" px-4 py-12 md:py-16">
        {/* Main Container */}
        <div className="lg:w-[1320px] flex flex-col md:flex-row md:justify-between items-center p-[10px] gap-[10px]">
          {/* Left Section */}
          <div className="flex flex-col items-start text-white p-8 rounded-lg w-96 shadow-lg">
     <div className="w-[235px] h-[68px] flex gap-4 items-center">
       {/* Logo */}
       <div className="mb-4">
        <img src={Logo} alt="TotalU" className="h-12" />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold">TotalU</h1>
     </div>

      {/* Description */}
      <p className="text-gray-300 mt-2">
        We offer top-notch fitness services designed to help you reach your goals.
      </p>

      {/* Newsletter Section */}
      <div className="w-full mt-6">
        <h2 className="text-lg font-semibold mb-2">Newsletter</h2>

        {/* Input Field */}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
        />

        {/* Subscribe Button */}
        <button className="w-full bg-primary text-white font-semibold py-3 rounded-md mt-4">
          Subscribe
        </button>
      </div>
    </div>

          {/* Right Section */}
          <div className=" text-white p-6">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-sm">
        {/* Service Section */}
        <div>
          <h3 className="font-semibold mb-2">Service</h3>
          <ul className="space-y-1">
            <li>Nutrition</li>
            <li>Meditation</li>
            <li>Workout</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>Community</li>
          </ul>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="font-semibold mb-2">Tools</h3>
          <ul className="space-y-1">
            <li>Water</li>
            <li>Weight</li>
            <li>Goal</li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
        </div>
      </div>
    </footer>
  );
}