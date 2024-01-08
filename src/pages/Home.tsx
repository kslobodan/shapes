import React from "react";
import Footer from "../components/Footer";
import Portfolio from "../components/portfolio/Portfolio";
import About from "../components/About";
import Options from "../components/Options";
import Header from "../components/header/Header";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <Options />
      {/* <About /> */}

      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
