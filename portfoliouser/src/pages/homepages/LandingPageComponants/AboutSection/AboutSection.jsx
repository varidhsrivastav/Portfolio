import React, { useEffect, useState } from 'react';
import "./AboutSec.css";
import Me from "./image/me.jpg"
import pic from "../HeroSection/Image/profile pic.jpg";
const superpower = `Creative web developer based in Bengaluru, India`;
const AboutSection = () => {
    const [typedSuperPower, setTypedSuperPower] = useState('');
    useEffect(()=>{
      const timeout =  setTimeout(()=>{
          setTypedSuperPower(superpower.slice(0, typedSuperPower.length+1))
      },150)
      return()=> clearTimeout(timeout)
    },[typedSuperPower])
  return (
    <div>
      <section className="home-about">
                <div className="container">
                {/* <img className='bob1' src={bob} alt="" /> */}
                    <div className="aboutHome">
                        <div className="aboutimg" data-aos="fade-right">
                            <img src={pic} data-aos="fade-right" alt="" />
                        </div>
                        <div className="about-homecontent" data-aos="fade-left">
                            <h3>About me</h3>
                            <h1>{typedSuperPower}</h1>
                            <p>I'm web developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                            <a href="/contact" className="btn custom-btn custom-btn-bg custom-btn-link ">Know More </a>
                        </div>
                    </div>
                </div>
            </section>
            
    </div>
  )
}

export default AboutSection
