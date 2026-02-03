import React from "react";
import img1 from "../images/WhatsApp Image 2025-10-14 at 9.27.15 AM.jpeg";
import img2 from "../images/WhatsApp Image 2025-10-14 at 9.24.47 AM.jpeg";
import img3 from "../images/514056305_18365812996196814_7321307306569984120_n.jpeg";

class Gallery extends React.Component {
    render() {
        return (
            <>
                <div className="flex justify-center bg-white py-6">

                </div>

                <div className="flex flex-wrap justify-center bg-white gap-8 px-4 pb-20">
                    {/* Image 1 */}
                    <div className="cursor-pointer w-full sm:w-96 lg:w-96 bg-gray-200 overflow-hidden">
                        <img
                            src={img1}
                            alt="Gallery Image 1"
                            className="cursor-pointer w-96 h-64 object-cover"
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="cursor-pointer w-full sm:w-96 lg:w-96 bg-gray-200 overflow-hidden">
                        <img
                            src={img2}
                            alt="Gallery Image 2"
                            className="cursor-pointer w-96 h-64 object-cover"
                        />
                    </div>
                    {/* Image 3 */}
                    <div className="cursor-pointer w-full sm:w-96 lg:w-96 bg-gray-200 overflow-hidden">
                        <img
                            src={img3}
                            alt="Gallery Image 3"
                            className="cursor-pointer w-96 h-64 object-cover"
                        />
                    </div>

                </div>
            </>
        );
    }
}

export default Gallery;