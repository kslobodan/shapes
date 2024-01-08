import React, { CSSProperties, useState } from "react";
import styles from "./Portfolio.module.scss";
import TitleWithText from "../TitleWithText";
import Slider from "../Slider";
import { images, text, Image, ExpandType } from "./utils";

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
  const [imageList, setImageList] = useState<Image[][]>(images);
  const [boxExpanded, setBoxExpanded] = useState<CSSProperties>({
    position: "absolute",
    width: "645px",
    height: "430px",
    // transition: "height 1s, width 1s",
  });
  const [largeImageVisible, setLargeImageVisible] = useState<boolean>(false);
  const [largeImageDivStyle, setLargeImageDivStyle] = useState<CSSProperties>({
    position: "absolute",
    // marginTop: "-350px",
    // left: "0",
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

  const [currentId, setCurrentId] = useState<number>(0);

  const box: CSSProperties = {
    width: "314px",
    height: "314px",
    // transition: "height 1s, width 1s",
  };

  const firstTop = "0px";
  const secondTop = "278px";
  const thirdTop = "553px";
  const fourthTop = "332px";

  const firstLeft = "0px";
  const secondLeft = "276px";
  const thirdLeft = "546px";

  const size1 = "430px";
  const size2 = "645px";
  const size3 = "648px";
  const size4 = "650px";

  const marginLookup: Record<ExpandType, string[]> = {
    topLeft: [firstTop, firstLeft, size2, size1],
    top: [firstTop, secondLeft, size1, size3],
    topRight: [firstTop, thirdLeft, size1, size3],
    left: [secondTop, firstLeft, size2, size1],
    center: [fourthTop, secondLeft, size1, size4],
    right: [fourthTop, thirdLeft, size1, size4],
    bottomLeft: [thirdTop, firstLeft, size2, size1],
    bottom: [fourthTop, secondLeft, size1, size4],
    bottomRight: [fourthTop, thirdLeft, size1, size4],
  };

  const moveImage = (expandType: ExpandType, id: number) => {
    if (currentId === id) return;
    setCurrentId(id);
    console.log(expandType, id);
    setLargeImageDivStyle((prevStyle) => {
      const updatedStyle = {
        ...prevStyle,
        top: marginLookup[expandType][0], // || "-100px"
        left: marginLookup[expandType][1],
        width: marginLookup[expandType][2],
        height: marginLookup[expandType][3],
        zIndex: "10",
      };

      setLargeImageProps((prevProps) => ({
        ...prevProps,
        divStyle: updatedStyle,
        src: require(`../../images/${id}-large.png`),
      }));

      return updatedStyle;
    });
  };

  const showLargeImage = (id: number) => {
    const image: Image | undefined = imageList
      .flat()
      .find((img) => img.id === id);
    setLargeImageVisible(true);
    if (image != null) moveImage(image.expandType, id);
  };

  return (
    <section
      id="portfolio"
      style={{ marginTop: "0px", marginBottom: "-100px" }}
    >
      <TitleWithText
        title="This is what we did!"
        underTitle="TILL NOW..."
        text={text}
      />
      {/* <Slider /> */}
      <div className="section__content">
        <div
          className={styles.content}
          onMouseLeave={() => setLargeImageVisible(false)}
        >
          <div className={styles.portfolio}>
            {imageList.map((row, rowIndex) => (
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
      </div>
    </section>
  );
};

export default Portfolio;
