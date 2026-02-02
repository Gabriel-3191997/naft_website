import React from "react";
import Advertise from "../advertise";
import Footer from "../footer";
import Contents from "../contents";
import HeroSection from "../hero-image";

class About extends React.Component {
  render() {
    return (
      <>
        <Advertise />
        <HeroSection />
        <Contents />
        <Footer />
      </>
    );
  }
}

export default About;