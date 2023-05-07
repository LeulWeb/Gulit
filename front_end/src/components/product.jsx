import React from 'react'
import Rating from './Rating'
import {Link} from 'react-router-dom'

const ProductCard  = ({product}) => {
  return (
        <Link   to={`/product/${product._id}`}>
    <div className='rounded  shadow-lg md:hover:scale-105 z-10'>
        <img src={product.image} alt="" />
        <div className="p-2 px-3">
        <h1 className='text-md font-semibold'>{product.name}</h1>
        <p>{product.category}</p>
        <Rating  value={product.rating} text={`${product.numReviews} Reviews`}/>
        <p className='text-lg font-semibold'>{product.price} Birr</p>
        </div>

    </div>
        </Link>
  )
}
 
export default ProductCard