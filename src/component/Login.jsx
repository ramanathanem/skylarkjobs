import React, { useState } from 'react'
import "./Login.css"

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
 export const Login = () => {

   
  const [name, setName]=useState('')
    const [email,setEmail]=useState('')
    const[password, setPassword]=useState('')
  
  


    const handlSumbit=(event)=>{
    event.preventDefault();
    console.log({name,email,password});

    }

   

  return (

    <div className='center'>
      
<h1>Login</h1>
<form method='post' onSubmit={handlSumbit} >
 <div className='txt_field'>
  <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
  <span></span>
  <label>Username</label>
 </div>

    <div className='txt_field'>
        <input type='email' value={email}  onChange={(e)=> setEmail(e.target.value)}/>
        <span></span>
            <label style={{left:"25px"}} >Email</label>
    </div>
    <div className='txt_field'>
        <input type='password'  value={password} onChange={(e)=> setPassword(e.target.value)} />
        
        <span></span>
        <label>Password</label>
    </div>
   <div className='pass'>Forgot Password</div>

<Link to="/table" >  <Button  type='submit' value="login"  variant="primary">login</Button></Link>

<div className='singup_link'>
    Not a Number? <a href=''>Signup</a>
</div>
</form>
<div>

    </div>
  
    </div>
  )
}
export default Login