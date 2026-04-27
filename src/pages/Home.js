import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutComp from "../components/AboutComp";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="mainContainer">
      <Header />
      <Hero />
      <AboutComp />
      <Projects />
    </div>
  );
};

export default Home;
