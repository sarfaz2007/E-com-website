import React from 'react'

function Footer() {
    return (
        <div className='w-full mx-auto bg-black'>
            <div className='flex flex-wrap justify-between mt-6 py-16 px-40'>
                <div>
                    <h6 className='font-medium text-white text-2xl pb-5'>Exclusive</h6>
                    <ul>
                        <li className='py-2 text-xl text-white'>Subscribe</li>
                        <li className='py-2 text-xl text-white'>Marketing</li>
                        <input className='p-3 flex w-full rounded-md text-white  bg-black border-b-1' type="email" placeholder='Enter email' />
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-white text-2xl pb-5'>Support</h6>
                    <ul>
                        <li className='py-2 text-xl text-white'>111 Bijoy sarani,Dhaka, <br />DH 1515,Bangladhesh</li>
                        <li className='py-2 text-xl text-white'>Exclusive@gmail.com</li>
                        <li className='py-2 text-xl text-white'>+88015-88888-9999</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-white text-2xl pb-5'>Account</h6>
                    <ul>
                        <li className='py-2 text-xl text-white'>My Account</li>
                        <li className='py-2 text-xl text-white'>Login/Register</li>
                        <li className='py-2 text-xl text-white'>cart</li>
                        <li className='py-2 text-xl text-white'>Wishlist</li>
                        <li className='py-2 text-xl text-white'>Shop</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-white text-2xl pb-5'>Quick Link</h6>
                    <ul>
                        <li className='py-2 text-xl text-white'>Privacy/policy</li>
                        <li className='py-2 text-xl text-white'>Terms of Use</li>
                        <li className='py-2 text-xl text-white'>FAQ</li>
                        <li className='py-2 text-xl text-white'>Contact</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-white text-2xl pb-5'>Download App</h6>
                    <div className='flex gap-4'>
                        <img src="src/assets/Qrcode 1.svg" alt="" className='' />
                        <div className=''>
                            <img src="src/assets/google playstore.png" alt="" className='mb-2.5' />
                            <img src="src/assets/download-appstore.png" alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer