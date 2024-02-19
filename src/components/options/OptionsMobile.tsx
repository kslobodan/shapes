import React, { useEffect, useRef } from "react";
import styles from "./OptionsMobile.module.scss";
import { useTranslation } from "react-i18next";
import { Option, OptionMobile } from "../../translations/Types";
import { useAppContext } from "../../customHooks/useAppContext";

const OptionsMobile = () => {
  const [translate] = useTranslation("global");
  const { smallScreen } = useAppContext();
  const middleellipseStyle = {
    position: "relative",
    top: "310px",
    left: 202 / 2 - 137 / 2 - 5 + "px",
  } as const;
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) {
      const container = contentRef.current;
      const scrollLeft = container.scrollWidth / 2 - container.clientWidth / 2;
      container.scrollLeft = scrollLeft;
    }
  }, []);

  const text: string[] =
    translate("options.textMobile", { returnObjects: true }) || [];

  const ellipse: OptionMobile[] =
    translate("options.optionListMobile", { returnObjects: true }) || [];

  return (
    <section
      id="options"
      style={{ position: "relative", marginBottom: "-50px" }}
    >
      <div className="titles__mobile" style={{ marginTop: "25px" }}>
        <div className={styles.title}>
          <h2>{translate("options.title")}</h2>
        </div>
        <div className="title__mobile__green__small">
          <div className={styles.subtitle}>{translate("options.subtitle")}</div>
        </div>
      </div>
      <div className={styles.text}>
        {text.map((row, index) => (
          <div key={index}>{row}</div>
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.content__box} ref={contentRef}>
          <div className={styles.part}>
            <img
              className={styles.svg1}
              src={require(`../../../src/images/Option1.png`)}
              alt=""
            />
            <div
              className={styles.ellipse}
              style={{ position: "absolute", top: "0", left: "0" }}
            />
            <div
              className={styles.circle}
              style={{
                position: "relative",
                top: "80px",
                left: "25px",
              }}
            >
              <div className={styles.circle__text__content}>
                <div className={styles.circle__title}>
                  {ellipse[0].optionTitle.map((row, index) => (
                    <div key={index}>{row}</div>
                  ))}
                </div>
                <div className={styles.circle__text}>
                  {ellipse[0].optionText.map((row, index) => (
                    <div key={index}>{row}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.part2}>
            <img
              className={styles.svg2}
              src={require(`../../../src/images/Option2.png`)}
              alt=""
            />
            <div className={styles.ellipse} style={middleellipseStyle} />
            <div
              className={styles.circle}
              style={{
                position: "relative",
                bottom: "70px",
              }}
            >
              <div className={styles.circle__text__content}>
                <div className={styles.circle__title}>
                  {ellipse[1].optionTitle.map((row, index) => (
                    <div key={index}>{row}</div>
                  ))}
                </div>
                <div className={styles.circle__text}>
                  {ellipse[1].optionText.map((row, index) => (
                    <div key={index}>{row}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.part3}>
            <img
              className={styles.svg3}
              src={require(`../../../src/images/Option3.png`)}
              alt=""
            />
            <div
              className={styles.ellipse}
              style={{ position: "relative", top: "-50px", right: "-56px" }}
            />
            <div
              className={styles.circle}
              style={{
                position: "relative",
                bottom: "80px",
                right: "25px",
              }}
            >
              <div className={styles.circle__text__content}>
                <div className={styles.circle__title}>
                  {ellipse[2].optionTitle.map((row, index) => (
                    <div key={index}>{row}</div>
                  ))}
                </div>
                <div className={styles.circle__text}>
                  {ellipse[2].optionText.map((row, index) => (
                    <div key={index}>{row}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptionsMobile;
