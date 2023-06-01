import React from "react";
import "./AboutMe.css";
import LetsTalk from "../GlobalPages/LetsTalk/LetsTalk";
import Tech from "../homepages/LandingPageComponants/TechUsed/TechUsed";
import AboutMeImg from "./image/WhatsApp Image 2023-05-20 at 18.07.34.jpg";
const AboutMe = () => {
  return (
    <div>
      <section className="aboutme">
        <div className="thinkCreate">
          <div className="thinkAbout">
            <h1>Think.</h1>
          </div>
          <div className="create">
            <h1>Create.</h1>
          </div>
          <div className="Iterate">
            <h1>Iterate</h1>
          </div>
          {/* <h1>Think.Create.Iterate</h1> */}
        </div>
        <div className="container">
          {/* <div className="h1">
            I'm Varidh, a <span>coffee drinker</span> <br /> who creates lasting
            visual for durable companies around the globe
          </div> */}
          <div className="TechAboutUs">
            <Tech />
          </div>
          <LetsTalk />
          <h1 className="think">Think. Create. Iterate.</h1>
          <div className="row bio-text ">
            <div className="col-lg-2">
              <h3>bio.</h3>
            </div>
            <div className="col-lg-10">
              <p>
                Organized and dependable candidate successful at managing
                multiple priorities with a positive attitude. Willingness to
                take on added responsibilities to meet team goals.
                <br />
                My studies have provided me with broad proficiency in the use of
                programming languages, Databases, data structure, office
                automation, software packages, and techniques. <br />
                Alongside this, I have developed sound communication skills
                while delivering presentations to large audiences at university
                and as a class representative of my batch. <br />
                As such, I am confident that I can make an instant impact in
                technology and web roles.
                <br />I am eager to hear about potential career opportunities,
                so I would be pleased to chat about job openings in the software
                sphere. My key skills include computer application, web
                development, data structure, database management system,
                programming languages like c and c++.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
