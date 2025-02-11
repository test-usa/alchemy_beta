import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchIcon, User2, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import AuthProvider, { AuthContext } from "@/auth/AuthContext";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Nutrition",
    href: "/nutrition",
  },
  {
    label: "Meditation",
    href: "/mindhandling",
  },
  {
    label: "Workout",
    href: "/workout",
  },
  {
    label: "Tracker",
    href: "/tracker",
  },
  {
    label: "Articles & Tips",
    href: "/articles-and-tips",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Goal",
    href: "/goal/physical-goals",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  const handleLogOut = async () => {
    try {
      const res = await fetch(
        "https://alchemy-beta-server-3.onrender.com/api/logout",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        setUser(null);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FAFAFA] shadow-md z-50">
      <div className="max-w-7xl mx-auto h-[88px] flex items-center justify-between px-4">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="TotalU Logo" className="w-[110px] h-[85px]" />
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
          {navLinks.map(({ href, label }, i) => (
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
              {label}
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
          {user ? (
                  <button
                    className="px-5 py-3 rounded-lg shadow-md text-white"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">Start TotalU</Link>
                )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map(({ href, label }, i) => (
              <NavLink
                key={i}
                to={href}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  "font-normal text-[16px] font-sans transition-colors" +
                  (isActive
                    ? "text-primary"
                    : "text-[#5A5C5F] hover:text-primary")
                }
              >
                {label}
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
                {user ? (
                  <button
                    className="px-5 py-3 rounded-lg shadow-md text-white"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">Start TotalU</Link>
                )}
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
