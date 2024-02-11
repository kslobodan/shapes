import React, { useEffect, useRef } from "react";
import styles from "./OptionsMobile.module.scss";
import TitleWithText from "../TitleWithText";
import { useTranslation } from "react-i18next";
import { Option, OptionMobile } from "../../translations/Types";

const OptionsMobile = () => {
  const [translate] = useTranslation("global");
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
    translate("options.text", { returnObjects: true }) || [];
  const splitedText = text.join("\n");

  const ellipse: OptionMobile[] =
    translate("options.optionListMobile", { returnObjects: true }) || [];

  console.log(ellipse[0].optionTitle);

  return (
    <section
      id="options"
      style={{ position: "relative", marginBottom: "-50px" }}
    >
      <div style={{ marginBottom: "-160px" }}>
        <TitleWithText
          title={translate("options.title")}
          underTitle={translate("options.subtitle")}
          text={splitedText}
          lineHeight="40px"
        />
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
                // marginRight: "53px",
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
