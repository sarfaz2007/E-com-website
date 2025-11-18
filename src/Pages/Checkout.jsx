import React from 'react'

const Checkout = () => {
    return (
        <>
            <div className='max-w-5xl mx-auto mb-14'>
                <div className='flex gap-2.5 mx-auto mt-10 mb-10 '>
                    <p>Account /</p>
                    <p>My Account /</p>
                    <p>Product /</p>
                    <p>View Cart /</p>
                    <p>Checkout</p>
                </div>
                <h1 className='text-3xl font-semibold pb-5'>Billing Details</h1>
                <div className='flex'>

                    <form action="" className='w-[470px]'>
                        <div className='mb-14'>
                            <input
                                type="text"
                                placeholder="First Name"
                                className=" border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                        <div className='mb-14'>
                            <input
                                type="text"
                                placeholder="Company Name"
                                className=" border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                        <div className='mb-14'>
                            <input
                                type="text"
                                placeholder="Street Address"
                                className=" border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                        <div className='mb-14'>
                            <input
                                type="text"
                                placeholder="apartment,Floor,etc.(optional)"
                                className=" border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                        <div className='mb-14'>
                            <input
                                type="text"
                                placeholder="Town/City"
                                className=" border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                        <div className='mb-14'>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className=" border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                        <div className='mb-14'>
                            <input
                                type="text"
                                placeholder="Email Address"
                                className=" border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>


                        <div className="flex  gap-3 mt-4 cursor-pointer">
                            <div className="h-6 w-6 rounded-sm flex items-center justify-center">
                                <input type="checkbox" className='h-5 w-5 ' />
                            </div>

                            <p className="text-[16px] font-medium text-black">
                                Save this information for faster check-out next time
                            </p>
                        </div>
                    </form>


                    <div className=''>
                        <div className="w-[527px]">

                            {/* Item 1 */}
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="src/assets/Monitor-Cart-Small (1).png"
                                        alt="LCD Monitor"
                                        className="h-[54px] w-[54px] object-contain"
                                    />
                                    <p className="text-[18px] font-medium">LCD Monitor</p>
                                </div>
                                <p className="font-semibold ml-10">$650</p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="src/assets/Gamepad-Cart-Small (1).png"
                                        alt="H1 Gamepad"
                                        className="h-[54px] w-[54px] object-contain"
                                    />
                                    <p className="text-[18px] font-medium">H1 Gamepad</p>
                                </div>
                                <p className="font-semibold">$1100</p>
                            </div>
                            <div>
                                <div className='flex justify-between border-b-1 border-b-gray-300 my-3 pb-3'>
                                    <p className='text-xl'>Subtotal:</p>
                                    <p className='text-xl'>$1750</p>

                                </div>
                                <div className='flex justify-between border-b-1 border-b-gray-300 my-3 pb-3'>
                                    <p className='text-xl'>Shipping</p>
                                    <p className='text-xl'>Free</p>
                                </div>
                                <div className='flex justify-between my-3 pb-3'>
                                    <p className='text-xl'>Total</p>
                                    <p className='text-xl'>$1750</p>

                                </div>
                            </div>
                            <div className="flex items-center justify-between w-full">

                                {/* Left Side: Radio + Bank */}
                                <div className="flex items-center gap-3">
                                    <input type="radio" className="w-5 h-5" />
                                    <p className="text-xl">Bank</p>
                                </div>

                                {/* Right Side: Payment Logos */}
                                <div className="flex items-center gap-4">
                                    <img src="src/assets/image 32.png" alt="" className=" object-contain" />
                                    <img src="src/assets/image 30.png" alt="" className=" object-contain" />
                                    <img src="src/assets/image 31.png" alt="" className=" object-contain" />
                                    <img src="src/assets/image 33.png" alt="" className=" object-contain" />
                                </div>

                            </div>

                            <div className='flex mt-5 gap-2.5 items-center'>
                                <input type="radio" className='h-5 w-5 ' />
                                <p className='text-xl'>Cash on delivery</p>
                            </div>
                            <div className='mt-5 '>
                                <button className='w-[300px] h-[56px] border-2 rounded-sm '>
                                    <form action="">
                                        <input type="text" placeholder='Coupon Code' className='focus:outline-none text-xl' />
                                    </form>
                                </button>
                                <button className='w-[211px] h-[57px] bg-[#DB4444] ml-3 rounded-sm'>
                                    <p className='text-white'>Apply Coupon</p>
                                </button>

                            </div>
                            <button className='w-[190px] h-[56px] bg-[#DB4444] rounded-sm mt-3'>
                                <p className='text-white'>Place Order</p>
                            </button>


                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Checkout