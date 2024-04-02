import React, { useEffect, useRef } from "react";
import styles from "./Testimonials.module.scss";
import TitleWithText from "./TitleWithText";
import { useTranslation } from "react-i18next";
import { Testimonial } from "../translations/Types";
import { useAppContext } from "../customHooks/useAppContext";

const Testimonials = () => {
  const { smallScreen } = useAppContext();
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) {
      if (!smallScreen) {
        const container = contentRef.current;
        const scrollLeft =
          container.scrollWidth / 2 - container.clientWidth / 2;
        container.scrollLeft = scrollLeft;
      }
    }
  }, [smallScreen]);

  const [translate] = useTranslation("global");

  const testimonials: Testimonial[] =
    translate("testimonials.testimonialList", { returnObjects: true }) || [];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div>
        <TitleWithText
          title={translate("testimonials.titleMobile")}
          underTitle={translate("testimonials.subtitleMobile")}
        />
      </div>
      <div className={styles.content} ref={contentRef}>
        <div className={styles.content__box}>
          {testimonials &&
            testimonials.length === 4 &&
            testimonials.map((testimonial, index) => (
              <div key={index} className={styles.box}>
                <div
                  className={
                    testimonial.odd ? styles.text__field1 : styles.text__field2
                  }
                />
                <div
                  className={
                    testimonial.odd ? styles.ellipse1 : styles.ellipse2
                  }
                />
                <div
                  className={testimonial.odd ? styles.title1 : styles.title2}
                >
                  {testimonial.title}
                </div>
                <div
                  className={
                    testimonial.odd ? styles.sub__title1 : styles.sub__title2
                  }
                >
                  {testimonial.subtitle}
                </div>
                <div
                  className={
                    testimonial.odd ? styles.text__box1 : styles.text__box2
                  }
                >
                  <div
                    className="text"
                    style={{ fontSize: "17px", lineHeight: "25px" }}
                  >
                    {testimonial.text}
                  </div>
                </div>
                <div
                  key={index}
                  className={testimonial.odd ? styles.image1 : styles.image2}
                >
                  <img
                    src={require(`../images/${testimonial.url}`)}
                    alt={testimonial.title + " - " + testimonial.subtitle}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
