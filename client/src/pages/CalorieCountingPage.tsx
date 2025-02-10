import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LiaHeadphonesAltSolid } from "react-icons/lia";
import CalorieNavItem from "@/shared/CalorieNavItem";
import { Menu, X } from "lucide-react";

const CalorieCountingPage = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        navigate("/calorie/calorie-counting", { replace: true });
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
                    className={`fixed md:static top-0 left-0 h-full md:h-auto bg-white shadow-md md:shadow-none w-64 md:w-auto transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 z-50`}
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
                        <CalorieNavItem />
                    </div>
                </div>

                {/* Help Section */}
                <div className="w-full max-w-[375px] mx-auto">
                    <div className="w-full h-auto min-h-[250px] md:h-[320px] rounded-[4px] relative overflow-hidden shadow-lg flex flex-col items-center">
                        <img
                            src="https://m.media-amazon.com/images/I/61OsDlWzdcL._AC_UY350_.jpg"
                            alt="Additional Workout Image"
                            className="w-full h-auto object-cover"
                        />

                        {/* Overlay Section */}
                        <div className="absolute bottom-0 w-full bg-[#6636EEE5] p-4 flex flex-col items-center text-center">
                            <div className="w-[58px] h-[58px] bg-white rounded-full flex justify-center items-center shadow-lg">
                                <LiaHeadphonesAltSolid size={25} className="text-[#6636EE]" />
                            </div>
                            <h1 className="text-white font-semibold mt-3 text-base sm:text-lg">How can we help?</h1>
                            <p className="text-white text-xs sm:text-sm mt-1">info.gmail.com</p>
                            <p className="text-white text-xs sm:text-sm">+798725783</p>
                        </div>
                    </div>
                </div>



            </div>

            {/* Content Section */}
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default CalorieCountingPage;
