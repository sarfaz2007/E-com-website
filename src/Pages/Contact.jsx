import React from 'react'
import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <>
            <div className='max-w-[90%] mx-auto my-16'>
                <div className='flex'>
                    <Link to='/'>
                        <p className='hover:text-gray-400'>Home</p>
                    </Link>
                    <span className='px-3'>/</span>
                    <Link to='/contact'>
                        <p>Contact</p>
                    </Link>
                </div>
                <div className='flex max-w-[80%] mx-auto my-20 justify-between'>
                    <div className="w-[400px] h-[457px] p-8">
                        <div className="flex items-center gap-3 my-4">
                            <div className="w-10 h-10 rounded-full bg-[#DB4444] flex items-center justify-center">
                                <img src="src/assets/Vector.png" alt="" className="w-5 h-5" />
                            </div>
                            <p className="text-[18px] font-semibold">Call To Us</p>
                        </div>
                        <div className='my-3.5 text-[19px]'>
                            <p>We are available 24/7,7 days a week.</p>
                            <p className='pt-2.5'>Phone:+880161112222</p>
                        </div>
                        <hr  className='my-8'/>
                        <div className="flex items-center gap-3 my-4">
                            <div className="w-10 h-10 rounded-full bg-[#DB4444] flex items-center justify-center">
                                <img src="src/assets/Vector (1).png" alt="" className="w-5 h-4" />
                            </div>
                            <p className="text-[18px] font-semibold">Write To Us</p>
                        </div>
                        <div className='text-[19px]'> 
                            <p>Fill out the form and we will contact you whithin 24 hours.</p>
                            <p className='py-3'>Emails: customer@exclusive.com</p>
                            <p>Emails: Support@exclusive.com </p>
                        </div>
                    </div>
                    <div className='w-[900px] h-[457px] bg-gray-400 p-8'>
                        <div>
                            <form action="" className='flex justify-between'>
                                <input type="text"
                                    placeholder='Your Name'
                                    className=' text-[20px] focus:outline-none focus:border-black py-5 px-2 w-full' />
                                <input type="text"
                                    placeholder='Your Email'
                                    className=' text-[20px] focus:outline-none focus:border-black py-5 px-2 w-full' />
                                <input type="text"
                                    placeholder='Your Phone'
                                    className='text-[20px] focus:outline-none focus:border-black py-5 px-2 w-full' />
                            </form>
                            <div className=''>
                                <form action="" className=''>
                                    <input type="text"
                                        placeholder='Your Message'
                                        className=' text-[20px] focus:outline-none focus:border-black py-5 px-2 w-full h-[65%]' />
                                </form>
                            </div>
                        </div>
                        <div className="w-full h-[66%] flex justify-end items-end">
                            <button className="w-[215px] h-[56px] bg-[#DB4444] rounded-sm">
                                <p className="text-white text-[18px] font-semibold">Send Message</p>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact