import React, { CSSProperties, useEffect, useState } from "react";

const Arrow = () => {
  const [isFixed, setIsFixed] = useState(false);

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

  const arrowStyle: CSSProperties = {
    position: "fixed",
    bottom: "0",
    right: "50px",
    transition: "opacity 0.5s",
    display: isFixed ? "block" : "none",
    opacity: isFixed ? 1 : 0,
    cursor: "pointer",
    zIndex: "100",
  };

  return (
    <div id="arrow" style={arrowStyle} onClick={handleClick}>
      <img src={require(`../../src/images/up-button.png`)} alt="" />
    </div>
  );
};

export default Arrow;
