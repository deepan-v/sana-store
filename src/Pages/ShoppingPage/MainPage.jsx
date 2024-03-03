import React from 'react'
import KidsProd from './KidsShop/Index'
import { IoIosArrowRoundBack } from "react-icons/io";
import BeautyProd from './BeautyShop/Index'
import MensProd from './MensShop/Index'
import WomenProd from './WomensShop'
import { TbMoodEmpty } from "react-icons/tb";
import { Link } from 'react-router-dom'
import './ShoppingPage.css'
import { useCustom } from '../../ContextApi/ContextApi'

const MainPage = () => {
    let{ForBasket} = useCustom()
     let {Total , ClearCart} = ForBasket

     function AlertFun(){
        alert('Payment Method is Not Activated yet')
     }

  return (
    <div className='MainPageWrapper'>
        <div className='InsideCart'>
           <div className='linkbgColor'>
              <IoIosArrowRoundBack fontSize={30}/>
              <Link className='ProductPageNavigator' to='/'>  Back To Shopping Page</Link>
           </div>
           
           {
           Total === 0 ? 
           <div className='CartEmpty'>
             <p className='CartShowEmpty'>Your Cart is Empty</p> 
             <div className='EmptyEmoji'><TbMoodEmpty/> </div>
           </div>
           : 
           <div className='CartPageContainer'>
            <div  style={{textAlign:'center'}} className='ToFixed'>
                <div  style={{textAlign:'center'}} className='TotalAmount'>
                <h2>Total : </h2>
                <h2>₹{Total}</h2>
         </div>
            <div style={{display:'flex', gap:'10px', marginBottom:'10px'}}> 
               <button className='css-button-shadow-border-sliding--black' onClick={()=>ClearCart()} > Clear Cart</button>
               <button className='css-button-shadow-border-sliding--red' onClick={AlertFun} > Order Now</button>
            </div>
            </div>
          <KidsProd/>
          <BeautyProd/>
          <MensProd/>
          <WomenProd/>
      </div>
      }
        </div>
      
    </div>
  )
}

export default MainPage