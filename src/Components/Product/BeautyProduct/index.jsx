import React from 'react'
import { useCustom } from '../../../ContextApi/ContextApi'
import BeautyProduct from './BeautyProduct'
import '../../Product/Product.css'

const Index = () => {
  let {Products  ,ForBasket} = useCustom()
    let {BeautyItem} = Products
  
    return(
        <div className='MainHead'>
          {BeautyItem.map((states)=>{
               return (
               <div className='TopKidContainer' key={states.id}>           
                      <BeautyProduct {...states} />
                 </div>
              )
          })}
          </div>
    )
 
}

export default Index