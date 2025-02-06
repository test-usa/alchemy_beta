import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { SearchIcon, User2, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"

const navLinks = [
  {
    lebel: "Home",
    href: "/",
  },
  {
    lebel: "Nutrition",
    href: "/nutrition",
  },
  {
    lebel: "Meditation",
    href: "/meditation",
  },
  {
    lebel: "Workout",
    href: "/workout",
  },
  {
    lebel: "Tracker",
    href: "/tracker",
  },
  {
    lebel: "Articles & Tips",
    href: "/articles & tips",
  },
  {
    lebel: "Shop",
    href: "/shop",
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto h-[88px] flex items-center justify-between px-4">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="TotalU Logo"
            className="w-[110px] h-[85px]"
          />
        </Link>

        {/* Mobile Menu Toggle (visible on small screens only) */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#5A5C5F] hover:bg-gray-200 rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Center: Navigation (visible on large screens) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, lebel }, i) => (
            <NavLink
              key={i}
              to={href}
              className={({ isActive }) =>
                "font-normal text-[16px] font-sans transition-colors gap-[36px] " +
                (isActive
                  ? "text-primary"
                  : "text-[#5A5C5F] hover:text-primary")
              }
            >
              {lebel}
            </NavLink>
          ))}
        </nav>

        {/* Right: Icons and Button (visible on large screens) */}
        <div className="hidden lg:flex w-[277px] items-center gap-[36px] text-[#5A5C5F] font-normal">
          <Link
            to="/login"
            className="w-[24px] h-[24px] rounded-full hover:bg-opacity-90 transition-colors"
          >
            <User2 />
          </Link>
          <Link
            to="/login"
            className="w-[24px] h-[24px] rounded-full hover:bg-opacity-90 transition-colors"
          >
            <SearchIcon />
          </Link>

          <Button size={"lg"} className="font-sans text-[16px]">
            <Link to="/">Start TotalU</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map(({ href, lebel }, i) => (
              <NavLink
                key={i}
                to={href}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  "font-normal text-[16px] font-sans transition-colors " +
                  (isActive
                    ? "text-purple-600"
                    : "text-[#5A5C5F] hover:text-purple-600")
                }
              >
                {lebel}
              </NavLink>
            ))}

            <div className="flex items-center gap-[36px] text-[#5A5C5F] font-normal">
              <Link
                to="/login"
                className="w-[24px] h-[24px] rounded-full hover:bg-opacity-90 transition-colors"
              >
                <User2 />
              </Link>
              <Link
                to="/login"
                className="w-[24px] h-[24px] rounded-full hover:bg-opacity-90 transition-colors"
              >
                <SearchIcon />
              </Link>

              <Button size={"lg"} className="font-sans text-[16px]">
                <Link to="/">Start TotalU</Link>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
