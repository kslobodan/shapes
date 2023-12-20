import React from "react";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Options from "../components/Options";
import Header from "../components/Header";

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
