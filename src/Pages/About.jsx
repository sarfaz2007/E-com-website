import React from 'react'
import { AboutpageSerives } from '../data/dummyData'

function About() {
  return (
    <>
      <div className='my-10 ml-14'>
        <div className='flex w-[80%]'>
          <p>Home <span>/</span></p>
          <p>About</p>
        </div>
        <div className='w-full flex items-center justify-between'>
          <div className='w-1/2 p-10'>
            <h1 className='text-5xl font-semibold py-8'>Our Story</h1>
            <p className='pb-5 text-xl '>Launced in 2015, Exclusive is South Asia’s premier online shopping <br />
             makterplace with an active presense in Bangladesh. Supported <br /> 
             by wide range of tailored marketing, data and service solutions, <br />
              Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
               millioons customers across the region. </p>
            <p className='text-xl '>Exclusive has more than 1 Million products to offer, growing at a <br /> 
                very fast. Exclusive offers a diverse assotment in categories <br />
                 ranging  from consumer.</p>
          </div>
          <div>
            <img src="src/assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png" alt="" />
          </div>
        </div>
         <div className='max-w-[70%] mx-auto py-10'>
                        <div className='grid grid-cols-4 gap-8 text-center h-[170px]'>
        
                            {AboutpageSerives.map((item, index) => (
                                <div key={index} className='flex flex-col items-center border border-gray-400 py-3 rounded-sm hover:bg-[#DB4444] hover:text-white'>
        
                                    {/* Icon Circle */}
                                    <div className='h-[90px] w-[90px] rounded-full bg-gray-300 flex items-center justify-center '>
                                        <div className='h-[70px] w-[70px] rounded-full bg-black flex items-center justify-center'>
                                            <img src={item.image} alt={item.title} className='h-[40px]' />
                                        </div>
                                    </div>
        
                                    {/* Text */}
                                    <h2 className='mt-4 font-bold text-[40px]'>{item.title}</h2>
                                    <p className='text-xl text-black mt-1 font-semibold'>{item.desc}</p>
                                </div>
                            ))}
        
                        </div>
                    </div>
      </div>


    </>
  )
}

export default About