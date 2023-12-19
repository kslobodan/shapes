import React from "react";

interface TitleWithTextProps {
  title: string;
  underTitle: string;
  text: string;
}

const TitleWithText: React.FC<TitleWithTextProps> = ({
  title,
  underTitle,
  text,
}) => {
  return (
    <div className="section__content">
      <div className="titles">
        <h1>{title}</h1>
        <p className="title__green">{underTitle}</p>
      </div>
      <p className="text" style={{ marginTop: "8vh", marginBottom: "20vh" }}>
        {text}
      </p>
    </div>
  );
};

export default TitleWithText;
