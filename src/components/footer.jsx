import React from 'react';
import SocialmediaIcons from '../components/socialmedia-icons';
import GetUpdates from '../components/form';
class Footer extends React.Component{

  render(){

    return(
      <>


<footer className="bg-white">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        {/* address */}
        <div>
          <h2 className="mb-6 text-sm font-semibold text-heading uppercase">address</h2>
            <ul className="text-body font-medium">
              <li className="mb-4">

              </li>
            </ul>
        </div>
        <div>
          {/* pages link */}
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">resource</h2>
            <ul className="text-body font-medium">
              <li className="mb-4">
                  <a href="#" className="text-red-900 capitalize">home</a>
              </li>
                <li className="mb-4">
                    <a href="#" className="text-red-900">About</a>
                </li>
                <li className="mb-4">
                    <a href="#" className=" capitalize text-red-900">job &amp; Careers</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="text-red-900 uppercase">faq</a>
                </li>
            </ul>
        </div>
        {/* social media platforms */}
        <div>
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">follow us</h2>
            <ul className="text-body font-medium">
                <li className="mb-4">
                    <a href="#" className="text-red-900 font-sans capitalize">facebook</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="text-red-900 capitalize font-sans">youTube</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="capitalize text-red-900">twitter</a>
                </li>

            </ul>
        </div>
        {/* sign up for updates */}
        <div>
          <h2 className="mb-6 text-sm font-semibold text-heading uppercase">new settler</h2>
            <GetUpdates/>
          <p className="py-5 text-sm capitalize font-sans">
            by signning up you've agree to receive updates
          </p>
        </div>
        {/* external links */}
        <div>
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Legal</h2>
            <ul className="text-body font-medium">
                <li className="mb-4">
                    <a href="#" className="capitalize text-red-900 font-sans">privacy policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="text-red-900 capitalize font-sans">terms &amp; conditions</a>
                </li>
            </ul>
        </div>
        {/* other links */}
        <div className="mb-20">
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">links</h2>
            <ul className="text-body font-medium">
                <li className="mb-4">
                    <a href="#" className="capitalize text-red-900">how to become a partner</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="capitalize text-red-900">become a supporter</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="capitalize text-red-900">our sponsors &amp; partners</a>
                </li>
            </ul>
        </div>
    </div>
    {/* Copyright */}
    <div className="px-4 py-6 bg-white md:flex md:items-center md:justify-between">
        <span className="text-sm text-body sm:text-center text-red-900">© 2026 <a href="#" className="text-red-900 capitalize">nasseman art of transparecny</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-2 rtl:space-x-reverse">
          {/* social media icons */}
          <SocialmediaIcons/>
          </div>
      </div>
    </div>
</footer>

      </>
    )
  }
}
export default Footer;
