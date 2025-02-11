import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Breadcrumbs from "@/components/breadcrumbs";
import GoalNavItems from "@/shared/GoalNavItems";
import { LiaHeadphonesAltSolid } from "react-icons/lia";
import { FaRegFilePdf } from "react-icons/fa";
import { SlDocs } from "react-icons/sl";
import image from "../assets/image.png";

const GoalPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    navigate("/goal/physical-goals", { replace: true });
  }, [navigate]);

  useEffect(() => {
    const titles: Record<string, string>  = {
      "/goal/physical-goals": "Physical Goals",
      "/goal/financial-goals": "Financial Goals",
      "/goal/relationship-goals": "Relationship Goals",
      "/goal/travel": "Travel",
      "/goal/bank-goals": "Bank Goals",
      "/goal/your-goals": "Your Goals",
      "/goal/goal-details/:id": "Goal Details",
    };
    
    if (location.pathname.startsWith("/goal/goal-details/")) {
      setTitle("Goal Details");
    } else {
      setTitle(titles[location.pathname] || "");
    }
  }, [location]);

  return (
    <div className="mt-20">
      <Breadcrumbs
        bg="https://static.wixstatic.com/media/0e0e1e_0c8aae9e3ac34ac999469617a8a54208~mv2.jpg"
        title={title}
      />
    <div className="container mx-auto px-4 mt-10">

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative">
        {/* Sidebar Toggle Button (Placed Before Sidebar) */}
        <div className="md:hidden flex justify-start">
          <button
            className="p-1 bg-primary text-white rounded-full"
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
          className={`fixed md:static top-0 left-0 h-full md:h-auto bg-white shadow-md md:shadow-none w-64 md:w-auto transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-40 overflow-y-auto`}
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
            <GoalNavItems />
          </div>

          {/* Brochures */}
          <div className="border p-5 rounded-md my-6">
            <h2 className="text-xl font-semibold text-[#6636EE] mb-4">
              Brochures
            </h2>
            {[
              { icon: <FaRegFilePdf />, label: "Download.pdf" },
              { icon: <SlDocs />, label: "Download.docx" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <p className="text-sm text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>

          {/* help */}
          <div className="w-full h-[120px] rounded-[4px]  gap-[10px] relative  ">
            {
              <img
                src={image}
                alt="Additional Workout Image"
                className="w-full h-auto object-cover"
              />
            }

            <div className="w-full h-[120px] absolute bg-[#6636EEE5] z-0 pb-2">
              <div className="w-full h-full relative flex justify-center">
                <div className="w-[58px] h-[58px] bg-white rounded-full absolute -mt-7 z-20 flex justify-center items-center">
                  <LiaHeadphonesAltSolid size={25} className="relative z-10" />
                </div>
                <div className="w-[70px] h-[70px] rounded-full bg-[#6636EEE5] absolute -top-8 "></div>
                <div className="w-[213px] h-[87px]">
                  <div className="w-full h-full mt-8 flex justify-center">
                    <h1 className="text-white absolute text-center">
                      How can we help?
                    </h1>
                    <h1 className="text-center absolute mt-12 mx-3 text-white">
                      info.gmail.com
                    </h1>
                    <h1 className="text-center absolute pt-6 text-white">
                      +798725783
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="col-span-4 pl-0 lg:pl-5 md:pl-5">
          <Outlet />
        </div>
      </div>
    </div>
    </div>
  );
};

export default GoalPage;
