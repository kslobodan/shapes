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

  const firstTopSmall = "0px";
  const secondTopSmall = "334px";
  const thirdTopSmall = "668px";
  const fourthTopSmall = "668px";

  const firstLeftSmall = "0px";
  const secondLeftSmall = "331px";
  const thirdLeftSmall = "662px";

  const size1Small = "314px";

  const smallLookup: Record<ExpandType, string[]> = {
    topLeft: [firstTopSmall, firstLeftSmall, size1Small, size1Small],
    top: [firstTopSmall, secondLeftSmall, size1Small, size1Small],
    topRight: [firstTopSmall, thirdLeftSmall, size1Small, size1Small],
    left: [secondTopSmall, firstLeftSmall, size1Small, size1Small],
    center: [fourthTopSmall, secondLeftSmall, size1Small, size1Small],
    right: [fourthTopSmall, thirdLeftSmall, size1Small, size1Small],
    bottomLeft: [thirdTopSmall, firstLeftSmall, size1Small, size1Small],
    bottom: [fourthTopSmall, secondLeftSmall, size1Small, size1Small],
    bottomRight: [fourthTopSmall, thirdLeftSmall, size1Small, size1Small],
  };

  const firstTopLarge = "0px";
  const secondTopLarge = "278px";
  const thirdTopLarge = "553px";
  const fourthTopLarge = "332px";

  const firstLeftLarge = "0px";
  const secondLeftLarge = "276px";
  const thirdLeftLarge = "546px";

  const size1Large = "430px";
  const size2Large = "645px";
  const size3Large = "648px";
  const size4Large = "650px";

  const largeLookup: Record<ExpandType, string[]> = {
    topLeft: [firstTopLarge, firstLeftLarge, size2Large, size1Large],
    top: [firstTopLarge, secondLeftLarge, size1Large, size3Large],
    topRight: [firstTopLarge, thirdLeftLarge, size1Large, size3Large],
    left: [secondTopLarge, firstLeftLarge, size2Large, size1Large],
    center: [fourthTopLarge, secondLeftLarge, size1Large, size4Large],
    right: [fourthTopLarge, thirdLeftLarge, size1Large, size4Large],
    bottomLeft: [thirdTopLarge, firstLeftLarge, size2Large, size1Large],
    bottom: [fourthTopLarge, secondLeftLarge, size1Large, size4Large],
    bottomRight: [fourthTopLarge, thirdLeftLarge, size1Large, size4Large],
  };

  const moveImage = (expandType: ExpandType, id: number) => {
    if (currentId === id) return;
    setCurrentId(id);
    console.log(expandType, id);

    setLargeImageDivStyle((prevStyle) => {
      const updatedStyle = {
        ...prevStyle,
        top: smallLookup[expandType][0], // || "-100px"
        left: smallLookup[expandType][1],
        width: smallLookup[expandType][2],
        height: smallLookup[expandType][3],
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
        top: largeLookup[expandType][0], // || "-100px"
        left: largeLookup[expandType][1],
        width: largeLookup[expandType][2],
        height: largeLookup[expandType][3],
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
