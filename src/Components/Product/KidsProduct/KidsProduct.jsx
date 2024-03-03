import React from 'react'
import { useCustom } from '../../../ContextApi/ContextApi'
import '../../Product/Product.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const KidsProduct = ({id , img , CurrentPrice , PrevPrice}) => {
    let {ForBasket} = useCustom()
     let {ToAddCart} = ForBasket

  return (
       <div>
            <div className='Deepan'>
            <img className='Images' src={img} alt="" />
         </div>
     <div>
         <div className='CartFooter'>
            <div className='DiscountSection'>
               <div>
               <p className='Discount'>Up To 40% off</p>
               </div>
            </div>
               <div className='PriceSection'>   
               <p className='Price'>Price :</p>
               <p className='Prices Prev' >₹{PrevPrice}</p>
               <p className='Prices Current'>₹{CurrentPrice}</p>
               </div>
               <Link to='/ShoppingPage' onClick={()=>ToAddCart(id)} className='ShopLink'>
               <p>Shop Now</p>
               <p style={{fontSize:'25px',marginTop:'6px' }}><IoIosArrowRoundForward/> </p>
               </Link>
         </div>
            </div>
         </div>
  )
}



export default KidsProduct