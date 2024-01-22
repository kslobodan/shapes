import React, { CSSProperties, ChangeEvent, useState } from "react";
import styles from "./Footer.module.scss";
import Logo from "./Logo";

const inputStyle: CSSProperties = {
  borderWidth: "0px",
  height: "20px",
  textAlign: "start",
  flex: "1",
  fontSize: "16px",
};

const textAreaStyle: CSSProperties = {
  marginTop: "10px",
  width: "100%",
  borderWidth: "0px",
  height: "200px",
  textAlign: "left",
  resize: "none",
  overflowY: "auto",
  fontSize: "16px",
};

const textAreaMaxLength = 1000;

const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [boxHeight, setBoxHeight] = useState("500px");
  const [logoBottom, setLogoBottom] = useState("100px");
  const [rightsBottom, setRightsBottom] = useState("50px");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [emailFormVisible, setEmailFormVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  const sendbuttonEnabled =
    name.length > 0 && email.length > 0 && text.length > 0;

  const handleShowMail = (show: boolean) => {
    setShowEmail(show);
    if (show) {
      setBoxHeight("650px");
      setTimeout(() => {
        setEmailFormVisible(true);
      }, 400);
    } else {
      setEmailFormVisible(false);
      setBoxHeight("500px");
    }
  };

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue: string = event.target.value;

    if (inputValue.length <= textAreaMaxLength) {
      setText(inputValue);
    }
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value;
    setName(inputValue);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value;
    setEmail(inputValue);
  };

  const handleSendEmail = () => {
    setEmailFormVisible(false);
    setPopupVisible(true);
  };

  const handleOKClick = () => {
    setPopupVisible(false);
    setName("");
    setEmail("");
    setText("");
    handleShowMail(false);
  };

  return (
    <footer id="footer" style={{ position: "absolute", zIndex: "100" }}>
      <div className={styles.box} style={{ height: boxHeight }} />
      <div className={styles.content} style={{ height: boxHeight }}>
        {emailFormVisible && (
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

        {emailFormVisible && (
          <div
            className={` ${styles.email} ${showEmail ? styles.visibleDiv : ""}`}
          >
            <div className={styles.field}>
              <label className={styles.label}>Name:</label>
              <input
                type="email"
                className="text"
                style={inputStyle}
                value={name}
                onChange={handleNameChange}
                maxLength={50}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>E-mail:</label>
              <input
                type="text"
                className="text"
                style={inputStyle}
                value={email}
                onChange={handleEmailChange}
                maxLength={50}
              />
            </div>

            <textarea
              className="text"
              style={textAreaStyle}
              placeholder="Message..."
              value={text}
              onChange={handleTextChange}
              maxLength={textAreaMaxLength}
            />
            <div className={styles.buttons}>
              <button
                className={
                  sendbuttonEnabled ? styles.button : styles.button__disabled
                }
                onClick={handleSendEmail}
                disabled={!sendbuttonEnabled}
              >
                SEND
              </button>
              {text.length > 0 && (
                <div style={{ marginTop: "-10px" }}>
                  {text.length}/{textAreaMaxLength}
                </div>
              )}
              <button
                className={styles.button}
                onClick={() => handleShowMail(false)}
              >
                CANCEL
              </button>
            </div>
          </div>
        )}

        {popupVisible && (
          <div className={styles.popup}>
            <div className="text">
              <h3>Mail successfully sent.</h3>
              <p>Our tim will contact you soon.</p>
            </div>
            <button
              className={styles.button}
              onClick={handleOKClick}
              style={{ marginTop: "30px" }}
            >
              OK
            </button>
          </div>
        )}

        <div
          className={` ${styles.logo} ${showEmail ? styles.rotated : ""}`}
          style={{ position: "absolute", bottom: logoBottom }}
        >
          <Logo />
        </div>
        <div className={styles.small__text} style={{ bottom: rightsBottom }}>
          <p>Made by MAJABO creative agency</p>
          <p>All rights reserved, 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
