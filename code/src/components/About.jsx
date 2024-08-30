import React from 'react'
import "../styles/about.css";

const About = () => {
  return (
    <section className='about' id="about">
      <h1>Who Am I?</h1>
      <div className="content">
        <p className="about-para">
          "Hello, I'm Mathuseelan, with a Master's degree in Mathematics, and
          I'm looking to pivot into the IT sector. Recently, I've been delving
          into essential web development languages like HTML, CSS, and React.js.
          Now, I'm on the hunt for a job where I can put these skills to work
          and continue growing in the field."
        </p>
        <div className="contacts">
          <div className="phone">
            <h3>Phone</h3>
            <p>+91 9898989898</p>
          </div>
          <div className="email">
            <h3>E-Mail</h3>
            <p>mathuseelanofficial@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About