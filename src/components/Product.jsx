import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';
import {toast} from 'react-hot-toast';


const Product = ({post}) => {

    const {cart} = useSelector( (state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to the cart.");
    }

    const removeFromCart = () =>{
        dispatch(remove(post.id));
        toast.error("Item removed from the Cart");
    }

  return (
    <div className='flex flex-col items-center justify-between w-10/12 sm:w-5/12 md:w-4/12 lg:w-1/4 md:mx-[2rem] mx-[1rem] border shadow-md shadow-gray-200
    hover:scale-110 transition-all duration-300 ease-in hover:shadow-2xl hover:shadow-gray-500 py-5 px-6 rounded-md outline-2'>
        <div className='text-center font-semibold text-xl mb-2'>
            {post.title}
        </div>
        <div className='text-center text-[1rem] mb-2 text-gray-600'>
            {post.description.split(' ').slice(0,10).join(' ')+ "..."}
        </div>
        <div className='m'>
            <img src={post.image} alt="product" className='h-[18rem]'/>
        </div>
        <div className='flex w-11/12 justify-between mx-auto mt-5 items-center'>
        <div className='text-green-600 text-[1.2rem]'>
            ${post.price}
        </div>
        
        {
            cart.some( (item) => item.id === post.id) ? 
            (<button className='text-[1.2rem] bg-red-200 px-3 py-1 rounded-lg hover:bg-red-500 hover:text-white transition-all
            ease-in duration-200 '
             onClick={removeFromCart}>
                Remove Item
            </button>)
             : 
            (<button className='text-[1.2rem] bg-green-200 px-3 py-1 rounded-lg hover:bg-green-600 hover:text-white transition-all
            ease-in duration-200'
             onClick={addToCart}>
                Add to Cart
            </button>) 
        }
        </div>

    </div>
  )
}

export default Product