import React from "react";
import "./ViewProjects.css";
import titlePhot from "./image/cc1.png";
import cc2 from "./image/cc2.png";
import cc3 from "./image/cc3.png";
import cc4 from "./image/cc4.png";
import cc5 from "./image/cc5.png";
import cc6 from "./image/cc6.png";
import cc7 from "./image/cc7.png";
import logo from "./image/logodf.png";


const ViewProjects = () => {
  return (
    <div className="ViewProjectMainComponants">
      <div className="ViewProjectCompImage ">
        <img src={titlePhot} alt="" />
      </div>
      <div className="ViewProjectComponants container">
        <div className="vpTitle">
          <img src={logo} alt="" />
        </div>
        <hr />
        <div className="VprojectmainDesc">
          <div className="vprojectdescTiltes">
            <div className="vprojectdescTilte">
              <div className="vpTitle">
                <h3> Category</h3>
              </div>
              <div className="vptilteans">
                <h5>web application</h5>
              </div>
            </div>
            <div className="vprojectdescTilte">
              <div className="vpTitle">
                <h3> Started year</h3>
              </div>
              <div className="vptilteans">
                <h5>Mrach 2023 - April 2023 </h5>
              </div>
            </div>
            <div className="vprojectdescTilte">
              <div className="vpTitle">
                <h3> Tech used </h3>
              </div>
              <div className="vptilteans">
                <h5>web application</h5>
              </div>
            </div>
            <div className="vprojectdescTilte">
              <div className="vpTitle">
                <h3>Project Link</h3>
              </div>
              <div className="vptilteans">
                <h5>web application</h5>
              </div>
            </div>
          </div>
          <div className="vprojectfulldecr">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit repudiandae aut vitae enim impedit fugit,
              aspernatur, minima officia dolorem maiores itaque adipisci aliquid
              accusamus. Unde velit dicta alias autem consectetur.
            </p>
          </div>
        </div>
        <div className="projectDescGallery">
          <h3>Project Gallery</h3>
          <div className="ProjectsImages">
            <img src={titlePhot} alt="" />
            <img src={cc2} alt="" />
            <img src={cc3} alt="" />
            <img src={cc4} alt="" />
            <img src={cc5} alt="" />
            <img src={cc6} alt="" />
            <img src={cc7} alt="" />
          </div>
        </div>
        <hr />
        <div className="VisitProject">
            <h5>To see full project visit </h5>
           <button className="button-18">
                visit 
           </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProjects;
