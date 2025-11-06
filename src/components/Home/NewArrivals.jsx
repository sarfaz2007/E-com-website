import React from 'react'

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
            <div className='max-w-[80%] mx-auto flex justify-center gap-6 my-12'>
                <div className='bg-black h-[525px] w-[40%] flex justify-center items-center relative'>
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
                <div className='h-[250px] relative w-[40%]'>
                    <img
                        src="src/assets/attractive-woman-wearing-hat-posing-black-background 1.png"
                        alt="women"
                        className='h-full w-full object-cover'
                    />

                    <div className='absolute bottom-6 left-4 text-white'>
                        <h1 className='font-semibold text-2xl leading-14'>Womens Collection</h1>
                        <p className=''>Featured woman collections that <br /> give you another vibe.</p>
                        <a href="#" className='underline underline-offset-3'>Shop Now</a>
                    </div>
                   
                    <div className='flex gap-6 py-6'>
                        <div className='w-[50%] h-[250px] bg-black flex justify-center items-center relative'>
                            <img
                                src="src/assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
                                alt=""
                                className='object-contain'
                            />
                            <div className='absolute text-white bottom-2 left-5'>
                                <h1 className='font-semibold text-2xl'>Speakers</h1>
                                <p>Amazon wireless speakers</p>
                                <a href="#" className='underline underline-offset-3'>Shop Now</a>
                            </div>
                        </div>

                        <div className='w-[50%] h-[250px] bg-black flex justify-center items-center relative'>
                            <img
                                src="src/assets/652e82cd70aa6522dd785109a455904c.png"
                                alt=""
                                className=' object-contain'
                            />
                            <div className='absolute bottom-2 left-5 text-white'>
                                <h1>Perfume</h1>
                                <p>GUCCI INTENSE OUD EDP</p>
                                <a href="#" className='underline underline-offset-3'>Shop Now</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>

    )
}

export default NewArrivals