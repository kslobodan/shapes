import React from "react";
import styles from "./Footer.module.scss";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { LiaYoutube } from "react-icons/lia";
import Insta from "./Insta";
import Tube from "./Tube";
import Face from "./Face";
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
          <Insta />
          <Tube />
          <Face />
          {/* <CiInstagram />
          <CiTwitter />
          <LiaYoutube /> */}
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
