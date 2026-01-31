import React from 'react';


class ContentSection extends React.Component {

  render() {

    return (

      <>
        <div className="flex flex-wrap mt-5 justify-center bg-white h-auto border-t border-red-900 b-20 border-b mx-5 md:mx-50">
          <h1 className="text-red-900 font-sans capitalize text-3xl md:text-4xl font-semibold pt-8 pb-8 text-center text-balance w-2xl mx-5">
            who we are?
          </h1>

        </div>
        <div className="pt-10 justify-center flex flex-wrap mx-5 md:mx-50 mb-10">
          <p className="text-xl">We are a team of passionate individuals dedicated to providing high-quality services and products to our customers.</p>
        </div>
      </>
    );
  }
}

export default ContentSection;
