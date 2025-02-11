import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MindNavItems from "@/shared/MindNavItems";
import { FaRegFilePdf } from "react-icons/fa";
import { SlDocs, SlEnvolopeLetter } from "react-icons/sl";
import { CiLocationArrow1, CiPhone } from "react-icons/ci";
import { LiaHeadphonesAltSolid } from "react-icons/lia";
import { Menu, X } from "lucide-react";

const MindHandlingPage = () => {

    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        navigate("/mindhandling/meditation", { replace: true });
    }, [navigate]);

    return (
        <div className="container mx-auto flex flex-col sm:flex-row px-4  ">
            {/* Sidebar Toggle Button */}
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

            {/* Sidebar and Help Section Wrapper */}
            <div className="sm:w-64 lg:w-1/4 flex flex-col gap-6 ">
                {/* Sidebar */}
                <div
                    className={`fixed md:static top-0 left-0 h-full md:h-auto bg-white shadow-md md:shadow-none w-64 md:w-auto transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 z-40`}
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
                        <MindNavItems />
                    </div>
                </div>
                {/* Contact Information */}
                <div className="hidden sm:block w-full max-w-[375px] mx-auto  max-auto border p-5 rounded-md ">
                    <h2 className="text-xl font-semibold text-[#6636EE]  mb-4">
                        Contact
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
                <div className="hidden sm:block w-full max-w-[375px] mx-auto max-auto border p-5 rounded-md ">
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

                {/* Help Section */}
                <div className="hidden sm:block  w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded-[4px] gap-[10px] relative mt-5">
                    <img
                        src="https://m.media-amazon.com/images/I/61OsDlWzdcL._AC_UY350_.jpg"
                        alt="Additional Workout Image"
                        className="w-full h-auto object-cover"
                    />
                    <div className="w-full h-[141px] absolute bg-[#6636EEE5] z-0">
                        <div className="w-full h-full relative flex justify-center">
                            <div className="w-[58px] h-[58px] bg-white rounded-full absolute -mt-7 z-20 flex justify-center items-center">
                                <LiaHeadphonesAltSolid size={25} className="relative z-10" />
                            </div>
                            <div className="w-[70px] h-[70px] rounded-full bg-[#6636EEE5] absolute -top-8"></div>
                            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-[87px]">
                                <div className="w-full h-full mt-8 flex flex-col items-center">
                                    <h1 className="text-white text-center text-lg font-semibold">How can we help?</h1>
                                    <h1 className="text-center mt-2 text-white text-sm">info.gmail.com</h1>
                                    <h1 className="text-center text-white text-sm">+798725783</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            {/* Content Section */}
            <div className="flex-1 m-3 ">
                <Outlet />
            </div>
        </div>
    );
};

export default MindHandlingPage;