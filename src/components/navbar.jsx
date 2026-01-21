import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Pages/Home';
import About from '../components/Pages/About';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <div className="bg-red-900 h-12 mx-0">
          <ul className="flex py-2 flex-wrap justify-center md:justify-end gap-5 text-white capitalize text-lg mx-8">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/career">job &amp; career</Link>
            </li>
            <li>
              <Link className="uppercase" to="/faq">faq</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    );
  }
}

export default NavBar;
