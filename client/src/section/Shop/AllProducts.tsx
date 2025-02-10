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
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

const arr = [1, 2, 3, 4];

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

  console.log(data, error);
  if (isLoading)
    return (
      <div className="flex flex-row justify-evenly items-center space-y-3">
        <div className="space-y-2">
          <Skeleton className="h-[325px] w-[250px] rounded-xl" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-[325px] w-[250px] rounded-xl" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-[325px] w-[250px] rounded-xl" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-[1320px] mx-auto">
      {/* Product Grid */}
      <div className="px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product: IProduct, index: number) => (
            <div key={index} className="w-[315px] rounded-xl p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-[315px] h-[398px] object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
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
