import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.scss";
import { letters } from "./Letters";
import SvgList from "./SvgList";
import { Language, useAppContext } from "../../customHooks/useAppContext";
import Arrow from "./ArrowSVG";
import Circle from "./Circle";

type LoadType = "InitialLoad" | "FirstLoad" | "SecondLoad" | "ThirthLoad";
type LogoTextChange = "Initial" | "FirstChange" | "SecondChange";

const Header = () => {
  const [translate, i18n] = useTranslation("global");
  const { language, setLanguage } = useAppContext();
  const [ellipseLoaded, setEllipseLoaded] = useState(false);
  const [shapeLoaded, setShapeLoaded] = useState(false);
  const [rectangleLoaded, setRectangleLoaded] = useState(false);
  const [loadingType, setLoadingType] = useState<LoadType>("InitialLoad");
  const [textChange, setTextChange] = useState<LogoTextChange>("Initial");
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [languagesOpacity, setLanguagesOpacity] = useState("0");

  const [circle, setCircle] = useState({
    D: "M11.6528 20.1196C16.3287 20.1196 20.1193 16.329 20.1193 11.6531C20.1193 6.97718 16.3287 3.18661 11.6528 3.18661C6.97693 3.18661 3.18636 6.97718 3.18636 11.6531C3.18636 16.329 6.97693 20.1196 11.6528 20.1196ZM11.6528 23.0003C17.9197 23.0003 23 17.92 23 11.6531C23 5.38621 17.9197 0.305908 11.6528 0.305908C5.38597 0.305908 0.305664 5.38621 0.305664 11.6531C0.305664 17.92 5.38597 23.0003 11.6528 23.0003Z",
    Widht: "23px",
    ViewBox: "0 0 23 23",
    Fill: "#C3D400",
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

  const languateText = language === "en" ? "EN/SR" : "SR/EN";

  const firstChange = () => {
    setCircle({
      ...circle,
      D: "M118.653 207.184C167.547 207.184 207.183 167.547 207.183 118.653C207.183 69.759 167.547 30.1225 118.653 30.1225C69.7588 30.1225 30.1223 69.759 30.1223 118.653C30.1223 167.547 69.7588 207.184 118.653 207.184ZM118.653 237.306C184.183 237.306 237.306 184.183 237.306 118.653C237.306 53.1229 184.183 0.000244141 118.653 0.000244141C53.1227 0.000244141 0 53.1229 0 118.653C0 184.183 53.1227 237.306 118.653 237.306Z",
      Widht: "238px",
      ViewBox: "0 0 238 238",
    });

    setLoadingType("FirstLoad");
  };

  const secondChange = () => {
    setEllipseLoaded(true);
    setShapeLoaded(true);
    setRectangleLoaded(true);

    setCircle({
      ...circle,
      D: "M83.5998 0C107.654 0 128.35 14.3735 137.569 35H120.53C112.66 22.9575 99.0594 15 83.5998 15C59.2805 15 39.5605 34.6916 39.5143 59H24.5143C24.5604 26.4073 50.9962 0 83.5998 0ZM29.5539 83C38.7349 103.718 59.4795 118.171 83.5998 118.171C116.232 118.171 142.685 91.7176 142.685 59.0856L142.685 59H127.685L127.685 59.0856C127.685 83.4333 107.948 103.171 83.5998 103.171C68.067 103.171 54.4105 95.1382 46.5579 83H29.5539Z",
      Widht: "208px",
      ViewBox: editSVG(10, -20, 150, 150),
      Fill: "white",
    });

    setLoadingType("SecondLoad");
    editLogo(true);
    setLogoVisible(true);
  };

  const thirdChange = () => {
    editLogo(false);
    setLoadingType("ThirthLoad");
    setLanguagesOpacity("1");
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
      setTextChange("FirstChange");
    } else {
      setLogoLoaded(true);
      setTextChange("SecondChange");
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
    <section id="header" className={styles.header__style}>
      <div className={styles.content}>
        <div
          className={
            loadingType === "InitialLoad"
              ? styles.box
              : loadingType === "FirstLoad"
              ? styles.box__first__load
              : styles.box__second__load
          }
        />
        <div
          className={ellipseLoaded ? styles.ellipse__loaded : styles.ellipse}
        >
          <button
            className={styles.languages}
            style={{ opacity: languagesOpacity }}
            onClick={() => handleChangeLanguage()}
          >
            {languateText}
          </button>
          <div
            className={
              loadingType === "InitialLoad" || loadingType === "FirstLoad"
                ? styles.choose
                : loadingType === "SecondLoad"
                ? styles.choose__second__load
                : styles.choose__thirth__load
            }
          >
            {translate("header.choose")}
          </div>
          <div className={shapeLoaded ? styles.shape__loaded : styles.shape}>
            <Circle
              circleWidth={circle.Widht}
              viewBox={circle.ViewBox}
              d={circle.D}
              fill={circle.Fill}
              transform=""
            />
            <div
              className={
                rectangleLoaded ? styles.rectangle__loaded : styles.rectangle
              }
            />
          </div>
        </div>
        <div
          className={logoLoaded ? styles.logo__loaded : styles.logo}
          style={{ visibility: logoVisible ? "visible" : "hidden" }}
        >
          <div
            className={
              textChange === "Initial"
                ? styles.logo__text
                : textChange === "FirstChange"
                ? styles.logo__text__first__change
                : styles.logo__text__second__change
            }
          >
            <SvgList sVGs={letters} />
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

export default Header;
