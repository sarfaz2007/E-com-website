import React from 'react'

function About() {
  return (
    <>
      <div className='my-10 ml-14'>
        <div className='flex w-[80%]'>
          <p>Home <span>/</span></p>
          <p>About</p>
        </div>
        <div className='w-full flex items-center justify-between'>
          <div className='w-1/2 '>
            <h1 className='text-5xl font-semibold py-8'>Our Story</h1>
            <p className='pb-5 text-xl'>Launced in 2015, Exclusive is South Asia’s premier online shopping <br />
             makterplace with an active presense in Bangladesh. Supported <br /> 
             by wide range of tailored marketing, data and service solutions, <br />
              Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
               millioons customers across the region. </p>
            <p className='text-xl'>Exclusive has more than 1 Million products to offer, growing at a <br /> 
                very fast. Exclusive offers a diverse assotment in categories <br />
                 ranging  from consumer.</p>
          </div>
          <div>
            <img src="src/assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png" alt="" />
          </div>
        </div>
      </div>


    </>
  )
}

export default About