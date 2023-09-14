import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const AllProjects = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;

    useEffect(()=>{
        const getProjects = async ()=>{
            setLoading(true);
            const response = await fetch("http://localhost:5000/api/projects");
            console.log(response)
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false)
                console.log(setFilter)
            }
            return()=>{
                componentMounted = false;
            }
        }
        getProjects();
    },[]);
    const Loading = ()=>{
        return(
            <>
                Loading ...
            </>
        )
    }

    // const ShowProduct = ()=>{
    //     <>
    //         {
    //             filter.map((project)=>{
    //                 return (
    //                     <div key={project.id}>
    //                         <div>
    //                             {project.projectName}
    //                         </div>
    //                     </div>
    //                 )
    //             })
    //         }
    //     </>
    // }
  return (
    <div>
      {/* {loading?<Loading/> : <ShowProduct/>} */}
    </div>
  )
}

export default AllProjects
