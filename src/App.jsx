import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './style.scss';
import './App.css';
import NavBar from './components/navbar';
import Advertise from './components/advertise';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Job from './components/Pages/Job';
import FAQ from './components/Pages/FAQ';

class App extends React.Component {
  render() {
    return (
      <>
        {/* Top fixed nav */}
        <div className="bg-white fixed top-0 z-50 w-full">
          <NavBar />
          <Advertise />
        </div>

        {/* Main content with routing */}
        <div className="bg-white">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Job />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
