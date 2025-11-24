import React from 'react'

const ErrorPage = () => {
    return (
        <>
            <div className='w-[85%] mx-auto my-20'>
                <div className='flex my-20 gap-2.5'>
                    <p>Home</p>
                    <span>/</span>
                    <p>404 Error</p>
                </div>
                <div className='w-[900px] mx-auto'>
                    <p className='text-9xl '>404 Not Found</p>
                    <p className='text-[22px] text-center py-12'>You Visted page is not found. You may go homepage </p>
                    <div className='w-[256px] h-[56px] bg-[#DB4444] rounded-sm text-center flex items-center justify-center mx-auto cursor-pointer'>
                        <button className='text-white'>Back to homepage</button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default ErrorPage