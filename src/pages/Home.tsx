import { Footer, FooterMobile } from "../components/footer";
import Portfolio from "../components/portfolio/Portfolio";
import Options from "../components/options/Options";
import Header from "../components/header/Header";
import Testimonials from "../components/Testimonials";
import ThreeMinds from "../components/ThreeMinds";
import Statement from "../components/statement/Statement";
import Arrow from "../components/Arrow";
import { useAppContext } from "../customHooks/useAppContext";
import OptionsMobile from "../components/options/OptionsMobile";
import ThreeMindsMobile from "../components/ThreeMindsMobile";
import HeaderMobile from "../components/header/HeaderMobile";

const Home = () => {
  const { screenSize } = useAppContext();

  return (
    <>
      {/* {screenSize !== "small-screen" && ( */}
      <div style={{ overflow: "hidden" }}>
        {screenSize !== "small-screen" ? <Header /> : <HeaderMobile />}
        {screenSize !== "small-screen" ? <ThreeMinds /> : <ThreeMindsMobile />}
        {screenSize !== "small-screen" ? <Options /> : <OptionsMobile />}
        <Portfolio />
        <Statement />
        <Testimonials />
        {screenSize !== "small-screen" ? <Footer /> : <FooterMobile />}
        <Arrow />
      </div>
      {/* )} */}

      {/* {screenSize === "small-screen" && (
        <>
          <Testimonials />
          <FooterMobile />
        </>
      )} */}
    </>
  );
};

export default Home;
