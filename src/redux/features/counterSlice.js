import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    name:"sarfas",
    cartItems:[],
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    addToCart: (state, action) => {
        console.log("Adding to cart in counterSlice:", action.payload);
      state.cartItems.push(action.payload);
    },
    
  },
})

export const { increment, decrement, incrementByAmount, addToCart } = counterSlice.actions

export default counterSlice.reducer