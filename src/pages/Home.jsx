import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import About from '../components/About'

const Home = () => {
  return (
    <div className="pt-26">
      <Banner/>
      <Services />
      <About />
    </div>
  )
}

export default Home
