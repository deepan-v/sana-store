import React, { useEffect, useState } from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import '../Navbar/Navbar.css'
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { useCustom } from '../../ContextApi/ContextApi';
import img from '../../Assets/BrandLogo.jpg'
import { FaUser } from "react-icons/fa";


const Navbar = () => {

  let {ObjectItems ,Products} = useCustom()
  let {RemoveItems} = Products
  let {Toggle , SetToggle , Basket , BasketUpdate} = ObjectItems
  
  useEffect(()=>{
     BasketUpdate()
  })

  return (
    <div className='NavContainer'>
        <div style={{display:'flex' , flexDirection:'column' , alignItems:'center'}}>
           <img className='brand-name' src={img} alt="" />
           <h3 className='SanaFashions' style={{marginTop:'5px' , fontStyle:'italic'}}>Sana Fashion's</h3>
        </div>
        <div className='ToProduct'>
          <div className='Logout' style={{cursor:'pointer'}} onClick={()=>RemoveItems()}>
            <p><FaUser/></p>
            <p> Logout</p>
            {/* <p>{UserName}</p> */}
            </div>
                <div className = 'ToggleBtn' 
                 style={{fontSize:'28px', cursor:'pointer'}}
                 onClick={()=>SetToggle(!Toggle)}>
                    {!Toggle ? <div><IoMenu/></div> : <div><IoCloseSharp/></div>}  </div>
            <div >
                <ul className = {!Toggle ? 'NavItemsContainer Toggle':'NavItemsContainer'}>

                    <NavLink ToggleFunction ={SetToggle} Toggle = {Toggle} Loc ='/' NavLocName="Product" />
                    <NavLink ToggleFunction ={SetToggle} Toggle = {Toggle} Loc ='/ContactPage' NavLocName="Contact"/>
                    <NavLink ToggleFunction ={SetToggle} Toggle = {Toggle} Loc ='/AboutPage' NavLocName="About us"/>
                  
                </ul>
            </div>
            <div style={{position:'relative'}} > 
                <Link to='/ShoppingPage' className='ShoppingIcons'><HiOutlineShoppingBag/></Link>
                <span className='CartNum'>{Basket}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar

  let NavLink = ( NavLoc )=>{
      let {Loc , ToggleFunction,Toggle,  NavLocName} = NavLoc
   let Location = useLocation()

    return(
        <Link onClick={()=>ToggleFunction(!Toggle)}  className= {Location.pathname === Loc ? "NavItems NavClick": "NavItems"} to={Loc}>{NavLocName}</Link>
    )
     
  }