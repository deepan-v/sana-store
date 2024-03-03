import React, { useEffect } from 'react'
import { useCustom } from '../../../ContextApi/ContextApi'
import Womens from './Womens'

const WomenProd = () => {

  let{Products} = useCustom()
  let { WomenDress } = Products

  return (
    <div className='ProductCartContainer'>
      <div >
         {WomenDress.map((states)=>{
       return <div key={states.id}><Womens {...states}/></div>
      })}
      </div>
    </div>
  )
}

export default WomenProd