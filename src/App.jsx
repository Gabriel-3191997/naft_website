import React from 'react';
import './style.scss';
import './App.css';
import NavBar from './components/navbar';
import Advertise from './components/advertise';
import HeroSection from './components/hero-image';
import Section from './components/section';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <>
        {/* Top fixed nav */}
        <div className="bg-white fixed top-0 z-50 w-full">
          <NavBar />
          <Advertise />
        </div>

        {/* Main content */}
        <div className="pt-[100px]">
          <HeroSection />
          <Section />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
