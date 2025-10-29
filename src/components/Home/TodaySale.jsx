import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import ProductCard from './ProductCard';
import { flashSaleItems } from '../../data/dummyData';


function TodaySale() {
    return (
        <>
            <div className='w-full'>
                <div className='h-12 flex p-2'>
                    <div className='flex p-2'>
                        <div className='h-8 w-5 bg-red-500 rounded-sm'></div>
                        <div>
                            <h1 className='text-red-500 p-1 pl-2.5 font-bold'>Today's</h1>
                        </div>
                    </div>
                </div>
                <div className='p-2 text-3xl font-semibold flex justify-between gap-6 w-full'>
                    <div className='flex gap-[87px]'>

                        <h2 className=''>Flash Sale</h2>
                        <div className=''>
                            <div className='flex gap-3'>
                                <p className='text-sm font-semibold'>Days <br /><span className='text-2xl font-bold'>03</span><span className='text-red-600 pl-3.5 text-2xl'>:</span></p>
                                <p className='text-sm font-semibold'>Hours <br /><span className='text-2xl font-bold pl-2'>23</span><span className='text-red-600 pl-3.5 text-2xl'>:</span></p>
                                <p className='text-sm font-semibold'>Minutes <br /><span className='text-2xl font-bold pl-2.5'>19</span><span className='text-red-600 pl-3.5 text-2xl'>:</span></p>
                                <p className='text-sm font-semibold'>Seconds <br /><span className='text-2xl font-bold pl-2.5'>56</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 items-end ml-6 mr-[300px]">
                        <IoMdArrowRoundBack size={22} className="cursor-pointer" />
                        <IoMdArrowRoundForward size={22} className="cursor-pointer" />
                    </div>
                </div>

                <div className='grid grid-cols-5 gap-5 '>
                    {
                        flashSaleItems.map((item,index) => (
                            <ProductCard key={index} item={item}/>
                        ))
                    }
                </div>
                <div className="flex justify-center mt-6">
                    <div className="h-[50px] w-[170px] bg-red-500 text-white rounded-sm flex justify-center items-center hover:bg-red-600 transition">
                        <button className="text-sm font-medium">View All Products</button>
                    </div>
                </div>




            </div>
        </>
    )
}

export default TodaySale