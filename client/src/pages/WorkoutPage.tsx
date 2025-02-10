import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { SlEnvolopeLetter } from "react-icons/sl";
import { CiLocationArrow1, CiPhone } from "react-icons/ci";
import { LiaHeadphonesAltSolid } from "react-icons/lia";
import WorkoutNavItems from "@/shared/WorkoutNavItems";

const WorkoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/workout/routines", { replace: true }); 
  }, [navigate]);

  return (
    <div className="container mx-auto flex flex-col sm:flex-row px-4 mt-10 gap-6">
      {/* Sidebar */}
      <div className="  sm:w-64 lg:w-1/4">
        <div className=" w-[335px]  border border-gray-200 rounded p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-[#6636EE]">Our Services</h2>
          <WorkoutNavItems />
        </div>

        {/* Contact Information */}
        <div className=" w-[335px] border p-5 rounded-md my-5">
          <h2 className="text-xl font-semibold text-[#6636EE] mb-4">Contact</h2>
          {[{ icon: <SlEnvolopeLetter />, label: "Email", value: "info@totalu.com" },
          { icon: <CiPhone />, label: "Phone", value: "64388867" },
          { icon: <CiLocationArrow1 />, label: "Location", value: "Street Road" }].map((item, index) => (
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

        {/* Help Section */}
        <div className="w-[335px] h-[320px] rounded-[4px]  gap-[10px] relative  ">
          {
            <img
              src='https://m.media-amazon.com/images/I/61OsDlWzdcL._AC_UY350_.jpg'
              alt="Additional Workout Image"
              className="w-full h-auto object-cover"
            />
          }

          <div className="w-[335px] h-[141px] absolute bg-[#6636EEE5] z-0">
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
      <div className="flex-1 mr-42 ">
        <Outlet />
      </div>
    </div>
  );
};

export default WorkoutPage;