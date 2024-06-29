import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import { Hero } from "./Components/Hero/Hero";
import { useSearchParams } from "react-router-dom";
import { tabs } from "./constants";
import { tab } from "@testing-library/user-event/dist/tab";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const heroRef = React.useRef();
  const aboutRef = React.useRef();
  const skillsRef = React.useRef();
  const contactRef = React.useRef();

  const config = {
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  };

  function getName(name) {
    return function () {
      setSearchParams((params) => {
        params.set(tabs.activeTab, name);
        return params;
      });
    };
  }

  React.useEffect(() => {
    const activeTab = searchParams.get(tabs.activeTab);
    console.log(searchParams);

    switch (activeTab) {
      case tabs.hero:
        heroRef.current?.scrollIntoView(config);
        break;

      case tabs.about:
        aboutRef.current?.scrollIntoView(config);
        break;

      case tabs.skills:
        skillsRef.current?.scrollIntoView(config);
        break;

      case tabs.contact:
        contactRef.current?.scrollIntoView(config);
        break;
    }
  }, [searchParams]);

  return (
    <div className="App">
      <Navbar onClick={getName} />
      <div className="scroll">
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef} />
      </div>
    </div>
  );
}

export default App;
