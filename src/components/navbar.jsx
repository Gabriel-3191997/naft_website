import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <div className="bg-red-900 h-12 mx-0">
          <ul className="flex py-2 flex-wrap justify-center md:justify-end gap-5 text-white capitalize text-lg mx-8">
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/career">job &amp; career</Link>
            </li>
            <li>
              <Link className="text-uppercase" to="/faq">faq</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default NavBar;
