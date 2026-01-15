import React from 'react';

class Section extends React.Component{

  render(){

    return(

      <>
      <div className="flex flex-wrap justify-center bg-white h-auto border-t border-red-900 b-20 border-b mx-5 md:mx-50">
        <h1 className="text-red-900 font-sans capitalize text-3xl md:text-4xl font-semibold pt-8 pb-8 text-center text-balance w-2xl mx-5">
          empowering youth against corruption and injustice
        </h1>
      </div>
    <div className="flex flex-wrap justify-center gap-5 md:gap-5 h-auto bg-white pt-10 mx-2 md:pt-30">
        <div className="w-80 rounded-sm h-auto bg-red-900 bg-blend-overlay" id="card">
          <div className="mt-40">
            <h1 className="mx-5 text-white font-semibold font-sans text-2xl capitalize text-left">our vision</h1>
            <p className="text-white font-sans font-normal mx-5 text-sm">
              Our vision is to ensure every child is educated about the dangers and effects of corruption and injustice.
            </p>
            <div className="pt-5 pb-5">
              <a href="#" className="font-sans font-semibold capitalize text-lg text-white rounded-sm hover:bg-white hover:text-red-900 hover:underline ring-white ring py-3 px-5 mx-5">read more</a>
            </div>
          </div>
        </div>
        <div className="w-80 rounded-sm h-auto bg-red-900 bg-blend-overlay" id="card-1">
          <div className="mt-40">
            <h1 className="mx-5 text-white font-semibold font-sans text-2xl capitalize text-left">our mission</h1>
              <p className="text-white font-sans font-normal mx-5 text-sm">
                We educate youth and raise awareness about the dangers of corruption, aspiring towards a corruption- free society.
              </p>
            <div className="pt-5 pb-5" id="card-2">
              <a href="#" className="font-sans font-semibold capitalize text-lg text-white rounded-sm hover:bg-white hover:text-red-900 hover:underline ring-white ring py-3 px-5 mx-5">read more</a>
            </div>
          </div>
        </div>
      </div>
      {/* Download Brochure */}
      <div className="flex flex-wrap justify-center pt-8 bg-white">
        <a href="#" className="bg-red-900 py-2 px-8 rounded-md border-0 text-white text-center font-sans text-lg capitalize">
          download brochure
        </a>
      </div>
      </>

    );
  }
}

export default Section;
