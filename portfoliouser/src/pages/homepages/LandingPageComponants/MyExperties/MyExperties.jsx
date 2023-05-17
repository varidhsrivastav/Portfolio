import React from 'react';
import "./MyExperties.css";
import monitor from "./image/monitor (1).png";
import project from "./image/project.png";
import react from "./image/react.png";
import bgimg from "./image/hello-world-html-code.webp";
const MyExperties = () => {
    const experties =[
        {
            img: "./image/monitor (1).png",
            name:"Software Development",
            para:"Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript."

        },
        {
            img: "image/project.png",
            name:"hello",
            para:"Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript."

        },
        {
            img: "image/react.png",
            name:"Software Development",
            para:"Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript."

        }
    ];
  return (
    <div className='MyExpertiesMainComponants'>
      <div className="MyExpertiesComponants container">
        <h1>My Experties</h1>
        <img src={bgimg} alt="" className='bgimg'/>
        <div className="MyExpertiesComponantsContent">
        {/* {
            experties.map((data)=>{
                const {img, name, para} = data;
                return(

                <div className="MyExpertiesComponantsBody">
                <div className="MyExpertiesComponantsBodyHead">
                <div className="MyExpertiesComponantsBodyIcon">
                    <img src={img} alt="" />
                </div>
                <div className="MyExpertiesComponantsBodyTitle">
                    <h3>{name}</h3>
                </div>
                </div>
                <div className="MyExpertiesComponantsBodycont">
                    <p>{para}</p>
                </div>
                </div>
                )
            })
           } */}
            <div className="MyExpertiesComponantsBody">
          
                <div className="MyExpertiesComponantsBodyHead">
                <div className="MyExpertiesComponantsBodyIcon">
                    <img src={monitor} alt="" />
                </div>
                <div className="MyExpertiesComponantsBodyTitle">
                    <h3><u>Software </u> Development</h3>
                </div>
                </div>
                <div className="MyExpertiesComponantsBodycont">
                    <p>Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.</p>
                </div>
            </div>
            <div className="MyExpertiesComponantsBody">
                <div className="MyExpertiesComponantsBodyHead">
                <div className="MyExpertiesComponantsBodyIcon">
                    <img src={react} alt="" />
                </div>
                <div className="MyExpertiesComponantsBodyTitle">
                    <h3> <u>Web-developer</u>  Development</h3>
                </div>
                </div>
                <div className="MyExpertiesComponantsBodycont">
                    <p>Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p>
                </div>
            </div>
            <div className="MyExpertiesComponantsBody">
                <div className="MyExpertiesComponantsBodyHead">
                <div className="MyExpertiesComponantsBodyIcon">
                    <img src={project} alt="" />
                </div>
                <div className="MyExpertiesComponantsBodyTitle">
                    <h3> <u>Project</u>  Management</h3>
                </div>
                </div>
                <div className="MyExpertiesComponantsBodycont">
                    <p>Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyExperties
