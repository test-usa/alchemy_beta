import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { SlDocs, SlEnvolopeLetter } from "react-icons/sl";
import { CiLocationArrow1, CiPhone } from "react-icons/ci";
import { LiaHeadphonesAltSolid } from "react-icons/lia";
import BlogNavItem from "@/shared/BlogNavItem";

const BlogPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/blog/challenge", { replace: true });
    }, [navigate]);

    return (
        <div className="container mx-auto flex gap-6 px-4">
            {/* Sidebar - Responsive Width */}
            <div className="hidden md:flex flex-col flex-[0.25] min-w-[250px] max-w-[350px]">
                <div className="border border-gray-200 rounded p-6">
                    <h2 className="text-xl font-bold mb-4 text-[#6636EE] border-b border-gray-200 pb-2">
                        All Community
                    </h2>
                    <BlogNavItem />
                </div>

                {/* Contact Information */}
                <div className="border p-5 rounded-md my-5">
                    <h2 className="text-xl font-semibold text-[#6636EE] mb-4">Contact</h2>
                    {[
                        { icon: <SlEnvolopeLetter />, label: "Email", value: "info@totalu.com" },
                        { icon: <CiPhone />, label: "Phone", value: "64388867" },
                        { icon: <CiLocationArrow1 />, label: "Location", value: "Street Road" },
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
                <div className="border p-5 rounded-md ">
                    <h2 className="text-xl font-semibold text-[#6636EE] mb-4">Brochures</h2>
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
                <div className=" hidden sm:block w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded-[4px] gap-[10px] relative mt-5">
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

            {/* Main Content - Fully Responsive */}
            <div className="flex-1 min-w-0">
                <Outlet />
            </div>
        </div>
    );
};

export default BlogPage;
