import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import MonthSale from '../components/Home/MonthSale';
import TodaySale from '../components/Home/TodaySale';
import Category from '../components/Home/Category';
import Sidebar from '../components/Home/Sidebar';
import Advertise from '../components/Home/Advertise';

function Home() {
  return (
    <>
      <div className='flex '>
        <Sidebar />
        <div className='max-w-[60%] max-h-[400px] mx-auto'>
        <Advertise />
        </div>
      </div>
      <TodaySale />
      <Category />
      <MonthSale />
    </>
  )
}

export default Home



