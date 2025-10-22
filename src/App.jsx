import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Advertise from './components/Advertise'
import TodaySale from './components/TodaySale'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Outlet/>
    <TodaySale/>
    <Footer/>
    </>
  )
}

export default App
