import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <div className="nav-content">
        <Navbar />
      </div>

      <div className="main-content">
        <Home />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
