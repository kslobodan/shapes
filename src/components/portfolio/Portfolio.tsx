import React, { CSSProperties, useState } from "react";
import styles from "./Portfolio.module.scss";
import TitleWithText from "../TitleWithText";
import { images, Image, ExpandType, smallSize, largeSize } from "./utils";
import { useTranslation } from "react-i18next";

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

const box: CSSProperties = {
  width: "314px",
  height: "314px",
};

const boxExpanded: CSSProperties = {
  position: "absolute",
  width: "645px",
  height: "430px",
};

const Portfolio = () => {
  const [translate] = useTranslation("global");
  const [largeImageVisible, setLargeImageVisible] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(0);
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

  const text: string[] =
    translate("portfolio.text", { returnObjects: true }) || [];
  const splitedText = text.join("\n");

  const kairon: string[] =
    translate("portfolio.kairon", { returnObjects: true }) || [];

  const moveImage = (expandType: ExpandType, id: number) => {
    if (currentId === id) return;
    setCurrentId(id);
    console.log(expandType, id);

    setLargeImageDivStyle((prevStyle) => {
      const updatedStyle = {
        ...prevStyle,
        top: smallSize[expandType][0], // || "-100px"
        left: smallSize[expandType][1],
        width: smallSize[expandType][2],
        height: smallSize[expandType][3],
        zIndex: "10",
        transition: "all 0.5s, 0.5s",
      };

      setLargeImageProps((prevProps) => ({
        ...prevProps,
        divStyle: updatedStyle,
        src: require(`../../images/${id}-large.png`),
      }));

      return updatedStyle;
    });

    setLargeImageDivStyle((prevStyle) => {
      const updatedStyle = {
        ...prevStyle,
        top: largeSize[expandType][0], // || "-100px"
        left: largeSize[expandType][1],
        width: largeSize[expandType][2],
        height: largeSize[expandType][3],
        zIndex: "10",
        // transition: "all 0.5s, 0.5s",
      };

      setLargeImageProps((prevProps) => ({
        ...prevProps,
        divStyle: updatedStyle,
      }));

      return updatedStyle;
    });
  };

  const showLargeImage = (id: number) => {
    const image: Image | undefined = images.flat().find((img) => img.id === id);
    setLargeImageVisible(true);
    if (image != null) moveImage(image.expandType, id);
  };

  return (
    <section
      id="portfolio"
      style={{ marginTop: "-20px", marginBottom: "-100px" }}
    >
      <TitleWithText
        title={translate("portfolio.title")}
        underTitle={translate("portfolio.subtitle")}
        text={splitedText}
        lineHeight="40px"
      />
      <div className="section__content">
        <div
          className={styles.content}
          onMouseLeave={() => setLargeImageVisible(false)}
        >
          <div className={styles.portfolio}>
            {images.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.row}>
                {row.map((image) => (
                  <div
                    key={image.id}
                    style={image.expanded ? boxExpanded : box}
                    onMouseEnter={() => showLargeImage(image.id)}
                  >
                    <img
                      // src={require("../images/02-small.png")}
                      src={require(`../../images/${image.small}`)}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
            ))}
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
