import React, { useEffect, useState } from "react";
import styles from "./ThreeMinds.module.scss";
import { useTranslation } from "react-i18next";

const ThreeMinds = () => {
  const [translate] = useTranslation("global");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 1500); // Set the interval to match the animation duration

    return () => clearInterval(intervalId);
  }, []);

  const divs = [
    translate("threeMinds.beyond1"),
    translate("threeMinds.beyond2"),
    translate("threeMinds.beyond3"),
  ];

  return (
    <section id="threeMinds">
      <div className="titles__small">
        <h2>{translate("threeMinds.title")}</h2>
        <p className="title__green__small">
          {translate("threeMinds.subtitle")}
        </p>
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          {divs.map((text, index) => (
            <div key={index} className={styles.text}>
              {text.split("").map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className={`${styles.letter} ${
                    activeIndex === index ? styles.color__change : ""
                  }`}
                  style={{ animationDelay: `${letterIndex * 30}ms` }}
                >
                  {letter}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeMinds;
