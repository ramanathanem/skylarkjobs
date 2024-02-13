import React from 'react'
import it from "../Images/it.png"
import pbo from "../Images/pbo.jpg"
import sale from "../Images/sale.png"
import customer from "../Images/customer.png"
function Browser() {
  return (
    <>
   
    <div class="container text-center mt-4">
    <div class="row">
      <div class="col">
        <img src={it}/>
        <h4>IT</h4>
      </div>
      <div class="col">
        <img src={pbo}/>
        <h4>Pbo</h4>

      </div>
      <div class="col">
      <img src={sale}/>
      <h4>Sale & Marketing</h4>
      </div>
      <div class="col">
       <img src={customer}/>
       <h4>Customer Service</h4>
      </div>
    </div>
    </div>

    </>
  )
}

export default Browser