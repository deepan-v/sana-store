import React, { useEffect, useState } from 'react'
import { useCustom } from '../../../ContextApi/ContextApi'
import MensShop from './MensShop'

const MensProd = () => {
  
  let{Products } = useCustom()
  let {MenDress   } = Products

  return (
    <div >
      <div className='ProductCartContainer'>
         {MenDress.map((states)=>{
       return(
          <div key={states.id}><MensShop {...states}/></div>
       )
      })}
      </div>
    </div>
  )
}

export default MensProd