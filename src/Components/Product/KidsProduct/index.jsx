import React from 'react'
import { useCustom } from '../../../ContextApi/ContextApi'
import KidsProduct from './KidsProduct'
import '../../Product/Product.css'

const Index = () => {
  let {Products } = useCustom()
    let {KidDress} = Products
  
    return(
        <div className='MainHead'>
          {KidDress.map((states)=>{
               return (
               <div className='TopKidContainer' key={states.id}>           
                      <KidsProduct {...states} />
                 </div>
              )
          })}
          </div>
    )
 
}

export default Index