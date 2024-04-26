import React from 'react';
import { FcDeleteDatabase } from "react-icons/fc";
import {useDispatch} from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item , itemIndex}) => {

    const dispatch = useDispatch();
    
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from Cart!");
    }

  return (
    <div className='flex flex-col items-center justify-between w-11/12 md:w-8/12 md:mx-[2rem] mx-[1rem] border shadow-md shadow-gray-200
    hover:scale-110 transition-all duration-300 ease-in hover:shadow-2xl hover:shadow-gray-500 py-5 px-6 rounded-md outline-2'>
        
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='w-2/4 mx-auto md:mr-2'>
                <img src={item.image} alt="" className='w-full' />
            </div>
            <div className='flex flex-col justify-between'>
                <h1 className='text-center font-semibold text-xl mb-2'>{item.title}</h1>
                <h1 className='text-center text-[1rem] mb-2 text-gray-600'>{item.description.split(' ').slice(0,10).join(' ')+'...'}</h1>
                <div className='flex w-11/12 justify-between items-center md:px-6'>
                    <p className='text-green-600'>${item.price}</p>
                    <div className='cursor-pointer rounded-full hover:bg-red-300 text-2xl p-2 transition-all ease-in duration-200'
                     onClick={removeFromCart}>
                        <FcDeleteDatabase/>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default CartItem