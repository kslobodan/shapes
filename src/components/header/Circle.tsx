interface CircleProps {
  circleWidth: string;
  viewBox: string;
  d: string;
  fill: string;
}

const Circle = ({ circleWidth, viewBox, d, fill }: CircleProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={circleWidth}
    height={circleWidth}
    viewBox={viewBox}
    fill="none"
    style={{ transition: "all 1s ease-in-out" }}
  >
    <path fillRule="evenodd" clipRule="evenodd" d={d} fill={fill} />
  </svg>
);

export default Circle;
