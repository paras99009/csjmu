import React from 'react'
import Footer from './Footer'
import joinImg from "../joinimg.jpeg"

function JoinUs() {
  return (
    <>
    <div className="container-fluid">
        <img src={joinImg} className='join_img' alt="" />
    </div>
    <div className='container'>
        <br/>
        <h1 className='text-center'>
            Contact Us
        </h1>
        <br/>
        <br/>
      <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Mobile No.</label>
    <input type="number" className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" className="btn btn-primary text-center">Submit</button>

</form>

    </div>
    <br/>
 
    <br/>
    <Footer/>
    </>
   
  )
}

export default JoinUs
