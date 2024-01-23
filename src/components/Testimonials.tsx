import React from "react";
import styles from "./Testimonials.module.scss";
import TitleWithText from "./TitleWithText";

const persons = [
  {
    url: "person1.png",
    odd: true,
    title: "Marina Ćirić",
    subTitle: "Physical Therapist",
    text: "They were able to bring my vision to life in a way that I never could have imagined. Their approach to design truly made my brand stand out.",
  },
  {
    url: "person2.png",
    odd: false,
    title: "Robert Wilson",
    subTitle: "Financial Manager",
    text: "Their expertise and attention to detail transformed my online presence into something remarkable. I cannot recommend Majabo enough.",
  },
  {
    url: "person3.png",
    odd: true,
    title: "Sofija Blažić",
    subTitle: "Dietitian and Nutritionist",
    text: "If you are looking for reliable and quality digital marketing services, look no further than Majabo. They will exceed your expectations every time!",
  },
  {
    url: "person4.png",
    odd: false,
    title: "James Anderson",
    subTitle: "Accountant",
    text: "I highly recommend Majabo! Their work speaks for itself and I am grateful to have the opportunity to work with such a talented and creative team.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      style={{ marginBottom: "150px", marginTop: "150px" }}
    >
      <div>
        <TitleWithText title="Your opinion" underTitle="MATTERS TO US" />
      </div>
      <div className={styles.content}>
        <div className={styles.content__box}>
          {persons.map((person, index) => (
            <div key={index} className={styles.box}>
              <div
                className={
                  person.odd ? styles.text__field1 : styles.text__field2
                }
              />
              <div className={person.odd ? styles.ellipse1 : styles.ellipse2} />
              <div className={person.odd ? styles.title1 : styles.title2}>
                {person.title}
              </div>
              <div
                className={person.odd ? styles.sub__title1 : styles.sub__title2}
              >
                {person.subTitle}
              </div>
              <div
                className={person.odd ? styles.text__box1 : styles.text__box2}
              >
                <div
                  className="text"
                  style={{ fontSize: "17px", lineHeight: "25px" }}
                >
                  {person.text}
                </div>
              </div>
              <div
                key={index}
                className={person.odd ? styles.image1 : styles.image2}
                style={{
                  background: `url(${require(`../images/${person.url}`)}), lightgray -9px 0px / 158.974% 100% no-repeat`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
