import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Import Carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import image1 from '../images/img1.jpeg';
import image2 from '../images/WhatsApp Image 2025-10-14 at 9.27.21 AM.jpeg';
import image3 from '../images/WhatsApp Image 2025-10-14 at 9.27.19 AM.jpeg';
import image4 from '../images/WhatsApp Image 2025-10-14 at 9.24.45 AM.jpeg';

class CarouselComponent extends React.Component { // Renamed to avoid conflict
  render() {
    return (
      <>
        {/*Hero image slideshow */}
        <div className="flex flex-wrap justify-center mt-10 mx-2 pb-20">
          <div className="w-full md:w-1/2">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators
              interval={4000}
              swipeable
              emulateTouch
              className="rounded-sm overflow-hidden"
            >
              <div>
                <img
                  src={image1}
                  alt="Young people engaging in NAFT activities"
                  className="w-full h-full md:object-cover"
                />
              </div>
              <div>
                <img
                  src={image2}
                  alt="Community empowerment through art and music"
                  className="w-full h-full md:object-cover"
                />
              </div>
              <div>
                <img
                  src={image3}
                  alt="Raising voices against corruption and injustice"
                  className="w-full h-full md:object-cover"
                />
              </div>
              <div>
                <img
                  src={image4}
                  alt="Raising voices against corruption and injustice"
                  className="w-full h-full md:object-cover"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}

export default CarouselComponent;