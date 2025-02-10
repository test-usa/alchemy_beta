import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Breadcrumbs from "@/components/breadcrumbs";
import GoalNavItems from "@/shared/GoalNavItems";

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
    };
    setTitle(titles[location.pathname] || "");
  }, [location]);

  return (
    <div>
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
          } md:translate-x-0 z-50`}
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

export default GoalPage;
