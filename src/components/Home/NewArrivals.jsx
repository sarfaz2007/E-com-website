import React from 'react'
import { newArrivals } from '../../data/dummyData'

const NewArrivals = () => {
    return (
        <>
            <div>
                <div className='flex items-center gap-2.5' >
                    <div className='h-8 w-5 bg-red-500 rounded-sm'></div>
                    <div className='text-red-500 font-semibold'>Featured</div>
                </div>

                <div className='text-3xl font-semibold'>
                    <h2>New Arrival</h2>
                </div>
            </div>
            {/* <div className='max-w-[80%]'>
                <div className='bg-black h-[500px] w-[40%] '>
                    <img src="src/assets/ps5-slim-goedkope-playstation_large 1.png" alt="" className='h-[500px] ' />
                </div>
            </div > */}
            <div className='max-w-[80%] flex justify-center items-center gap-6'>
                <div className='bg-black h-[500px] w-[40%] flex justify-center items-center relative'>
                    <img
                        src="src/assets/ps5-slim-goedkope-playstation_large 1.png"
                        alt="PS5"
                        className='h-[500px] object-contain'
                    />
                    <div className='absolute text-white bottom-5 left-7'>
                      <h1 className='text-3xl tracking-wide font-semibold leading-16'>Play Station 5</h1>
                      <p className=''>Black and White version of the PS5 <br /> coming out on sale.</p>
                      <a href="#" className='underline underline-offset-3'>Shop Now</a>
                    </div>
                   
                </div>
                 <div>
                        <img src="src/assets/attractive-woman-wearing-hat-posing-black-background 1.png" alt="" />
                </div>
            </div>

        </>

    )
}

export default NewArrivals