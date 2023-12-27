import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { biggerLetters, smallerLetters } from "./Letters";
import SvgList, { SvgListProps } from "./SvgList";

const Elipse = () => {
  const [elipseWidth, setElipseWidth] = useState("332px");
  const [elipseLeft, setElipseLeft] = useState("calc(50% - ( 332px/2))");
  const [elipseTop, setElipseTop] = useState("-200px");
  const [shapeTop, setShapeTop] = useState("700px");
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

  const [logoTop, setLogoTop] = useState("420px");
  const [logoGap, setLogoGap] = useState("4vh");
  const [logoBox, setLogoBox] = useState("515px");
  const [logoLetters, setLogoLetters] =
    useState<SvgListProps[]>(smallerLetters);
  const [logoVisible, setLogoVisible] = useState(false);

  const [chooseMarginTop, setChooseMarginTop] = useState("550px");
  const [chooseColor, setChooseColor] = useState("#5F5F5F");
  const [chooseFontSize, setChooseFontSize] = useState("48px");
  const [chooseLineHeight, setChooseLineHeight] = useState("34px");

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      console.log("first");
      setCircleD(
        "M118.653 207.184C167.547 207.184 207.183 167.547 207.183 118.653C207.183 69.759 167.547 30.1225 118.653 30.1225C69.7588 30.1225 30.1223 69.759 30.1223 118.653C30.1223 167.547 69.7588 207.184 118.653 207.184ZM118.653 237.306C184.183 237.306 237.306 184.183 237.306 118.653C237.306 53.1229 184.183 0.000244141 118.653 0.000244141C53.1227 0.000244141 0 53.1229 0 118.653C0 184.183 53.1227 237.306 118.653 237.306Z"
      );
      setCircleWidth("238px");
      setCircleViewBox("0 0 238 238");
      setBoxWidth("80%");

      //   editLogo(true);

      const timeout2 = setTimeout(() => {
        console.log("second");
        moveElipse();
        setBoxWidth("975px");
        setBoxHeight("700px");
        editLogo(true);
        setLogoVisible(true);
        setChooseMarginTop("750px");
        setChooseFontSize("28.8px");
        setChooseColor("rgba(95, 95, 95, 0.50)");
        setChooseLineHeight("20.4px");

        const timeout3 = setTimeout(() => {
          console.log("third");
          editLogo(false);
          setChooseColor("#EDEDED");
        }, 1000);

        return () => clearTimeout(timeout3);
      }, 1000);

      return () => {
        clearTimeout(timeout2);
      };
    }, 500);

    return () => clearTimeout(timeout1);
  }, []);

  const moveElipse = () => {
    setElipseWidth("217px");
    setElipseLeft("calc(50% - ( 217px/2))");
    setElipseTop("-680px");
    setShapeTop("800px");
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

    setCircleViewBox(editSVG(10, -20, 150, 150));

    setCircleFill("white");
  };

  const editSVG = (
    minX: number,
    minY: number,
    width: number,
    height: number
  ) => {
    return `${minX} ${minY} ${width} ${height}`;
  };

  const editLogo = (bigger: boolean) => {
    if (bigger) {
      const newLetters = biggerLetters;
      setLogoLetters(newLetters);
      setLogoBox("903px");
    } else {
      setLogoTop("360px");
      const newLetters = smallerLetters;
      setLogoLetters(newLetters);
      setLogoBox("515px");
    }
  };

  return (
    <section
      id="header"
      style={{ paddingBottom: "50px", position: "relative" }}
    >
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
            className={styles.choose}
            style={{
              top: chooseMarginTop,
              color: chooseColor,
              fontSize: chooseFontSize,
              lineHeight: chooseLineHeight,
            }}
          >
            choose
          </div>
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
        <div
          className={styles.logo}
          style={{
            top: logoTop,
            visibility: logoVisible ? "visible" : "hidden",
            gap: logoGap,
          }}
        >
          <div className={styles.logo__text} style={{ width: logoBox }}>
            <SvgList sVGs={logoLetters} />
          </div>
          <div className={styles.description}>creative agency</div>
          <div className={styles.arrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="116"
              height="58"
              viewBox="0 0 116 58"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0L10.6066 10.6066L47.0661 47.0661L57.6727 57.6727L68.2793 47.0661L104.739 10.6066L115.345 0H94.1323L57.6727 36.4595L21.2132 0H0Z"
                fill="#C3D400"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Elipse;
