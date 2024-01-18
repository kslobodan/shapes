import React from "react";

const Face = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="85"
    height="85"
    viewBox="0 0 85 85"
    fill="none"
  >
    <g filter="url(#filter0_dii_513_1592)">
      <rect
        x="8.55737"
        y="2.5"
        width="74.2787"
        height="74.2787"
        rx="37.1393"
        fill="#EDEDED"
      />
      <rect
        x="8.4796"
        y="2.42222"
        width="74.4342"
        height="74.4342"
        rx="37.2171"
        stroke="#5F5F5F"
        stroke-width="0.155555"
      />
    </g>
    <circle
      cx="45.7344"
      cy="39.677"
      r="32.3131"
      fill="#EDEDED"
      stroke="#5F5F5F"
      stroke-width="1.13115"
    />
    <rect
      x="25.9391"
      y="19.8815"
      width="39.5148"
      height="39.5148"
      rx="6.97541"
      stroke="#5F5F5F"
      stroke-width="1.13115"
    />
    <path
      d="M45.128 59.9306V44.7709H39.5806V38.4584H45.128V32.911C45.1758 31.6198 45.4627 29.1808 47.4713 27.4592C49.4798 25.7376 50.7232 25.4507 53.0187 25.4507C54.855 25.4507 57.1633 25.7376 58.0878 25.8811V31.0937H55.1707C54.5171 31.0937 53.4012 31.3807 52.7795 32.0502C52.1579 32.7197 51.9187 33.1979 51.8709 34.2022V38.4584H57.8009L56.8444 44.7709H51.8709V59.9306"
      stroke="#5F5F5F"
      stroke-width="1.13115"
    />
    <defs>
      <filter
        id="filter0_dii_513_1592"
        x="0.624107"
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
          result="effect1_dropShadow_513_1592"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_513_1592"
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
          result="effect2_innerShadow_513_1592"
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
          result="effect3_innerShadow_513_1592"
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
          in2="effect2_innerShadow_513_1592"
          result="effect3_innerShadow_513_1592"
        />
      </filter>
    </defs>
  </svg>
);

export default Face;
