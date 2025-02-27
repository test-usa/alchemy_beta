import { Outlet, useNavigate } from "react-router-dom";
import { Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { FaRegFilePdf } from "react-icons/fa";
import { SlDocs, SlEnvolopeLetter } from "react-icons/sl";
import { CiLocationArrow1, CiPhone } from "react-icons/ci";
import ArticleAndTipsNav from "@/section/ArticleAndTips/ArticleAndTipsNav";

const TrackerPage = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    navigate("/tracker/water-tracker", { replace: true });
  }, [navigate]);

  return (
    <div className="container mx-auto  flex flex-col md:flex-row lg:flex-row px-4 mt-20">
      <div className="w-full flex justify-center">
        <div className="container flex flex-col md:flex-row lg:flex-row px-4 mt-10">
          {/* Sidebar */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative">
            {/* Sidebar Toggle Button (Placed Before Sidebar) */}
            <div className="md:hidden flex justify-start">
              <button
                className="p-1 bg-[#6636EE] text-white rounded-full"
                onClick={() => setIsSidebarOpen(true)}
              >
                <div className="flex gap-1 justify-center items-center px-2">
                  <Menu size={20} />
                  <p className="text-md font-semibold">Services Menu</p>
                </div>
              </button>
            </div>

            {/* Sidebar */}
            <div
              className={`fixed md:static top-0 left-0 h-full md:h-auto bg-white shadow-md md:shadow-none w-64 md:w-auto transition-transform transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
                  Categories
                </h2>
                <ArticleAndTipsNav />

                {/* Contact Information */}
                <div className="border p-5 rounded-md my-5 ">
                  <h2 className="text-xl font-semibold text-[#6636EE]  mb-4">
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

                {/* Brochures */}
                <div className="border p-5 rounded-md my-5 ">
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

                <div className="rounded my-5">
                  <img
                    className="w-full"
                    src="https://img.freepik.com/free-photo/young-guy-aged-man-sitting-sofa_23-2148030251.jpg?t=st=1738925315~exp=1738928915~hmac=dc57c81d65b94f934dd739ec8680131abc5c14430a0cd79e527c173d57557cad&w=1380"
                    alt="Help Image"
                  />
                  <div className="bg-[#6636EE] text-white p-2 text-center">
                    <p className="text-xl mb-2">How Can We Help?</p>
                    <p className="flex justify-center items-center gap-2 text-sm mb-1">
                      {" "}
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
            </div>

            {/* Content */}
            <div className="flex-1 pl-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackerPage;
