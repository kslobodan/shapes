import React from "react";
import styles from "./Options.module.scss";
import TitleWithText from "./TitleWithText";
import { relative } from "path";

const Options = () => {
  const middleElipseStyle = {
    position: "absolute",
    bottom: "0",
    left: 202 / 2 - 137 / 2 - 5 + "px",
  } as const;

  const text = `We blend design, code, and copywriting, turning imperfections into innovative authentic brand stories.\n 
  With MAJABO your brand will transcend boundaries and define a compelling narrative that deeply resonates with your target audience.`;

  return (
    <section id="options" style={{ position: "relative" }}>
      <div style={{ marginBottom: "-160px" }}>
        <TitleWithText
          title="Be honest with yourself and"
          underTitle="SELECT YOUR MAJABO"
          text={text}
          lineHeight="20px"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.content__box}>
          <div className={styles.part}>
            <div className={styles.group}>
              <div className={styles.svg1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="69"
                  viewBox="0 0 80 69"
                  fill="none"
                >
                  <path
                    d="M0.5 0V29.5309H30.0309V0H0.5ZM39.8746 0V9.84364H79.2491V0H39.8746ZM39.8746 19.6873V29.5309H69.4055V19.6873H39.8746ZM0.5 39.3746V68.9055H30.0309V39.3746H0.5ZM39.8746 39.3746V49.2182H79.2491V39.3746H39.8746ZM39.8746 59.0619V68.9055H69.4055V59.0619H39.8746Z"
                    fill="#5F5F5F"
                  />
                </svg>
              </div>
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
              >
                <h4 className={styles.circle__title}>Wizard of text</h4>
                <div className={styles.circle__text__content}>
                  <div className={styles.circle__text}>
                    Shaping words that do wonders for your brand.
                  </div>
                </div>
              </div>
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
              <div className={styles.svg2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="69"
                  viewBox="0 0 80 69"
                  fill="none"
                >
                  <path
                    d="M0.5 0V68.9055H79.2491V59.0619H10.3436V0H0.5ZM49.7182 0V49.2182H69.4055V0H49.7182ZM20.1873 19.6873V49.2182H39.8746V19.6873H20.1873Z"
                    fill="#5F5F5F"
                  />
                </svg>
              </div>
              <div className={styles.elipse} style={middleElipseStyle} />
              <div
                className={styles.circle}
                style={{
                  position: "absolute",
                  bottom: "142px",
                  marginRight: "53px",
                }}
              >
                <h4 className={styles.circle__title2}>Master of code</h4>
                <div className={styles.circle__text__content2}>
                  <div className={styles.circle__text}>
                    Turning ideas into seamless digital experiences.
                  </div>
                </div>
              </div>

              <div className={styles.animation} />
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.group}>
              <div className={styles.svg3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="69"
                  viewBox="0 0 70 69"
                  fill="none"
                >
                  <path
                    d="M0.5 0V25.8176H26.3176V0H0.5ZM43.5294 0V25.8176H69.347V0H43.5294ZM0.5 43.0294V68.847H26.3176V43.0294H0.5ZM43.5294 43.0294V68.847H69.347V43.0294H43.5294Z"
                    fill="#5F5F5F"
                  />
                </svg>
              </div>
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
                  // overflow: "hidden",
                }}
              >
                <h4 className={styles.circle__title}>Builder of design</h4>
                <div className={styles.circle__text__content}>
                  <div className={styles.circle__text}>
                    Crafting visuals that make your brand unforgettable.
                  </div>
                </div>
              </div>
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
