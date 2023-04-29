import React, {useState} from 'react'
import {questions} from './faqapi'
import "./faq.css"
import  Accordion  from './Accordion';

// import img from "../Assets/faq.png"

const Faq = () => {
    const [data,setData] = useState(questions);
  return (
    <>
    <section className='main-div'>
        {/* <div className='faq-img'>
            <img src={img}/>
        </div> */}
      <h1>FAQ's</h1>
      {
        data.map((curElem) => {
            const {id} = curElem;
            return <Accordion key={id}{...curElem}/>
        })
      }
     
      </section>
      
    </>
  )
}

export default Faq
