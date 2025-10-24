import React from 'react'
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const ProductCard = ({ item }) => {

    return (
        <>
           
             <div className="max-w-[270px] h-[250px]  p-3  relative">

        {/* Top section with discount and icons */}
        <div className="flex items-start">
          <div className="h-6 w-12 bg-red-500 rounded-sm flex justify-center items-center">
            <p className="text-sm text-white font-medium">
              {item.discountPercent}%
            </p>
          </div>

          <div className="ml-auto  gap-2">
            <IoHeartOutline size={20} className="cursor-pointer" />
            <IoEyeOutline size={20} className="cursor-pointer" />
          </div>
        </div>

        {/* Image section */}
        <div className="flex justify-center items-center h-[140px] mt-4">
          <img
            src={item.image}
            alt={item.title || "Product"}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>

        </>

    )
}

export default ProductCard