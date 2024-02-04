import React, { useEffect } from "react";
import { Footer, FooterMobile } from "../components/footer";
import Portfolio from "../components/portfolio/Portfolio";
import Options from "../components/Options";
import Header from "../components/header/Header";
import Testimonials from "../components/Testimonials";
import ThreeMinds from "../components/ThreeMinds";
import Statement from "../components/Statement";
import Arrow from "../components/Arrow";
import { useAppContext } from "../customHooks/useAppContext";

const Home = () => {
  const { screenSize } = useAppContext();

  return (
    <>
      {screenSize !== "small-screen" && (
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
      )}

      {screenSize === "small-screen" && (
        <>
          <FooterMobile />
        </>
      )}
    </>
  );
};

export default Home;
