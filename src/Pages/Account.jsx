import React from 'react'
import { Link } from "react-router-dom";




const Account = () => {
  return (
    <>
      <div className='w-[80%] mx-auto my-14'>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <Link to="/">
             <p className='text-xl text-gray-400 hover:text-black'>Home <span>/</span></p>
            </Link>
            <p className='text-xl'>Account</p>
          </div>
          <div className='text-xl'>Welcome! <span className='text-[#DB4444] text-xl'>Md Rimel</span></div>
        </div>
        <div className='flex m-[70px]'>
          <div>
            <p className='font-semibold mt-10 text-xl py-3'>Manage My Account</p>
            <div className='my-2.5 pl-8'>
              <p className='text-[#DB4444] text-xl pb-2.5'>My Profile</p>
              <p className='text-gray-400 text-xl pb-2.5'>Address Book</p>
              <p className='text-gray-400 text-xl'>My Payment Option</p>
            </div>
            <p className='font-semibold text-xl py-3'>My Orders</p>
            <div className='my-2.5 pl-8'>
              <p className='text-gray-400 text-xl pb-2.5'>My Returns</p>
              <p className='text-gray-400 text-xl pb-2.5'>My Cancellations</p>
            </div>
            <p className='font-semibold text-xl py-3'>My Wishlist</p>
          </div>


          <div className='w-[870px] h-[630px]  m-20 py-8 px-14'>
            <h2 className='text-xl text-[#DB4444] font-semibold pb-3'>Edit your Profile</h2>
            <div className='flex w-[710px] justify-between'>
              <div className='w-[330px]'>
                <form action="">
                  <p className='font-semibold'>First Name</p>
                  <input type="text"
                    placeholder='Md'
                    className='focus:outline-none focus:border-black py-2 px-2' />
                  <p className='mt-6 font-semi-bold'>Email</p>
                  <input type="text"
                    placeholder='rimel1111@gmail.com'
                    className='focus:outline-none focus:border-black py-2 px-2' />
                </form>
              </div>
              <div className='w-[330px]'>
                <form action="">
                  <p className='font-semibold'>Last Name</p>
                  <input type="text"
                    placeholder='Rimel'
                    className='focus:outline-none focus:border-black py-2 px-2' />
                  <p className='mt-6 font-semibold'>Address</p>
                  <input type="text"
                    placeholder='Kingston,5236,United State'
                    className='focus:outline-none focus:border-black py-2 px-2' />
                </form>
              </div>
            </div>
            <div className='w-[710px] '>
              <p className='font-semibold mt-7'>Password Changes</p>
               <form action="">
                  <input type="text"
                    placeholder='Current Password'
                    className='focus:outline-none focus:border-black py-5 px-2 w-full' />

                  <input type="text"
                    placeholder='New Password'
                    className='focus:outline-none focus:border-black py-5 px-2 w-full' />

                  <input type="text"
                    placeholder='Confirm New Password'
                    className='focus:outline-none focus:border-black py-5 px-2 w-full' />
                </form>
            </div>
            <div className='flex justify-end right-10 items-center gap-3.5'>
               <p className='text-xl'>Cancel</p>
               <button className='bg-[#DB4444] w-[214px] h-[56px] rounded-sm'>
                <p className='text-white text-xl'>Save Changes</p>
               </button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Account