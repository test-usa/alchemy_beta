

export default function Footer() {
  return (
    <footer className="h-[624px] bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Left Section */}
          <div className="flex-1 flex flex-col justify-start gap-4">
          {/* Logo + Title */}
          <div className="flex items-center gap-2">
            {/* Replace with your actual logo image if available */}
            <img
              src="/images/totalu_logo.png"
              alt="TotalU Logo"
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold">TotalU</span>
          </div>

          {/* Short Description */}
          <p className="text-gray-400 max-w-sm">
            We offer top-notch fitness services designed to help you reach
            your goals.
          </p>

          {/* Newsletter Section */}
          <div className="mt-4">
            <h3 className="mb-2 font-semibold">Newsletter</h3>
            <div className="flex flex-col gap-2 w-full max-w-xs">
              <input
                type="email"
                placeholder="Email"
                className="bg-white text-black px-4 py-2 rounded-md focus:outline-none"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

          {/* Right Section */}
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[10px]">
          {/* Service */}
          <div>
            <h4 className="mb-2 font-semibold">Service</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="#">Nutrition</a></li>
              <li><a href="#">Meditation</a></li>
              <li><a href="#">Workout</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-2 font-semibold">Resources</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="mb-2 font-semibold">Tools</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="#">Water</a></li>
              <li><a href="#">Weight</a></li>
              <li><a href="#">Goal</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-2 font-semibold">About</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
