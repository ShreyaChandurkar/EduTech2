import React from 'react'
import "../Popular/Popular.scss"
// import {BsArrowLeftShort} from "react-icons/bs"
// import {BsArrowRightShort} from "react-icons/bs"

import img1 from "../Assets/BE.jpg"
import img2 from "../Assets/architect.jpg"
import img3 from "../Assets/mca.jpg"
import img4 from "../Assets/pharma.jpg"


const Data = [
    {
        id:1,
        imgsrc: img1,
        destTitle: 'B.Engineering',
        desc: 'Engineering is the designing, testing and building of machines, structures and processes using maths and science. Studying it can lead to a rewarding career. Engineering is a discipline dedicated to problem solving.',
    },
    {
        id:2,
        imgsrc: img2,
        destTitle: 'B.Architecture',
        desc: 'This five-year full-time programme is a blend of theoretical and practical knowledge for students to learn the art of planning, designing and constructing physical structures of various kinds.',
    },
    {
        id:3,
        imgsrc: img3,
        destTitle: 'MCA',
        desc: 'MCA, which expands to Master of Computer Applications, is a two-year full-time academic program that imparts education related to computers, their programming, and applications.',
    },
    {
        id:4,
        imgsrc: img4,
        destTitle: 'B.Pharma',
        desc: ' One who pursues this degree studies core subjects including Pharmaceuticals, Pharmacology, Pharmaceutical Chemistry and Pharmacognosy.',
    },
    
]

const Popular = () => {
  return (
    <section className='popular section container'>
        <div className='secContainer'>

            <div className='secHeader flex'>
                <div className='textDiv'>
                    <h2 className='secTitle'>
                        Popular courses
                    </h2>
                    {/* <p>
                        from historical cities to natural 
                        spectaculars,
                        come see the best of the world!
                    </p> */}
                </div>

                {/* <div className='iconsDiv flex'>
                    <BsArrowLeftShort className="icon
                    leftIcon"/>
                    <BsArrowRightShort className="icon"/>
                </div> */}
            </div>

            <div className='mainContent grid'>
                

                {
                    Data.map(({id,imgsrc,destTitle,desc}) =>{
                        return(
                        <div className='singleDestination'>
                             <div className='destImage'>

                        <img src={imgsrc} alt='Image title' />

                        <div className='overlayInfo'>
                            <h3>{destTitle}</h3>
                            <p>
                                {desc}
                            </p>

                        </div>

                    </div>

                            <div className='destFooter'>
                        <div className='number'>
                            0{id}
                        </div>

                        <div className='destText flex'>
                            <h6>
                            {destTitle}
                            </h6>
                        
                        </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
            </div>
    </section>
  )
}

export default Popular
