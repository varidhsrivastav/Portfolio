import React from "react";
import "./App.css";
import Navbar from "./pages/GlobalPages/Navbar/Navbar.jsx";
import Footer from "./pages/GlobalPages/Footer/Footer";
import Landingpage from "./pages/homepages/Landingpage";
import ContactUs from "./pages/Contactus/ContactUs";
import ViewProjects from "./pages/Projects/ViewProjects/ViewProjects";
import AboutMe from "./pages/AboutMe/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} exact={true} />
          <Route path="/about" element={ <AboutMe/> } exact={true} />
          <Route path="/contact" element={ <ContactUs/> } exact={true} />
          <Route path="/project" element={ <ViewProjects/>  } exact={true} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
