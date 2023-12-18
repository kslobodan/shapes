import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section id="about">
      <div className="section__content">
        <div className="titles">
          <h1>This is what we did!</h1>
          <p className="title__green">TILL NOW...</p>
        </div>
        <p className="text" style={{ marginTop: "8vh", marginBottom: "20vh" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </section>
  );
};

export default About;
