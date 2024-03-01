import React from 'react'
import { Link } from 'react-router-dom'
import rudra1 from "../rudhrabhishek1.jpeg"
import rudra2 from "../rudrabhishek2.jpeg"
import rudra3 from "../rudrabhishek3.jpeg"
import plant1 from "../plantation1.jpeg"
import plant2 from "../plantation2.jpeg"
import plant3 from "../plantation3.jpeg"
import flower1 from "../flower1.jpeg"
import flower2 from "../flower2.jpeg"
import flower3 from "../flower3.jpeg"
function Services() {
  return (
    <div>
        <br/>

<div className=" container text-center font-weight-bold ">
  <h1>Programms</h1>
  <p className='font-weight-bold'>
    There are many programms are held on the 57th Foundation Day
  </p>
</div>
<br/>
<div className="container">
    <h1>Rudrabhishek</h1>
 <div>
    <div className="row">
      <div className="col-md-4">
        <img src={rudra1} alt="Los Angeles" style={{width:"100%"}}/>
      </div>

      <div className="col-md-4">
        <img src={rudra2} alt="Chicago" style={{width:"100%"}}/>
      </div>
    
      <div className="col-md-4">
        <img src={rudra3} alt="New york" style={{width:"100%"}} />
      </div>
    </div>




</div>
<br/>
</div>
<br/>
<div className="container">
    <h1>Plantation Drive</h1>
    <div className="row">
      <div className="col-md-4">
        <img src={plant1} alt="Los Angeles" style={{width:"100%"}}/>
      </div>

      <div className="col-md-4">
        <img src={plant2} alt="Chicago" style={{width:"100%"}}/>
      </div>
    
      <div className="col-md-4">
        <img src={plant3} alt="New york" style={{width:"100%"}} />
      </div>
    </div>

    <br/>
</div>
<br/>
<div className="container">
    <h1>Flower show</h1>
    <div className="row">
      <div className="col-md-4">
        <img src={rudra1} alt="Los Angeles" style={{width:"100%"}}/>
      </div>

      <div className="col-md-4">
        <img src={rudra2} alt="Chicago" style={{width:"100%"}}/>
      </div>
    
      <div className="col-md-4">
        <img src={rudra3} alt="New york" style={{width:"100%"}} />
      </div>
    </div>


</div>
    </div>
  )
}

export default Services
