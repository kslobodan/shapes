import React from "react";
import styles from "./TitleWithText.module.scss";

interface TitleWithTextProps {
  title: string;
  underTitle: string;
  text?: string;
  lineHeight?: string;
}

const TitleWithText: React.FC<TitleWithTextProps> = ({
  title,
  underTitle,
  text,
  lineHeight,
}) => {
  return (
    <div>
      <div className="titles">
        <h1>{title}</h1>
        <p className="title__green">{underTitle}</p>
      </div>
      {text && <pre className={`text ${styles.text__style}`}>{text}</pre>}
    </div>
  );
};

export default TitleWithText;
