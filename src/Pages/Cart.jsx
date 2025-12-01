import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProductCard from '../components/Home/ProductCard';
import { Provider } from 'react-redux'; 

const Cart = () => {

  const cartItems = useSelector((state) => state.counter.cartItems);
  console.log("Cart Items from Redux Store:", cartItems);

  return (
    <>
      <div className='flex max-w-5xl mx-auto mt-7'>
        <Link to="/">
          <p className='text-gray-400 hover:text-black'>Home /</p>
        </Link>
        <p>Cart</p>
      </div>
      <div className="max-w-5xl mx-auto mt-10 mb-10">
        {/* Table Header */}
        <div className="grid grid-cols-4 text-center font-semibold  py-3">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        {/* Cart Items */}
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center text-center py-4"
          >
            <div>
              <div className="flex items-center gap-3 justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />
                <p className="font-medium">{item.name}</p>
              </div>
            </div>
            {/* Price */}
            <p className="text-gray-700">${item.salePrice}</p>

            {/* Quantity */}
            <div className="flex justify-center">
              <select
                className="border border-gray-300 rounded-md px-2 py-1"
                defaultValue={item.quantity}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num.toString().padStart(2, '0')}
                  </option>
                ))}
              </select>
            </div>

            {/* Subtotal */}
            <p className="text-gray-700">${item.salePrice}</p>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-between mt-6 mb-10">
          <button className="border border-black px-6 py-2 rounded-sm hover:bg-black hover:text-white transition">
            Return To Shop
          </button>
          <button className="border border-black px-6 py-2 rounded-sm hover:bg-black hover:text-white transition">
            Update Cart
          </button>
        </div>
        <div className='flex gap-7'>
          <div className='flex '>
            <div className='w-[300px] h-[56px] border-2 rounded-sm pl-6 pt-2.5'>
              <input type="text"
                placeholder='Coupon Code'
                className='text-xl' />
            </div>
            <div className='w-[211px] h-[56px] bg-[#DB4444] rounded-sm ml-5'>
              <p className='text-xl text-center p-3 text-white'>Apply Coupon</p>
            </div>
          </div>
          <div className='w-[470px] h-[324px] border-2 p-4 rounded-sm'>
            <h2 className='text-2xl font-semibold '>Cart Total </h2>
            <div className='flex justify-between border-b-1 my-3 pb-3'>
              <p className='text-xl'>Subtotal:</p>
              <p className='text-xl'>$1750</p>

            </div>
            <div className='flex justify-between border-b-1 my-3 pb-3'>
              <p className='text-xl'>Shipping</p>
              <p className='text-xl'>Free</p>
            </div>
            <div className='flex justify-between my-3 pb-3'>
              <p className='text-xl'>Total</p>
              <p className='text-xl'>$1750</p>

            </div>
            <Link to="/Checkout">
              <button className="w-[256px] h-[56px] bg-[#DB4444] rounded-sm ml-9 hover:bg-[#bb3737] transition duration-200 cursor-pointer">
                <p className="text-white font-semibold text-xl">
                  Proceed To Checkout
                </p>
              </button>
            </Link>

          </div>
        </div>


        {/* <div className='w-full h-52 my-10 flex items-center justify-center'>
          <div className='flex items-center flex-wrap gap-5'>
            <button className='px-4 py-2 rounded-md bg-amber-300 shadow' onClick={() => dispatch(decrement())}>-</button>
            <p className='px-4 bg-red-300 rounded-2xl shadow'>{count}</p>
            <button className='px-4 py-2 rounded-md bg-amber-300 shadow' onClick={() => dispatch(increment())}>+</button>
            {
              cartItems.map((item, index) => (
                <ProductCard key={index} item={item}/>
              ))
            }
          </div>
        </div> */}

      </div>
    </>
  )
}

export default Cart
