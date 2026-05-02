import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutComp from "../components/AboutComp";
import Projects from "../components/Projects";
import WOFcomp from "../components/WOFcomp";
import YtbSection from "../components/YtbSection";
import ContactComp from "../components/ContactComp";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="mainContainer">
      <Header />
      <Hero />
      <AboutComp />
      <Projects />
      <WOFcomp />
      <YtbSection />
      <ContactComp />
      <Footer />
    </div>
  );
};

export default Home;
