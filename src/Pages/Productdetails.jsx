import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { BiRefresh } from "react-icons/bi";
import ProductCard from '../components/Home/ProductCard';
import { flashSaleItems } from '../data/dummyData';


const Productdetails = () => {

    const [quantity, setQuantity] = useState(1);
    const sizes = ["XS", "S", "M", "L", "XL"];

    return (
        <>
            <div className='max-w-[90%] mx-auto my-16'>
                <div className='flex gap-2.5'>
                    <p className='text-gray-400 hover:text-black'>Account</p>
                    <span>/</span>
                    <p className='text-gray-400 hover:text-black'>Gaming</p>
                    <span>/</span>
                    <p>Havic HV G-92 Gamepad </p>
                </div>
                <div className='flex gap-16 mt-10 items-center'>
                    <div className='grid grid-cols-1 my-10 gap-10'>
                        <div>
                            <img src="src/assets/image 57.png" alt="" />
                        </div>
                        <div>
                            <img src="src/assets/image 58.png" alt="" />
                        </div>
                        <div>
                            <img src="src/assets/image 61.png" alt="" />
                        </div>
                        <div>
                            <img src="src/assets/image 61.png" alt="" />
                        </div>

                    </div>
                    <div>
                        <img src="src/assets/image 63.png" alt="" />
                    </div>
                    <div className="max-w-md mx-auto p-4 font-sans">
                        {/* Title */}
                        <h1 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h1>

                        {/* Ratings */}
                        <div className="flex items-center gap-2 mt-2">
                            <div className="flex text-yellow-500 text-xl">★★★★☆</div>
                            <p className="text-gray-500 text-sm">(150 Reviews)</p>
                            <p className="text-green-600 text-sm">In Stock</p>
                        </div>

                        {/* Price */}
                        <p className="text-3xl font-semibold mt-3">$192.00</p>

                        {/* Description */}
                        <p className="text-gray-600 mt-2">
                            PlayStation 5 Controller Skin High quality vinyl with air channel
                            adhesive for easy bubble free install & mess free removal. Pressure
                            sensitive.
                        </p>

                        <hr className="my-4" />

                        {/* Colours */}
                        <p className="font-semibold mb-1">Colours:</p>
                        <div className="flex gap-3">
                            <div className="w-5 h-5 bg-red-500 rounded-full border"></div>
                            <div className="w-5 h-5 bg-blue-500 rounded-full border"></div>
                        </div>

                        {/* Sizes */}
                        <p className="font-semibold mt-4 mb-1">Size:</p>
                        <div className="flex gap-3">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`px-3 py-1 border rounded ${size === "M"
                                        ? "bg-red-500 text-white border-red-500"
                                        : "hover:border-black"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>

                        {/* Quantity + Buy Now */}
                        <div className="flex items-center gap-3 mt-5">

                            {/* Quantity Box */}
                            <div className="flex items-center border rounded">
                                <button
                                    className="px-4 py-2 text-xl"
                                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                                >
                                    -
                                </button>
                                <span className="px-4 py-2">{quantity}</span>
                                <button
                                    className="px-4 py-2 text-xl"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </button>
                            </div>

                            {/* Buy Now */}
                            <button className="bg-red-500 text-white px-6 py-3 rounded">
                                Buy Now
                            </button>

                            {/* Wishlist Icon */}
                            <div className="p-3 border rounded cursor-pointer">
                                <FaHeart className="text-xl" />
                            </div>
                        </div>

                        {/* Delivery Info Box */}
                        <div className="mt-8 border rounded">

                            <div className="flex items-start gap-4 p-4 border-b">
                                <FiTruck className="text-3xl" />
                                <div>
                                    <p className="font-semibold">Free Delivery</p>
                                    <p className="text-sm text-gray-500 underline cursor-pointer">
                                        Enter your postal code for Delivery Availability
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4">
                                <BiRefresh className="text-3xl" />
                                <div>
                                    <p className="font-semibold">Return Delivery</p>
                                    <p className="text-sm text-gray-500">
                                        Free 30 Days Delivery Returns.{" "}
                                        <span className="underline cursor-pointer">Details</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="my-14">
                    <div className='h-12 flex p-2'>
                        <div className='flex p-2'>
                            <div className='h-8 w-5 bg-red-500 rounded-sm'></div>
                            <div>
                                <h1 className='text-red-500 p-1 pl-2.5 font-bold'>Related item</h1>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-5 gap-5 '>
                        {
                            flashSaleItems.map((item, index) => (
                                <ProductCard key={index} item={item} />
                            ))
                        }
                    </div>
                </div>

            </div>

        </>

    )
}

export default Productdetails