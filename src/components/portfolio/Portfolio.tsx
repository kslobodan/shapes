import React, { CSSProperties, useEffect, useState } from "react";
import styles from "./Portfolio.module.scss";
import TitleWithText from "../TitleWithText";
import { mobileImages, MobileImage } from "./utils";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../customHooks/useAppContext";

interface largeImage {
  divStyle: CSSProperties;
  imageStyle: CSSProperties;
  src: string;
  alt: string;
}

const largeImageStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const Portfolio = () => {
  const { smallScreen, screenSize } = useAppContext();
  const [translate] = useTranslation("global");
  const [largeImageVisible, setLargeImageVisible] = useState<boolean>(false);
  const [largeImageDivStyle, setLargeImageDivStyle] = useState<CSSProperties>({
    position: "absolute",
    width: "645px",
    height: "430px",
    zIndex: "10",
  });
  const [largeImageProps, setLargeImageProps] = useState<largeImage>({
    divStyle: largeImageDivStyle,
    imageStyle: largeImageStyle,
    src: require(`../../images/1-large.png`),
    alt: "test1",
  });
  const [mobileImageList, setMobileImageList] =
    useState<MobileImage[]>(mobileImages);

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  const [isHovered10, setIsHovered10] = useState(false);
  const [isHovered11, setIsHovered11] = useState(false);
  const [isHovered12, setIsHovered12] = useState(false);
  const [isHovered13, setIsHovered13] = useState(false);
  const [isHovered14, setIsHovered14] = useState(false);
  const [isHovered15, setIsHovered15] = useState(false);
  const [isHovered16, setIsHovered16] = useState(false);
  const [isHovered17, setIsHovered17] = useState(false);
  const [isHovered18, setIsHovered18] = useState(false);

  const text: string[] =
    translate("portfolio.text", { returnObjects: true }) || [];
  const splitedText = text.join("\n");

  const textMobile: string[] =
    translate("portfolio.textMobile", { returnObjects: true }) || [];

  const kairon: string[] =
    translate("portfolio.kairon", { returnObjects: true }) || [];

  const activeteImage = (id: number) => {
    const updatedImageList = mobileImageList.map((item) => {
      if (item.id === id) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    setMobileImageList(updatedImageList);
  };

  return (
    <section
      id="portfolio"
      style={{ marginTop: "-20px", marginBottom: "-100px" }}
    >
      {!smallScreen && (
        <TitleWithText
          title={translate("portfolio.title")}
          underTitle={translate("portfolio.subtitle")}
          text={smallScreen ? "" : splitedText}
          lineHeight="40px"
        />
      )}
      {smallScreen && (
        <div className="titles__mobile" style={{ marginTop: "25px" }}>
          <div className={styles.title}>
            <h2>{translate("options.title")}</h2>
          </div>
          <p className="title__mobile__green__small">
            <div className={styles.subtitle}>
              {translate("options.subtitle")}
            </div>
          </p>
        </div>
      )}
      {smallScreen && (
        <div className={styles.text__mobile}>
          {textMobile.map((row, index) => (
            <div key={index}>{row}</div>
          ))}
        </div>
      )}
      <div
        className="section__content"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {!smallScreen && (
          <div
            className={styles.content}
            onMouseLeave={() => setLargeImageVisible(false)}
          >
            <div className={styles.portfolio}>
              <div className={styles.row}>
                <div
                  className={styles.box1}
                  onMouseEnter={() => {
                    setIsHovered1(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered1(false);
                  }}
                >
                  <img
                    src={
                      isHovered1
                        ? require("../../images/1-large.png")
                        : require("../../images/1-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
                <div
                  className={styles.box2}
                  onMouseEnter={() => {
                    setIsHovered2(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered2(false);
                  }}
                >
                  <img
                    src={
                      isHovered2
                        ? require("../../images/2-large.png")
                        : require("../../images/2-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
                <div
                  className={styles.box3}
                  onMouseEnter={() => {
                    setIsHovered3(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered3(false);
                  }}
                >
                  <img
                    src={
                      isHovered3
                        ? require("../../images/3-large.png")
                        : require("../../images/3-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div
                  className={styles.box4}
                  onMouseEnter={() => {
                    setIsHovered4(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered4(false);
                  }}
                >
                  <img
                    src={
                      isHovered4
                        ? require("../../images/4-large.png")
                        : require("../../images/4-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
                <div
                  className={styles.box5}
                  onMouseEnter={() => {
                    setIsHovered5(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered5(false);
                  }}
                >
                  <img
                    src={
                      isHovered5
                        ? require("../../images/5-large.png")
                        : require("../../images/5-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
                <div
                  className={styles.box6}
                  onMouseEnter={() => {
                    setIsHovered6(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered6(false);
                  }}
                >
                  <img
                    src={
                      isHovered6
                        ? require("../../images/6-large.png")
                        : require("../../images/6-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div
                  className={styles.box7}
                  onMouseEnter={() => {
                    setIsHovered7(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered7(false);
                  }}
                >
                  <img
                    src={
                      isHovered7
                        ? require("../../images/7-large.png")
                        : require("../../images/7-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
                <div
                  className={styles.box8}
                  onMouseEnter={() => {
                    setIsHovered8(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered8(false);
                  }}
                >
                  <img
                    src={
                      isHovered8
                        ? require("../../images/8-large.png")
                        : require("../../images/8-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
                <div
                  className={styles.box9}
                  onMouseEnter={() => {
                    setIsHovered9(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered9(false);
                  }}
                >
                  <img
                    src={
                      isHovered9
                        ? require("../../images/9-large.png")
                        : require("../../images/9-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div
                  className={styles.box10}
                  onMouseEnter={() => {
                    setIsHovered10(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered10(false);
                  }}
                >
                  <img
                    src={
                      isHovered10
                        ? require("../../images/10-large.png")
                        : require("../../images/10-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
                <div
                  className={styles.box11}
                  onMouseEnter={() => {
                    setIsHovered11(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered11(false);
                  }}
                >
                  <img
                    src={
                      isHovered11
                        ? require("../../images/11-large.png")
                        : require("../../images/11-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
                <div
                  className={styles.box12}
                  onMouseEnter={() => {
                    setIsHovered12(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered12(false);
                  }}
                >
                  <img
                    src={
                      isHovered12
                        ? require("../../images/12-large.png")
                        : require("../../images/12-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div
                  className={styles.box13}
                  onMouseEnter={() => {
                    setIsHovered13(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered13(false);
                  }}
                >
                  <img
                    src={
                      isHovered13
                        ? require("../../images/13-large.png")
                        : require("../../images/13-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
                <div
                  className={styles.box14}
                  onMouseEnter={() => {
                    setIsHovered14(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered14(false);
                  }}
                >
                  <img
                    src={
                      isHovered14
                        ? require("../../images/14-large.png")
                        : require("../../images/14-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
                <div
                  className={styles.box15}
                  onMouseEnter={() => {
                    setIsHovered15(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered15(false);
                  }}
                >
                  <img
                    src={
                      isHovered15
                        ? require("../../images/15-large.png")
                        : require("../../images/15-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div
                  className={styles.box16}
                  onMouseEnter={() => {
                    setIsHovered16(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered16(false);
                  }}
                >
                  <img
                    src={
                      isHovered16
                        ? require("../../images/16-large.png")
                        : require("../../images/16-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
                <div
                  className={styles.box17}
                  onMouseEnter={() => {
                    setIsHovered17(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered17(false);
                  }}
                >
                  <img
                    src={
                      isHovered17
                        ? require("../../images/17-large.png")
                        : require("../../images/17-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
                <div
                  className={styles.box18}
                  onMouseEnter={() => {
                    setIsHovered18(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered18(false);
                  }}
                >
                  <img
                    src={
                      isHovered18
                        ? require("../../images/18-large.png")
                        : require("../../images/18-small.png")
                    }
                    className={styles.img__style}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {largeImageVisible && (
              <div style={largeImageProps.divStyle}>
                <img
                  src={largeImageProps.src}
                  style={largeImageProps.imageStyle}
                  alt={largeImageProps.alt}
                />
              </div>
            )}
          </div>
        )}
        {smallScreen && (
          <div className={styles.mobile__section}>
            <div className={styles.mobile__portfolio}>
              {mobileImageList.map((image) => (
                <div
                  key={image.id}
                  // style={image.expanded ? boxExpanded : box}
                  onClick={() => activeteImage(image.id)}
                >
                  <img
                    // src={require("../images/02-small.png")}
                    src={
                      image.active
                        ? require(`../../images/portfolio/${image.color}`)
                        : require(`../../images/portfolio/${image.black}`)
                    }
                    className={styles.image}
                    style={{
                      width: image.width + "px",
                      height: image.height + "px",
                      // width: (image.width * imageMultiplier).toString() + "px",
                      // height:
                      //   (image.height * imageMultiplier).toString() + "px",
                      objectFit: "cover",
                    }}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.visible__area}>
          <div className={styles.text__content}>
            <div className={styles.text}>
              {kairon.map((element, index) => (
                <p key={index}>{element}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
