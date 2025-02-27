import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Breadcrumbs from "@/components/breadcrumbs";
import visa from "../../assets/image/visa.png";
import mastercard from "../../assets/image/mastercard.png";
import unionpay from "../../assets/image/unionpay.png";
import { Link } from "react-router-dom";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Breadcrumbs
        bg="https://static.wixstatic.com/media/0e0e1e_0c8aae9e3ac34ac999469617a8a54208~mv2.jpg/v1/fill/w_320,h_128,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0e0e1e_0c8aae9e3ac34ac999469617a8a54208~mv2.jpg"
        title="Checkout"
      />

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="">
            <Input
              placeholder="Have a Coupon?"
              className="mb-4 w-full md:w-[300px]"
              {...register("coupon")}
            />
            <Button type="button" className="w-full md:w-auto bg-primary text-white">
              Apply Coupon
            </Button>
          </div>

          <h2 className="text-2xl font-semibold">Billing Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Input placeholder="First Name" {...register("firstName", { required: true })} />
            <Input placeholder="Last Name" {...register("lastName", { required: true })} />
          </div>

          <Input placeholder="Email Address" {...register("email", { required: true })} className="mt-4" />
          <Input placeholder="Phone" {...register("phone", { required: true })} className="mt-4" />
          <Input placeholder="Your Company Name (Optional)" {...register("company")} className="mt-4" />

          <div className="mt-4">
            <Select onValueChange={(value) => setValue("country", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="uk">UK</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Input placeholder="Street Address" {...register("streetAddress", { required: true })} className="mt-4" />
          <Input placeholder="Town/ City" {...register("city", { required: true })} className="mt-4" />
          <Input placeholder="District" {...register("district", { required: true })} className="mt-4" />
          <Input placeholder="Postcode/ ZIP (Optional)" {...register("postcode")} className="mt-4" />
        </div>

        {/* Additional Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Additional Information</h2>
          <Textarea
            placeholder="Order Note (Optional)"
            {...register("orderNote")}
            className="mt-4 h-40"
          />
        </div>
      </div>

      {/* Order Summary & Payment */}
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Order</h2>

        <div className="border-t border-b py-4">
          <div className="flex justify-between mb-2">
            <span>Product Name</span>
            <span>$150</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Sub Total</span>
            <span>$150</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>$150</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Payment Method</h3>

        <RadioGroup
          defaultValue="unionpay"
          className="mt-4 space-y-4"
          onValueChange={(value) => setValue("paymentMethod", value)}
        >
          <div className="flex items-center space-x-4">
            <RadioGroupItem value="visa" id="visa" />
            <label htmlFor="visa" className="flex items-center space-x-2 cursor-pointer">
              <img src={visa} alt="Visa" className="h-5" />
              <span>Visa Payment</span>
            </label>
          </div>

          <div className="flex items-center space-x-4">
            <RadioGroupItem value="mastercard" id="mastercard" />
            <label htmlFor="mastercard" className="flex items-center space-x-2 cursor-pointer">
              <img src={mastercard} alt="Mastercard" className="h-5" />
              <span>Mastercard Payment</span>
            </label>
          </div>

          <div className="flex items-center space-x-4">
            <RadioGroupItem value="unionpay" id="unionpay" defaultChecked />
            <label htmlFor="unionpay" className="flex items-center space-x-2 cursor-pointer">
              <img src={unionpay} alt="UnionPay" className="h-5" />
              <span>UnionPay Payment</span>
            </label>
          </div>
        </RadioGroup>

        <Input
          placeholder="Add New Card Details"
          {...register("cardDetails")}
          className="mt-4"
        />

        <p className="text-xs text-gray-600 mt-4">
          Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
        </p>

        <Link to={"/place-order"}>
        <Button type="submit" className="w-full bg-primary text-white mt-6">
          Place Order
        </Button>
        </Link>
      </div>
    </form>
  );
};

export default Checkout;
