import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  quantity: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const fetchShopItems = async () => {
  const response = await axios.get(
    "https://alchemy-beta-server-3.onrender.com/api/products"
  );
  return response.data;
};

export const AllProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchShopItems,
  });

  if (isLoading)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-[325px] w-full rounded-xl" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </div>
    );

  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      {/* Product Grid */}
      <div className="pb-12">
        <div className="grid grid-cols-1  md:grid-cols-2  xl:grid-cols-4 gap-4 place-items-center">
          {data.map((product: IProduct) => (
           <div key={product._id} className="w-[300px] rounded-sm p-4">
           <img
             src={product.image}
             alt={product.name}
             className="w-[300px] h-[378px] object-cover rounded-sm"
           />
           <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
           <p className="text-gray-600">${product.price}</p>
           <Link to={`/shop-details/${product._id}`}>
             <button className="w-[113px] h-[48px] bg-primary text-white py-2 mt-4 rounded-sm transition gap-y-[24px]">
               Buy Now
             </button>
           </Link>
         </div>
          ))}
        </div>
      </div>
    </div>
  );
};
