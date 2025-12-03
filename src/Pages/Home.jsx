import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import MonthSale from '../components/Home/MonthSale';
import TodaySale from '../components/Home/TodaySale';
import Category from '../components/Home/Category';
import Sidebar from '../components/Home/Sidebar';
import Advertise from '../components/Home/Advertise';
import Advertise2 from '../components/Home/Advertise2';
import ExploreProducts from '../components/Home/ExploreProducts';
import NewArrivals from '../components/Home/NewArrivals';
import Services from '../components/Services';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/features/counterSlice';

function Home() {

const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch()

console.log({count});


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
      <Advertise2/>
      <ExploreProducts/>
      <NewArrivals/>
      <Services/>

    </>
  )
}

export default Home



