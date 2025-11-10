import React from 'react'
import { WishlistData } from '../data/dummyData'

const Wishlist = () => {
    return (
        <>
        <div className='flex justify-between'>
            <h3 className='text-2xl'>Wishlist(4)</h3>
            <div className='h-[56px] w-[223px] border-1 rounded-sm text-center p-3.5'>
                <button>Move All To Bag</button>
            </div>
        </div>
            <div className='grid grid-cols-4'>
              {
                WishlistData.map((item , index) => (
                    <div key={index} >
                        <img src={item.image} alt="" />
                    </div>
                ))
              }
            </div>
        </>

    )
}

export default Wishlist