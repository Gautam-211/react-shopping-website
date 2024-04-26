import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

    const {cart} = useSelector( (state) => (state) );
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect ( () => {
        setTotalAmount(cart.reduce( (acc,curr) => acc+curr.price , 0 ));
    },[cart])


  return (
    <div className='max-w-6xl mx-auto mt-7'>
        {
            cart.length>0? 
            (<div className='flex justify-between'>
                <div className='flex flex-col w-10/12 items-center px-3 gap-y-5 '>
                    {
                        cart.map( (item,index) => (
                            <CartItem key={item.id} item={item} itemIndex={index}/>
                        ))
                    }
                </div>

                <div className='flex flex-col h-[30vh] items-center justify-between p-2 gap-y-10'>
                <div className='flex items-center justify-center '>
                    <div className=' flex flex-col  items-center  justify-evenly text-2xl md:text-3xl'>
                        <div className='text-green-700'>Your Cart</div>
                        <div className='text-xl md:text-2xl'>Summary</div>
                        <p className='text-xl md:text-2xl'>
                            <span className='text-center'>Total Items : {cart.length}</span>
                        </p>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-evenly gap-y-5'>
                    <p className='text-xl md:text-2xl text-center'>Total amount : ${totalAmount}</p>
                    <button className='bg-green-300 px-3 py-2 rounded-lg hover:bg-green-600 hover:text-white
                    transition-all ease-in duration-200'>Checkout Now</button>
                </div>
                </div>
            </div>) 

            : 

            (<div className='w-full h-[82vh] flex flex-col gap-5 items-center justify-center text-2xl'>
                <h1 className='text-3xl text-red-500'>Cart is empty</h1>
                <Link to='/'>
                    <button className='bg-green-300 rounded-2xl px-4 py-2 hover:bg-green-600 hover:text-white transition-all
                    ease-in duration-200'>Shop Now</button>
                </Link>
            </div>)
        }
    </div>
  )
}

export default Cart