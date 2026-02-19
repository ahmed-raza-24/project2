import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {
  const productData = useContext(ProductDataContext)

  console.log("Products sees:", productData)

  if (!productData || productData.length === 0) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='allProducts'>
      {productData.map((elem) => (
        <Link
          className='product'
          key={elem.id}
          to={`/products/${elem.id}`}
        >
          <div>
            <img src={elem.image} alt="" />
            <h2>{elem.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}


export default Products