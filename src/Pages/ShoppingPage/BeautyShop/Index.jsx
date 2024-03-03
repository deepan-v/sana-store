import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCustom } from '../../../ContextApi/ContextApi'
import { GoPlus } from 'react-icons/go'
import { AiOutlineMinus } from 'react-icons/ai'
import Beauty from './Beauty'

const BeautyProd = () => { 

  let{Products} = useCustom()
  let { BeautyItem } = Products

  return (
    <div >
      <div className='ProductCartContainer'>
         {BeautyItem.map((states)=>{
        return <div key={states.id}><Beauty {...states}/></div>
      })}
      </div>
    </div>
  )
}

export default BeautyProd