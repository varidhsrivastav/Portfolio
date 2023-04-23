import React from 'react'
import LetsTalk from '../GlobalPages/LetsTalk/LetsTalk';
import AboutSection from './LandingPageComponants/AboutSection/AboutSection';
import CertificateSec from './LandingPageComponants/Certificates/CertificateSec';
import HeroSection from './LandingPageComponants/HeroSection/HeroSection';
import MyExperties from './LandingPageComponants/MyExperties/MyExperties';
import TimelineSection from './LandingPageComponants/TimelineSection/TimelineSection';
import "./LnadingPage.css";
import Testimonials from './LandingPageComponants/TestimonialsSec/Testimonials';
import Project from './LandingPageComponants/Projects/Project';

const Landingpage = () => {
  return (
    <div className='MainLandingPageComponants'>
      <HeroSection/>
      <MyExperties/>
      <AboutSection/>
      <Project/>
      <LetsTalk/>
      <TimelineSection/>
      <CertificateSec/>
      <Testimonials/>
    </div>
  )
}

export default Landingpage
