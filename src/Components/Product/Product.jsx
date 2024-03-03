import React from 'react'
import '../Product/Product.css'
import ProductItems from './ProductItems'


const Product = () => {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
        <ProductItems/>
    </div>
  )
}

export default Product