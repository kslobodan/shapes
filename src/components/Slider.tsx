import React, { useState } from "react";
import styles from "./Slider.module.scss";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/250/150/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/250/150/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/250/150/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1018/250/150/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/250/150/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/250/150/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1018/250/150/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/250/150/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
];

const Slider = () => {
  return (
    <section id="slider">
      <div className={styles.content}>
        <div className={styles.gallery}>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            slideOnThumbnailOver={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;
