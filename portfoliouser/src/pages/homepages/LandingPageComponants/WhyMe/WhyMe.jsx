import React from "react";
import "./WhyMe.css"

const WhyMe = () => {
  return (
    <div className="WhyMeMainComponants">
      <div className="WhyMeComponant container">
        <div className="WhyMeTitle">
          <h5>WHY ME</h5>
          <h1>
            When deciding who to hire as your next Webflow Developer, I know you
            have endless options to choose from. So why hire me?
          </h1>
          <p>
            Because I'm focused on one thing: helping you achieve tangible
            business outcomes for your users and customers through world-class
            Webflow development and design.
          </p>
        </div>
        <div className="WhyMECardsContainer">
        <div className="WhyMECardBodyCont">
            <div className="WhyMECardBody" id="whymecard1">
                <div className="WhyMecardNum">
                    <h3>1</h3>
                </div>
                <h4>On Time </h4>
                <p>We’re picking a deadline, and I’m sticking to it. Simple. I respect your trust.</p>
            </div>
            </div>
            <div className="WhyMECardBodyCont"  id="whyct2">
            <div className="WhyMECardBody" id="whymecard2">
                <div className="WhyMecardNum">
                    <h3>2</h3>
                </div>
                <h4>Experienced</h4>
                <p>I’ve been designing and building websites for 22 years.</p>
            </div>
            </div>
            <div className="WhyMECardBodyCont">
            <div className="WhyMECardBody" id="whymecard3">
                <div className="WhyMecardNum">
                    <h3>3</h3>
                </div>
                <h4>Focused</h4>
                <p>I've been taking only Webflow based projects for the last 6 years.</p>
            </div>
            </div>
            <div className="WhyMECardBodyCont"  id="whyct4">
            <div className="WhyMECardBody" id="whymecard4">
                <div className="WhyMecardNum">
                    <h3>4</h3>
                </div>
                <h4>Affordable </h4>
                <p>I'm based in Turkey. That's why my pricing is competitive.</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
