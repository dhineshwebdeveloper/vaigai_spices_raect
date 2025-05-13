import React from 'react'
import HeroSection from '../components/home/HeroSection.jsx'
import HomeContent from '../components/home/HomeContent.jsx'
import AboutSection from '../components/home/AboutSection.jsx'
import FaqSection from '../components/home/HomeFaq.jsx'
import WelcomeSection from '../components/home/Features.jsx'
import Products from '../components/Ourproducts/Product.jsx'
import Productsilder from '../components/Productsilder'

import ContactSection from '../components/ContactSection'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
const Home = () => {
  return (
    <>
    <HeroSection />
    <WelcomeSection />
    <AboutSection />
    
    <HomeContent />
    <Products />
    <WhyChooseUs />
    <FaqSection />
    <Productsilder />
    <ContactSection/>
 
    </>
    
  )
}

export default Home