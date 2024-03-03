import React from 'react'
import ContactCards from './ContactInstide/ContactCards'
import ContactQuery from './ContactQuery'
import './Contact.css'

const Contact = () => {
  return (
    <div className='MainContactContainer'>
       <div className='ContactContainers'>
        <div style={{position:'relative'}}>
          <h3 className='ContactUs'>Contact us</h3>
            <ContactCards/>
        </div>
        <div className='ContactQuery'>
          <h3 style={{marginBottom:'30px'}}>Drop your Query's Here &#128071;</h3>
            <ContactQuery/>
        </div>
      </div>
    </div>
  )
}

export default Contact