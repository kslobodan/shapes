import { CSSProperties } from "react";
import { transform } from "typescript";

interface CircleProps {
  circleWidth: string;
  viewBox: string;
  d: string;
  fill: string;
  transform: string;
}

const Circle = ({ circleWidth, viewBox, d, fill, transform }: CircleProps) => {
  const cyrcleStyle: CSSProperties = {
    transition: "all 1s ease-in-out",
    transform: transform,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={circleWidth}
      height={circleWidth}
      viewBox={viewBox}
      fill="none"
      style={cyrcleStyle}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={d} fill={fill} />
    </svg>
  );
};

export default Circle;
