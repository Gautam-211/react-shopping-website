import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';


const Home = () => {

    const API_URL = 'https://fakestoreapi.com/products';
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);

    async function fetchProducts(){
    
        setLoading(true);

        try{
            const result = await fetch(API_URL);
            const data = await result.json();
            console.log(data);
            setPosts(data);
        }
        catch(error){
            console.log("An error occurred "+ error);
            setPosts([])
        }
        finally{
            setLoading(false);
        }
    }

    useEffect( () => {
        fetchProducts();
    },[])

  return (
    <div className='max-w-6xl mx-auto'>
        {
            loading? (<Spinner/>) :
            (
                posts.length > 0 ? 
                (   
                <div className='flex flex-wrap justify-evenly gap-x-10 gap-y-10 items-start min-h-[80vh] mt-5 md:mt-[5rem]'>
                    {
                        posts.map( (post) => (
                            <Product key={post.id} post={post}/>
                        ) )
                    }
                </div>
                ) : 
                (
                    <div className='flex items-center justify-center'>
                        <p>No Produts Available</p>
                    </div>
                )
            )
        }
    </div>
  )
}

export default Home