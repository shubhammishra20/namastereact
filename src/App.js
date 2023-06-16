import React from 'react' //it meant react come from in node_modules.
import ReactDOM from 'react-dom/client'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'
import About from './component/About'
import Contact from './component/Contact'
import RestaurantMenu from './component/RestaurantMenu'
import Error from './component/Error'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurant/:resId',
        element:<RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
