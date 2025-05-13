import React from 'react'
import Content from '../components/Ourproducts/ProductCategoriesSection'
import Products from '../components/Ourproducts/Product'
import Whychoose from '../components/Ourproducts/Whychoose'
import Productsilder from '../components/Productsilder'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import ProductHeroSection from '../components/Ourproducts/ProductHeroSection'
import FeaturedProductsSection from '../components/Ourproducts/FeaturedProductsSection'
const OurProducts = () => {
  return (
    <>
    <ProductHeroSection />
    <Content />
    <FeaturedProductsSection />
    <Products />
    <Whychoose  />
    <Productsilder />
    <ContactSection/>
    
    </>
  )
}

export default OurProducts