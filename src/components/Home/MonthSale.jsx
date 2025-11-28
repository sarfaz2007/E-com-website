import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import ProductCard from './ProductCard';
import { bestSellingItems, flashSaleItems } from '../../data/dummyData';

const MonthSale = () => {
    return (
        <div className='max-w-[90%] mx-auto my-10'>
            <div className='w-full'>
                <div className='h-12 flex p-2'>
                    <div className='flex p-2'>
                        <div className='h-8 w-5 bg-red-500 rounded-sm'></div>
                        <div>
                            <h1 className='text-red-500 p-1 pl-2.5 font-bold'>This Month</h1>
                        </div>
                    </div>

                </div>
                <div className='p-2 text-3xl font-semibold flex justify-between gap-6 w-full'>
                    <div>
                        <h2>Best Selling Products</h2>
                    </div>
                    <div className="flex gap-3 items-end ml-6 mr-[300px]">
                        <div className="h-[50px] w-[170px] bg-red-500 text-white rounded-sm flex justify-center items-center hover:bg-red-600 transition">
                            <button className="text-sm font-medium">View All Products</button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-5 max-w-[80%] mx-auto'>
                    {
                        bestSellingItems.map((item, index) => (
                            <ProductCard key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MonthSale