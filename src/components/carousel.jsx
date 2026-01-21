import React from 'react';
import img from '../images/image.jpeg';

class Carousel extends React.Component {
  render() {
    return (
      <div
        id="animation-carousel"
        className="relative w-full"
        data-carousel="static"
      >
        <div className="relative h-56 overflow-hidden rounded-base md:h-96">

          <div className="hidden duration-200 ease-linear" data-carousel-item>
            <img
              src={img}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Slide 1"
            />
          </div>

          <div className="hidden duration-200 ease-linear" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-2.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Slide 2"
            />
          </div>

          <div
            className="hidden duration-200 ease-linear"
            data-carousel-item="active"
          >
            <img
              src="/docs/images/carousel/carousel-3.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Slide 3"
            />
          </div>

          <div className="hidden duration-200 ease-linear" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-4.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Slide 4"
            />
          </div>

          <div className="hidden duration-200 ease-linear" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-5.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Slide 5"
            />
          </div>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30">
            <svg
              className="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30">
            <svg
              className="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </span>
        </button>
      </div>
    );
  }
}

export default Carousel;
