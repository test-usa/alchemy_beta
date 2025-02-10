import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Navigate, useParams, useLocation} from "react-router-dom";
// import { loadStripe } from '@stripe/stripe-js';
import { useAuth } from "@/auth/AuthContext";


// const STRIPE_PUBLISHED_KEY = "pk_test_51Qq9OPBFYajDRLyY9LandVIRaaAU9hFeHGdTNnpWAy8BMuAkU9g0Jlbmxmo3LwE6dvQ43QHPuVdGPm5BNFTmG8jq00xdmRZ848"

const fetchProductDetails = async (id: string) => {


  const response = await axios.get(
    `https://alchemy-beta-server-3.onrender.com/api/products/${id}`
  );
  return response.data;
};

export const SingleProduct = () => {

  const {user} = useAuth()
  // const location = useLocation();

  // const stripePromise = loadStripe(STRIPE_PUBLISHED_KEY);

  const { id } = useParams<{ id: string }>();
  const [orderQuantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // New state for error message

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

 
  // const handleCheckout = async (productId: string, totalQuantity: number) => {
  //   // Create a checkout session on the server side
  //   const response = await fetch('/create-checkout-session', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       productId: productId, // You can dynamically set the productId and quantity based on user input
  //       quantity: totalQuantity, // Set quantity dynamically if needed
  //     }),
  //   });
  
  //   const session = await response.json();
  
  //   // Wait for the stripePromise to resolve and check if stripe is available
  //   const stripe = await stripePromise;
  
  //   if (stripe) {
  //     // Redirect to Stripe Checkout using the session ID
  //     const { error } = await stripe.redirectToCheckout({
  //       sessionId: session.id,
  //     });
  
  //     if (error) {
  //       console.error("Error redirecting to checkout:", error);
  //     }
  //   } else {
  //     console.error("Stripe has not loaded yet. Please try again.");
  //     setErrorMessage("There was an issue with processing your payment. Please try again later.");
  //   }
  // };
  


  const createOrder = async (id: string, quantity: number) => {
    console.log("flow-1")
    // if(!user) {
    //   return <Navigate
    //   to="/login"
    //   state={{ from: location }} // Correct usage of state
    // />
    // }

    console.log("flow2")

    try {
      setErrorMessage(null); // Clear previous error message
      const response = await fetch("https://alchemy-beta-server-3.onrender.com/api/orders/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: id,
          quantity: quantity,
        }),
        credentials: "include",
      });

      if (response.ok) {
        const orderData = await response.json();
        console.log(orderData);
        // You can add additional success handling logic here

        // if(orderData){
        //   await handleCheckout(orderData?.order.productId, orderData?.order.quantity)
        // }

      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Something went wrong with your order. Please try again.");
      }
    } catch (e) {
      setErrorMessage("An unexpected error occurred. Please try again later.");
      console.log(e);
    }
  };

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetails(id!),
    enabled: !!id, // Only run query if ID exists
  });

  console.log(product?.name);

  if (isLoading)
    return (
      <div className="flex justify-evenly items-center">
        <Skeleton className="h-[325px] lg:h-[600px] w-[250px] lg:w-[450px] rounded-xl" />
        <Skeleton className="h-[325px] lg:h-[600px] w-[250px] lg:w-[450px] rounded-xl" />
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-x-32 max-w-7xl mx-auto p-6">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={product?.image}
            alt="Nutrition Hydroxy"
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Right Product Info Section */}
        <div className="w-full lg:w-1/2">
          {/* Product Title */}
          <h1 className="text-5xl font-bold text-gray-900">{product?.name}</h1>

          {/* Price */}
          <p className="text-2xl text-gray-700 mt-2">{product?.price}$</p>

          {/* Description */}
          <p className="text-gray-600 mt-4">{product?.description}</p>

          {/* Quantity & Buy Now */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border border-gray-300 rounded-sm">
              <button
                onClick={handleDecrease}
                className="px-3 py-2 text-lg bg-gray-200 active:bg-gray-300"
              >
                -
              </button>
              <span className="px-4 py-2 text-lg">{orderQuantity}</span>
              <button
                onClick={handleIncrease}
                className="px-3 py-2 text-lg bg-gray-200 active:bg-gray-300"
              >
                +
              </button>
            </div>
            <button
              onClick={() => createOrder(id as string, orderQuantity)}
              className="bg-primary text-white px-6 py-3 rounded-sm font-semibold"
            >
              Buy Now
            </button>
          </div>

          {/* SKU, Category, Tag */}
          <div className="mt-6 text-gray-700">
            <p>
              <span className="font-semibold">SKU:</span> 008
            </p>
            <p>
              <span className="font-semibold">Category:</span> Accessories
            </p>
            <p>
              <span className="font-semibold flex gap-3">Tag:{product?.tags?.map((tag: []) => <p className="text-black font-normal">{tag}</p>)}</span>
            </p>
          </div>

          {/* Display error message if there's an issue with the order */}
          {errorMessage && (
            <div className="mt-4 p-4 bg-red-100 text-red-600 border border-red-200 rounded-md">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
