import React, { CSSProperties, ChangeEvent, useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import Logo from "./Logo";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../customHooks/useAppContext";

const textAreaMaxLength = 1000;

export const Footer = () => {
  const { screenSize } = useAppContext();

  useEffect(() => {
    console.log("testing: ", screenSize);
    setDefaultBoxHeight();
  }, [screenSize]);

  const setDefaultBoxHeight = () => {
    if (screenSize === "xx-large-screen") setBoxHeight("500px");
    else if (screenSize === "x-large-screen") setBoxHeight("420px");
    else if (screenSize === "large-screen") setBoxHeight("350px");
    else if (screenSize === "medium-screen") setBoxHeight("290px");
  };

  const setEmailBoxHeight = () => {
    if (screenSize === "xx-large-screen") setBoxHeight("650px");
    else if (screenSize === "x-large-screen") setBoxHeight("550px");
    else if (screenSize === "large-screen") setBoxHeight("450px");
    else if (screenSize === "medium-screen") setBoxHeight("370px");
  };

  const [translate] = useTranslation("global");
  const [showEmail, setShowEmail] = useState(false);
  const [boxHeight, setBoxHeight] = useState("500px");
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
      setEmailBoxHeight();
      setTimeout(() => {
        setEmailFormVisible(true);
      }, 400);
    } else {
      setEmailFormVisible(false);
      setDefaultBoxHeight();
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
        {!showEmail && (
          <div className={`titles ${styles.titles__style}`}>
            <h2>{translate("footer.title")}</h2>
            <p className="title__green__small">
              {translate("footer.subtitle")}
            </p>
          </div>
        )}
        {emailFormVisible && (
          <div className={`titles ${styles.titles__email__style}`}>
            <h2>{translate("email.title")}</h2>
            <p className="title__green__small">{translate("email.subtitle")}</p>
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
              <label className={styles.label}>{translate("email.name")}:</label>
              <input
                type="text"
                className={`text ${styles.input}`}
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
                type="email"
                className={`text ${styles.input}`}
                value={email}
                onChange={handleEmailChange}
                maxLength={50}
              />
            </div>

            <textarea
              className={`text  ${styles.text__area}`}
              placeholder={translate("email.text")}
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
                {translate("email.buttonSend")}
              </button>
              {text.length > 0 && (
                <div className={styles.text__count}>
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
          <div className={styles.popup}>
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
          style={{ position: "absolute" }}
        >
          <Logo />
        </div>
        <div className={styles.small__text}>
          <p>{translate("footer.madeBy")}</p>
          <p>{translate("footer.rightsReserved")}</p>
        </div>
      </div>
    </footer>
  );
};
