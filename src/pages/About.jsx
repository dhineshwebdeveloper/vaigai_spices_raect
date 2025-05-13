import React from 'react'
import HeroSection from '../components/About us/HeroSection'
import OurStorySection from '../components/About us/OurStorySection'
import WhatMakesUsDifferent from '../components/About us/WhatMakesUsDifferent'
import VisionMission from '../components/About us/VisionMission'
import OurProcess from '../components/About us/OurProcess'
import TeamSection from '../components/About us/TeamSection'
import ContactSection from "../components/ContactSection";

const About = () => {
  return(
    <>
    <HeroSection />
    <OurStorySection />
    <WhatMakesUsDifferent />
    <VisionMission />
    <OurProcess />
    <TeamSection />
    <ContactSection />
    
    </>
  )
  
}

export default About