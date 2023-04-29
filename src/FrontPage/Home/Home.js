import React from 'react'
import "../Home/home.scss"

const Home = () => {
  return (
    <section className='home'>
      <div className='secContainer container'>
        <div className='homeText'>

          <h1 className='title'>
            Let there be Light
          </h1>

          <p className='subTitle'>
                Sarvodaya Vidyalaya, situated on the lush green Bethany Hills at Nalanchira, 
                was founded on 3 January 1973 by His Grace the Most Rev. 
                Benedict Mar Gregorios, 
                the late Metro politan Archbishop of Trivandrum.
          </p>

          {/* <button className='btn'>
            <a href='#'> Explore now </a>
          </button> */}
        </div>
      </div>
    </section>
  )
}

export default Home
