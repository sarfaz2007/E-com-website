import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import Advertise from '../components/Advertise';
import Sidebar from '../components/Sidebar';
import MainBanner from '../components/Advertise';
import TodaySale from '../components/TodaySale';
import Category from '../components/Category';

function Home() {
  return (
    <>
    <div className='flex '>
       <Sidebar/>
       <div className='max-w-[60%] max-h-[400px] mx-auto'>
        <MainBanner/>
       </div>
    </div>
   <TodaySale/>
   <Category/>
    </>
  )
}

export default Home



