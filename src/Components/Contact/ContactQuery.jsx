import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import HandleValidate from './Validate';

const ContactQuery = () => {

    let [UsersData , SetUsersData] = useState({
    user_name:'',
    user_email:'',
    message:'',
   })
    
  const form = useRef();

  let [Boolean , SetBoolean] = useState(false)
  let [ToMount , SetToMount] = useState(false)
  let [Error , SetError] = useState({})

   let ErrorHandling = Object.keys(Error).length

   console.log(ErrorHandling);
  

  let HandleChange = (e)=>{
    SetUsersData({...UsersData , [e.target.name]:e.target.value})
  }
 
  let Deepan = ()=>{
      SetError(HandleValidate(UsersData))
  }


 
  const sendEmail = async (e) => {

    e.preventDefault();
     SetBoolean(true)

     if(ErrorHandling !== 0){
      SetBoolean(false)
       return
    }


    try {
        let HandleEmail = await emailjs.sendForm('service_dyo92rt', 'template_wfll06v', form.current, 'KSEyQ-IHLYIK15ybB')
         console.log(HandleEmail);
         SetToMount(true)
         setTimeout(()=>SetToMount(false),5000)
         SetUsersData({
           user_name:'',
           user_email:'',
           message:'',
          })
           SetBoolean(false)

        
    } catch (error) {
        console.log(error);
        SetBoolean(false)

    } 
  };


  return (
    <form className='ContactForm' ref={form} onSubmit={sendEmail}>
        <label>Name:</label>
        <input type='text' value={UsersData.user_name} onChange={HandleChange} name='user_name' placeholder='Name'/>
         <p className='ErrorShow'>{Error.nameError}</p>
        <label>E-Mail:</label>
        <input type='text' onChange={HandleChange} value={UsersData.user_email} name='user_email' placeholder='E-Mail'/>
         <p className='ErrorShow'>{Error.emailError}</p>
        <label>Message:</label>
        <textarea type='text' onChange={HandleChange} value={UsersData.message} name='message' placeholder='Message'/>
         <p className='ErrorShow'>{Error.message}</p>
        <button disabled ={Boolean} type='submit' onClick={Deepan}> Send !</button>
        <div className='ToShowSent'>{ToMount&&<div>Message Received , I'll Get Back You Soon  &#128077;</div>}</div>
    </form>
  )
}

export default ContactQuery