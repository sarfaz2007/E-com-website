import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Signup from './Pages/Signup.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import Wishlist from './Pages/Wishlist.jsx'
import Cart from './Pages/Cart.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/Signup',
        element:<Signup/>
      },
      {
        path:'/Login',
        element:<LoginPage/>
      },
      {
        path:'/Wishlist',
        element:<Wishlist/>
      },
      {
        path:'/Cart',
        element:<Cart/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
