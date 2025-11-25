import React from 'react'
import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <>
            <div className='max-w-[90%] mx-auto my-16'>
                <div className='flex text-sm sm:text-base'>
                    <Link to='/'>
                        <p className='hover:text-gray-400'>Home</p>
                    </Link>
                    <span className='px-3'>/</span>
                    <Link to='/contact'>
                        <p>Contact</p>
                    </Link>
                </div>

                <div className='flex max-w-[80%] mx-auto my-20 justify-between 
                    flex-col lg:flex-row gap-10'>

                    <div className="w-full lg:w-[400px] h-auto lg:h-[457px] p-8 
                         rounded-lg">
                        <div className="flex items-center gap-3 my-4">
                            <div className="w-10 h-10 rounded-full bg-[#DB4444] flex items-center justify-center">
                                <img src="src/assets/Vector.png" alt="" className="w-5 h-5" />
                            </div>
                            <p className="text-[18px] font-semibold">Call To Us</p>
                        </div>

                        <div className='my-3.5 text-[17px] sm:text-[19px]'>
                            <p>We are available 24/7,7 days a week.</p>
                            <p className='pt-2.5'>Phone:+880161112222</p>
                        </div>

                        <hr className='my-8' />

                        <div className="flex items-center gap-3 my-4">
                            <div className="w-10 h-10 rounded-full bg-[#DB4444] flex items-center justify-center">
                                <img src="src/assets/Vector (1).png" alt="" className="w-5 h-4" />
                            </div>
                            <p className="text-[18px] font-semibold">Write To Us</p>
                        </div>

                        <div className='text-[17px] sm:text-[19px]'>
                            <p>Fill out the form and we will contact you whithin 24 hours.</p>
                            <p className='py-3'>Emails: customer@exclusive.com</p>
                            <p>Emails: Support@exclusive.com </p>
                        </div>
                    </div>

                    <div className='w-full lg:w-[900px] h-auto lg:h-[457px] p-8  rounded-lg'>
                        <div>
                            <form className='flex flex-col sm:flex-row sm:justify-between gap-4'>
                                <input
                                    type="text"
                                    placeholder='Your Name'
                                    className='text-[18px] sm:text-[20px] focus:outline-none py-4 px-2 w-full  rounded'
                                />

                                <input
                                    type="text"
                                    placeholder='Your Email'
                                    className='text-[18px] sm:text-[20px] focus:outline-none py-4 px-2 w-full  rounded'
                                />

                                <input
                                    type="text"
                                    placeholder='Your Phone'
                                    className='text-[18px] sm:text-[20px] focus:outline-none py-4 px-2 w-full rounded'
                                />
                            </form>

                            <div className='mt-5'>
                                <form>
                                    <input
                                        type="text"
                                        placeholder='Your Message'
                                        className='text-[18px] sm:text-[20px] focus:outline-none py-4 px-2 
                                       w-full h-[200px]  rounded resize-none'
                                    />
                                </form>
                            </div>
                        </div>

                        <div className="w-full flex justify-end mt-5 sm:mt-8">
                            <button className="w-full sm:w-[215px] h-[56px] bg-[#DB4444] rounded-sm">
                                <p className="text-white text-[18px] font-semibold text-center">Send Message</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Contact