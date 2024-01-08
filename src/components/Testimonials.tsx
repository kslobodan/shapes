import React from "react";
import styles from "./Testimonials.module.scss";
import TitleWithText from "./TitleWithText";

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ marginBottom: "100px" }}>
      <div>
        <TitleWithText title="Your opinion" underTitle="MATTERS TO US" />
      </div>
      <div className={styles.content}>
        <div className={styles.content__box}>
          <div className={styles.box}>
            <div className={styles.text_field1} />
            <div className={styles.ellipse1} />
            <div className={styles.title1}>John Doe</div>
            <div className={styles.text__box1}>
              <div
                className="text"
                style={{ fontSize: "18px", lineHeight: "30px" }}
              >
                Non tristique a massa sed est urna. Amet at diam aliquam et.
                Tellus sit odio iaculis.
              </div>
            </div>
            <div className={styles.image1} />
          </div>
          <div className={styles.box}>
            <div className={styles.text_field2} />
            <div className={styles.ellipse2} />
            <div className={styles.title2}>John Doe</div>
            <div className={styles.text__box2}>
              <div
                className="text"
                style={{ fontSize: "18px", lineHeight: "30px" }}
              >
                Non tristique a massa sed est urna. Amet at diam aliquam et.
                Tellus sit odio iaculis.
              </div>
            </div>
            <div className={styles.image2} />
          </div>
          <div className={styles.box}>
            <div className={styles.text_field1} />
            <div className={styles.ellipse3} />
            <div className={styles.title1}>John Doe</div>
            <div className={styles.text__box1}>
              <div
                className="text"
                style={{ fontSize: "18px", lineHeight: "30px" }}
              >
                Non tristique a massa sed est urna. Amet at diam aliquam et.
                Tellus sit odio iaculis.
              </div>
            </div>
            <div className={styles.image3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
