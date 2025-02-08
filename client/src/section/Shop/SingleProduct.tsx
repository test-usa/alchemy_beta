import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const fetchProductDetails = async (id: string) => {
  
  const response = await axios.get(
    `https://alchemy-beta-server-3.onrender.com/api/products/${id}`
  );
  return response.data;
};

export const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));



  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetails(id!),
    enabled: !!id,
  });

  console.log(product?.name)

  if (isLoading) return <div className="flex justify-evenly items-center">
    <Skeleton className="h-[325px] lg:h-[600px] w-[250px] lg:w-[450px] rounded-xl" />
    <Skeleton className="h-[325px] lg:h-[600px] w-[250px] lg:w-[450px] rounded-xl" />
  </div>;
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
        <p className="text-gray-600 mt-4">
        {product?.description}
        </p>

        {/* Quantity & Buy Now */}
        <div className="flex items-center gap-4 mt-6">
        <div className="flex items-center border border-gray-300 rounded-sm">
            <button
              onClick={handleDecrease}
              className="px-3 py-2 text-lg bg-gray-200 active:bg-gray-300"
            >
              -
            </button>
            <span className="px-4 py-2 text-lg">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="px-3 py-2 text-lg bg-gray-200 active:bg-gray-300"
            >
              +
            </button>
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-sm font-semibold">
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
            <span className="font-semibold flex gap-3">Tag:{product?.tags?.map((tag:[]) => <p className="text-black font-normal">{tag}</p>)}</span> 
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};
