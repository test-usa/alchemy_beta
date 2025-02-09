import { RiArrowLeftLine } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import addcartphoto from '@/assets/image/addcartphoto.png'
import Breadcrumbs from "@/components/breadcrumbs";
import { Link } from "react-router-dom";

const AddCardInfo = () => {
  return (
    <div>
      <Breadcrumbs
        bg="https://static.wixstatic.com/media/0e0e1e_0c8aae9e3ac34ac999469617a8a54208~mv2.jpg/v1/fill/w_320,h_128,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0e0e1e_0c8aae9e3ac34ac999469617a8a54208~mv2.jpg"
        title="Checkout"
      />
      <div className="w-full h-screen flex justify-center items-center bg-gray-50">
        <div className="relative w-[1319px] h-[913px] flex justify-center items-center">
          <div className="flex justify-center items-center absolute top-4 left-6">
            <p className="mr-3"><RiArrowLeftLine /></p>
            <h2 className="text-[24px] font-[700] leading-[28.8px] tracking-[-1%] font-raleway">
              Order Summary
            </h2>
          </div>

          <div className="max-w-4xl mx-auto w-full h-full p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full h-full">
              <img src={addcartphoto} alt="Product" className="max-w-full h-auto" />
            </div>

            <div className="w-full h-full flex flex-col justify-start">
              <h2 className="text-2xl font-semibold mb-4">Add Card Information</h2>

              <div className="space-y-4">
                <Input placeholder="Card Name" />
                <Input placeholder="Card Number" />
                <Input placeholder="Expiration Date" />
                <Input placeholder="Security Code" />
              </div>

              <div className="flex items-center mt-4">
                <Checkbox id="billing-address" defaultChecked />
                <label htmlFor="billing-address" className="ml-2 text-sm">
                  Use shipping address as billing address
                </label>
              </div>

              <div className="border-t mt-4 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Product Name</span>
                  <span>$150</span>
                </div>
                <div className="flex justify-between">
                  <span>Sub Total</span>
                  <span>$150</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>$150</span>
                </div>
              </div>
              <Link to='/pay'>
                <Button className="w-full bg-primary text-white mt-4">Pay Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AddCardInfo;
