import React from "react";

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
      {text && (
        <pre
          className="text"
          style={{
            marginTop: "8vh",
            marginBottom: "20vh",
            lineHeight: lineHeight,
            textAlign: "center",
          }}
        >
          {text}
        </pre>
      )}
    </div>
  );
};

export default TitleWithText;
