import React from 'react'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import {categoryData} from '../../data/dummyData';

const Category = () => {
  return (
    <>
      <div className="w-full">
        {/* Title Section */}
        <div className="h-12 flex items-center p-2">
          <div className="flex items-center p-2">
            <div className="h-8 w-5 bg-red-500 rounded-sm"></div>
            <h1 className="text-red-500 p-1 pl-2.5 font-bold">Categories</h1>
          </div>
        </div>

        {/* Flash Sale Header */}
        <div className="p-2 text-3xl font-semibold flex justify-between items-center w-full">
          <h2 className="">Browse By Category</h2>

          {/* Arrow Controls */}
          <div className="flex gap-3 items-center mr-40">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <IoMdArrowRoundBack size={22} className="cursor-pointer" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <IoMdArrowRoundForward size={22} className="cursor-pointer" />
            </button>
          </div>
        </div>
        <div className='grid grid-cols-6 max-w-[65%] mx-auto h-[150px] gap-3 mt-20'>
         {categoryData.map((item,index) =>(
            <div key={index} className='border-1 content-center pl-12'>
              <img src={item.image} alt="" className='pl-' />
              <p>{item.name}</p>
            </div>
         ))}
           
        </div>
      </div>
    </>
  );
};

export default Category;
