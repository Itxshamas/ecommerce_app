import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import Productitem from './ProductItem';

const LatestCollection = () => {
    const {products} = useContext(ShopContext);    
    const [latestProducts, SetLatestProducts]= useState([])
    useEffect(()=>{
    SetLatestProducts(products.slice(0,10));
    },[])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
      <Title text1 ={'LATEST'} text2 ={'COLLECTION'}/>
      <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
      We prioritize comfort and durability in every stitch.
      </p>
      </div>
      {/* Rendring Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
        {
            latestProducts.map((item, index)=>(
                <Productitem key={index} id={item} image={item.image} name={item.name} price={item.price}/>
            ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
