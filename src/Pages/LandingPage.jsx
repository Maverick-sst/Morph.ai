import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Herosection'
import FeatureSection from '../components/FeatureSection'
import HowItWorksSection from '../components/HowItWorksSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
function LandingPage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <FeatureSection/>
    <HowItWorksSection/>
    <WhyChooseUsSection/>
    <FinalCTA/>
    <Footer/>
    </>
    
    
  )
}

export default LandingPage