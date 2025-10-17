import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import Advertise from '../components/Advertise';
import Sidebar from '../components/Sidebar';
import MainBanner from '../components/Advertise';

function Home() {
  return (
    <>
    <div className='flex '>
       <Sidebar/>
       <div className='max-w-[60%] max-h-[400px] mx-auto bg-blue-300'>
        {/* <Advertise/> */}
        <MainBanner/>
       </div>
    
    </div>
   
    </>
  )
}

export default Home



