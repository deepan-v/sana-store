import React, { useCallback, useEffect, useState } from 'react'
import '../EntryForm/Form.css'
import { useNavigate } from 'react-router-dom'
import { useCustom } from '../../ContextApi/ContextApi'
import HandleValidate from './Validate'

const Form = () => {
  
      let{Products} = useCustom()
      let {SetBool , Bool ,SetUserName} = Products

     let Navigate = useNavigate()
     let [password , Setpassword] = useState(JSON.parse(localStorage.getItem('password')))
     console.log(password);

      let [Input , SetInputs] = useState({
          user_Number:'',
          user_Name:'',
          User_Gender:'',
          user_Address:'',
          user_Password:'',
      })
   
    let [Error , SetError] = useState({

    })
    
    let GrabValues = (e)=>{
        SetInputs({...Input , [ e.target.name] : e.target.value})
      }

      function HandleForm(e){
          e.preventDefault()
            SetError(HandleValidate(Input))   
         }

     useEffect(()=>{
       console.log(Error ? 'true':'false');
       let forStore = Object.keys(Error).length === 0

        if(forStore ){
          if(password)return
          console.log('reached');
          localStorage.setItem("name" , JSON.stringify(Input.user_Name))
          console.log(Input.user_Password);
          localStorage.setItem("password" , JSON.stringify(Input.user_Password))
          SetUserName(JSON.parse(localStorage.getItem('name'))) 
          SetBool(!Bool)
        }
     } ,[Error])    

         
    

  return (
    <div className='EntryForm'>
        <form onSubmit={HandleForm}>
            <div className='FormTop'>
                <h3>Welcome To Sana Fashions's</h3>
                <p style={{marginTop:'3px'}}>Create Your Account</p>
            </div>
            
            <input type='text' style={{border:Error.NameError ? '1px solid red':'1px solid black'}} onChange={GrabValues} name='user_Name' value={Input.user_Name} placeholder='Name'/>  
            <p>{Error.NameError}</p>
            <input type='number' style={{border:Error.NumberError ? '1px solid red':'1px solid black'}} onChange={GrabValues} value={Input.user_Number} placeholder='Phone Number' name='user_Number' />
            <p>{Error.NumberError}</p>
            <div>
              <h3 style={{margin:'5px 0px 0px 0px'}}>Gender</h3>
                <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
                   <div>
                     <input   type='radio' onChange={GrabValues} value='male'  name='User_Gender'/>
                     <label style={{marginTop:'-4px'}}>  Male </label>
                   </div>

                   <div>
                      <input type='radio' onChange={GrabValues} value='female'  name='User_Gender'/>          
                      <label style={{marginTop:'-4px'}}> Female  </label>
                   </div>    
                 
                </div>
                <p style={{marginTop:'6px', color:'red', fontSize:'12px'}}>{Error.Gender} </p>
            </div>
            <input style={{border:Error.ErrorAddress ? '1px solid red':'1px solid black'}} type='text' onChange={GrabValues} value={Input.user_Address} name='user_Address' placeholder='Address'/>
            <p>{Error.ErrorAddress} </p>
            <input style={{border:Error.ErrorPassword ? '1px solid red':'1px solid black'}} type='password'onChange={GrabValues} name='user_Password' placeholder='Password'/>
            <p>{Error.ErrorPassword} </p>
           <button  type='submit'>Log in</button>
        </form>
    </div>
  )
}

export default Form