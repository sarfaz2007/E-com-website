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
import Checkout from './Pages/Checkout.jsx'
import Account from './Pages/Account.jsx'
import Contact from './Pages/Contact.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import Productdetails from './Pages/Productdetails.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Signup',
        element: <Signup />
      },
      {
        path: '/Login',
        element: <LoginPage />
      },
      {
        path: '/Wishlist',
        element: <Wishlist />
      },
      {
        path: '/Cart',
        element: <Cart />
      },
      {
        path: '/Checkout',
        element: <Checkout />
      },
      {
        path: '/Account',
        element: <Account />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/ErrorPage',
        element: <ErrorPage />
      },
      {
        path: '/productdetails',
        element: <Productdetails />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
