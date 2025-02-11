import NutritionNavItems from "@/shared/NutritionNavItems";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Mail, Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from "react";
import Breadcrumbs from "@/components/breadcrumbs";

const NutritionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    navigate("/nutrition/intermittent-fasting", { replace: true });
  }, [navigate]);

  useEffect(() => {
    const titles: Record<string, string> = {
      "/nutrition/intermittent-fasting": "Intermittent Fasting",
      "/nutrition/weight-loss-program": "Weight Loss Program",
      "/nutrition/keto": "Keto",
      "/nutrition/keto-meal-plan": "Keto Meal Plan",
      "/nutrition/macros": "Macros",
    };

    setTitle(titles[location.pathname] || "");
  }, [location]);

  return (
    <div>
      <Breadcrumbs
        bg="https://img.freepik.com/premium-photo/panorama-with-fresh-fruits-water-coconut-kiwi-melon-lemon-lychee-tangerine-peach-plum-lime-very-tasty-dessert-new-year-christmas-halloween_659987-2206.jpg?w=1380"
        title={title}
      />
      <div className="container mx-auto px-4 mt-10">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative">
          {/* Sidebar Toggle Button (Placed Before Sidebar) */}
          <div className="md:hidden flex justify-start">
            <button
              className="p-1 bg-[#6636EE] text-white rounded-full"
              onClick={() => setIsSidebarOpen(true)}
            >
              <div className="flex gap-1 justify-center items-center px-2">
                <Menu size={20} />
                <p className="text-md font-semibold">Menu</p>
              </div>
            </button>
          </div>

          {/* Sidebar */}
          <div
            className={`fixed md:static top-0 left-0 h-full md:h-auto bg-white shadow-md md:shadow-none w-64 md:w-auto transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } md:translate-x-0 z-40`}
          >
            <button
              className="md:hidden absolute top-4 right-4 text-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={24} />
            </button>

            <div className="border border-gray-200 rounded p-6 mt-12 md:mt-0">
              <h2 className="text-xl font-bold mb-4 text-[#6636EE] border-b pb-2">
                Our Services
              </h2>
              <NutritionNavItems />

            </div>
            <div className="rounded my-5 px-3 md:px-0">
              <img
                className="w-full"
                src="https://img.freepik.com/free-photo/young-guy-aged-man-sitting-sofa_23-2148030251.jpg?t=st=1738925315~exp=1738928915~hmac=dc57c81d65b94f934dd739ec8680131abc5c14430a0cd79e527c173d57557cad&w=1380"
                alt="Help Image"
              />
              <div className="bg-[#6636EE] text-white p-2 text-center">
                <p className="md:text-xl mb-2">How Can We Help?</p>
                <p className="flex justify-center items-center gap-2 text-sm mb-1">
                  <Mail size={14} />
                  info@totalu.com
                </p>
                <p className="flex justify-center items-center gap-2 text-sm">
                  <Phone size={14} />
                  +123 905 6566
                </p>
              </div>
            </div>
          </div>


          {/* Content */}
          <div className="col-span-4 md:pl-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;
