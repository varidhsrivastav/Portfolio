import React from "react";
import "./App.css";
import Navbar from "./pages/GlobalPages/Navbar/Navbar.jsx";
import Footer from "./pages/GlobalPages/Footer/Footer";
import Landingpage from "./pages/homepages/Landingpage";
import ContactUs from "./pages/Contactus/ContactUs";
import ViewProjects from "./pages/Projects/ViewProjects/ViewProjects";
import AboutMe from "./pages/AboutMe/AboutMe";
import Project from "./pages/AllProjects/AllProjects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./componants/ProductDetail";
import Product from "./componants/Product";
import MyProjects from "./componants/MyProjects/MyProjects";
import ProjectDetails from "./componants/MyProjects/ProjectDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} exact={true} />
          <Route path="/about" element={ <AboutMe/> } exact={true} />
          <Route path="/contact" element={ <ContactUs/> } exact={true} />
          <Route path="/myprojects" element={  <MyProjects/> } exact={true} />
          <Route path="/project" element={ <ViewProjects/>  } exact={true} />
          {/* <Route path="/showproject" element={ <Project/> } exact={true} /> */}
          <Route path="/myprojects/:id" Component={ProjectDetails}/>
          <Route exact path="/products" component={Product} />
          <Route exact path="/products/:id" Component={ProductDetail} />
        
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
