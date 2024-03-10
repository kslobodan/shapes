import React, { CSSProperties, useEffect, useState } from "react";
import { useAppContext } from "../customHooks/useAppContext";

const Arrow = () => {
  const [isFixed, setIsFixed] = useState(false);
  const { screenSize, smallScreen } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled down
      const isScrolledDown = window.scrollY > 0;

      // Update the state based on the scroll position
      setIsFixed(isScrolledDown);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const rightValue = () => {
    if (smallScreen) return "50%";
    else if (screenSize === "medium-screen") return "-10px";
    else if (screenSize === "large-screen") return "15px";
    else if (screenSize === "x-large-screen") return "35px";
    else return "50px";
  };

  const scaleValue = () => {
    if (smallScreen) return "translateX(50%) scale(0.5)";
    else if (screenSize === "medium-screen") return "scale(0.6)";
    else if (screenSize === "large-screen") return "scale(0.73)";
    else if (screenSize === "x-large-screen") return "scale(0.87)";
    else return "scale(1)";
  };

  const arrowStyle: CSSProperties = {
    position: "fixed",
    bottom: "90px",
    right: rightValue(),
    transform: scaleValue(),
    transition: "opacity 0.5s",
    display: isFixed ? "block" : "none",
    opacity: isFixed ? 1 : 0,
    cursor: "pointer",
    zIndex: "100",
  };

  return (
    <div style={arrowStyle} onClick={handleClick}>
      <img src={require(`../../src/images/up-button.png`)} alt="" />
    </div>
  );
};

export default Arrow;
