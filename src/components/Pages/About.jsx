import React from "react";
import Advertise from "../advertise";
import Footer from "../footer";
import Contents from "../contents";
import HeroSection from "../hero-image";
import Gallery from "../gallery";

class About extends React.Component {
  render() {
    return (
      <>
        <HeroSection />
        <Contents />
        <Gallery/>
        <Footer />
      </>
    );
  }
}

export default About;