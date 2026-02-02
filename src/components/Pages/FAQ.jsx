import React from "react";
import Footer from "../footer";

class FAQ extends React.Component {
  render() {
    return (
      <>
        <div className="pt-32 pb-10 px-5 md:px-20">
          <h1 className="text-red-900 font-sans uppercase text-3xl md:text-4xl font-semibold text-center mb-8">
            FAQ
          </h1>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-xl font-semibold text-red-900 mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-lg">
                We're here to help answer any questions you may have. 
                If you don't find what you're looking for, please contact us.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">Question 1?</h3>
              <p className="text-base">Answer to question 1.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">Question 2?</h3>
              <p className="text-base">Answer to question 2.</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default FAQ;
