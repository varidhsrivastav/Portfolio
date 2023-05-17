import React from "react";
import "./App.css";
import Footer from "./pages/GlobalPages/Footer/Footer";
import Navbar from "./pages/GlobalPages/Navbar/Navbar";
import Landingpage from "./pages/homepages/Landingpage";
import ContactUs from "./pages/Contactus/ContactUs";
import ViewProjects from "./pages/Projects/ViewProjects/ViewProjects";

function App() {
  return (
    <div className="App">
      <Landingpage />
      {/* <ContactUs/> */}
      {/* <ViewProjects/> */}

      <Footer />
    </div>
  );
}

export default App;
