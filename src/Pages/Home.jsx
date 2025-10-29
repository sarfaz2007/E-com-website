import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import MonthSale from '../components/Home/MonthSale';
import Advertise from '../components/Home/Advertise';
import TodaySale from '../components/Home/TodaySale';
import Category from '../components/Home/Category';
import Sidebar from '../components/Home/Sidebar';

function Home() {
  return (
    <>
      <div className='flex '>
        <Sidebar />
        <Advertise />
        <div className='max-w-[60%] max-h-[400px] mx-auto'>
          
        </div>
      </div>
      <TodaySale />
      <Category />
      <MonthSale />
    </>
  )
}

export default Home



