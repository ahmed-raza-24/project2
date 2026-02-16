import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/products/:productId' element={<ProductDetails />}/>
      </Routes>
    </div>
  )
}

export default App