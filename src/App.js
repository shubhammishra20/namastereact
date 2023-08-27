import React, { lazy, Suspense, useEffect, useState } from 'react' //it meant react come from in node_modules.
import ReactDOM from 'react-dom/client'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'
import About from './component/About'
import Contact from './component/Contact'
import RestaurantMenu from './component/RestaurantMenu'
import Error from './component/Error'
import UserContext from './utils/UserContext'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

const Grocery = lazy(() => import('./component/Grocery'))

const About  = lazy(() => import('./component/About'))

const AppLayout = () => {
  const[userName, setUserName] = useState()
useEffect(() => {
  // we have to call the api and get the data.
  const user = {
    logedInUser: "Shubham Effect"
  }
  setUserName(user.logedInUser)
},[])

  return (
    <UserContext.Provider value={{logedInUser: userName, setUserName}}>
    <div className='app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
    </UserContext.Provider>
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
        path: '/grocery',
        element: (<Suspense fallback = {<h1>Loding.....</h1>}>
           <Grocery />
        </Suspense>)
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
