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

// const largeImageDivStyle: CSSProperties = {
//   position: "relative",
//   top: "-250px",
//   // left: "0",
//   width: "662px",
//   height: "519px",
//   zIndex: "10",
// };

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
    position: "relative",
    marginTop: "-350px",
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
  const [currentImage, setCurrentImage] = useState<number>(0);

  const box: CSSProperties = {
    width: "314px",
    height: "314px",
    // transition: "height 1s, width 1s",
  };

  const firstRowTop = "-992px";
  const secondRowTop = "-715px";
  const thirdRowTop = "-440px";

  const firstColumntLeft = "0px";
  const secondColumnLeft = "200px";
  const thirdColumnLeft = "331px";

  const marginLookup: Record<ExpandType, string[]> = {
    topLeft: [firstRowTop, firstColumntLeft, "645px", "430px"],
    top: [firstRowTop, "270px", "430px", "648px"],
    topRight: [firstRowTop, "546px", "430px", "648px"],
    left: [secondRowTop, firstColumntLeft, "645px", "430px"],
    center: ["-660px", "270px", "430px", "650px"],
    right: ["-660px", "546px", "430px", "650px"],
    bottomLeft: [thirdRowTop, firstColumntLeft, "645px", "430px"],
    bottom: ["-660px", "270px", "430px", "650px"],
    bottomRight: ["-660px", "546px", "430px", "650px"],
  };

  const moveImage = (expandType: ExpandType, id: number) => {
    console.log(expandType);
    setLargeImageDivStyle((prevStyle) => {
      const updatedStyle = {
        ...prevStyle,
        marginTop: marginLookup[expandType][0], // || "-100px"
        marginLeft: marginLookup[expandType][1],
        width: marginLookup[expandType][2],
        height: marginLookup[expandType][3],
      };

      console.log("Updated marginTop:", updatedStyle.marginTop);

      setLargeImageProps((prevProps) => ({
        ...prevProps,
        divStyle: updatedStyle,
        src: require(`../../images/${id}-large.png`),
      }));

      return updatedStyle;
    });
  };

  const showLargeImage = (id: number, expand: boolean) => {
    const image: Image | undefined = imageList
      .flat()
      .find((img) => img.id === id);
    if (expand) {
      console.log("id: " + image?.id + " currentImage: " + currentImage);
      // if (id === currentImage) return;
      // setCurrentImage(id);
      setLargeImageVisible(true);
      if (image != null) moveImage(image.expandType, id);
    } else {
      // setCurrentImage(0);
      // setLargeImageVisible(false);
    }
    // setLargeImageVisible((state) => !state);
    // console.log("id to change: ", id);

    // setLargeImageProps({
    //   divStyle: largeImageDivStyle,
    //   imageStyle: largeImageDivStyle,
    //   src: image ? require(`../../images/${image.big}`) : "",
    //   alt: image ? image.alt : "",
    // });
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
        <div className={styles.portfolio}>
          {imageList.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {row.map((image) => (
                <div
                  key={image.id}
                  style={image.expanded ? boxExpanded : box}
                  // onMouseEnter={() => changeImageSize(image.id, true)}
                  // onMouseLeave={() => changeImageSize(image.id, false)}
                  onMouseEnter={() => showLargeImage(image.id, true)}
                  // onMouseOut={() => showLargeImage(image.id, false)}
                >
                  <img
                    // src={require("../images/02-small.png")}
                    // src={
                    //   image.expanded
                    //     ? require(`../../images/${image.big}`)
                    //     : require(`../../images/${image.small}`)
                    // }
                    src={require(`../../images/${image.small}`)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      // Add any additional styles as needed
                    }}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          ))}
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
