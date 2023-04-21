import React from 'react';
import './App.css';
import Footer from './pages/GlobalPages/Footer/Footer';
import Navbar from './pages/GlobalPages/Navbar/Navbar';
import Landingpage from './pages/homepages/Landingpage';

function App() {
  return (
    <div className="App">
    {/* <Navbar/> */}
    <Landingpage/>
    <Footer/>
    </div>
  );
}

export default App;
