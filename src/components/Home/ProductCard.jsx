import React, { use } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/counterSlice';

const ProductCard = ({ item }) => {

  const rating = item.rating || 4; // fallback rating
  const totalStars = 5;

  const dispatch = useDispatch();

  return (
    <div className="max-w-[270px] h-auto p-3 relative group bg-white shadow-md rounded-xl overflow-hidden mt-6 ">

      {/* Top section with discount and icons */}
      <div className="flex items-start">
        <div className="h-6 w-12 bg-red-500 rounded-sm flex justify-center items-center">
          <p className="text-sm text-white font-medium">
            {item.discountPercent}%
          </p>
        </div>

        <div className="ml-auto gap-2">
          <IoHeartOutline size={20} className="cursor-pointer" />
          <IoEyeOutline size={20} className="cursor-pointer" />
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center h-[140px] mt-4 relative">
        <img
          src={item.image}
          alt={item.title || "Product"}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Add to Cart button (hidden until hover) */}
        <div className="absolute bottom-0 left-0 w-full opacity-0 translate-y-5 group-hover:translate-y-2 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          <button className="w-full bg-black text-white py-2 rounded-t-xl font-medium hover:bg-gray-800" onClick={()=>dispatch(addToCart(item))}>
            Add To Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <p className="mt-4 text-black text-sm">{item.description}</p>
      <div className="flex gap-3 mt-2 items-center">
        <p className="text-lg font-semibold text-red-600">${item.salePrice}</p>
        <p className="text-sm line-through text-gray-500">${item.originalPrice}</p>
      </div>

      {/* Rating Section */}
      <div className="flex items-center mt-2">
        {[...Array(totalStars)].map((_, index) =>
          index < Math.floor(rating) ? (
            <AiFillStar key={index} className="text-yellow-400" />
          ) : (
            <AiOutlineStar key={index} className="text-yellow-400" />
          )
        )}
        <span className="ml-2 text-sm text-gray-600">({rating.toFixed(1)})</span>
      </div>


    </div>
  );
};

export default ProductCard;
