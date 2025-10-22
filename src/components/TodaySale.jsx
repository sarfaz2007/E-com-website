import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";


function TodaySale() {
    return (
        <>
            <div className='w-full'>
                <div className='h-12 flex p-2'>
                    <div className='flex p-2'>
                        <div className='h-7 w-4 bg-red-700 rounded-sm'></div>
                        <div>
                            <h1 className='text-red-500 pl-2.5'>Today's</h1>
                        </div>
                    </div>
                </div>
                <div className='p-2 text-3xl font-semibold flex gap-6 w-full'>
                    <h2 className=''>Flash Sale</h2>
                    <div className=''>
                        <div className='flex justify-between '>
                            <div className='flex gap-4'>
                                <p className='text-sm font-semibold'>Days <br /><span className='text-2xl font-bold'>03</span><span className='text-red-600 pl-3.5 text-2xl'>:</span></p>
                                <p className='text-sm font-semibold'>Hours <br /><span className='text-2xl font-bold pl-2'>23</span><span className='text-red-600 pl-3.5 text-2xl'>:</span></p>
                                <p className='text-sm font-semibold'>Minutes <br /><span className='text-2xl font-bold pl-2.5'>19</span><span className='text-red-600 pl-3.5 text-2xl'>:</span></p>
                                <p className='text-sm font-semibold'>Seconds <br /><span className='text-2xl font-bold pl-2.5'>56</span></p>
                            </div>
                            <div className='flex p-5'>
                                <IoMdArrowRoundBack size={20} />
                                <IoMdArrowRoundForward  size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodaySale