import React, { useState } from "react";
import styles from "./Portfolio.module.scss";

interface ImageBoxProps {
  smallImageUrl: string;
  largeImageUrl: string;
  className: string;
  alt?: string;
  title?: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({
  smallImageUrl,
  largeImageUrl,
  className,
  alt,
  title,
}) => {
  const [isHovered, setIsHovered] = useState(true);

  return (
    <div
      className={`${styles[className]}`}
      onMouseEnter={() => {
        setIsHovered(false);
      }}
      onMouseLeave={() => {
        setIsHovered(true);
      }}
    >
      <img
        src={
          isHovered
            ? require(`../../images/${smallImageUrl}`)
            : require(`../../images/${largeImageUrl}`)
        }
        className={styles.img__style}
        alt={alt}
        title={title}
      />
    </div>
  );
};

export default ImageBox;
