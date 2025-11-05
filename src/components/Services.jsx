import React from 'react'
import { services } from '../data/dummyData';


const Services = () => {
    return (
        <>
            <div className='max-w-[70%] mx-auto py-10'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 text-center'>

                    {services.map((item, index) => (
                        <div key={index} className='flex flex-col items-center'>

                            {/* Icon Circle */}
                            <div className='h-[80px] w-[80px] rounded-full bg-gray-300 flex items-center justify-center'>
                                <div className='h-[60px] w-[60px] rounded-full bg-black flex items-center justify-center'>
                                    <img src={item.image} alt={item.title} className='h-[30px]' />
                                </div>
                            </div>

                            {/* Text */}
                            <h2 className='mt-4 font-semibold text-[16px]'>{item.title}</h2>
                            <p className='text-sm text-black mt-1'>{item.desc}</p>
                        </div>
                    ))}

                </div>
            </div>

        </>

    )
}

export default Services