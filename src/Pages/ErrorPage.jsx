import React from 'react'

const ErrorPage = () => {
    return (
        <>
            <div className='w-[85%] mx-auto my-20'>
    <div className='flex my-20 gap-2.5 text-sm sm:text-base'>
        <p>Home</p>
        <span>/</span>
        <p>404 Error</p>
    </div>

    <div className='w-full max-w-[900px] mx-auto px-2'>
        <p className='text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-center'>
            404 Not Found
        </p>

        <p className='text-[16px] sm:text-[18px] md:text-[22px] text-center py-8 sm:py-12'>
            You Visted page is not found. You may go homepage 
        </p>

        <div className='w-full sm:w-[256px] h-[56px] bg-[#DB4444] rounded-sm 
                        text-center flex items-center justify-center 
                        mx-auto cursor-pointer'>
            <button className='text-white text-sm sm:text-base'>Back to homepage</button>
        </div>
    </div>
</div>


        </>

    )
}

export default ErrorPage