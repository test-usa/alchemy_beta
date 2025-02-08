import { Button } from "@/components/ui/button";

import photo from '@/assets/image/confirm.png'
import Breadcrumbs from "@/components/breadcrumbs";

export default function Confirm() {
  return (
    <div>
      <Breadcrumbs
        bg="https://static.wixstatic.com/media/0e0e1e_0c8aae9e3ac34ac999469617a8a54208~mv2.jpg/v1/fill/w_320,h_128,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0e0e1e_0c8aae9e3ac34ac999469617a8a54208~mv2.jpg"
        title=""
      />
       <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold text-primary">Congratulations!</h1>
      <p className="text-gray-600 mt-2">Your order has been successfully placed.</p>
      <p className="font-semibold mt-1">
        Order ID: <span className="text-black">#34AB34CD56abc</span>
      </p>
      <div className="mt-6 w-[198px] h-[190.84px]">
        <img
          src={photo}
          alt="Success Icon"
          className="w-full h-full"
        />
      </div>
      <Button className="mt-6 bg-primary hover:bg-purple-700">Continue</Button>
    </div>

    </div>
   
  );
} 
