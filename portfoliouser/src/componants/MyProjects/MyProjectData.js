// CleanCloset
import cleanCloset from "./image/Screenshot 2023-09-03 204453.png";
import portmobi from "./image/portFolioMobile.png";
import titlePhot from "./image/CleanCloset/image/cc1.png";
import cc2 from "./image/CleanCloset/image/cc2.png"
import cc3 from "./image/CleanCloset/image/cc3.png";
import cc4 from "./image/CleanCloset/image/cc4.png";
import cc5 from "./image/CleanCloset/image/cc5.png";
import cc6 from "./image/CleanCloset/image/cc6.png";
import logo from "./image/CleanCloset/image/logodf.png";
import cleanclosetLogo from "./image/CleanCloset/image/logodf copy.png";
// get kamra
import getkamra from "./image/getKamra.png";
// netflix clone
import ncl1 from './image/netfliclogo.jpg';
import netflix from "./image/netflix.png";
// Thakurji
import thakurji from './image/thakurji.png';
const ProjectData = [
  // a
  {
    id: "0",
    title: "My Projects",
    projectclass: "project1",
    featured:"true"
  },
  // b
  {
    id: "01",
    logoimag: cleanclosetLogo,
    projTitle: "CleanCloset",
    description: `A web application that helps you to keep your clothes in order and also help you find the best place for them.`,
    imgSrc: cleanCloset,
    img: {
      titlephoto: titlePhot,
      projectlogo: logo,
      pic1: cc2,
      pic2: cc3,
      pic3: cc4,
      pic4: cc5,
      pic5: cc6,
    },
    prodesc: {
      detdes:"A web application that helps you to keep your clothes in order and also help you find the best place for them.",
      cat: "web-app",
      started: "March2023-April-2023",
      TechUsed: {
        tech1: "react",
        tech2: "nodejs",
        tech3: "express",
        tech4: "mongoDB",
      },
      projectLink:"https://clean-closet-v2.vercel.app/",
    },
    projectclass: "project2",
    featured:"true"
  },
  // c
  {
    id: "02",
    logoimag: cleanclosetLogo,
    projTitle: "CleanCloset",
    description: `A web application that helps you to keep your clothes in order and also help you find the best place for them.`,
    imgSrc: thakurji,
    img: {
      titlephoto: titlePhot,
      projectlogo: logo,
      pic1: cc2,
      pic2: cc3,
      pic3: cc4,
      pic4: cc5,
      pic5: cc6,
    },
    prodesc: {
      cat: "web-app",
      started: "March2023-April-2023",
      TechUsed: {
        tech1: "react",
        tech2: "nodejs",
        tech3: "express",
        tech4: "mongoDB",
      },
      projectLink:"link of project",
    },
    projectclass: "project3",
    featured:"false"
  },
  // d
  {
    id: "03",
    logoimag: cleanclosetLogo,
    projTitle: "CleanCloset",
    description: `A web application that helps you to keep your clothes in order and also help you find the best place for them.`,
    imgSrc: getkamra,
    img: {
      titlephoto: titlePhot,
      projectlogo: logo,
      pic1: cc2,
      pic2: cc3,
      pic3: cc4,
      pic4: cc5,
      pic5: cc6,
    },
    prodesc: {
      cat: "web-app",
      started: "March2023-April-2023",
      TechUsed: {
        tech1: "react",
        tech2: "nodejs",
        tech3: "express",
        tech4: "mongoDB",
      },
      projectLink:"link of project",
    },
    projectclass: "project4",
    featured:"true"
  },
  // e
  {
    id: "04",
    logoimag: ncl1,
    projTitle: "CleanCloset",
    description: `A web application that helps you to keep your clothes in order and also help you find the best place for them.`,
    imgSrc: netflix,
    img: {
      titlephoto: titlePhot,
      projectlogo: ncl1,
      pic1: cc2,
      pic2: cc3,
      pic3: cc4,
      pic4: cc5,
      pic5: cc6,
    },
    prodesc: {
      cat: "web-app",
      started: "March2023-April-2023",
      TechUsed: {
        tech1: "react",
        tech2: "nodejs",
        tech3: "express",
        tech4: "mongoDB",
      },
      projectLink:"link of project",
    },
    projectclass: "project5",
    featured:"true"
  },
  // f
  {
    id: "05",
    logoimag: cleanclosetLogo,
    projTitle: "CleanCloset",
    description: `A web application that helps you to keep your clothes in order and also help you find the best place for them.`,
    imgSrc: netflix,
    img: {
      titlephoto: titlePhot,
      projectlogo: logo,
      pic1: cc2,
      pic2: cc3,
      pic3: cc4,
      pic4: cc5,
      pic5: cc6,
    },
    prodesc: {
      cat: "web-app",
      started: "March2023-April-2023",
      TechUsed: {
        tech1: "react",
        tech2: "nodejs",
        tech3: "express",
        tech4: "mongoDB",
      },
      projectLink:"link of project",
    },
    projectclass: "project6",
    featured:"false"
  },
  // g
  {
    id: "06",
    logoimag: cleanclosetLogo,
    projTitle: "CleanCloset",
    description: `A web application that helps you to keep your clothes in order and also help you find the best place for them.`,
    imgSrc: netflix,
    img: {
      titlephoto: titlePhot,
      projectlogo: logo,
      pic1: cc2,
      pic2: cc3,
      pic3: cc4,
      pic4: cc5,
      pic5: cc6,
    },
    prodesc: {
      cat: "web-app",
      started: "March2023-April-2023",
      TechUsed: {
        tech1: "react",
        tech2: "nodejs",
        tech3: "express",
        tech4: "mongoDB",
      },
      projectLink:"link of project",
    },
    projectclass: "project7",
    featured:"false"
  },
];

export default ProjectData;