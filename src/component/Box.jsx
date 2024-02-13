import React from 'react'
import "./Box.css"

import It from "../Images/It1.png"
import Bpo from "../Images/bpo1.png"
import pbo from "../Images/Bpo.jpg"
import sale from "../Images/sale1.png"
import customer1 from "../Images/customer1.png"
import account from "../Images/accounting.png"
import digital from "../Images/digital1.png"
import health from "../Images/medical.png"
import manifacture from "../Images/building.png"
import skin from "../Images/skin1.png"
import hr1 from "../Images/hr2.png"
import operation from "../Images/operation1.png"
import category from "../Images/category12.png"
import ms from "../Images/ms.webp"
import ms2 from "../Images/ms3.png"
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material"
export const Box = () => {
  return (
    <div>
      <div className='container mt-5'>
        <div class="row mb-4">
  <div class="col">
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">IT</h5>
    <img src={It}/>
  
   
  </div>
</div>
  </div>
  <div class="col"> <div class="card">
  <div class="card-body">
    <h5 class="card-title">Bpo</h5>
    <img src={Bpo}/>
  
   
  </div>
</div></div>
  <div class="col"> 
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Sale & Marketing</h5>
    <img src={sale}/>
  
   
  </div>
</div></div>
  <div class="col">
     <div class="card">
  <div class="card-body">
    <h5 class="card-title">Customer service</h5>
    <img src={customer1}/>
  
  
  </div>
</div></div>

</div>
<div class="row mb-4">
  <div class="col"><div class="col">
     <div class="card">
  <div class="card-body">
    <h5 class="card-title">Account</h5>
    <img src={account}/>
  
  
  </div>
</div></div></div>
  <div class="col"><div class="col">
     <div class="card">
  <div class="card-body">
    <h5 class="card-title">Digital Marketing</h5>
    <img src={digital}/>
  
  
  </div>
</div></div></div>
  <div class="col"><div class="col">
     <div class="card">
  <div class="card-body">
    <h5 class="card-title">Health care</h5>
    <img src={health}/>
  
   
  </div>
</div></div></div>
  <div class="col"><div class="col">
     <div class="card">
  <div class="card-body">
    <h5 class="card-title">Manifacturing</h5>
    <img src={manifacture}/>
  

  </div>
</div></div></div>
</div>
</div>
<div className='container'>
<div class="row mb-4">
  <div class="col">
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Skin clinic</h5>
    <img src={skin}/>
  
   
  </div>
</div>
  </div>
  <div class="col"> <div class="card">
  <div class="card-body">
    <h5 class="card-title">Human Resource</h5>
    <img src={hr1}/>
  
 
  </div>
</div></div>
  <div class="col"> <div class="card">
  <div class="card-body">
    <h5 class="card-title">Operation</h5>
    <img src={operation}/>
  
   
  </div>
</div></div>
  <div class="col"> <div class="card">
  <div class="card-body">
    <h5 class="card-title">Miscellaneous</h5>
    <img src={ms2}/>
  
  </div>
</div></div>
</div>
</div>
    </div>
  )
}
