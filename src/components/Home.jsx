import React from 'react'
import "./everything.css"
import main_img1 from "../mainSectionAlt.jpeg"
import main_img2 from "../flower3.jpeg"
import { Container } from '@chakra-ui/react'
import Footer from "./Footer"
import { Link } from 'react-router-dom'
import speech from "../speech.jpeg"

function Home() {
  return (
     <div>
        <div className="header">
       <div class="jumbotron">
         <h1>59th Foundation Day </h1>
        </div>
        </div>
         <div className="container">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/fL0KJGctKmU?si=qcu-MBJMg9ayWkcg" className='my-100px' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
         </div>
         <br/>
         



       {/* {main section} */}
       <div className="container">
        <br/>
        <h1 className='text-center text-weight-bold'>
            OUR VISION
        </h1>
        <div className="row">
            <div className="col-md-6">
                <img src={main_img1} alt="" />
            </div>
            <div className="col-md-6">
            <br/>
                <p className='text-center'>
                    On the occasion of 57th Foundation Day there are many programs are which are held in the University<br/>
                    Our Vice Chancellor and Many Reputed persons come and give their important presence in the programs

                </p>
                <br/>
            
            </div>
            <div className="col-md-6">
            <br/>
            <p className='text-center'>

                There were many programms held  such as Rudrabhishek,plantation drive,Bag distribution and many more
                <br/>
                </p>
                <br/>

            </div>
            <div className="col-md-6">
                <img src={main_img2} alt="" />

            </div>
       
        <div className="col-md-6">
                <img src={speech} alt="" />
            </div>
            <div className="col-md-6">
            <br/>
            <p className='text-center'>

                After onwards there was certificate  Distribution and many more events
                <br/>
                </p>
                <br/>

            </div>

        </div>    
      
       </div>

        {/* {footer}  */}
<br/>
<br/>
<div className="container">
    
</div>
 <Footer/>


      
    </div>
  )
}

export default Home
