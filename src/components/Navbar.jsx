import React from "react";
import "../styles/navbar.css";
import image from "../images/img1.jfif";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navbar">
      <div className="navbar__profile">
        <img src={image} alt="Mathuseelan" className="navbar__profile-image" />
        <h2 className="navbar__name">Mathuseelan</h2>
        <p className="navbar__profession">Web developer</p>
      </div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a
            className="navbar__link"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}>
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a
            className="navbar__link"
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}>
            About
          </a>
        </li>
        <li className="navbar__item">
          <a
            className="navbar__link"
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}>
            Skills
          </a>
        </li>
        {/* <li className="navbar__item">
          <a
            className="navbar__link"
            href="#education"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("education");
            }}>
            Education
          </a>
        </li> */}
        <li className="navbar__item">
          <a
            className="navbar__link"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              // scrollToSection("projects");
            }}>
            Projects
          </a>
        </li>
        <li className="navbar__item">
          <a
            className="navbar__link"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}>
            Contact
          </a>

          <a href="#" id="mathu" className="mathu" type="#about"></a>
        </li>
      </ul>
      <div class="social-icons">
        <a
          href="https://www.linkedin.com/in/mathuseelan/"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin className="linkedin-icon" />
        </a>
        <a
          href="https://github.com/mathuseelan"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub className="github-icon" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
