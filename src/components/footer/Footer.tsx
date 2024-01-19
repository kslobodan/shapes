import React from "react";
import styles from "./Footer.module.scss";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className={styles.box} />
      <div className={styles.content}>
        <div className="titles" style={{ marginTop: "30px" }}>
          <h2>Be curious, follow and contact us</h2>
          <p className="title__green__small">ON SOCIAL MEDIA</p>
        </div>
        <div className={styles.social__media}>
          <img src={require(`../../../src/images/insta.png`)} alt="instagram" />
          <img src={require(`../../../src/images/yt.png`)} alt="youtube" />
          <img src={require(`../../../src/images/fb.png`)} alt="facebook" />
          <img src={require(`../../../src/images/message.png`)} alt="email" />
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.small__text}>
          <p>Made by MAJABO creative agency</p>
          <p>All rights reserved, {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
