import React, { useState } from "react";
import "./Navbar.css";
import { Hero } from "../Hero/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import { tabs } from "../../constants";

const Navbar = (props) => {
  // const [currentPage, setCurrentPage] = useState('Home');

  // const handlePageChange = (pageName) => {
  //   setCurrentPage(pageName);
  //   // Smooth scroll to the top of the page
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  return (
    // <div className='navbar'>
    //     <div className='nav-logo'>MATHUSEELAN</div>
    //     <ul className='nav-menu'>
    //       <li onClick={() => handlePageChange('Home')}>Home</li>
    //       <li onClick={() => handlePageChange('About')}>About</li>
    //       <li onClick={() => handlePageChange('Skills')}>Skills</li>
    //       <li onClick={() => handlePageChange('Contact')}>Contact</li>
    //     </ul>

    //     <div className="pages">
    //     {currentPage === 'Home' && <Hero />}
    //     {currentPage === 'About' && <About />}
    //     {currentPage === 'Contact' && <Contact />}
    //     {currentPage === 'Skills' && <Skills />}
    //   </div>

    // </div>

    <nav className="navbar">
      <div className="nav-logo">MATHUSEELAN</div>
      <ul className="nav-menu">
        <li>
          <span onClick={props.onClick(tabs.hero)}>Home</span>
        </li>
        <li>
          <span onClick={props.onClick(tabs.about)}>About</span>
        </li>
        <li>
          <span onClick={props.onClick(tabs.skills)}>Skills</span>
        </li>
        <li>
          <span onClick={props.onClick(tabs.contact)}>Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
