import React from 'react'
import { ContactSection } from '../../../Data/Product'
import ContactCard from './ContactCard'

const ContactCards = () => {
  return (
    <div className='ContactCardContainer'>
        {ContactSection.map((states)=>{
          return( 
          <div className='ConCards' key={states.id}><ContactCard {...states}/></div>
          )
        })}
    </div>
  )
}

export default ContactCards