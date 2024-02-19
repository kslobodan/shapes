import React, { useEffect, useState } from "react";
import styles from "./ThreeMindsMobile.module.scss";
import { useTranslation } from "react-i18next";

const ThreeMindsMobile = () => {
  const [translate] = useTranslation("global");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2500); // Set the interval to match the animation duration

    return () => clearInterval(intervalId);
  }, []);

  const subtitle: string[] =
    translate("threeMinds.subtitleMobile", { returnObjects: true }) || [];

  const sentences = [
    translate("threeMinds.beyond1"),
    translate("threeMinds.beyond2"),
    translate("threeMinds.beyond3"),
  ];

  return (
    <section id="threeMinds">
      <div className="titles__mobile" style={{ marginTop: "25px" }}>
        <div className={styles.title}>
          <h2>{translate("threeMinds.title")}</h2>
        </div>
        <div className="title__mobile__green__small">
          <div className={styles.subtitle}>
            {subtitle.map((row, index) => (
              <div key={index}>{row}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          {sentences.map((text, index) => (
            <div key={index} className={styles.text}>
              {text.split("").map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className={`${styles.letter} ${
                    activeIndex === index
                      ? styles.color__change
                      : styles.element__hidden
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

export default ThreeMindsMobile;
