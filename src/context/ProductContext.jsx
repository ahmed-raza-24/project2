import { createContext, useEffect, useState } from 'react'
import { getAllProductData } from '../api/productApi'

export const ProductDataContext = createContext([])

const ProductContext = ({ children }) => {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProductData()
      console.log("Fetched Data:", data)
      setProductData(data)
    }

    fetchData()
  }, [])

  return (
    <ProductDataContext.Provider value={productData}>
      {children}
    </ProductDataContext.Provider>
  )
}

export default ProductContext
