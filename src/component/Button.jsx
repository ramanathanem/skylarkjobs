import React from 'react'
import { Link } from 'react-router-dom'
import "./Button.css"
import Hr from './Hr'
import { Category } from './Category'
import { Human } from './Human'
import Browser from './Browser'
import { Box } from './Box'
import { Jobs } from './Jobs'
import { Resume } from './Resume'
import { Livejobs } from './Livejobs'
import { Footer } from './Footer'
import { About } from './About'


export const Button = () => {
  return (
    <div className='text-center mt-5'>
    
     <Human/>
     <Category/>
     
     <Box/>
    <Jobs/>
    <Resume/>
    <Livejobs/>
    <About/>
    <Footer/>
</div>
  )
}
