import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png'
import {useSelector} from 'react-redux';
const Navbar = () => {

    const {cart} = useSelector( (state) => state);

  return (
    <div className=''>
        <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>

            <NavLink to='/'>
                <div className='ml-5 w-[10rem]'>
                    <img src={logo} alt='logo' className='w-fit h-fit'/>
                </div>
            </NavLink>

            <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>

                <NavLink to='/'>
                    <p>Home</p>
                </NavLink>
                
                <NavLink to='/cart'>
                    <div className='relative'>
                        <FaShoppingCart className='text-2xl'/>
                        {
                            cart.length>0&&
                            
                            <div className='absolute -right-2 -top-1 bg-green-600 rounded-full
                             w-5 h-5 flex justify-center items-center animate-bounce text-white'>{cart.length}</div>
                        }
                    </div>
                </NavLink>
                

            </div>

        </nav>
    </div>
  )
}

export default Navbar