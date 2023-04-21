import React from "react";
import "./Footer.css";
import linnkedIn from "./Image/linkedin.png";
import github from "./Image/github.png";
import mail from "./Image/gmail.png";
import call from "./Image/telephone.png";
import facebook from "./Image/facebook.png";
import instagram from "./Image/instagram.png";
const Footer = () => {
  return (
    <div className="FooterMainComponants">
      <div className="FooterComponants ">
        <div className="FooterComponantsSocial">
          <img src={linnkedIn} alt="" />
          <img src={github} alt="" />
          <img src={mail} alt="" />
          <img src={call} alt="" />
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
        </div>
        <div className="FooterComponantsContent">
          <h1>&copy; Varidh Srivastav</h1>
          <h3>Creative web developer</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
