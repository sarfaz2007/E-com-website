import React from 'react'

const Checkout = () => {
    return (
        <>
            <div className='max-w-5xl mx-auto'>
                <div className='flex gap-2.5 mx-auto mt-10 mb-10 '>
                    <p>Account /</p>
                    <p>My Account /</p>
                    <p>Product /</p>
                    <p>View Cart /</p>
                    <p>Checkout</p>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold pb-5'>Billing Details</h1>
                    <form action="" className='text-'>
                        <div className='mb-10'>
                             <input
                                type="text"
                                placeholder="First Name"
                                className=" border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                        <div className='mb-10'>
                             <input
                                type="text"
                                placeholder="Company Name"
                                className=" border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                        <div className='mb-10'> 
                             <input
                                type="text"
                                placeholder="Street Address"
                                className=" border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                        <div className='mb-10'>
                             <input
                                type="text"
                                placeholder="apartment,Floor,etc.(optional)"
                                className=" border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                        <div className='mb-10'>
                             <input
                                type="text"
                                placeholder="Town/City"
                                className=" border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                        <div className='mb-10'>
                             <input
                                type="text"
                                placeholder="Phone Number"
                                className=" border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                        <div className='mb-10'>
                             <input
                                type="text"
                                placeholder="Email Address"
                                className=" border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                    </form>
                    <input type="Checkbox" className='w-[24px] h-[24px] '/>
                </div>
            </div>

        </>

    )
}

export default Checkout