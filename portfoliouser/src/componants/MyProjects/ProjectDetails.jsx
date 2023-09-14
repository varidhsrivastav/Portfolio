import ProjectData from './MyProjectData';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'

const ProjectDetails = () => {
    const proid = useParams();
    const proDetail = ProjectData.filter(x=>x.id == proid.id)
    const project = proDetail[0];
    console.log(project);

    // We need to store useDispatch in a variable
    const dispatch = useDispatch()

  return (
    <div>
          <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={project.imgSrc} alt={project.title}height="400px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{project.title}</h1>
                    <hr />
                    <h2 className="my-4">${project.id}</h2>
                    <p className="lead">{project.description}</p>
                </div>
            </div>
        </div>
        </>
    </div>
  )
}

export default ProjectDetails
