import React, { useState } from 'react'
import { ContactHead ,OurStory , OurMission , SetApart } from '../../Data/Contact'
import './About.css'

const Contact = () => {
 
  return (
   <div className='ContactAlign'>
      <div className='ContactContainer'>
            <h2 className='StoreName'> Welcome to Sana Store!</h2>
        <header className='Contact-Head'>
            <p> {ContactHead}</p>
        </header>
        
        <div className='ContactWrapper'>
             <h3>Our Story</h3>
             <p>{OurStory} </p>
        </div>

        <div className='ContactWrapper'>
            <h3>What Sets Us Apart</h3>
            <p>{SetApart}</p>
        </div>
        <div className='ContactWrapper'>
            <h3>Our Mission</h3>
            <p>{OurMission}</p>
        </div>

    </div>
   </div>
  )
}

export default Contact