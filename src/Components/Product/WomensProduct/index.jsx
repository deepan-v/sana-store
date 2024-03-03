import React from 'react'
import { useCustom } from '../../../ContextApi/ContextApi'
import WomensWear from './WomensWear'
import '../../Product/Product.css'

const Index = () => {
  let {Products  ,ForBasket} = useCustom()
    let {WomenDress} = Products
  
    return(
        <div className='MainHead'>
          {WomenDress.map((states)=>{
               return (
               <div className='TopKidContainer' key={states.id}>           
                      <WomensWear {...states} />
                 </div>
              )
          })}
          </div>
    )
 
}

export default Index