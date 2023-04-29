// import React from 'react'
// import "../Footer/Footer.scss"

// import {AiFillRead} from 'react-icons/ai'
// import {ImFacebook} from 'react-icons/im'
// import {BsTwitter} from 'react-icons/bs'
// import {AiFillInstagram} from 'react-icons/ai'


// const Footer = () => {
//   return (
//     <div className='footer'>
//         <div className='secContainer container grid'>
//             <div className='logoDiv'>

//                 <div className='footerLogo'>
//                     <a href='#' className='logo flex'>
//                         <h1 className='flex'><AiFillRead className="icon"/>
//                         Edutech</h1>
//                     </a>
//                 </div>

//                 <div className='socials flex'>
//                 <ImFacebook className="icon"/>
//                 <BsTwitter className="icon"/>
//                 <AiFillInstagram className="icon"/>
//             </div>

//             </div>

//             <div className='footerLinks'>
//                 <span className='linkTitle'>
//                     Helpful links
//                 </span>
//                 <li>
//                     <a href='#'> Home</a>
//                 </li>
//                 <li>
//                     <a href='#'> About</a>
//                 </li>
//                 <li>
//                     <a href='#'> Facility</a>
//                 </li>
//                 <li>
//                     <a href='#'> Acitivity</a>
//                 </li>
//             </div>

//             <div className='footerLinks'>
//                 <span className='linkTitle'>
//                     Contact Us
//                 </span>
//                 <span className='phone'>+444 565 6655</span>
//                 <span className='email'>Edutech@outlook.com</span>

//             </div>
            
//         </div>
//     </div>
//   )
// }

// export default Footer



import React from 'react'
import "../Footer/Footer.css"

import {ImFacebook,ImLocation2} from 'react-icons/im'
import {BsTwitter,BsLinkedin} from 'react-icons/bs'
import {AiFillInstagram,AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-links_div'>
                    <h4> Important Links </h4>
                    <a href='/Home'>
                        <p> Home</p>
                    </a>
                    <a href='/About'>
                        <p> About us</p>
                    </a>
                    <a href='/Courses'>
                        <p> Courses</p>
                    </a>   
                    <a href='/Facilities'>
                        <p> Facilities</p>
                    </a>                    
                </div>

                <div className='sb__footer-links_div'>
                    <h4> Quick links </h4>
                    <a href='/Campus'>
                        <p> Campus</p>
                    </a>
                    <a href='/Admission'>
                        <p> Admission</p>
                    </a>
                    <a href='/Faculty'>
                        <p> Faculty</p>
                    </a>
                    <a href='/Management'>
                        <p> Management</p>
                    </a>                       
                </div>

                <div className='sb__footer-links_div'>
                    <h4> Contact us </h4>
                        <p><ImLocation2/> Mar Ivanios Vidya Nagar Nalanchira Thiruvananthapuram - 695015</p>                   
                        <p><AiFillPhone/> 0471 2530831, 9496914949</p>
                        <p><MdEmail/> sarvodayavidyalaya1973@gmail.com</p> 
                        <p><MdEmail/> principal@svke033.in</p>    
                </div>
                

                <div className='sb__footer-links_div'>
                    <h4> Coming soon on</h4>
                    <div className='socialmedia'>
                         <ImFacebook className="icon"/>
                         <BsTwitter className="icon"/>
                         <AiFillInstagram className="icon"/>
                         <BsLinkedin className="icon"/>

                    </div>
                </div>
            </div>
            

            <hr></hr>

            <div className='sb__footer-below'>
                <div className='sb__footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} Edutech. All right reserved.
                    </p>
                </div>
                <div className='sb__footer-below-links'>
                    <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                    <a href='/Privacy'><div><p>Privacy</p></div></a>
                    <a href='/Security'><div><p>Security</p></div></a>
                    <a href='/Cookie'><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default Footer
