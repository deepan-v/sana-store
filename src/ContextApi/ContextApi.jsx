import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
import { MensWear , WomensWear , BeautyItems ,KidsDress } from '../Data/Product'


let NavContext = createContext()


let MainFun = ()=>{

      let CartItem ={}
      for(let i = 1 ; i <= 20 ; i++){
         CartItem[i] = 0
      }
      return CartItem
   }

 export let useCustom = () => useContext(NavContext)

const ContextApi = ({children}) => {
  

  let [KidDress , SetKidDress] = useState(KidsDress)
  let [UserName , SetUserName] = useState(JSON.parse(localStorage.getItem('name')) || null)
  let [Bool ,SetBool] = useState(false) 
  let [Boolean ,SetBoolean] = useState('')
//   console.log(Boolean);
  let [CartItems, SetCartItems] = useState(() => JSON.parse(localStorage.getItem('Items')) || MainFun());
  let [BeautyItem , SetBeautyItem] = useState(BeautyItems)
  let [Total , SetTotal] = useState(0)
  let [MenDress , SetMenDress] = useState(MensWear)
  let [WomenDress , SetWomenDress] = useState(WomensWear)
  let [Toggle , SetToggle] = useState(false)
  let [Basket , SetBasket] = useState(0)

  let BasketUpdate = ()=>{
      let Count = 0

      for(let key in CartItems){
           Count += CartItems[key]
      }
      SetBasket(Count)
   }

   let Prices = [
         {
            id:1,
            prise:399
         },
         {
            id:2,
            prise:199
         },
         {  id:3,
            prise:350
         },
         {  id:4,
            prise:399
         },
         {  id:5,
            prise:449
         },
         {   id:6,
            prise:399
         },
         {   id:7,
            prise:499
         },
         {
             id:8,
            prise:999
         },
         {   id:9,
            prise:209
         },
         { 
             id:10,
            prise:500
         },
         {
             id:11,
            prise:699
         },
         {
             id:12,
            prise:1099
         },
         {
             id:13,
            prise:800
         },
         {
             id:14,
            prise:799
         },
         {
             id:15,
            prise:499
         },
         {
             id:16,
            prise:249
         },
         {
             id:17,
            prise:149
         },
         {
             id:18,
            prise:190
         },
         {
             id:19,
            prise:180
         },
         {
             id:20,
            prise:380
         },

   ]

  let TotalValue = ()=>{

     let Total = 0
     Prices.forEach((state , index)=>{
      let Items = CartItems
      Total += state.prise * Items[index + 1]
      })

        SetTotal(Total)
 } 

 let ClearCart = ()=>{
    let total = {}
    for(let key in CartItems){
      total[key]=  CartItems[key] = 0 
   }
   localStorage.setItem('Items' , JSON.stringify(total) )
   SetBool(!Bool)

 }

  let ObjectItems = {  Toggle , SetToggle , Basket , BasketUpdate }

  useEffect(()=>{
      localStorage.setItem('Items' , JSON.stringify(CartItems) )
      SetBoolean(JSON.parse(localStorage.getItem('password')));
      TotalValue()
   })

  let ToAddCart = (id)=>{

     if(id <= 5){

      let CartItem = CartItems
       for (let key in CartItem){
            if(key == id){
               SetCartItems((prev)=>({...prev , [key] : prev[id] + 1}))
            }
       } 
      return
     }

     if(id <= 10){
      let CartItem = CartItems
        for (let key in CartItem){
            if(key == id){
               SetCartItems((prev)=>({...prev , [key] : prev[id] + 1}))
            }
       }
      return
     }
  
     if(id <= 15){
       let CartItem = CartItems
       for (let key in CartItem){
            if(key == id){
               SetCartItems((prev)=>({...prev , [key] : prev[id] + 1}))
            }
       }
      return
     }
     if(id <= 20){
        let CartItem = CartItems
       for (let key in CartItem){
            if(key == id){
               SetCartItems((prev)=>({...prev , [key] : prev[id] + 1}))
            }
       }
      return
     }
  }

   let ToReduceCart = (id)=>{
   
     if(id <= 5){

      let CartItem = CartItems
       for (let key in CartItem){
            if(key == id){
               if(CartItem[key] === 0){
                     SetBool(!Bool)
                  return
               }
               SetCartItems((prev)=>({...prev , [key] : prev[id] - 1}))
            }
       }

      return
     }

     if(id <= 10){
      let CartItem = CartItems
        for (let key in CartItem){
            if(key == id){
               if(CartItem[key] === 0){
                     SetBool(!Bool)
                  return
               }
               SetCartItems((prev)=>({...prev , [key] : prev[id] - 1}))
            }
       }
      return
     }
  
     if(id <= 15){
       let CartItem = CartItems
       for (let key in CartItem){
            if(key == id){
              if(CartItem[key] === 0){
                     SetBool(!Bool)
                  return
               }
               SetCartItems((prev)=>({...prev , [key] : prev[id] - 1}))
            }
       }
      return
     }
     if(id <= 20){
        let CartItem = CartItems
       for (let key in CartItem){
            if(key == id){
               if(CartItem[key] === 0){
                     SetBool(!Bool)
                  return
               }
               SetCartItems((prev)=>({...prev , [key] : prev[id] - 1}))
            }
       }
      return
     }
  }

  let RemoveItems = ()=>{
     localStorage.removeItem('name');
     localStorage.removeItem('password');
     SetBool(!Bool)
  }

    let ForBasket = {
      ToAddCart,
      ToReduceCart,
      ClearCart,
      Total
    }
   
   

  let Products = {SetUserName,RemoveItems ,UserName, KidDress , Bool, Boolean, CartItems ,SetBool,  BeautyItem , SetKidDress , WomenDress , SetWomenDress , MenDress , SetMenDress }

  let Simple = { ObjectItems ,  Products ,ForBasket }

  return (
    <NavContext.Provider value = {Simple}>
      {children}
    </NavContext.Provider>
  )
}



export default ContextApi