import React from "react";
import "./FeaturedProject.css";
import logo1 from "./image/logodf.png";
import CleanCloset from "./image/cc1.png";
import GetKamra from "./image/Screenshot (87).png";
const Project = () => {
  const Projects = [
    {
      id: "1",
      projectType: "Web Project",
      ProjectImg: "./image/monitor (1).png",
      ProjectName: "Get Kamra",
      projectDesc:
        "lorem ipsum lorem ispudkjkdj ksjdhvb kjsvfdbs kjsdhvfk sldj",
      showProjectbtn: "Show More",
    },
    {
      id: "2",
      projectType: "Web Project",
      ProjectImg: "./image/monitor (1).png",
      ProjectName: "Get Kamra",
      projectDesc:
        "lorem ipsum lorem ispudkjkdj ksjdhvb kjsvfdbs kjsdhvfk sldj",
      showProjectbtn: "Show More",
    },
    {
      id: "3",
      projectType: "Web Project",
      ProjectImg: "./image/monitor (1).png",
      ProjectName: "Get Kamra",
      projectDesc:
        "lorem ipsum lorem ispudkjkdj ksjdhvb kjsvfdbs kjsdhvfk sldj",
      showProjectbtn: "Show More",
    },
  ];
  return (
    <div className="ProjectMainContainer">
      <div className="ProjectContainer container">
        <div className="maintile">
          <h1>Featured Projects</h1>
        </div>
        <div className="FeaturedProjectBody">
          <div className="FeaturedProjectCount">
            <div className="fprojectid">
              <p>01</p>
            </div>
            <div className="FeaturedProjectLine">
              <div className="fpline"></div>
            </div>
            <a href="/">
              <div className="FPicon">
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </a>
          </div>
          <div className="FeaturedProjectContent">
          <div className="FeatureProjTitle">
                <img src={CleanCloset} alt="" />
            </div>
            <div className="FeatProjectTitleLogo">
              <img src={logo1} alt="" />
            </div>
            {/* <div className="FeatureProjTitle">
                <img src={CleanCloset} alt="" />
            </div> */}
            <div className="FeaturedProjectDesc">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Itaque, aspernatur.
              </p>
            </div>
          </div>
        </div>
        <div className="FeaturedProjectBody">
          <div className="FeaturedProjectCount">
            <div className="fprojectid">
              <p>02</p>
            </div>
            <div className="FeaturedProjectLine">
              <div className="fpline"></div>
            </div>
            <a href="/">
              <div className="FPicon">
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </a>
          </div>
          <div className="FeaturedProjectContent">
            <div className="FeatProjectTitleLogo">
              <h1>GetKamra</h1>
            </div>
            <div className="FeatureProjTitle">
                <img src={GetKamra} alt="" />
            </div>
            <div className="FeaturedProjectDesc">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam nisi minima esse eius sequi cupiditate officia fuga vero reprehenderit.
              </p>
            </div>
          </div>
        </div>
        <div className="FeaturedProjectBody">
          <div className="FeaturedProjectCount">
            <div className="fprojectid">
              <p>03</p>
            </div>
            <div className="FeaturedProjectLine">
              <div className="fpline"></div>
            </div>
            <a href="/">
              <div className="FPicon">
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </a>
          </div>
          <div className="FeaturedProjectContent">
            <div className="FeatProjectTitleLogo">
              <img src={logo1} alt="" />
            </div>
            {/* <div className="FeatureProjTitle">
                <h1>CleanCloset</h1>
            </div> */}
            <div className="FeaturedProjectDesc">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam nisi minima esse eius sequi cupiditate officia fuga vero reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
