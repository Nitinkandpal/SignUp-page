import React, { useState } from 'react'
import './loginpage.css'
import user_icon from '../assets/person.png'
import password_icon from '../assets/password.png'
import email_icon from '../assets/email.png'

const loginpage = () => {
  const [action,setAction]=useState("SignUp");
  return (

    <>
    
    <div className='container'>
      <div className='header'>
        <div className="text"><h2>{action}</h2>  </div>
          <div className="underline"> </div>

      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name'/>

        </div>}

        
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email'/>
          
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' />
          
        </div>
      </div>
      {action==="SignUp"?<div></div>: <div className="forgot-password">Forget-Password? <span>Click here!</span></div>}
      
     
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("SignUp")}}>  SignUp   </div>
        <div className={action==="SignUp"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>  Login   </div>
      </div>
      
    </div>
    </>
  )
}

export default loginpage
