import React from 'react'
import WomensProd from './WomensProduct'
import BeautyProd from './BeautyProduct'
import KidsProd from './KidsProduct'
import MensProd from './MensProduct'

// import MensProduct from './ProductBody/MensProduct'
// import WomensWear from './ProductBody/MensProduct'
// import BeautyProduct from './ProductBody/BeautyProduct/index'

const ProductItems = () => {
  return (
    <div  className='KisWear'>
      <div className='Wears'>
        <h2 className='ProductTitle'> Kids wear</h2>
          <KidsProd/>
      </div>
      <div className='Wears'>
        <h2 className='ProductTitle'>Mens wear</h2>
          <MensProd/>
      </div>
      <div className='Wears'>
        <h2 className='ProductTitle'>Men's wear</h2>
          <WomensProd/>
      </div>
      <div className='Wears'>
        <h2 className='ProductTitle'>Beauty products</h2>
          <BeautyProd/>
      </div>
    </div>
  )
}

export default ProductItems