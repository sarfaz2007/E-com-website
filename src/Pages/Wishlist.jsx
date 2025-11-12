import React from 'react'
import { justforyou, WishlistData } from '../data/dummyData'
import { GrCart } from "react-icons/gr";
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const Wishlist = () => {
    return (
        <>
            <div className='flex justify-between items-center mx-10'>
                <h3 className='text-2xl p-3'>Wishlist (4)</h3>
                <button className='h-[56px] w-[223px] border rounded-sm text-center p-3'>
                    Move All To Bag
                </button>
            </div>

            <div className='grid grid-cols-4 gap-6 my-10 max-w-[80%] mx-auto'>
                {WishlistData.map((item, index) => (
                    <div key={index} className='relative p-3'>

                        {/* Discount & Eye */}
                        <div className='flex justify-between mb-3'>
                            <div className='bg-[#DB4444] text-white text-sm px-2 py-1 rounded-sm'>
                                -35%
                            </div>
                            <RiDeleteBin6Line size={22} className='cursor-pointer' />
                        </div>

                        {/* Product Image */}
                        <img src={item.image} alt={item.name} className='w-full h-[170px] object-contain mb-3' />

                        {/* Add To Cart */}
                        <button className='w-full bg-black text-white flex items-center justify-center gap-2 py-2 rounded-sm'>
                            <GrCart size={20} />
                            Add To Cart
                        </button>

                        {/* Name & Price */}
                        <p className='font-semibold text-xl my-3'>{item.name}</p>
                        <p className='text-[#DB4444] font-bold text-lg mb-3'>${item.salePrice}</p>


                    </div>
                ))}
            </div>

            {/* ---------------------------------------------------------------------------------------------------------------- */}


            <div className='flex justify-between'>
                <div className='flex items-center gap-2.5'>
                    <div className='w-6 h-12 bg-[#DB4444] rounded-md '></div>
                    <p className='text-xl'>Just For You</p>
                </div>
                <button className='h-[56px] w-[150px] border rounded-sm text-center'>
                    <p className='item-center text-xl'>see all</p>
                </button>
            </div>
            <div className='grid grid-cols-4 gap-6 my-10 max-w-[80%] mx-auto'>
                {justforyou.map((item, index) => (
                    <div key={index} className='relative p-3'>

                        {/* Discount & Eye */}
                        <div className='flex justify-between mb-3'>
                            <div className='bg-[#DB4444] text-white text-sm px-2 py-1 rounded-sm'>
                                -35%
                            </div>
                            <AiOutlineEye size={22} className='cursor-pointer' />
                        </div>

                        {/* Product Image */}
                        <img src={item.image} alt={item.name} className='w-full h-[170px] object-contain mb-3' />

                        {/* Add To Cart */}
                        <button className='w-full bg-black text-white flex items-center justify-center gap-2 py-2 rounded-sm'>
                            <GrCart size={20} />
                            Add To Cart
                        </button>

                        {/* Name & Price */}
                        <p className='font-semibold text-xl my-3'>{item.name}</p>
                        <p className='text-[#DB4444] font-bold text-lg mb-3'>${item.salePrice}</p>

                        {/* ⭐ Rating */}
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, starIndex) =>
                                starIndex < item.rating ? (
                                    <AiFillStar key={starIndex} className="text-yellow-500" />
                                ) : (
                                    <AiOutlineStar key={starIndex} className="text-yellow-500" />
                                )
                            )}
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}

export default Wishlist
