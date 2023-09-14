import "./MyProjects.css";
import ProjectData  from "./MyProjectData";
import { NavLink } from "react-router-dom";

const MyProjects = () => {
  const projectItem = (project) => {
    return (
      <div key={project.id} className={`${project.projectclass}`}>
        <img src={project.imgSrc} alt="" />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <NavLink to={`/myprojects/${project.id}`} class="btn btn-outline-primary">
          See project
        </NavLink>
      </div>
    );
  };
  return (
    <div className="MyProjectMCont">
      <div className="container">
        <div className="MyProjCont ">
        {ProjectData.map(projectItem)}
        </div>
      </div>
      {/* {ProjectData.map(projectItem)} */}
    </div>
  );
};

export default MyProjects;
