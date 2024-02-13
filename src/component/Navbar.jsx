import React, { useState } from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
import sky from"../Images/sky.png"

export const Navbar = () => {
    const[menuOpen, setOpen]=useState(false)
  return (
    <div>
   <nav>
    <Link to="/" className='title'><img src={sky}/></Link>
    <div className='menu' onClick={()=> setOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    
    <ul className={menuOpen ? "open":""}>
    <li>
        <NavLink to="/login"> <button className='btn btn-outline-light'><i class="bi bi-box-arrow-in-right me-2"></i>Login</button></NavLink></li>
        <li>
            <NavLink to="/"><i class="bi bi-house-door-fill"></i>Home
           </NavLink>
            </li>
        <li>
        <NavLink to="/jobs"><i class="bi bi-pc-display-horizontal"></i>Jobs</NavLink></li>
        <li>
        <NavLink to="/contact"><i class="bi bi-person-lines-fill"></i>Contact</NavLink></li>
        <li>
        <NavLink to="/notification"> <i class="bi bi-bell"></i>Notification</NavLink></li>
       
    </ul>
   
   
   </nav>
  
   </div>
  )
}
