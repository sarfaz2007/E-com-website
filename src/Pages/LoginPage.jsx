import React from 'react'

const LoginPage = () => {
  return (
    <>
     <div className='my-14 flex'>
        <img src="src/assets/dl.beatsnoop 1.png" alt="" />
        <div className='max-w-[400px] h-[530px]  mx-auto my-auto'>
            <h1 className='text-5xl leading-28'>Log in to Exclusive</h1>
            <p className='text-xl'>Enter your details below</p>
            <form action="" className="mt-7">
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
                        <div className='flex justify-between items-center'>
                           <div className='h-[56px] w-[143px] bg-[#DB4444] rounded-sm'>
                                <h2 className='text-white font-semibold text-xl p-2.5 text-center'>Log in</h2>
                           </div>
                           <div>
                            <p className='text-[#DB4444]  text-xl'>Forget Password?</p>
                           </div>
                        </div>
            </form>
        </div>
    </div>
    </>
   
  )
}

export default LoginPage