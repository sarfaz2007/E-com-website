import React from 'react'
import { CartData } from '../data/dummyData'

const Cart = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      {/* Table Header */}
      <div className="grid grid-cols-4 text-center font-semibold  py-3">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      {/* Cart Items */}
      {CartData.map((item, index) => (
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
      <div className="flex justify-between mt-6">
        <button className="border border-black px-6 py-2 rounded-sm hover:bg-black hover:text-white transition">
          Return To Shop
        </button>
        <button className="border border-black px-6 py-2 rounded-sm hover:bg-black hover:text-white transition">
          Update Cart
        </button>
      </div>
    </div>
  )
}

export default Cart
