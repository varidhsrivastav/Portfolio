import React from "react";
import "./Testimonials.css";
import image from "./IMG-20210903-WA0022.jpg";
import t1image from "./quotation-mark.png";
import t2image from "./quotation-mark (1).png"

const Testimonials = () => {
  return (
    <div className="TestimonialMainComponants">
      <div className="TestimonialComponant container">
        <div className="ContactMeSection">
          <h1>Available for select freelance opportunities</h1>
          <p>
            hace an exciting project you need help with? <br />
            Send me an email or contact me via instant message
          </p>
          <div className="testimonialsemail">
            <a href="/">
              <h5>varidhsrivastava19145@gmail.com</h5>
            </a>
          </div>
        </div>
        <div className="testimonials">
          <div className="testimonilas1" id="t1">
            <div className="testiconimg">
              <div className="testicon">
                <img src={t1image} alt="" />
              </div>
              <div className="testimage">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="testcontent">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                tempora dolores sit vero sunt tempore accusantium quasi illum
                reprehenderit pariatur.
              </p>
              <h4>-Jai Gupta</h4>
              <h6>CEO at rablo.in</h6>
            </div>
          </div>
          <div className="testimonilas1" id="t2">
            <div className="testiconimg">
              <div className="testicon">
                <img src={t2image} alt="" />
              </div>
              <div className="testimage">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="testcontent">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Conse
                quatur, animi?
              </p>
              <h4>-Jai Gupta</h4>
              <h6>CEO at rablo.in</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
