import React from 'react';
import ProductCard from './ProductCard';
import { exploreProducts } from '../../data/dummyData';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';

const ExploreProducts = () => {
  return (
    <div className="w-full max-w-[1170px] mx-auto py-10">
      {/* Top Section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-red-500 font-semibold text-sm mb-1">Our Products</p>
          <h2 className="text-2xl font-bold text-black">Explore Our Products</h2>
        </div>
        <div className="flex gap-3">
          <div className="h-8 w-8  flex items-center justify-center cursor-pointer hover:bg-gray-200">
            <IoMdArrowRoundBack size={20} />
          </div>
          <div className="h-8 w-8  flex items-center justify-center cursor-pointer hover:bg-gray-200">
            <IoMdArrowRoundForward size={20} />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-6">
        {exploreProducts.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-red-500 text-white px-8 py-3 rounded-sm text-sm font-medium hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ExploreProducts;
