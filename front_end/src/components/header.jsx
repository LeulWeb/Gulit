import React from 'react'
import logo from '../assets/Gulit.png'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <nav className="bg-black text-white py-4">
        <div className='container w-11/12  sm:w-8/12 flex justify-between mx-auto items-center'>
            <Link to={'/'}>
            <h1 className='text-3xl text-white font-normal'>Gulit</h1>
            </Link>
            {/* <img src={logo} alt=""  className='max-w-[100px]'/> */}
            <div className='space-x-6 hidden sm:flex'>
            <Link to='/login'>
              <i className="fas fa-arrow-right-to-bracket mx-1"></i>
              Sign In
            </Link>
            <Link to="/cart">
                <i className='fas fa-shopping-cart  mx-1'></i>
                Cart
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Header