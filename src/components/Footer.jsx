import React from 'react'
import { BiLogoFacebook } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GoPaperAirplane } from "react-icons/go";


function Footer() {
    return (
        <div className='w-full mx-auto bg-black'>
            <div className='flex flex-wrap justify-between mt-6 py-16 px-40'>
                <div>
                    <h6 className='font-medium text-white text-2xl pb-5'>Exclusive</h6>
                    <ul>
                        <li className='py-2 text-xl text-white'>Subscribe</li>
                        <li className='py-2 text-xl text-white'>Marketing</li>
                        <h3 className='text-white mt-4'>Get 10% off your first order</h3>
                        <div className="relative w-full mt-3">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="p-3 pl-10 w-full rounded-md text-white bg-black border border-gray-600 focus:outline-none"
                            />
                            <GoPaperAirplane
                                size={20}
                                color="#fff"
                                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                            />
                        </div>

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
                    <h3 className='text-gray-400 mb-2.5 '>Save $3 With New Users Only </h3>
                    <div className='flex gap-4'>
                        <img src="src/assets/Qrcode 1.svg" alt="" className='' />
                        <div className=''>
                            <img src="src/assets/google playstore.png" alt="" className='mb-2.5' />
                            <img src="src/assets/download-appstore.png" alt="" />
                        </div>

                    </div>
                    <div className='flex justify-between mt-3.5'>
                        <BiLogoFacebook size={25} color='#ffff' />
                        <FiTwitter size={25} color='#ffff' />
                        <FaInstagram size={25} color='#ffff' />
                        <FaLinkedinIn size={25} color='#ffff' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer