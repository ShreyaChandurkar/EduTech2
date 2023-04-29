import React from 'react'
import "../About/About.scss"

import img1 from '../Assets/lib.jpg'
import img2 from '../Assets/transport.jpg'
import img3 from '../Assets/lab.jpg'
import img4 from '../Assets/counsel.jpg'
import img5 from '../Assets/sports.jpg'


const About = () => {
  return (
    <section className='about section'>
        <div className='secContainer'>
            <h2 className='title'>
                Why Sarvodaya Vidyalaya?
            </h2>

            <div className='mainContent container grid'>
                <div className='singleItem'>
                    <img src={img1} alt='Image Name'/>

                    <h3> Library </h3>

                    <p>
                    The school library has a huge repertoire<br/>
                     of more than 10,000 books,<br/>
                    32 scholarly journals, magazines,<br/> 
                    model question papers and so on. 
                    </p>

                </div>

                <div className='singleItem'>
                    <img src={img2} alt='Image Name'/>

                    <h3> Transport </h3>

                    <p>
                    Sarvodaya Vidyalaya provides <br/>
                    twenty five school buses <br/>
                    that run to different parts<br/>
                    of the city.
                    </p>
                    
                </div>

                <div className='singleItem'>
                    <img src={img3}  alt='Image Name'/>

                    <h3> Laboratory </h3>

                    <p>
                    The school also has full-fledged<br/>
                    laboratories for Biology, <br/>
                    Physics and Chemistry.
                    </p>
                    
                </div>

                <div className='singleItem'>
                    <img src={img4}  alt='Image Name'/>

                    <h3> Counselling </h3>

                    <p>
                    The school has an experienced counsellor <br/>
                    of repute who is of assistance to students <br/>
                    to help them tackle different situations <br/>
                    that are personal and emotional.
                    </p>
                    
                </div>
            </div>

            <div className='imgCard container'>
                <div className='cardContent grid'>

                    <div className='cardText'>
                        <h2> Extracurricular Activities </h2>

                        <p>
                            - Sports & games <br/>
                            - Study tours<br/>
                            - Scouts & guides activities<br/>
                            - NCC
                        </p>
                    </div>

                    <div className='cardImg'>
                    <img src={img5} alt='Image Name'/>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
