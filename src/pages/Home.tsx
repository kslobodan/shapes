import React, { createContext, useEffect } from "react";
import Footer from "../components/footer/Footer";
import Portfolio from "../components/portfolio/Portfolio";
import Options from "../components/Options";
import Header from "../components/header/Header";
import Testimonials from "../components/Testimonials";
import ThreeMinds from "../components/ThreeMinds";
import Statement from "../components/Statement";
import Arrow from "../components/Arrow";
import { useAppContext } from "../customHooks/useAppContext";

const Home = () => {
  const { setScreenSize } = useAppContext();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1680) setScreenSize("xx-large-screen");
      else if (screenWidth > 1280) setScreenSize("x-large-screen");
      else if (screenWidth > 1280) setScreenSize("large-screen");
      else if (screenWidth > 768) setScreenSize("medium-screen");
      else if (screenWidth <= 480) setScreenSize("small-screen");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <>
      <Header />
      <ThreeMinds />
      <Options />
      <Portfolio />
      <Statement />
      <Testimonials />
      <Footer />
      <Arrow />
    </>
  );
};

export default Home;
