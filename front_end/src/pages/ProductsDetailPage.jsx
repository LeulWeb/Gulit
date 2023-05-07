import React,{useState , useEffect} from 'react'
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'


const ProductsDetailPage = ({match}) => {

  const [theProduct , setProduct] = useState({})

  const { id } = useParams();

  useEffect(()=>{
    const fetchData =async () =>{
      const {data} = await axios.get(`http://localhost:5000/api/products/${id}`)
      setProduct(data);
      console.log(id);  
      
    }
    fetchData()
  },[])

  return (
    <>
     <Link to={'/'}>
     <span>
        <i className='fas fa-arrow-left'></i>
      </span>
      <span>
          NEW PRODUCTS
      </span>
      
     </Link>
     <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-3">

        {/* Image column */}
        <div className='md:col-span-2 md:row-span-2'>
          <img src={theProduct.image} alt="" />
        </div>3

        {/* Title , review and Price */}

        <div className='my-2'>
          <p className='text-2xl font-semibold'>{theProduct.name}</p>
          <p>{theProduct.brand}</p>
          <p>{theProduct.category}</p>
          <Rating value={theProduct.rating}  text={`${theProduct.numReviews} Reviews`}/>
          <p>{`Price ${theProduct.price}`}</p>
          <p>{theProduct.description}</p>
        </div>

        <div className='my-1'>
          <p className='border rounded-md text-center py-2 my-1'>
            {`Price : ${theProduct.price}`}
          </p>
          <p className='border rounded-md text-center py-2 my-1'>
            {`Quantity ${theProduct.countInStock}`}
          </p>
          <button className='border rounded-md p-3 w-full bg-black text-white my-1'>
            <i className='fas fa-cart-shopping'></i>
            <span>
              Add to Cart
            </span>
          </button>
        </div>

      </div> 
    </>
  )
}

export default ProductsDetailPage