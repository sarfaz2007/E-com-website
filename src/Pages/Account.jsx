import React from 'react'

const Account = () => {
  return (
    <>
      <div className='w-[80%] mx-auto my-14'>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <p>Home <span>/</span></p>
            <p>Account</p>
          </div>
          <div>Welcome! <span className='text-[#DB4444]'>Md Rimel</span></div>
        </div>
        <div>
          <p className='font-semibold mt-10'>Manage My Account</p>
          <div className='my-2.5 pl-8'>
            <p className='text-[#DB4444]'>My Profile</p>
            <p className='text-gray-400'>Address Book</p>
            <p className='text-gray-400'>My Payment Option</p>
          </div>
          <p className='font-semibold'>My Orders</p>
          <div className='my-2.5 pl-8'>
            <p className='text-gray-400'>My Returns</p>
            <p className='text-gray-400'>My Cancellations</p>
          </div>
          <p className='font-semibold'>My Wishlist</p>
        </div>
      </div>
    </>

  )
}

export default Account