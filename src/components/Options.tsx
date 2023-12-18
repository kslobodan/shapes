import React from "react";
import styles from "./Options.module.scss";

const Options = () => {
  const middleElipseStyle = {
    position: "absolute",
    bottom: "0",
    left: 202 / 2 - 137 / 2 + "px",
  } as const;

  return (
    <section id="options">
      <div className={styles.content}>
        <div className={styles.content__box}>
          <div className={styles.part}>
            <div className={styles.group}>
              <div
                className={styles.elipse}
                style={{ position: "absolute", top: "0", left: "0" }}
              />
              <div
                className={styles.circle}
                style={{
                  position: "relative",
                  top: "142px",
                  marginLeft: "53px",
                }}
              />
              <div className={styles.animation} />
            </div>
            <div className={styles.frame}>
              <div className={styles.title} />
              <div className={styles.text} />
            </div>
          </div>

          <div className={styles.part2}>
            <div className={styles.frame2}>
              <div className={styles.title} />
              <div className={styles.text} />
            </div>
            <div className={styles.group}>
              <div className={styles.circle} />
              <div className={styles.elipse} style={middleElipseStyle} />

              <div className={styles.animation} />
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.group}>
              <div
                className={styles.elipse}
                style={{ position: "absolute", top: "0", right: "0" }}
              />
              <div
                className={styles.circle}
                style={{
                  position: "relative",
                  top: "142px",
                  marginRight: "53px",
                }}
              />
              <div className={styles.animation} />
            </div>
            <div className={styles.frame}>
              <div className={styles.title} />
              <div className={styles.text} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Options;
