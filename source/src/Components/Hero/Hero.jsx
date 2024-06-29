import React from "react";
import "./Hero.css";
import profile_img from "../../Images/Mathu-image.png";

export const Hero = React.forwardRef((props, ref) => {
  return (
    <div className="hero" ref={ref}>
      <img src={profile_img} alt="profile_image" />
      <h1>I'm Mathuseelan, frontend developer.</h1>
      <p>
        I am a self taught frontend developer without any academic experience,{" "}
        <br /> currently searching for a job.
      </p>
    </div>
  );
});
