import React from "react";
import Footer from "../components/Footer";
import Portfolio from "../components/portfolio/Portfolio";
import Options from "../components/Options";
import Header from "../components/header/Header";
import Slider from "../components/Slider";
import Testimonials from "../components/Testimonials";
import ThreeMinds from "../components/ThreeMinds";

const Home = () => {
  return (
    <div>
      <Header />
      <ThreeMinds />
      <Options />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
