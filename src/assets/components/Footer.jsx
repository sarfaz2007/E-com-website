import React from 'react'

function Footer() {
    return (
        <div className='w-full mx-auto bg-black'>
            <div className='flex justify-between mt-6 py-16 px-40'>
                <div>
                    <h6 className='font-medium text-white text-2xl pb-5'>Exclusive</h6>
                    <ul>
                        <li className='py-2 text-xl text-white'>Subscribe</li>
                        <li className='py-2 text-xl text-white'>Marketing</li>
                        <input className='p-3 flex w-full rounded-md text-black  bg-white' type="email" placeholder='Enter email' />

                        
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-white text-2xl pb-5'>Support</h6>
                    <ul>
                        <li className='py-2 text-xl text-white'>Pricing</li>
                        <li className='py-2 text-xl text-white'>Documentation</li>
                        <li className='py-2 text-xl text-white'>Guides</li>
                        <li className='py-2 text-xl text-white'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-white text-2xl pb-5'>Account</h6>
                    <ul>
                        <li className='py-2 text-xl text-white'>About</li>
                        <li className='py-2 text-xl text-white'>Blogs</li>
                        <li className='py-2 text-xl text-white'>Jobs</li>
                        <li className='py-2 text-xl text-white'>Press</li>
                        <li className='py-2 text-xl text-white'>career</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-white text-2xl pb-5'>Quick Link</h6>
                    <ul>
                        <li className='py-2 text-xl text-white'>Claim</li>
                        <li className='py-2 text-xl text-white'>Policy</li>
                        <li className='py-2 text-xl text-white'>Terms</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-white text-2xl pb-5'>Download App</h6>
                    <ul>
                        <li className='py-2 text-xl text-white'>Claim</li>
                        <li className='py-2 text-xl text-white'>Policy</li>
                        <li className='py-2 text-xl text-white'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer