import React from 'react'
import { GrFavorite } from "react-icons/gr";
import { BsCart3 } from "react-icons/bs";

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
                    English <input type="checkbox"/>
                </div>
            </div>

            <nav className="flex  items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4  border-gray-300 bg-white relative transition-all border border-b-1">

                <h1 className='font-bold text-black text-2xl'>Exclusive</h1>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-8 pr-10">
                    <a href="/">Home</a>
                    <a href="/About">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Sign Up</a>

                    <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                        <input className="py-1.5 w-[200px] bg-transparent outline-none  placeholder-gray-500" type="text" placeholder="What are you looking for?" />
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className="relative cursor-pointer">
                        <GrFavorite />
                    </div>
                    <div className="relative cursor-pointer w-[100px]">
                        <BsCart3 />
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

            </nav>
        </>

    )
}

export default Navbar