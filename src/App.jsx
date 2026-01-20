import React from 'react'
import './style.scss'
import TopNav from './components/topbar'
import NavBar from './components/navbar'
import Advertise from './components/advertise'
import HeroSection from './components/hero-image'
import Section from './components/section'
import Footer from './components/footer';

import './App.css'


class App extends React.Component {
  render() {
    return(
      <>
    <div className="bg-white fixed top-0 z-50 w-full">
        <NavBar/>
          <Advertise/>
      {/*<TopNav/>*/}
    </div>
    <div>
      <HeroSection/>
      <Section/>
      <Footer/>
    </div>
    </>
    );
  }
}



export default App;
