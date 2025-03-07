import React from 'react';
import Image from 'next/image';

const Product = () => {
  const products = [
    {
      id: 1,
      title: 'Vel elit euismod',
      image: '/images/grid9.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 2,
      title: 'Ultrices condimentum imperdiet',
      image: '/images/grid10.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 3,
      title: 'Vitae suspendisse sed',
      image: '/images/grid11.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 4,
      title: 'Sed at fermentum',
      image: '/images/grid8.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 5,
      title: 'Fusce pellentesque at',
      image: '/images/grid1.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 6,
      title: 'Vestibulum magna laoreet',
      image: '/images/grid2.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 7,
      title: 'Sollicitudin amet orci',
      image: '/images/grid3.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 8,
      title: 'Ultrices mauris sit',
      image: '/images/grid4.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 9,
      title: 'Pellentesque condimentum ac',
      image: '/images/grid5.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 10,
      title: 'Cras sceleris velit',
      image: '/images/grid6.png',
      price: 80.0,
      discountedPrice: 70.0,
    },
    {
      id: 11,
      title: 'Lectus vulputate faucibus',
      image: '/images/grid7.png',
      price: 80.0,
      discountedPrice: 70.0,
    },
    {
      id: 12,
      title: 'Purus risus, ut',
      image: '/images/grid8.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Grid Controls Section */}
      <div className="bg-white py-6">
        <div className="bg-purple-50 py-6 px-4 sm:py-8 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-900">
              Shop Grid Default
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">
              Home . Pages .{' '}
              <span className="text-pink-500">Shop Grid Default</span>
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-lg sm:text-xl font-bold text-indigo-900">
              Ecommerce Accessories & Fashion item
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              About 9,620 results (0.62 seconds)
            </p>
          </div>

          <div className="flex flex-wrap items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div>
              <label
                htmlFor="perPage"
                className="text-xs sm:text-sm text-gray-700 mr-2"
              >
                Per Page:
              </label>
              <input
                id="perPage"
                type="text"
                className="border border-gray-300 rounded px-2 py-1 text-xs sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="sortBy"
                className="text-xs sm:text-sm text-gray-700 mr-2"
              >
                Sort By:
              </label>
              <select
                id="sortBy"
                className="border border-gray-300 rounded px-2 py-1 text-xs sm:text-sm"
              >
                <option value="bestMatch">Best Match</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="view"
                className="text-xs sm:text-sm text-gray-700 mr-2"
              >
                View:
              </label>
              <input
                id="view"
                type="text"
                className="border border-gray-300 rounded px-2 py-1 text-xs sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="py-6 sm:py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-200 border border-gray-200 rounded-lg shadow-sm p-4 text-center"
              >
                {/* Product Image */}
                <div className="mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={201}
                    height={201}
                    className="w-full h-32 object-contain rounded-md"
                  />
                </div>

                {/* Product Title */}
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>

                {/* Dots Section */}
                <div className="flex justify-center items-center space-x-2 mb-2">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                </div>

                {/* Product Prices */}
                <div className="text-xs sm:text-sm">
                  <span className="text-indigo-600 font-bold mr-2">
                    ${product.price}
                  </span>
                  <span className="line-through text-gray-400">
                    ${product.discountedPrice}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;