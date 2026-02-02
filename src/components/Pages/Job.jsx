import React from "react";
import Footer from "../footer";

class Job extends React.Component {
  render() {
    return (
      <>
        <div className="pt-32 pb-10 px-5 md:px-20">
          <h1 className="text-red-900 font-sans capitalize text-3xl md:text-4xl font-semibold text-center mb-8">
            Job & Career
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-6">
              We are always looking for talented individuals to join our team. 
              Check back soon for open positions and career opportunities.
            </p>
            <p className="text-lg">
              If you're interested in working with us, please reach out through our contact form.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Job;
