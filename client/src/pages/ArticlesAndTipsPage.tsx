import NutritionNavItems from "@/shared/NutritionNavItems";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { SlDocs, SlEnvolopeLetter } from "react-icons/sl";
import { CiLocationArrow1, CiPhone } from "react-icons/ci";
import Breadcrumbs from "@/components/breadcrumbs";
import ArticleAndTipsNav from "@/section/ArticleAndTips/ArticleAndTipsNav";

const ArticlesAndTipsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    navigate("/articles-and-tips/body-building", { replace: true });
  }, [navigate]);

  return (
    <div className="w-full">
      <Breadcrumbs
        bg="https://static.wixstatic.com/media/0e0e1e_0c8aae9e3ac34ac999469617a8a54208~mv2.jpg/v1/fill/w_320,h_128,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0e0e1e_0c8aae9e3ac34ac999469617a8a54208~mv2.jpg"
        title="Article & Tips"
      />
      <div className="flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="container max-w-7xl flex flex-col md:flex-row px-4 mt-6 md:mt-10">
          {/* Sidebar */}
          <div className="relative w-full md:w-1/3 lg:w-1/4 xl:w-1/5">
            {/* Sidebar Toggle Button */}
            <div className="md:hidden flex justify-start">
              <button
                className="p-2 bg-[#6636EE] text-white rounded-lg"
                onClick={() => setIsSidebarOpen(true)}
              >
                <div className="flex gap-2 justify-center items-center px-3">
                  <Menu size={20} />
                  <p className="text-md font-semibold">Services Menu</p>
                </div>
              </button>
            </div>

            {/* Sidebar */}
            <div
              className={`fixed md:static top-0 left-0 h-full md:h-auto bg-white shadow-lg md:shadow-none w-72 md:w-auto transition-transform transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } md:translate-x-0 z-50`}
            >
              {/* Close Button for Mobile */}
              <button
                className="md:hidden absolute top-4 right-4 text-gray-700"
                onClick={() => setIsSidebarOpen(false)}
              >
                <X size={24} />
              </button>

              <div className="border border-gray-200 rounded p-6 mt-16 md:mt-0">
                <h2 className="text-xl font-bold mb-4 text-[#6636EE] border-b pb-2">
                  Categories
                </h2>
                <ArticleAndTipsNav />

                {/* Contact Information */}
                <div className="border p-5 rounded-md my-5">
                  <h2 className="text-xl font-semibold text-[#6636EE] mb-4">
                    Contacts
                  </h2>
                  {[
                    {
                      icon: <SlEnvolopeLetter />,
                      label: "Email",
                      value: "info@totalu.com",
                    },
                    { icon: <CiPhone />, label: "Phone", value: "64388867" },
                    {
                      icon: <CiLocationArrow1 />,
                      label: "Location",
                      value: "Street Road",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-[#EDE7FF] rounded-full flex items-center justify-center text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.label}</p>
                        <p className="text-sm text-gray-700">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 md:pl-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesAndTipsPage;
