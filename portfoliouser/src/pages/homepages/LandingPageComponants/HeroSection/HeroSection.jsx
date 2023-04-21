import React from "react";
import profile from "./Image/profile.jpeg";
import wave from "./Image/web.png";
import "./HeroSection.css";
import linnkedIn from "./Image/linkedin.png";
import github from "./Image/github.png";
import mail from "./Image/gmail.png";
import call from "./Image/telephone.png";
import facebook from "./Image/facebook.png";
import instagram from "./Image/instagram.png";
const HeroSection = () => {
  return (
    <div className="HeroSectionMainComponants">
      <section className="HeroSectionComponants container">
        <div data-aos="fade-right" className="HeroSectionContent">
          <div className="about-text">
            <small className="small-text">
              Welcome to
              <span className=""> my portfolio website!</span>
            </small>
            <h1 className="animated animated-text">
              <span className="HeroIntroText">Hey folks, I'm</span>
              <div className="animated-info">
                <span className="animated-item">Varidh srivastav </span>
                <span className="animated-item">Web Developer</span>
              </div>
            </h1>
            <p>
              Building a successful product is a challenge. I am highly
              energetic in user experience design, interfaces and web
              development.
            </p>
            <div className="custom-btn-group mt-4">
              <a
                href={profile}
                className="btn mr-lg-2 custom-btn mx-4"
                download
              >
                <i className="uil uil-file-alt"></i> Download Resume
              </a>
              <a
                href="/contact"
                className="btn custom-btn custom-btn-bg custom-btn-link mx-4"
              >
                Get a free quote
              </a>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className="HeroSecImage svg">
          <img src={profile} className="img-fluid img-var" alt="" />
        </div>
        <div className="webVector">
          <img src={wave} alt="" />
        </div>
      </section>
      <div className="HeroSectionSocialIcon">
        <a>
          <img src={linnkedIn} alt="" />
        </a>{" "}
        <a>
          <img src={github} alt="" />
        </a>{" "}
        <a>
          <img src={mail} alt="" />
        </a>{" "}
        <a>
          <img src={call} alt="" />
        </a>{" "}
        <a>
          <img src={instagram} alt="" />
        </a>
        <a>
          <img src={facebook} alt="" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
