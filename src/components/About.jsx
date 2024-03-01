import React from 'react'
import shahuji1 from "../shahuji1.jpeg"
import img2 from "../mainSection1.jpeg"
import Footer from './Footer';
import icon_location from "../icons8-location-50.png"



function About() {
  return (
    <div className=''>
        <div className="container-fluid">
        <div class="jumbotron-footer">
            <br/>
     <h1>About Us</h1>
     </div>
     <div>
    <h1>

    <br />
    LEGACY OF CHHATRAPATI SHAHU JI MAHARAJ
    <br/>
    </h1>
    {/* {first box} */}
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-3">
                <img src={shahuji1} className='about-shahuji' alt="" />
                <h4>Chhatrapati Shahu Maharaj</h4>
            </div>
            <div className="col-sm-9">
                <p>
                Chhatrapati Shahu Ji Maharaj University Kanpur, a premier landmark of higher education in Uttar Pradesh is named after the great social reformer Chhatrapati Shahu Maharaj also known as Rajarshi Shahu. It is a well-established and respected educational community where students of all backgrounds study and work together in a congenial and encouraging academic atmosphere. The university is geared to provide maximum scholastic benefit to each individual student and nurture them to achieve their full potential and evolve as a responsible global citizen
Shahuji Maharaj was the first Maharaja of the princely state of Kolhapur. Greatly influenced by the contributions of social reformer Jyotiba Phule and the Satya Sodhak Samaj movement, Shahu Maharaj was an ideal leader and able ruler who was associated with many progressive and path breaking activities during his rule.
He was born Yeshwantrao in the Ghatge family in Kagal village of the Kolhapur district as Yeshwantrao Ghatge to Jaisingrao and Radhabai in June 26, 1874. From his coronation in 1894 till his demise in 1922, he worked tirelessly for the cause of the lower caste subjects in his state. Primary education was made free to all regardless of caste and creed. He introduced a number of educational programs to promote education among his subjects. He established hostels separately for different ethnicities and religions and introduced several scholarships for meritorious students. He established Vedic Schools that enabled students from all castes and classes to learn the scriptures and propagate Sanskrit education among all. He also started special schools for the village heads or ‘Patils’ to make them into better administrators. Shahu Maharaj issued orders to open schools and hostels for backward castes, which was a unique initiative to educate those who were traditionally neglected for centuries. He exhorted that “It is necessary to end casteism. It is a crime to support caste. Caste is the biggest obstacle in the progress of our society. Caste-based organizations have vested interests. Certainly such organizations should use their power to end caste system, instead of strengthening them”.
                </p>
            </div>
        </div>
    </div>
    {/* {second-box} */}
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-9">
                <br/>
                <h3>
                    OUR VISION
                </h3>
                <br/>
                <p className='fs-2'>

               
                We Believe in to  increase Students skills and give them as many as opportunites so they can Know they About themselves and find them in good places in future
                </p>
                <br/>
                <p>

                Chhatrapati Shahu Ji Maharaj University, located in Kanpur, Uttar Pradesh, is a university formerly known as Kanpur University. It is one of the premier universities in India and Uttar Pradesh. The establishment of Kanpur University occurred in 1966 through the division of affiliated colleges from Agra University.
                </p>

            </div>
            <div className="col-sm-3">
                <img src={img2} alt="" />
            </div>

        </div>
    </div>

  </div>
  <div className="container borderbox"></div>
  <div className="container">
        <br/>
        <h1>
        <span>
            <img src={icon_location} alt="" />
        </span>
            Visit Us
        </h1>
        <br/>

    </div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14282.884523904448!2d80.2666109!3d26.4969224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37ea522f9c0d%3A0xc0670941a068aea2!2z4KSb4KSk4KWN4KSw4KSq4KSk4KS_IOCktuCkvuCkueClgiDgpJzgpYAg4KSu4KS54KS-4KSw4KS-4KScIOCkr-ClgeCkqOCkv-CkteCksOCljeCkuOCkv-Ckn-ClgCwg4KSV4KS-4KSo4KSq4KWB4KSw!5e0!3m2!1shi!2sin!4v1709291002985!5m2!1shi!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


</div>
<br/>
<br/>
<Footer/>

      
    </div>
  )
}

export default About
