import React from 'react'
import LetsTalk from '../GlobalPages/LetsTalk/LetsTalk';
import AboutSection from './LandingPageComponants/AboutSection/AboutSection';
import CertificateSec from './LandingPageComponants/Certificates/CertificateSec';
import HeroSection from './LandingPageComponants/HeroSection/HeroSection';
import MyExperties from './LandingPageComponants/MyExperties/MyExperties';
import TimelineSection from './LandingPageComponants/TimelineSection/TimelineSection';
import "./LnadingPage.css";
import Testimonials from './LandingPageComponants/TestimonialsSec/Testimonials';
import Tech from './LandingPageComponants/TechUsed/TechUsed';
import WhyMe from './LandingPageComponants/WhyMe/WhyMe';
import AllProjects from '../AllProjects/AllProjects';
import Product from '../../componants/Product';
// import Projects from './LandingPageComponants/Projects/projectdata';

const Landingpage = () => {
  return (
    <div className='MainLandingPageComponants'>
      <HeroSection/>
      <Tech/>
      <AllProjects/>
      <Product/>
      {/* <Projects/> */}
      <WhyMe/>
      <MyExperties/>
      <AboutSection/>
      <LetsTalk/>
      <TimelineSection/>
      <CertificateSec/>
      <Testimonials/>
    </div>
  )
}

export default Landingpage
