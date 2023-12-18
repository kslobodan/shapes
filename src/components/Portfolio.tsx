import React from "react";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <section id="portfolio">
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
