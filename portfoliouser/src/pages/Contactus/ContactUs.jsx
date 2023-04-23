import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="ContactUsMainComponants">
      <div className="ContactUsComponants container">
        <div className="ContactUsCompTitle">
          <h1>Let's work Together</h1>
          <p>
            Let us help you become ever greater at what you do. fill out the
            following form and we will get back to you in the next 24 hours.{" "}
          </p>
        </div>
        <div className="ContactUsCompMainForm">
          <div className="ContactUsCompoForm">
            <form className="ContactForm">
              <div className="ContFormInputContent">
                <div className="ContFormLabel">
                  <div className="ContFormLabelNumber">
                    <h5>01</h5>
                  </div>
                  <div className="ContFormLabelText">
                    <label htmlFor="">Whats Your name </label>
                  </div>
                </div>
                <div className="ContFormInput">
                  <input type="text" placeholder="Type your full name" />
                </div>
              </div>
              <div className="ContFormInputContent">
                <div className="ContFormLabel">
                  <div className="ContFormLabelNumber">
                    <h5>02</h5>
                  </div>
                  <div className="ContFormLabelText">
                    <label htmlFor="">Whats Your email</label>
                  </div>
                </div>
                <div className="ContFormInput">
                  <input type="email" placeholder="Type your email" />
                </div>
              </div>
              <div className="ContFormInputContent">
                <div className="ContFormLabel">
                  <div className="ContFormLabelNumber">
                    <h5>03</h5>
                  </div>
                  <div className="ContFormLabelText">
                    <label htmlFor="">Whats Your Mobile number </label>
                  </div>
                </div>
                <div className="ContFormInput">
                  <input type="number" placeholder="Type your full name" />
                </div>
              </div>
              <div className="ContFormInputContent">
                <div className="ContFormLabel">
                  <div className="ContFormLabelNumber">
                    <h5>04</h5>
                  </div>
                  <div className="ContFormLabelText">
                    <label htmlFor="">Whats Your name </label>
                  </div>
                </div>
                <div className="ContFormInput">
                  <input type="text" placeholder="Type your full name" />
                </div>
              </div>
              <div className="ContFormInputContent">
                <div className="ContFormLabel">
                  <div className="ContFormLabelNumber">
                    <h5>05</h5>
                  </div>
                  <div className="ContFormLabelText">
                    <label htmlFor="">Whats Your name </label>
                  </div>
                </div>
                <div className="ContFormInput">
                  <input type="text" placeholder="Type your full name" />
                </div>
              </div>
              <div className="ContFormInputContent">
                <div className="ContFormLabel">
                  <div className="ContFormLabelNumber">
                    <h5>06</h5>
                  </div>
                  <div className="ContFormLabelText">
                    <label htmlFor="">Whats Your name </label>
                  </div>
                </div>
                <div className="ContFormInput">
                  <input type="text" placeholder="Type your full name" />
                </div>
              </div>
              <div className="ContUsBtn">

              <button class="button-18">
                Send 
              </button>
              </div>
            </form>
          </div>
          <div className="ContactUsPhoneEmail">
            <div className="ContactUsMobile">
              <h5>CALL US</h5>
              <p>+91 9565178122</p>
            </div>
            <div className="ContactUsEmail">
              <h5>EMAIL US</h5>
              <p>varidhsrivastava19145@gmail.com</p>
            </div>
            <div className="ContactUsAdress">
              <h5>Adress</h5>
              <p>
                Lorem, ipsum dolor. <br />
                Lorem, ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
