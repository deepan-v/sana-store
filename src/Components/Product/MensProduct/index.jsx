import React from 'react'
import { useCustom } from '../../../ContextApi/ContextApi'

import '../../Product/Product.css'
import MensProduct from './MensProduct'

const Index = () => {
  let {Products } = useCustom()
    let {MenDress} = Products
  
    return(
        <div className='MainHead'>
          {MenDress.map((states)=>{
               return (
               <div className='TopKidContainer' key={states.id}>           
                      <MensProduct {...states} />
                 </div>
              )
          })}
          </div>
    )
 
}

export default Index