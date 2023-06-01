import React from "react";
import "./App.css";
import Navbar from "./pages/GlobalPages/Navbar/Navbar.jsx";
import Footer from "./pages/GlobalPages/Footer/Footer";
import Landingpage from "./pages/homepages/Landingpage";
import ContactUs from "./pages/Contactus/ContactUs";
import ViewProjects from "./pages/Projects/ViewProjects/ViewProjects";
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      {/* <Landingpage /> */}
      <Navbar/>
      <AboutMe/>
      {/* <ContactUs/> */}
      {/* <ViewProjects/> */}
      <Footer />
    </div>
  );
}

export default App;
