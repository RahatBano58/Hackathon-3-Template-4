import Image from "next/image"; // Importing Image component from Next.js
import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/feature/chair1.png", // Replace with actual image paths
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/feature/chair2.png",
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/feature/chair3.png",
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/feature/chair4.png",
    },
  ];

  return (
    <section className="bg-purple-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Featured Products
        </h2>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              style={{ height: "361px" }} // Optional height for consistent card size
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full"
                  width={150} // Specify width
                  height={150} // Specify height
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                {/*Color Line*/}
               < div className="flex justify-center gap-1 my-2">
                  <div className="w-4 h-1 bg-green-500 rounded"></div>
                  <div className="w-4 h-1 bg-pink-500 rounded"></div>
                  <div className="w-4 h-1 bg-blue-500 rounded"></div>
                </div>

                <p className="text-sm text-gray-500">{product.code}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
