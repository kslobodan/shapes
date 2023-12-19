import React from "react";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Options from "../components/Options";

const Home = () => {
  return (
    <div>
      <Options />
      {/* <About /> */}
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
