import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const fetchProductDetails = async (id: string) => {
  const response = await axios.get(
    `https://alchemy-beta-server-3.onrender.com/api/products/${id}`
  );
  return response.data;
};

export const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetails(id!),
    enabled: !!id, // Only run query if ID exists
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <div className="w-[800px] mx-auto mt-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-cover rounded-lg"
        />
        <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
        <p className="text-lg mt-2">{product.description}</p>
        <p className="text-xl font-semibold mt-2">${product.price}</p>
        <button className="w-[150px] h-[50px] bg-primary text-white mt-4 rounded-sm">
          Buy Now
        </button>
      </div>
    </div>
  );
};
