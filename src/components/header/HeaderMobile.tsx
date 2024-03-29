import React, { CSSProperties, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./HeaderMobile.module.scss";
import { letters } from "./Letters";
import SvgList from "./SvgList";
import Arrow from "./ArrowSVG";
import Circle from "./Circle";

const HeaderMobile = () => {
  const [translate, i18n] = useTranslation("global");
  const [ellipseWidth, setEllipseWidth] = useState("170px");
  const [ellipseLeft, setEllipseLeft] = useState("calc(50% - ( 170px/2))");
  const [ellipseTop, setEllipseTop] = useState("-350px");
  const [shapeTop, setShapeTop] = useState("580px");
  const [shapeWidth, setShapeWidth] = useState("238px");
  const [shapeHeight, setShapeHeight] = useState("238px");
  const [rectangleWidth, setRectangleWidth] = useState("16px");
  const [rectangleHeight, setRectangleHeight] = useState("150px");
  const [rectangleTransform, setrectangleTransform] = useState("");
  const [rectangleColor, setRectangleColor] = useState("white");

  const [circle, setCircle] = useState({
    D: "M11.6528 20.1196C16.3287 20.1196 20.1193 16.329 20.1193 11.6531C20.1193 6.97718 16.3287 3.18661 11.6528 3.18661C6.97693 3.18661 3.18636 6.97718 3.18636 11.6531C3.18636 16.329 6.97693 20.1196 11.6528 20.1196ZM11.6528 23.0003C17.9197 23.0003 23 17.92 23 11.6531C23 5.38621 17.9197 0.305908 11.6528 0.305908C5.38597 0.305908 0.305664 5.38621 0.305664 11.6531C0.305664 17.92 5.38597 23.0003 11.6528 23.0003Z",
    Widht: "20px",
    ViewBox: "0 0 23 23",
    Fill: "#C3D400",
  });

  const [boxWidth, setBoxWidth] = useState("100%");
  const [boxHeight, setBoxHeight] = useState("800px");

  const [logoTop, setLogoTop] = useState("200px");
  const [logoGap, setLogoGap] = useState("2vh");
  const [logoBox, setLogoBox] = useState("100px");
  const [logoVisible, setLogoVisible] = useState(false);

  const [chooseMarginTop, setChooseMarginTop] = useState("580px");
  const [chooseColor, setChooseColor] = useState("#5F5F5F");
  const [chooseFontSize, setChooseFontSize] = useState("20px");
  const [chooseLineHeight, setChooseLineHeight] = useState("12px");
  const [languagesOpacity, setLanguagesOpacity] = useState("0");
  const [circleTransform, setCircleTransform] = useState("scale(0.5)");

  const [lettersStyle, setLettersStyle] = useState({
    width: "259px",
    height: "51px",
  });

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      firstChange();

      const timeout2 = setTimeout(() => {
        secondChange();

        const timeout3 = setTimeout(() => {
          thirdChange();
        }, 800);

        return () => clearTimeout(timeout3);
      }, 1000);

      return () => {
        clearTimeout(timeout2);
      };
    }, 500);

    return () => clearTimeout(timeout1);
  }, []);

  const languateText = i18n.language === "en" ? "EN/SR" : "SR/EN";

  const logoStyle: CSSProperties = {
    top: logoTop,
    visibility: logoVisible ? "visible" : "hidden",
    gap: logoGap,
  };
  const rectangleStyle: CSSProperties = {
    width: rectangleWidth,
    height: rectangleHeight,
    transform: rectangleTransform,
    backgroundColor: rectangleColor,
  };
  const shapeStyle: CSSProperties = {
    top: shapeTop,
    width: shapeWidth,
    height: shapeHeight,
  };
  const transformStyle: CSSProperties = {
    width: logoBox,
    transition: `all 500ms ease-out `,
  };

  const chooseStyle: CSSProperties = {
    top: chooseMarginTop,
    color: chooseColor,
    fontSize: chooseFontSize,
    lineHeight: chooseLineHeight,
  };

  const firstChange = () => {
    setCircle({
      ...circle,
      D: "M118.653 207.184C167.547 207.184 207.183 167.547 207.183 118.653C207.183 69.759 167.547 30.1225 118.653 30.1225C69.7588 30.1225 30.1223 69.759 30.1223 118.653C30.1223 167.547 69.7588 207.184 118.653 207.184ZM118.653 237.306C184.183 237.306 237.306 184.183 237.306 118.653C237.306 53.1229 184.183 0.000244141 118.653 0.000244141C53.1227 0.000244141 0 53.1229 0 118.653C0 184.183 53.1227 237.306 118.653 237.306Z",
      Widht: "238px",
      ViewBox: "0 0 238 238",
    });

    setBoxWidth("80%");
  };

  const secondChange = () => {
    setEllipseWidth("92px");
    setEllipseLeft("calc(50% - ( 92px/2))");
    setEllipseTop("-650px");
    setShapeTop("670px");
    setShapeWidth("150px");
    setShapeHeight("150px");

    setRectangleWidth("15px");
    setRectangleHeight("165px");
    setrectangleTransform("rotate(90deg) scale(0.45)");
    setRectangleColor("#C3D400");

    setCircle({
      ...circle,
      D: "M83.5998 0C107.654 0 128.35 14.3735 137.569 35H120.53C112.66 22.9575 99.0594 15 83.5998 15C59.2805 15 39.5605 34.6916 39.5143 59H24.5143C24.5604 26.4073 50.9962 0 83.5998 0ZM29.5539 83C38.7349 103.718 59.4795 118.171 83.5998 118.171C116.232 118.171 142.685 91.7176 142.685 59.0856L142.685 59H127.685L127.685 59.0856C127.685 83.4333 107.948 103.171 83.5998 103.171C68.067 103.171 54.4105 95.1382 46.5579 83H29.5539Z",
      Widht: "208px",
      ViewBox: editSVG(10, -20, 150, 150),
      Fill: "white",
    });
    setCircleTransform("scale(0.45)");

    setBoxWidth("80vw");
    setBoxHeight("350px");
    editLogo(true);
    setLogoVisible(true);
    setChooseMarginTop("670px");
    setChooseFontSize("12px");
    setChooseColor("rgba(95, 95, 95, 0.50)");
    setChooseLineHeight("13px");

    setLettersStyle({
      width: "590px",
      height: "76px",
    });
  };

  const thirdChange = () => {
    editLogo(false);
    setChooseColor("transparent");
    setLanguagesOpacity("1");

    setLettersStyle({
      width: "259px",
      height: "51px",
    });
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
      setLogoBox("650px");
    } else {
      setLogoTop("100px");
      setLogoGap("4vh");
      setLogoBox("450px");
    }
  };

  const handleChangeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("sr");
      window.history.pushState({}, "", window.location.origin + "/sr");
    } else {
      i18n.changeLanguage("en");
      window.history.pushState({}, "", window.location.origin + "/en");
    }
  };

  return (
    <section id="header" style={{ position: "relative" }}>
      <div className={styles.content}>
        <div
          className={styles.box}
          style={{ width: boxWidth, height: boxHeight }}
        ></div>
        <div
          className={styles.ellipse}
          style={{ width: ellipseWidth, left: ellipseLeft, top: ellipseTop }}
        >
          <button
            className={styles.languages}
            style={{ opacity: languagesOpacity }}
            onClick={() => handleChangeLanguage()}
          >
            {languateText}
          </button>
          <div className={styles.choose} style={chooseStyle}>
            {translate("header.choose")}
          </div>
          <div className={styles.shape} style={shapeStyle}>
            <Circle
              circleWidth={circle.Widht}
              viewBox={circle.ViewBox}
              d={circle.D}
              fill={circle.Fill}
              transform={circleTransform}
            />
            <div className={styles.rectangle} style={rectangleStyle} />
          </div>
        </div>
        <div className={styles.logo} style={logoStyle}>
          <div className={styles.logo__text} style={transformStyle}>
            <SvgList sVGs={letters} />
            {/* <img
              style={lettersStyle}
              src={require(`../../../src/images/MAJABO_small.png`)}
              alt="majabo"
            /> */}
          </div>
          <div className={styles.description}>
            {translate("header.subtitle")}
          </div>
          <div className={styles.arrow}>
            <Arrow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderMobile;
