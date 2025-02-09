import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const fetchProductDetails = async (id: string) => {
  const response = await axios.get(
    `https://alchemy-beta-server-3.onrender.com/api/products/${id}`
  );
  return response.data;
};

const fetchAllProducts = async () => {
  const response = await axios.get(
    "https://alchemy-beta-server-3.onrender.com/api/products"
  );
  return response.data;
};

export const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const [activeTab, setActiveTab] = useState("description");

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetails(id!),
    enabled: !!id,
  });

  const { data: allProducts, isLoading: isLoadingProducts } = useQuery({
    queryKey: ["allProducts"],
    queryFn: fetchAllProducts,
  });

  // Filtering related products based on matching tags
  const relatedProducts =
    allProducts?.filter((p: any) => 
      p.id !== id && p.tags?.some((tag: string) => product?.tags?.includes(tag))
    ) || [];

  if (isLoading || isLoadingProducts)
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
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={product?.image} alt={product?.name} className="max-w-full h-auto object-contain" />
        </div>

        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-bold text-gray-900">{product?.name}</h1>
          <p className="text-2xl text-gray-700 mt-2">{product?.price}$</p>
          <p className="text-gray-600 mt-4">{product?.description}</p>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border border-gray-300 rounded-sm">
              <button onClick={handleDecrease} className="px-3 py-2 text-lg bg-gray-200 active:bg-gray-300">-</button>
              <span className="px-4 py-2 text-lg">{quantity}</span>
              <button onClick={handleIncrease} className="px-3 py-2 text-lg bg-gray-200 active:bg-gray-300">+</button>
            </div>
            <Link to={"/checkout"}>
              <button className="bg-primary text-white px-6 py-3 rounded-sm font-semibold">Buy Now</button>
            </Link>
          </div>

          <div className="mt-6 text-gray-700">
            <p><span className="font-semibold">SKU:</span> 008</p>
            <p><span className="font-semibold">Category:</span> Accessories</p>
            <p><span className="font-semibold flex gap-3">Tags:
              {product?.tags?.map((tag: string, i: number) => (
                <span key={i} className="text-black font-normal">{tag}</span>
              ))}
            </span></p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        <div className="flex">
          <button className={`px-4 py-2 ${activeTab === "description" ? "bg-primary text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => setActiveTab("description")}>
            Description
          </button>
          <button className={`px-4 py-2 ${activeTab === "reviews" ? "bg-primary text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => setActiveTab("reviews")}>
            Review(0)
          </button>
        </div>

        {activeTab === "description" ? (
          <div className="p-4">
            <p className="text-gray-700">{product?.description}</p>

           
          </div>
        ) : (
          <div className="p-4 text-gray-500">No reviews yet. Be the first to leave a review!</div>
        )}

         {/* Related Products Section */}
         <h2 className="text-xl font-semibold mt-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
              {relatedProducts.length > 0 ? (
                relatedProducts.map((relatedProduct: any) => (
                  <div key={relatedProduct.id} className="bg-white shadow-md rounded-lg p-4">
                    <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-48 object-cover rounded-md" />
                    <h3 className="text-lg font-medium mt-3">{relatedProduct.name}</h3>
                    <p className="text-gray-600">{relatedProduct.price}$</p>
                    <Link to={`/product/${relatedProduct.id}`}>
                      <button className="mt-3 bg-primary text-white px-4 py-2 rounded-md w-full">
                        View Product
                      </button>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No related products found.</p>
              )}
            </div>
      </div>
    </div>
  );
};
