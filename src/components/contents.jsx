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
          <p className="text-md w-2xl text-center">Nasseman Art For Transparency (NAFT) is a
            Non-Governmental Organization (NGO)
            founded by Mr. Rabbie Nassrallah, popularly

            known as NASSEMAN, a Global Music Anti-
            Corruption Ambassador for Transparency

            International and FairPlay Music. Nasseman Art
            For Transparency is on a mission to empower
            young people to raise their voices against
            corruption and injustice through various artistic
            mediums such as education, music, art, drama,
            and films. <button type="button" className="text-red-900 underline bg-white cursor-pointer">Read More</button>
            
            
            </p>
        </div>
      </>
    );
  }
}

export default ContentSection;
