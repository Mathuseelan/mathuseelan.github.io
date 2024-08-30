import React from "react";
import "../styles/skills.css";
import htmlLogo from "../images/htmlLogo.png";
import cssLogo from "../images/cssLogo.png";
import reactLogo from "../images/reactLogo.png";
import jsLogo from "../images/jsLogo.png";

const Skills = () => {
  return (
    <section className="skills" id="skills">
     <h1 className="skills__heading">skills</h1>
      <div className="skills__container">
        <div className="skills__card">
          <img src={htmlLogo} alt="html-logo" />
          <p className="skills__cardTitle">HTML</p>
        </div>

        <div className="skills__card">
          <img src={cssLogo} alt="css-logo" />
          <p className="skills__cardTitle">CSS</p>
        </div>

        <div className="skills__card">
          <img src={jsLogo} alt="js-logo" />
          <p className="skills__cardTitle">JAVASCRIPT</p>
        </div>

        <div className="skills__card">
          <img src={reactLogo} alt="react-logo" />
          <p className="skills__cardTitle">REACTJS</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
