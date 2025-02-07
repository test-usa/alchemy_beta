import NutritionNavItems from "@/shared/NutritionNavItems";
import { Outlet } from "react-router-dom";
import { Mail, Phone } from 'lucide-react';

const NutritionPage = () => {
  return (
    <div className="container mx-auto flex px-4 mt-10">
      {/* Sidebar */}
      <div className="w-64 ">
        <div className="border border-gray-200 rounded p-6">
          <h2 className="text-xl font-bold mb-4 text-[#6636EE] border-b border-b-gray-200 pb-2">Our Services</h2>
          <NutritionNavItems />
        </div>

        <div className="w-64 rounded my-5">
          <img className="w-64" src="https://img.freepik.com/free-photo/young-guy-aged-man-sitting-sofa_23-2148030251.jpg?t=st=1738925315~exp=1738928915~hmac=dc57c81d65b94f934dd739ec8680131abc5c14430a0cd79e527c173d57557cad&w=1380" alt="Help Image" />
          <div className="bg-[#6636EE] text-white p-2 text-center">
            <p className="text-xl mb-2">How Can We Help?</p>
            <p className="flex justify-center items-center gap-2 text-sm mb-1"> <Mail size={14} />info@totalu.com</p>
            <p className="flex justify-center items-center gap-2 text-sm"><Phone size={14}/>+123 905 6566</p>
          </div>
        </div>
      </div>



      {/* Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default NutritionPage;