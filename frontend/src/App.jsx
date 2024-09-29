import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/Aboutus';
import Contact from './pages/Contactus';
import Women from './pages/Women';
import Womenp from './pages/Womenp';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Womenp" element={<Womenp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
