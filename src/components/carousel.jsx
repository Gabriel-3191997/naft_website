import React, { Component } from "react";
import img from '../images/image.jpeg';
import { Carousel as CarouselUI } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

class Carousel extends Component {
  render() {
    return (
      <CarouselUI>
        <div>
          <img
            src={img}
            alt="Hero-image"
            className="rounded-lg md:rounded-lg w-auto h-auto md:min-h-50 md:w-2xl md:object-cover hover:scale-110 hover:cursor-pointer"/>
        </div>
        <div>

        </div>
      </CarouselUI>
    );
  }
}

export default Carousel;
