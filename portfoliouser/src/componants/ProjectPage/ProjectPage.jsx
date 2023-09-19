import "../MyProjects/MyProjects.css";
import ProjectData  from "../MyProjects/MyProjectData";
import { NavLink } from "react-router-dom";

const ProjectsPage = () => {
  const projectItem = (project) => {
    const keysss = project.id;
    return(
      <div key={project.id} className={`${project.projectclass}`}>
        <img src={project.imgSrc} alt="" />
        {/* <img src="" alt="" /> */}
        {/* <h3>{project.logoimag}</h3> */}
        <p>{project.description}</p>
        <div>  
        {
          keysss ==  0 ? (<></>):( <NavLink to={`${project.id}`} class="btn btn-outline-primary">
          See projects
        </NavLink>)
        }
        </div>
       
      </div>
    )
     
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
export default ProjectsPage;
