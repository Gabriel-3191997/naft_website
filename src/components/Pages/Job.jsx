import React from "react";
import Footer from "../footer";

class Job extends React.Component {
  render() {
    return (
      <>
        <div className="pt-40 pb-20 md:pt-50">
          <div className="bg-white">
            <h1 className="text-red-900 font-sans capitalize text-3xl text-center md:text-3xl font-semibold mb-8">
              find a job
            </h1>
          </div>
          <div className="pb-5 px-5 md:px-20 flex justify-center">
            <div className="md:max-w-4xl mx-auto justify-center">
              <form action="#" method="GET" className="flex flex-col md:flex-row justify-center gap-5">
                <div className="bg-white flex-1">
                  <input type="text" placeholder="Job Type" className="md:w-full rounded-sm text-left py-2 px-20 md:px-10 border-2 border-red-900" />
                </div>
                <div className="bg-white flex-1">
                  <input type="text" placeholder="Job Title" className="w-full rounded-sm py-2 px-20 md:px-10 border-2 border-red-900" />
                </div>
                <div className="bg-white flex-1">
                  <input type="text" placeholder="Location" className="w-full rounded-sm py-2 px-20 md:px-10 border-2 border-red-900" />
                </div>
                <div className="bg-white flex-1">
                  <input type="submit" value="Search" className="w-full rounded-sm py-3 px-20 md:px-10 border-0 bg-red-900 text-white cursor-pointer " />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Job;
