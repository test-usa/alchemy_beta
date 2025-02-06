import { Home } from "lucide-react";


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


const ShopPage = () => {
    return (
      <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full bg-black bg-black/80">
        <img
          src="https://tipsforweightloss.net/wp-content/uploads/2022/08/4-696x429.jpg"
          alt="Shop Banner"
          className="w-full h-full object-fill opacity-80 "
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Gear Up for Greatness</h1>
          <p className="text-xl mt-2">Shop</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-gray-500 text-sm px-6 py-4">
        <Home size={16} />
        <span>Home</span>
        <span className="text-gray-400">/</span>
        <span className="font-semibold text-black">Shop</span>
      </div>

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
    )
  }
  
  export default ShopPage