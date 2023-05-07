import React from 'react'
import {useState, useEffect} from 'react'
// import products from '../products'
import axios from 'axios'
import ProductCard from '../components/product'

const HomePage = () => {
  const [products , setProducts] = useState([]);

  //use effect for making the product load when the components render
  useEffect(()=>{
    const fetchData =async () =>{
      const {data} = await axios.get('http://localhost:5000/api/products')
      setProducts(data);
    }
    fetchData()
  },[])


  return (
    <>
        <p className='my-2 text-2xl font-semibold'>New Products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {products.map((product)=>{
               return <ProductCard  product={product}/>
            })}
        </div>
    </>
  )
}

export default HomePage