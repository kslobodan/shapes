import React from "react";
import styles from "./Portfolio.module.scss";
import TitleWithText from "./TitleWithText";
import Slider from "./Slider";

const Portfolio = () => {
  const text = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only
  five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with
  the release of Letraset sheets containing Lorem Ipsum passages, and
  more recently with desktop publishing software like Aldus PageMaker
  including versions of Lorem Ipsum.`;

  return (
    <section id="portfolio" style={{ marginTop: "100px" }}>
      <TitleWithText
        title="This is what we did!"
        underTitle="TILL NOW..."
        text={text}
      />
      {/* <Slider /> */}
      <div className="section__content">
        <div className={styles.portfolio}>
          <div className={styles.row}>
            <div className={styles.box1}></div>
            <div className={styles.box2}></div>
            <div className={styles.box3}></div>
          </div>
          <div className={styles.row}>
            <div className={styles.box1}></div>
            <div className={styles.box2}></div>
            <div className={styles.box3}></div>
          </div>
          <div className={styles.row}>
            <div className={styles.box1}></div>
            <div className={styles.box2}></div>
            <div className={styles.box3}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
