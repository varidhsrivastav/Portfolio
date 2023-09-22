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
import MyProjects from '../../componants/MyProjects/MyProjects';

const Landingpage = () => {
  return (
    <div className='MainLandingPageComponants'>
      <HeroSection/>
      <Tech/>
      <MyExperties/>
      <AboutSection/>
      <WhyMe/>
      <MyProjects/>
      <TimelineSection/>
      <CertificateSec/>
      <Testimonials/>
    </div>
  )
}

export default Landingpage
