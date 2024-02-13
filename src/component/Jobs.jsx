import React from 'react'
import "./Jobs.css"
import hr1 from "../Images/hr1.jpg"
import Bpo from "../Images/Bpo.jpg"
import It1 from "../Images/It1.png"
import It from "../Images/It.jpg"
import pbo from "../Images/Bpo.jpg"
import sale from "../Images/sales.png"
import customer from "../Images/cusservice.png"
import account from "../Images/account.png"
import digital from "../Images/digital2.jpg"
import health from "../Images/health.jpg"
import manifacture from "../Images/menifacture.jpg"
import skin from "../Images/skin.jpg"
import ms2 from "../Images/ms2.png"

import operation from "../Images/operation.jpg"
import category from "../Images/category12.png"
import ms from "../Images/ms.webp"
export const Jobs = () => {
  return (
    <div className='text-center'>
        <h1 className=' job mt-4 text-center' >JOBS YOU MAY BE INTERESTED IN</h1>
        <button className='btn btn-outline-primary me-3 text-center' style={{borderRadius:"20px"}}>Hot jobs</button>
        <button className='btn btn-outline-primary me-3 text-center' style={{borderRadius:"20px"}}>Recent jobs</button>
        <button className='btn btn-outline-primary me-3 ' style={{borderRadius:"20px"}}>Popular jobs</button>
        <div className='container mt-5'>
        <div class="row mb-4">
  <div class="col">
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Human Resource</h5>
    <img src={hr1}/>
  
    <p class="card-text mt-2"><i class="bi bi-suitcase-lg-fill"></i> Mid Level</p>
    <p class="card-text mt-2"><i class="bi bi-currency-dollar"></i>$600-$700</p>
<button className='btn btn-outline-secondary'>Full Time</button>
  </div>
</div>
  </div>
  <div class="col"> <div class="card">
  <div class="card-body">
    <h5 class="card-title">IT</h5>
    <img src={It}/>
  
    <p class="card-text mt-2"><i class="bi bi-suitcase-lg-fill"></i> Mid Level</p>
    <p class="card-text mt-2"><i class="bi bi-currency-dollar"></i>$600-$700</p>
<button className='btn btn-outline-secondary'>Full Time</button>
  </div>
</div></div>
  <div class="col"> 
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Bpo</h5>
    <img src={Bpo}/>
  
    <p class="card-text mt-2"><i class="bi bi-suitcase-lg-fill"></i> Mid Level</p>
    <p class="card-text mt-2"> <i class="bi bi-currency-dollar"></i>$600-$700</p>
<button className='btn btn-outline-secondary'>Part Time</button>
  </div>
</div></div>
  <div class="col">
     <div class="card">
  <div class="card-body">
    <h5 class="card-title">Customer service</h5>
    <img src={customer}/>
  
    <p class="card-text mt-2"><i class="bi bi-suitcase-lg-fill"></i> Mid Level</p>
    <p class="card-text mt-2"> <i class="bi bi-currency-dollar"></i>$600-$700</p>
<button className='btn btn-outline-secondary'>Part Time</button>
  </div>
</div></div>

</div>
<div class="row mb-4">
  <div class="col"><div class="col">
     <div class="card">
  <div class="card-body">
    <h5 class="card-title">Account</h5>
    <img src={account}/>
  
    <p class="card-text mt-2"><i class="bi bi-suitcase-lg-fill"></i> Mid Level</p>
    <p class="card-text mt-2"> <i class="bi bi-currency-dollar"></i>$600-$700</p>
<button className='btn btn-outline-secondary'>Part Time</button>
  </div>
</div></div></div>
  <div class="col"><div class="col">
     <div class="card">
  <div class="card-body">
    <h5 class="card-title">Digital Marketing</h5>
    <img src={digital}/>
  
    <p class="card-text mt-2"><i class="bi bi-suitcase-lg-fill"></i> Mid Level</p>
    <p class="card-text mt-2"> <i class="bi bi-currency-dollar"></i>$600-$700</p>
<button className='btn btn-outline-secondary'>Part Time</button>
  </div>
</div></div></div>
  <div class="col"><div class="col">
     <div class="card">
  <div class="card-body">
    <h5 class="card-title">Health care</h5>
    <img src={health}/>
  
    <p class="card-text mt-2"><i class="bi bi-suitcase-lg-fill"></i> Mid Level</p>
    <p class="card-text mt-2"> <i class="bi bi-currency-dollar"></i>$600-$700</p>
<button className='btn btn-outline-secondary'>Part Time</button>
  </div>
</div></div></div>
  <div class="col"><div class="col">
     <div class="card">
  <div class="card-body">
    <h5 class="card-title">Manifacturing</h5>
    <img src={manifacture}/>
  
    <p class="card-text mt-2"><i class="bi bi-suitcase-lg-fill"></i> Mid Level</p>
    <p class="card-text mt-2"> <i class="bi bi-currency-dollar"></i>$600-$700</p>
<button className='btn btn-outline-secondary'>Part Time</button>
  </div>
</div></div></div>
</div>
</div>
<div className='container'>
<div class="row mb-4">
  <div class="col">
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Manifacturing</h5>
    <img src={skin}/>
  
    <p class="card-text mt-2"><i class="bi bi-suitcase-lg-fill"></i> Mid Level</p>
    <p class="card-text mt-2"> <i class="bi bi-currency-dollar"></i>$600-$700</p>
<button className='btn btn-outline-secondary'>Part Time</button>
  </div>
</div>
  </div>
  <div class="col"> <div class="card">
  <div class="card-body">
    <h5 class="card-title">Manifacturing</h5>
    <img src={sale}/>
  
    <p class="card-text mt-2"><i class="bi bi-suitcase-lg-fill"></i> Mid Level</p>
    <p class="card-text mt-2"> <i class="bi bi-currency-dollar"></i>$600-$700</p>
<button className='btn btn-outline-secondary'>Part Time</button>
  </div>
</div></div>
  <div class="col"> <div class="card">
  <div class="card-body">
    <h5 class="card-title">Manifacturing</h5>
    <img src={operation}/>
  
    <p class="card-text mt-2"><i class="bi bi-suitcase-lg-fill"></i> Mid Level</p>
    <p class="card-text mt-2"> <i class="bi bi-currency-dollar"></i>$600-$700</p>
<button className='btn btn-outline-secondary'>Part Time</button>
  </div>
</div></div>
  <div class="col"> <div class="card">
  <div class="card-body">
    <h5 class="card-title">Manifacturing</h5>
    <img src={ms2}/>
  
    <p class="card-text mt-2"><i class="bi bi-suitcase-lg-fill"></i> Mid Level</p>
    <p class="card-text mt-2"> <i class="bi bi-currency-dollar"></i>$600-$700</p>
<button className='btn btn-outline-secondary'>Part Time</button>
  </div>
</div></div>
</div>
    </div>
    </div>
  )
}
