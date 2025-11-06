import React from 'react'

const Signup = () => {
    return (
        <>
            <div className='my-14 flex'>
                <img src="src/assets/dl.beatsnoop 1.png" alt="" />
                <div className='max-w-[400px] h-[530px]  mx-auto my-auto '>
                    <h1 className='text-5xl leading-28'>Create an account</h1>
                    <p className='text-xl'>Enter your details below</p>
                    <form action="" className="mt-7">
                        <div className="flex flex-col mb-8">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border-b border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                        <div className="flex flex-col mb-8">
                            <input
                                type="text"
                                placeholder="Email or Phone Number"
                                className="border-b border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                        <div className="flex flex-col mb-8">
                            <input
                                type="text"
                                placeholder="Password"
                                className="border-b border-gray-400 focus:outline-none focus:border-black py-1"
                            />
                        </div>
                    </form>
                    <div className='h-[56px] bg-[#DB4444]'>
                        <h1 className='text-center py-3 text-white text-xl'>Create Account</h1>
                    </div>
                    <div className="h-[60px] border-2 border-gray-400 flex items-center justify-center gap-3 cursor-pointer rounded-sm mt-6">
                        <img src="src/assets/Icon-Google.png" alt="" className="h-6 w-6" />
                        <p className="text-gray-600 font-medium">Sign up with Google</p>
                    </div>
                    <div className='text-xl text-center mt-5'>
                        <p className=''>Already have a account?<a href="/Login" className='pl-2 underline-offset-2'>Log in</a></p>
                        
                    </div>

                </div>

            </div>
        </>

    )
}

export default Signup