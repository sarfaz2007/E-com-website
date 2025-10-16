import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";


function Sidebar() {
  return (
    <>
    <div className=' w-[20%] px-20 py-14 gap-4  border-r-1 '>
          <div className='flex justify-between'>
             <p className='pb-2'>Women's Fashion</p>
             <span><MdKeyboardArrowRight size={23}/></span>
          </div>
          <div className='flex justify-between'>
            <p className='pb-2'>Men's Fashion</p>
            <span><MdKeyboardArrowRight size={23}/></span>
          </div>
            <p className='pb-2'>Electronics</p>
            <p className='pb-2'>Home & Freestyles</p>
            <p className='pb-2'>Medicine</p>
            <p className='pb-2'>Sports & Outdoor</p>
            <p className='pb-2'>Baby's & Toys</p>
            <p className='pb-2'>Groceries & Pets</p>
            <p className='pb-2'>Health & Beauty</p>
        </div>
    </>
  )
}

export default Sidebar