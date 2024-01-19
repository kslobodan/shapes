import React, { useState } from "react";
import styles from "./Footer.module.scss";
import Logo from "./Logo";

const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [boxHeight, setBoxHeight] = useState("500px");
  const [logoBottom, setLogoBottom] = useState("100px");
  const [rightsBottom, setRightsBottom] = useState("50px");
  const currentYear = new Date().getFullYear();

  const handleShowMail = (show: boolean) => {
    setShowEmail(show);
    if (show) {
      setBoxHeight("700px");
    } else {
      setBoxHeight("500px");
    }
  };

  return (
    <footer id="footer" style={{ position: "absolute", zIndex: "100" }}>
      <div className={styles.box} style={{ height: boxHeight }} />
      <div className={styles.content} style={{ height: boxHeight }}>
        {showEmail && (
          <div className="titles" style={{ marginTop: "20px" }}>
            <h2>Be curious, follow and contact us</h2>
            <p className="title__green__small">ON SOCIAL MEDIA</p>
          </div>
        )}
        {!showEmail && (
          <div className="titles" style={{ marginTop: "30px" }}>
            <h2>Feel free to send us a message,</h2>
            <p className="title__green__small">BECAUSE WE ARE HERE FOR YOU</p>
          </div>
        )}

        {!showEmail && (
          <div className={styles.social__media}>
            <img
              src={require(`../../../src/images/insta.png`)}
              alt="instagram"
            />
            <img src={require(`../../../src/images/yt.png`)} alt="youtube" />
            <img src={require(`../../../src/images/fb.png`)} alt="facebook" />
            <img
              src={require(`../../../src/images/message.png`)}
              alt="email"
              onClick={() => handleShowMail(true)}
            />
          </div>
        )}

        {showEmail && (
          <div className={styles.email}>
            <div className={styles.field}>
              <label className={styles.label}>Name:</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>E-mail:</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Mesage:</label>
              <input type="text" className={styles.input} />
            </div>
            <input type="text" className={styles.text__area} />
            <div className={styles.buttons}>
              <button
                className={styles.button}
                onClick={() => handleShowMail(false)}
              >
                SEND
              </button>
              <button
                className={styles.button}
                onClick={() => handleShowMail(false)}
              >
                CANCEL
              </button>
            </div>
          </div>
        )}

        <div
          className={styles.logo}
          style={{ position: "absolute", bottom: logoBottom }}
        >
          <Logo />
        </div>
        <div className={styles.small__text} style={{ bottom: rightsBottom }}>
          <p>Made by MAJABO creative agency</p>
          <p>All rights reserved, {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
