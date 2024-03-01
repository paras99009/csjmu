import React from 'react'
import Navbar_logo from "../navbar_logo.png";
import "./everything.css"
import navbar_img from "../navbar_logo-img.png"
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="full_navbar text-weight-bold  fs-24px">

<img src={Navbar_logo} className='navbar-upper' alt="" />

<div className='container'>
 <nav class="navbar navbar-expand-lg navbar-light  ">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto font-weight-bold">
      <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About us</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/services">Programs</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/join-us">Join us</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="https://csjmu.ac.in/">View Us</Link>
      </li>
    
      
    
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-danger my-2 my-sm-0" type="submit"><Link to="join">Contact Us</Link> </button>
    </form>
  </div>
</nav>
      
    </div>
    </div>
  )
}

export default Navbar
