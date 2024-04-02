import React, { CSSProperties, useEffect, useState } from "react";
import styles from "./Portfolio.module.scss";
import TitleWithText from "../TitleWithText";
import { mobileImages, MobileImage } from "./utils";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../customHooks/useAppContext";
import ImageBox from "./ImageBox";

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
            <h2>{translate("portfolio.title")}</h2>
          </div>
          <p className="title__mobile__green__small">
            <div className={styles.subtitle}>
              {translate("portfolio.subtitle")}
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
                <ImageBox
                  className="box1"
                  smallImageUrl={"1-small.png"}
                  largeImageUrl={"1-large.png"}
                />

                <ImageBox
                  className="box2"
                  smallImageUrl={"2-small.png"}
                  largeImageUrl={"2-large.png"}
                />

                <ImageBox
                  className="box3"
                  smallImageUrl={"3-small.png"}
                  largeImageUrl={"3-large.png"}
                />
              </div>

              <div className={styles.row}>
                <ImageBox
                  className="box4"
                  smallImageUrl={"4-small.png"}
                  largeImageUrl={"4-large.png"}
                />

                <ImageBox
                  className="box5"
                  smallImageUrl={"5-small.png"}
                  largeImageUrl={"5-large.png"}
                />

                <ImageBox
                  className="box6"
                  smallImageUrl={"6-small.png"}
                  largeImageUrl={"6-large.png"}
                />
              </div>

              <div className={styles.row}>
                <ImageBox
                  className="box7"
                  smallImageUrl={"7-small.png"}
                  largeImageUrl={"7-large.png"}
                />

                <ImageBox
                  className="box8"
                  smallImageUrl={"8-small.png"}
                  largeImageUrl={"8-large.png"}
                />

                <ImageBox
                  className="box9"
                  smallImageUrl={"9-small.png"}
                  largeImageUrl={"9-large.png"}
                  alt="salsa.rs"
                />
              </div>

              <div className={styles.row}>
                <ImageBox
                  className="box10"
                  smallImageUrl={"10-small.png"}
                  largeImageUrl={"10-large.png"}
                />

                <ImageBox
                  className="box11"
                  smallImageUrl={"11-small.png"}
                  largeImageUrl={"11-large.png"}
                />

                <ImageBox
                  className="box12"
                  smallImageUrl={"12-small.png"}
                  largeImageUrl={"12-large.png"}
                />
              </div>

              <div className={styles.row}>
                <ImageBox
                  className="box13"
                  smallImageUrl={"13-small.png"}
                  largeImageUrl={"13-large.png"}
                />

                <ImageBox
                  className="box14"
                  smallImageUrl={"14-small.png"}
                  largeImageUrl={"14-large.png"}
                />

                <ImageBox
                  className="box15"
                  smallImageUrl={"15-small.png"}
                  largeImageUrl={"15-large.png"}
                />
              </div>

              <div className={styles.row}>
                <ImageBox
                  className="box16"
                  smallImageUrl={"16-small.png"}
                  largeImageUrl={"16-large.png"}
                />

                <ImageBox
                  className="box17"
                  smallImageUrl={"17-small.png"}
                  largeImageUrl={"17-large.png"}
                  alt="inpaso.net"
                  title="inpaso.net"
                />

                <ImageBox
                  className="box18"
                  smallImageUrl={"18-small.png"}
                  largeImageUrl={"18-large.png"}
                />
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
                    loading="lazy"
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
