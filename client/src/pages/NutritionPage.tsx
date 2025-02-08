import NutritionNavItems from "@/shared/NutritionNavItems";
import { Outlet, useNavigate } from "react-router-dom";
import { Mail, Phone } from 'lucide-react';
import { useEffect } from "react";

const NutritionPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/nutrition/intermittent-fasting", { replace: true });
  }, [navigate]);

  return (
    <div className="container mx-auto flex sm:gap-5 md:gap-10 px-4 mt-10">
      {/* Sidebar */}
      <div className="sticky top-10 w-36 sm:w-48 md:w-64 h-screen overflow-y-auto">
        <div className="border border-gray-200 rounded p-4 md:p-6">
          <h2 className="md:text-xl font-bold mb-4 text-[#6636EE] border-b border-b-gray-200 pb-2">Our Services</h2>
          <NutritionNavItems />
        </div>

        <div className="rounded my-5">
          <img className="w-full" src="https://img.freepik.com/free-photo/young-guy-aged-man-sitting-sofa_23-2148030251.jpg?t=st=1738925315~exp=1738928915~hmac=dc57c81d65b94f934dd739ec8680131abc5c14430a0cd79e527c173d57557cad&w=1380" alt="Help Image" />
          <div className="bg-[#6636EE] text-white p-2 text-center">
            <p className="md:text-xl mb-2">How Can We Help?</p>
            <p className="flex justify-center items-center gap-2 text-sm mb-1"> <Mail size={14} />info@totalu.com</p>
            <p className="flex justify-center items-center gap-2 text-sm"><Phone size={14}/>+123 905 6566</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pl-5">
        <Outlet />
      </div>
    </div>
  );
};

export default NutritionPage;
