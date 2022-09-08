import React from 'react'
import HeroSection from '../../components/common/Hero/HeroSection'
import Master from '../../components/common/Master/Master'
import About from '../About/About'

const Home = () => {
  return (
    <Master>
    <>
      <HeroSection/>
      
       <About/> 
    </>
    </Master>
  )
}

export default Home