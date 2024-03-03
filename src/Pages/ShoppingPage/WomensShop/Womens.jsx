import React, { useEffect, useState } from 'react'
import { useCustom } from '../../../ContextApi/ContextApi'
import { GoPlus } from 'react-icons/go'
import { AiOutlineMinus } from 'react-icons/ai'

const Womens = ({id , img , PrevPrice , CurrentPrice ,Description}) => {

   let{Products ,ForBasket} = useCustom()
  let {CartItems  } = Products
  let [WinWidth , SetWidth] = useState()
  let {ToAddCart ,ToReduceCart} = ForBasket

    useEffect(()=>{
    window.addEventListener('resize',()=>{
       SetWidth(window.innerWidth)
    })
   })


  return (
    <div key={id}> 
            {   
            CartItems[id] >= 1 ?
            <div className="ForCartInc">
                  <img className='CartProdImg' src={img} alt="img" />  
               <div  className='CartRight' >
                {WinWidth < 510 || window.innerWidth < 510? <div className='PriceSection'>   
                  <p className='Price'>Price :</p>
                   <p className='Prices Prev' >₹{PrevPrice}</p>
                   <p className='Prices Current'>₹{CurrentPrice}</p>
                 </div>
                 :
                 <div>
                      <p className='Description'>{Description} </p>
                       <div style={{marginTop:'20px' , display:'flex' , justifyContent:'center'}} className='PriceSection'>   
                          <p className='Price'>Price :</p>
                          <p className='Prices Prev' >₹{PrevPrice}</p>
                          <p className='Prices Current'>₹{CurrentPrice}</p>
                       </div>
                 </div>

                 }
                 <div className='ToCartManage'>
                  <div className='IconsForCart Green' onClick={()=>ToAddCart(id)} ><GoPlus/> </div>
                  <p style={{fontSize:'20px', paddingBottom:'5px'}}>{CartItems[id]}</p>
                  <div className='IconsForCart Red' onClick={()=>ToReduceCart(id)} > <AiOutlineMinus/> </div>
               </div>
               </div>
             </div>
              :
              null
            }
          </div>
  )
}

export default Womens