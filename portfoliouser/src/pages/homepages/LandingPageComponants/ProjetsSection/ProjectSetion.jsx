import React from "react";
import "./ProjectSection.css";
import p1 from "./Image/p1.png";

const ProjectSetion = () => {
  return (
    <div>
      <section className="projecth ">
        <div className="container">
          <div className="waveq" id="waveqq"></div>
          <h1>Latest Project</h1>
          <p className="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            assumenda.
          </p>
          {/* <img className='wavep' src={wave2} alt="" /> */}
          <div className="project-body" data-aos="fade-right">
            <div className="project-content">
              <h4>Project Design</h4>
              <h2>Get Kamra</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
                accusantium.
              </p>
              <a
                to="/subproject"
                className="btn custom-btn custom-btn-bg custom-btn-a "
              >
                View Case study
              </a>
            </div>
            <div className="project-img">
              <img src={p1} alt="" />
            </div>
          </div>

          <div className="project-body" data-aos="fade-left">
            <div className="project-img">
              <img src={p1} alt="" />
            </div>

            <div className="project-content-2 project-content">
              <h4>Project Design</h4>
              <h2>Get Kamra</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
                accusantium.
              </p>
              <a
                to="/projects/web"
                className="btn custom-btn custom-btn-bg custom-btn-a "
              >
                View Case study
              </a>
            </div>
          </div>

          <div className="project-body" data-aos="fade-right">
            <div className="project-content">
              <h4>Project Design</h4>
              <h2>Get Kamra</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
                accusantium.
              </p>
              <a
                href="/contact"
                className="btn custom-btn custom-btn-bg custom-btn-a "
              >
                View Case study
              </a>
            </div>
            <div className="project-img">
              <img src={p1} alt="" />
            </div>
          </div>
          <div className="all-pro">
            <a
              to="/project"
              className="btn mr-lg-2 mx-auto custom-btn"
              download
            >
              All projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSetion;
