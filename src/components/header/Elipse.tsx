import React, { useEffect, useState } from "react";
import styles from "./Elipse.module.scss";

const Elipse = () => {
  const [elipseWidth, setElipseWidth] = useState("332px");
  const [elipseLeft, setElipseLeft] = useState("calc(50% - ( 332px/2))");
  const [elipseTop, setElipseTop] = useState("-200px");
  const [shapeLeft, setShapeLeft] = useState("calc(50% - 238px / 2)");
  //   const [shapeTop, setShapeTop] = useState("100px");
  const [shapeTop, setShapeTop] = useState("700px");
  const [shapeTransform, setShapeTransform] = useState("");
  const [shapeWidth, setShapeWidth] = useState("238px");
  const [shapeHeight, setShapeHeight] = useState("238px");
  const [rectangleWidth, setRectangleWidth] = useState("30px");
  const [rectangleHeight, setRectangleHeight] = useState("300px");
  const [rectangleTransform, setrectangleTransform] = useState("");
  const [rectangleColor, setRectangleColor] = useState("white");
  const [circleD, setCircleD] = useState(
    "M11.6528 20.1196C16.3287 20.1196 20.1193 16.329 20.1193 11.6531C20.1193 6.97718 16.3287 3.18661 11.6528 3.18661C6.97693 3.18661 3.18636 6.97718 3.18636 11.6531C3.18636 16.329 6.97693 20.1196 11.6528 20.1196ZM11.6528 23.0003C17.9197 23.0003 23 17.92 23 11.6531C23 5.38621 17.9197 0.305908 11.6528 0.305908C5.38597 0.305908 0.305664 5.38621 0.305664 11.6531C0.305664 17.92 5.38597 23.0003 11.6528 23.0003Z"
  );
  const [circleWidht, setCircleWidth] = useState("23px");
  const [circleViewBox, setCircleViewBox] = useState("0 0 23 23");
  const [circleFill, setCircleFill] = useState("#C3D400");

  const [boxWidth, setBoxWidth] = useState("100%");
  const [boxHeight, setBoxHeight] = useState("1200px");

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setCircleD(
        "M118.653 207.184C167.547 207.184 207.183 167.547 207.183 118.653C207.183 69.759 167.547 30.1225 118.653 30.1225C69.7588 30.1225 30.1223 69.759 30.1223 118.653C30.1223 167.547 69.7588 207.184 118.653 207.184ZM118.653 237.306C184.183 237.306 237.306 184.183 237.306 118.653C237.306 53.1229 184.183 0.000244141 118.653 0.000244141C53.1227 0.000244141 0 53.1229 0 118.653C0 184.183 53.1227 237.306 118.653 237.306Z"
      );
      setCircleWidth("238px");
      setCircleViewBox("0 0 238 238");
      setBoxWidth("80%");

      const timeout2 = setTimeout(() => {
        moveElipse();
        setBoxWidth("975px");
        setBoxHeight("800px");
      }, 1000);

      return () => clearTimeout(timeout2);
    }, 1000);

    return () => clearTimeout(timeout1);
  }, []);

  const moveElipse = () => {
    setElipseWidth("217px");
    setElipseLeft("calc(50% - ( 217px/2))");
    setElipseTop("-650px");
    setShapeTop("800px");
    setShapeLeft("calc(50% - 200px / 2)");
    setShapeTransform("rotate(90deg)");
    setShapeWidth("150px");
    setShapeHeight("150px");
    setCircleWidth("208px");

    setRectangleWidth("15px");
    setRectangleHeight("165px");
    setrectangleTransform("rotate(90deg)");
    setRectangleColor("#C3D400");

    setCircleD(
      "M83.5998 0C107.654 0 128.35 14.3735 137.569 35H120.53C112.66 22.9575 99.0594 15 83.5998 15C59.2805 15 39.5605 34.6916 39.5143 59H24.5143C24.5604 26.4073 50.9962 0 83.5998 0ZM29.5539 83C38.7349 103.718 59.4795 118.171 83.5998 118.171C116.232 118.171 142.685 91.7176 142.685 59.0856L142.685 59H127.685L127.685 59.0856C127.685 83.4333 107.948 103.171 83.5998 103.171C68.067 103.171 54.4105 95.1382 46.5579 83H29.5539Z"
    );

    const newViewBox = {
      minX: 10,
      minY: -20,
      width: 150,
      height: 150,
    };

    setCircleViewBox(
      `${newViewBox.minX} ${newViewBox.minY} ${newViewBox.width} ${newViewBox.height}`
    );

    setCircleFill("white");

    // setrectangleTransform()
  };

  return (
    <div className={styles.content}>
      <div
        className={styles.box}
        style={{ width: boxWidth, height: boxHeight }}
      ></div>
      <div
        className={styles.elipse}
        style={{ width: elipseWidth, left: elipseLeft, top: elipseTop }}
      >
        <div
          className={styles.shape}
          style={{
            // left: shapeLeft,
            top: shapeTop,
            //   transform: shapeTransform,
            // backgroundColor: "red",
            width: shapeWidth,
            height: shapeHeight,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={circleWidht}
            height={circleWidht}
            viewBox={circleViewBox}
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d={circleD}
              fill={circleFill}
              style={{ transition: "fill 1s ease-in-out, d 1s ease-in-out" }}
            />
          </svg>
          <div
            className={styles.rectangle}
            style={{
              width: rectangleWidth,
              height: rectangleHeight,
              transform: rectangleTransform,
              backgroundColor: rectangleColor,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Elipse;
