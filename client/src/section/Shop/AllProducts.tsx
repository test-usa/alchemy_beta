import React from "react";

const products = [
  {
    image: "https://source.unsplash.com/400x400/?protein,supplements",
    name: "Men Sports Tank Top",
    price: "$100.00",
  },
  {
    image: "https://source.unsplash.com/400x400/?gym,shoes",
    name: "Men Sports Shoes",
    price: "$190.00",
  },
  {
    image: "https://source.unsplash.com/400x400/?dumbbell,weights",
    name: "Dumbbell",
    price: "$300.00",
  },
  {
    image: "https://source.unsplash.com/400x400/?gym,equipment",
    name: "Men Sports Tank Top",
    price: "$53.00",
  },
];

export const AllProducts = () => {
  return (
    <div className="">
      {/* Product Grid */}
      <div className="px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border rounded-xl p-4 shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="w-full bg-purple-600 text-white py-2 mt-4 rounded-lg hover:bg-purple-700 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
