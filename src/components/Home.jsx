import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <section
      className="home"
      id="home"
    >
      <div class="heading-container">
        <h1 class="home__heading typewriter-one">
          <span class="smaller-text">01</span>
          <span class="symbol">&lt;</span>Hello I'm
          <span class="color-text">Mathuseelan</span>!
          <span class="symbol">&gt;</span>
        </h1>

        <h1 class="home__heading typewriter-two">
          <span class="smaller-text">02</span>
          <span class="symbol">&lt;</span>I<span class="color-text">design</span>
          and
          <span class="color-text">develop</span>
        </h1>
        <h1 class="home__heading typewriter-three">
          <span class="smaller-text">03</span>&nbsp;&nbsp;websites.
          <span class="symbol">&gt;</span>
        </h1>
      </div>
      <button class="home__projectsButton">Projects</button>
    </section>
  );
};

export default Home;
