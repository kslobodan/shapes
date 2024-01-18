import React from "react";

const Tube = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="85"
    height="85"
    viewBox="0 0 85 85"
    fill="none"
  >
    <g filter="url(#filter0_dii_513_1585)">
      <rect
        x="8.27881"
        y="2.5"
        width="74.2787"
        height="74.2787"
        rx="37.1393"
        fill="#EDEDED"
      />
      <rect
        x="8.20103"
        y="2.42222"
        width="74.4342"
        height="74.4342"
        rx="37.2171"
        stroke="#5F5F5F"
        stroke-width="0.155555"
      />
    </g>
    <circle
      cx="45.4558"
      cy="39.677"
      r="32.3131"
      fill="#EDEDED"
      stroke="#5F5F5F"
      stroke-width="1.13115"
    />
    <rect
      x="23.3231"
      y="25.008"
      width="44.1902"
      height="29.3378"
      rx="4.21012"
      stroke="#5F5F5F"
      stroke-width="1.13115"
    />
    <path
      d="M52.9983 38.986C53.618 39.2385 53.618 40.116 52.9983 40.3685L40.2064 45.5807C39.7155 45.7807 39.1783 45.4195 39.1783 44.8894V34.465C39.1783 33.9349 39.7155 33.5737 40.2064 33.7738L52.9983 38.986Z"
      stroke="#5F5F5F"
      stroke-width="1.13115"
    />
    <defs>
      <filter
        id="filter0_dii_513_1585"
        x="0.345543"
        y="0.788689"
        width="83.9231"
        height="83.9231"
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
        <feOffset dx="-3.1111" dy="3.1111" />
        <feGaussianBlur stdDeviation="2.33332" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_513_1585"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_513_1585"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-6.2222" />
        <feGaussianBlur stdDeviation="3.26665" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_513_1585"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="0.62222"
          operator="erode"
          in="SourceAlpha"
          result="effect3_innerShadow_513_1585"
        />
        <feOffset dx="-1.86666" />
        <feGaussianBlur stdDeviation="2.79999" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.41 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_innerShadow_513_1585"
          result="effect3_innerShadow_513_1585"
        />
      </filter>
    </defs>
  </svg>
);

export default Tube;
