import React from "react";
import styles from "./Footer.module.scss";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { LiaYoutube } from "react-icons/lia";

const Footer = () => {
  return (
    <footer id="footer">
      <div className={styles.box} />
      <div className={styles.content}>
        <div className="titles" style={{ marginTop: "70px" }}>
          <h3>Follow and contact us</h3>
          <p className="title__green">ON SOCIAL MEDIA</p>
        </div>
        <div className={styles.social__media}>
          <CiInstagram />
          <CiTwitter />
          <LiaYoutube />
        </div>
        <div className={styles.small__text}>
          <p>Made by SHAPES agency</p>
          <p>All rights reserved, 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
