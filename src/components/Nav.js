/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';

const Navbar = () => (
  <div className=" w-full fixed  bg-[#0A192F] ">
    <nav className=" h-[70px] text-white flex justify-between items-center px-12 cursor-pointer">
      <span className=" bg-[#132D3E] rounded-full p-2">
        <Link
          activeClass="active"
          to="home"
          spy
          smooth
          offset={-70}
          duration={500}
        >
          TB
        </Link>
      </span>
      <ul className="flex justify-between w-60 ">
        <li className="hover:text-[#52eeca]">
          {' '}
          <Link
            activeClass="active"
            to="about"
            spy
            smooth
            offset={-70}
            duration={500}
          >

            About
          </Link>
        </li>
        <li className="hover:text-[#52eeca]">
          {' '}
          <Link
            activeClass="active"
            to="project"
            spy
            smooth
            offset={-70}
            duration={700}
          >
            Project
          </Link>
        </li>
        <li className="hover:text-[#52eeca]">
          {' '}
          <Link
            activeClass="active"
            to="contact"
            spy
            smooth
            offset={-90}
            duration={700}
          >
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;