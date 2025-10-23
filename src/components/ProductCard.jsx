import React from 'react'

const ProductCard = ({ item }) => {
    
    return (
        <>
            <div className='w-full h-[200px] bg-emerald-300 ' >
                <div></div>
                <div className='h-5 w-8 bg-red-500 rounded-sm'>
                    <p className='text-sm text-white'>{item.discountPercent}%</p>
                </div>
                <img src={item.image} alt="" />
            </div>

        </>

    )
}

export default ProductCard