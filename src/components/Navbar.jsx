import React from 'react'
import { GrFavorite } from "react-icons/gr";
import { BsCart3 } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="bg-black w-full h-[50px] flex items-center justify-between px-5">
                <h2 className="text-white  pl-[600px]">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <a href="#" className="font-bold underline underline-offset-1 pl-2.5">
                        Shop Now
                    </a>
                </h2>

                <div className="flex items-center gap-2 text-white">
                    English <input type="checkbox" />
                </div>
            </div>

            <nav className="flex  items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4  border-gray-300 bg-white relative transition-all border border-b-1">

                <h1 className='font-bold text-black text-2xl'>Exclusive</h1>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-8 pr-10">
                    <a href="/">Home</a>
                    <a href="/About">About</a>
                    <a href="/Contact">Contact</a>
                    <a href="/Signup">Sign Up</a>

                    <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                        <input className="py-1.5 w-[200px] bg-transparent outline-none  placeholder-gray-500" type="text" placeholder="What are you looking for?" />
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className='space-x-5 flex'>
                        <div className="relative cursor-pointer">

                            <Link to="/wishlist">

                                <GrFavorite size={20} />
                                <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] sm:text-xs w-4 h-4 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    4
                                </span>
                            </Link>
                            {/* <GrFavorite /> */}
                        </div>
                        <div className="relative cursor-pointer ">
                            <Link to="/Cart">
                                <BsCart3 size={20} />
                            </Link>

                        </div>
                        <div className="relative cursor-pointer group">
                            <Link to="/Account">
                             <RiAccountCircleLine size={20}/>

                            </Link>
                           
                            {/* DROPDOWN */}
                            <div className="absolute right-0 mt-2 w-[225px] bg-gradient-to-br from-[#4b3b60] to-[#2a2a33] text-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                                <div className="p-3 flex flex-col gap-4">

                                    <div className="flex items-center gap-3 hover:text-purple-300 cursor-pointer text-sm">
                                        <img src="src/assets/user (1).png" className="w-5" />
                                        <p>Manage My Account</p>
                                    </div>

                                    <div className="flex items-center gap-3 hover:text-purple-300 cursor-pointer text-sm">
                                        <img src="src/assets/icon-mallbag.png" className="w-5" />
                                        <p>My Order</p>
                                    </div>

                                    <div className="flex items-center gap-3 hover:text-purple-300 cursor-pointer text-sm">
                                        <img src="src/assets/icon-cancel.png" className="w-5" />
                                        <p>My Cancellations</p>
                                    </div>

                                    <div className="flex items-center gap-3 hover:text-purple-300 cursor-pointer text-sm">
                                        <img src="src/assets/Icon-Reviews.png" className="w-5" />
                                        <p>My Reviews</p>
                                    </div>

                                    <div className="flex items-center gap-3 hover:text-red-400 cursor-pointer text-sm">
                                        <img src="src/assets/Icon-logout.png" className="w-5" />
                                        <p>Logout</p>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>

                    <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                        {/* Menu Icon SVG */}
                        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="21" height="1.5" rx=".75" fill="#426287" />
                            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                            <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                        </svg>
                    </button>

                    {/* Mobile Menu */}
                    <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                        <a href="/Home" className="block">Home</a>
                        <a href="#" className="block">About</a>
                        <a href="#" className="block">Contact</a>
                        <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                            Login
                        </button>
                    </div>


                </div>

            </nav>
        </>

    )
}

export default Navbar