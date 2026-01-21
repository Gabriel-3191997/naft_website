import React from 'react';


class ContentSection extends React.Component{

  render(){

    return(

      <>
      <div className="flex flex-wrap justify-center bg-white h-auto border-t border-red-900 b-20 border-b mx-5 md:mx-50">
        <h1 className="text-red-900 font-sans capitalize text-3xl md:text-4xl font-semibold pt-8 pb-8 text-center text-balance w-2xl mx-5">
          who we are?
        </h1>
      </div>
      </>
  );
  }
}

export default ContentSection;
