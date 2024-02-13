import React from 'react'
import about from "../Images/about.jpg"
import "./About.css"
export const About = () => {
  return (
    <div className='imagess mt-4'><div className='image-overlayss'>
    <div class="container">
    <div class="row">
       
      <div class="col mt-5" style={{fontFamily:"cursive"}}>
      <h1>Review<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></h1>
        I'm very thankful to HR Robinson from Skylark HR Solutions Pvt Ltd. 
        I got selected in one of biggest organisation with really good designation 
        and really good package. He guided me a lot, he was with me from my interview process
         till my joining. I highly recommend Skylark HR Solutions for all your career requirements. Once again thank you Robin.</div>
      <div class="col"><img src={about}/>
      </div></div></div>
      </div></div>
  )
}
