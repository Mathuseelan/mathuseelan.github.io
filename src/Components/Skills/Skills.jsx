import React from "react";
import "./Skills.css";
import htmlLogo from "../../Png/htmlLogo.png";
import cssLogo from "../../Png/cssLogo.png";
import reactLogo from "../../Png/reactLogo.png";
import jsLogo from "../../Png/jsLogo.png";

const Skills = React.forwardRef((props, ref) => {
  return (
    <div className="skills" ref={ref}>
      <h1>skills</h1>
      <div className="main-container">
        <div className="container">
          <img src={htmlLogo} alt="html-logo" />
          <p>HTML</p>
        </div>

        <div className="container">
          <img src={cssLogo} alt="css-logo" />
          <p>CSS</p>
        </div>

        <div className="container">
          <img src={jsLogo} alt="js-logo" />
          <p>JAVASCRIPT</p>
        </div>

        <div className="container">
          <img src={reactLogo} alt="react-logo" />
          <p>REACTJS</p>
        </div>
      </div>
    </div>
  );
});

export default Skills;
