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
    transition: "visibility 0.5s, opacity 0.5s",
    visibility: isFixed ? "visible" : "hidden",
    opacity: isFixed ? 1 : 0,
  };

  return (
    <div id="arrow" style={arrowStyle} onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="108"
        height="108"
        viewBox="0 0 108 108"
        fill="none"
      >
        <g filter="url(#filter0_d_586_1794)">
          <circle cx="54" cy="54" r="35.0693" fill="#C3D400" />
        </g>
        <g filter="url(#filter1_d_586_1794)">
          <circle
            cx="54"
            cy="54"
            r="42.3663"
            stroke="white"
            stroke-width="3.26733"
            shape-rendering="crispEdges"
          />
        </g>
        <path
          d="M53.9744 33.7426L78.7804 57.9752M53.9744 33.7426L29.1683 57.9752M53.9744 33.7426V97.7822"
          stroke="white"
          stroke-width="3.26733"
        />
        <defs>
          <filter
            id="filter0_d_586_1794"
            x="8.93066"
            y="8.93069"
            width="90.1387"
            height="90.1386"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_586_1794"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_586_1794"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_586_1794"
            x="0"
            y="0"
            width="108"
            height="108"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_586_1794"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_586_1794"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Arrow;
