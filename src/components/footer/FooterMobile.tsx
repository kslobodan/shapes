import React, { CSSProperties, ChangeEvent, useRef, useState } from "react";
import styles from "./FooterMobile.module.scss";
import Logo from "./Logo";
import { useTranslation } from "react-i18next";

const inputStyle: CSSProperties = {
  borderWidth: "0px",
  height: "20px",
  textAlign: "start",
  flex: "1",
  fontSize: "14px",
  width: "100%",
};

const textAreaStyle: CSSProperties = {
  marginTop: "10px",
  width: "100%",
  borderWidth: "0px",
  height: "200px",
  textAlign: "left",
  resize: "none",
  overflowY: "auto",
  fontSize: "14px",
};

const textAreaMaxLength = 1000;

export const FooterMobile = () => {
  const useRefMailTitle = useRef<HTMLDivElement>(null);
  const useRefPopup = useRef<HTMLDivElement>(null);
  const [translate] = useTranslation("global");
  const [showEmail, setShowEmail] = useState(false);
  const [footerHeight, setFooterHeight] = useState("380px");
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
      setFooterHeight("700px");
      setBoxHeight("850px");
      setTimeout(() => {
        setEmailFormVisible(true);
        if (useRefMailTitle.current) useRefMailTitle.current.focus();
      }, 400);
    } else {
      setEmailFormVisible(false);
      setBoxHeight("500px");
      setFooterHeight("380px");
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
    if (useRefPopup.current) useRefPopup.current.focus();
  };

  const handleOKClick = () => {
    setPopupVisible(false);
    setName("");
    setEmail("");
    setText("");
    handleShowMail(false);
  };

  return (
    <footer
      id="footer"
      style={{ position: "absolute", zIndex: "100", height: footerHeight }}
    >
      <div className={styles.box} style={{ height: boxHeight }} />
      <div className={styles.content} style={{ height: boxHeight }}>
        {!showEmail && (
          <div className="titles__mobile" style={{ marginTop: "25px" }}>
            <div className={styles.title}>
              <h2>{translate("footer.title")}</h2>
            </div>
            <p className="title__mobile__green__small">
              {translate("footer.subtitle")}
            </p>
          </div>
        )}
        {emailFormVisible && (
          <div
            ref={useRefMailTitle}
            className="titles__mobile"
            style={{ marginTop: "30px" }}
          >
            <div className={styles.mail__title}>
              <div>{translate("email.title")}</div>
            </div>
            <p className="title__mobile__green__small">
              <div className={styles.mail__subtitle}>
                {translate("email.subtitle")}
              </div>
            </p>
          </div>
        )}

        {!showEmail && (
          <div className={styles.social__media}>
            <img
              className={styles.social_button}
              src={require(`../../../src/images/insta.png`)}
              alt="instagram"
            />
            <img
              className={styles.social_button}
              src={require(`../../../src/images/yt.png`)}
              alt="youtube"
            />
            <img
              className={styles.social_button}
              src={require(`../../../src/images/fb.png`)}
              alt="facebook"
            />
            <img
              className={styles.social_button}
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
              <label className={styles.label}>{translate("email.name")}:</label>
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
              <label className={styles.label}>
                {translate("email.email")}:
              </label>
              <input
                type="text"
                className="text"
                style={inputStyle}
                value={email}
                onChange={handleEmailChange}
                maxLength={50}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>
                {translate("email.textMobile")}:
              </label>
              <textarea
                className="text"
                style={textAreaStyle}
                value={text}
                onChange={handleTextChange}
                maxLength={textAreaMaxLength}
              />
            </div>
            <div className={styles.buttons}>
              <button
                className={
                  sendbuttonEnabled ? styles.button : styles.button__disabled
                }
                onClick={handleSendEmail}
                disabled={!sendbuttonEnabled}
              >
                {translate("email.buttonSend")}
              </button>
              {text.length > 0 && (
                <div
                  className={styles.text__length}
                  style={{ marginTop: "-20px" }}
                >
                  {text.length}/{textAreaMaxLength}
                </div>
              )}
              <button
                className={styles.button}
                onClick={() => handleShowMail(false)}
              >
                {translate("email.buttonCancel")}
              </button>
            </div>
          </div>
        )}

        {popupVisible && (
          <div ref={useRefPopup} className={styles.popup}>
            <div className="text">
              <h3>{translate("emailSent.title")}</h3>
              <p>{translate("emailSent.subtitle")}</p>
            </div>
            <button
              className={styles.button}
              onClick={handleOKClick}
              style={{ marginTop: "30px" }}
            >
              {translate("emailSent.okButton")}
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
          <p>{translate("footer.madeBy")}</p>
          <p>{translate("footer.rightsReserved")}</p>
        </div>
      </div>
    </footer>
  );
};
