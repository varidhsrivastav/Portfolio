import ProjectData from "./MyProjectData";
import { useParams } from "react-router";

const ProjectDetails = () => {
  const proid = useParams();
  const proDetail = ProjectData.filter((x) => x.id == proid.id);
  const project = proDetail[0];
  console.log(project);
  return (
    <div>
      <>
        <div className="ViewProjectMainComponants">
          <div className="ViewProjectCompImage ">
            <img src={project.imgSrc} alt="" />
          </div>
          <div className="ViewProjectComponants container">
            <div className="vpTitle">
              <img src={project.img.projectlogo} alt="" />
            </div>
            <hr />
            <div className="VprojectmainDesc">
              <div className="vprojectdescTiltes">
                <div className="vprojectdescTilte">
                  <div className="vpTitle">
                    <h3> Category</h3>
                  </div>
                  <div className="vptilteans">
                    <h5>{project.prodesc.cat}</h5>
                  </div>
                </div>
                <div className="vprojectdescTilte">
                  <div className="vpTitle">
                    <h3> Started year</h3>
                  </div>
                  <div className="vptilteans">
                    <h5>{project.prodesc.started}</h5>
                  </div>
                </div>
                <div className="vprojectdescTilte">
                  <div className="vpTitle">
                    <h3> Tech used </h3>
                  </div>
                  <div className="vptilteans">
                    <h5>{project.prodesc.TechUsed.tech1}</h5>
                    <h5>{project.prodesc.TechUsed.tech2}</h5>
                    <h5>{project.prodesc.TechUsed.tech3}</h5>
                    <h5>{project.prodesc.TechUsed.tech4}</h5>
                  </div>
                </div>
                <div className="vprojectdescTilte">
                  <div className="vpTitle">
                    <h3>Project Link</h3>
                  </div>
                  <div className="vptilteans">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.prodesc.projectLink}
                    >
                      visit
                    </a>
                  </div>
                </div>
              </div>
              <div className="vprojectfulldecr">
                <p>{project.prodesc.detdes}</p>
              </div>
            </div>
            <div className="projectDescGallery">
              <h3>Project Gallery</h3>
              <div className="ProjectsImages">
                <img src={project.img.titlephoto} alt="" />
                <img src={project.img.pic1} alt="" />
                <img src={project.img.pic2} alt="" />
                <img src={project.img.pic3} alt="" />
                <img src={project.img.pic4} alt="" />
              </div>
            </div>
            <hr />
            <div className="VisitProject">
              <h5>To see full project visit </h5>
              <a
                className="button-18"
                target="_blank"
                rel="noreferrer"
                href={project.prodesc.projectLink}
              >
                visit
              </a>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProjectDetails;
