

const products = [
  {
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/112698685_01/w=800,h=800,fit=pad",
    name: "Men Sports Tank Top",
    price: "$100.00",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBblROUv2q8qKeuJjww5-6q82RmV2yCCKxSw&s",
    name: "Men Sports Shoes",
    price: "$190.00",
  },
  {
    image: "https://cdn.dsmcdn.com/mnresize/400/-/ty1592/prod/QC/20241024/08/6e0f5d17-5353-3088-8851-cffd84931121/1_org_zoom.jpg",
    name: "Dumbbell",
    price: "$300.00",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8s2YDQri-p0aJKJQ4YhDmp6ZyyUq8s70iK2exf1IcAxyPZ01dD4bEBnxWGlWULStRulg&usqp=CAU",
    name: "Men Sports Tank Top",
    price: "$53.00",
  },
  {
    image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/112698685_01/w=800,h=800,fit=pad",
    name: "Men Sports Tank Top",
    price: "$100.00",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBblROUv2q8qKeuJjww5-6q82RmV2yCCKxSw&s",
    name: "Men Sports Shoes",
    price: "$190.00",
  },
  {
    image: "https://cdn.dsmcdn.com/mnresize/400/-/ty1592/prod/QC/20241024/08/6e0f5d17-5353-3088-8851-cffd84931121/1_org_zoom.jpg",
    name: "Dumbbell",
    price: "$300.00",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8s2YDQri-p0aJKJQ4YhDmp6ZyyUq8s70iK2exf1IcAxyPZ01dD4bEBnxWGlWULStRulg&usqp=CAU",
    name: "Men Sports Tank Top",
    price: "$53.00",
  },

 

  
];

export const AllProducts = () => {
  return (
    <div className="w-[1320px] mx-auto">
      {/* Product Grid */}
      <div className="px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="w-[315px] rounded-xl p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-[315px] h-[398px] object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="w-[113px] h-[48px] bg-primary text-white py-2 mt-4 rounded-sm transition gap-y-[24px]">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
