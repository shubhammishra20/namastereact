import { useState } from 'react'
import { LOGO_URL } from '../utils/constant'
import { Link } from 'react-router-dom'
import useOnlineStaus from '../utils/useOnlineStatus'
import { useContext } from 'react'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'

const Header = () => {
  const [btnName, setBtnName] = useState('Login')
  const onlineStatus = useOnlineStaus()
  const DefaultUser = useContext(UserContext)

  // Subscribing to the store using a selectore

  const cartItems = useSelector(store => store.cart.items)
  console.log(cartItems)
  return (
    <div
      className='flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-gray-100 sticky top-0'
    >
      <div className='logo-container'>
        <img className='w-56' src={LOGO_URL} />
      </div>
      <div className='flex items-center'>
        <ul className='flex m-4 p-4'>
          <li className='px-4 font-medium text-xl text-gray-700 hover:text-orange-400'>
            Online Status: {onlineStatus ? '🟢' : '🔴'}
          </li>
          <li className='px-4 font-medium text-xl text-gray-700 hover:text-orange-400'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4 font-medium text-xl text-gray-700 hover:text-orange-400'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='px-4 font-medium text-xl text-gray-700 hover:text-orange-400'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='px-4 font-medium text-xl text-gray-700 hover:text-orange-400'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className='px-4 font-medium text-xl text-gray-700 hover:text-orange-400'>
            <Link to='/cart'>Cart - ({cartItems.length} Items)</Link>
          </li>
          <button
            className='px-4 font-medium text-xl text-gray-700 hover:text-orange-400'
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
            }}
          >
            {btnName}
          </button>
          <li className='px-4 font-medium text-xl text-gray-700 hover:text-orange-400'>
            {DefaultUser.logedInUser}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
