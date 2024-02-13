import React from 'react'
import human from "../Images/human.jpg"
import { Link } from 'react-router-dom'
function Hr() {
  return (
  
    <div class="card text-bg-dark mt-0 " >
    <img height={700} src={human} class="card-img" alt="..."/ >
    <div class="card-img-overlay">
      <h5 class="card-title" style={{color: '#FF1493'}}>Welcome Skylark Hr solution...</h5>
     <h1 className='text-center' style={{color: '#FF1493'}}>The Easiest Way to Get Your New Job</h1>
     <h2 className='text-center' style={{color: '#FF1493'}}>We offer 12000 jobs vacation right now</h2>
      <Link to="/form"><button type="button" class="btn btn-success mt-5  " id='but'><i class="bi bi-ticket-detailed-fill me-2"></i>Candidates details</button></Link>
    </div>
    
  </div>
  
  )
}

export default Hr