import React from 'react'
import ContactIntro from '../components/Contact us/ContactIntro'
import ContactForm from '../components/Contact us/ContactForm'
import BusinessContactInfo from '../components/Contact us/BusinessContactInfo'

import SocialContactSection from '../components/Contact us/SocialContactSection'
import ContactFAQBlock from '../components/Contact us/ContactFAQBlock'
import ContactCTA from '../components/Contact us/ContactCTA'


const Contact = () => {
  return (
    <>
    <ContactIntro />
    <ContactForm />
    <BusinessContactInfo />
    <SocialContactSection />
    <ContactFAQBlock />
    <ContactCTA />
    
    </>
  )
}

export default Contact