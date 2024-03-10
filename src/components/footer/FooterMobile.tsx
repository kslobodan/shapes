import React, { CSSProperties, ChangeEvent, useRef, useState } from "react";
import styles from "./FooterMobile.module.scss";
import Logo from "./Logo";
import { useTranslation } from "react-i18next";

const textAreaMaxLength = 1000;

export const FooterMobile = () => {
  const useRefMailTitle = useRef<HTMLDivElement>(null);
  const useRefPopup = useRef<HTMLDivElement>(null);
  const [translate] = useTranslation("global");
  const [showEmail, setShowEmail] = useState(false);
  const [emailShown, setEmailShown] = useState(false);
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
      setEmailShown(true);
      setTimeout(() => {
        setEmailFormVisible(true);
        if (useRefMailTitle.current) useRefMailTitle.current.focus();
      }, 400);
    } else {
      setEmailFormVisible(false);
      clearFields();
      setEmailShown(false);
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

  const clearFields = () => {
    setName("");
    setEmail("");
    setText("");
  };

  const handleOKClick = () => {
    setPopupVisible(false);
    clearFields();
    handleShowMail(false);
  };

  return (
    <footer
      id="footer"
      className={
        emailShown ? styles.footer__email : styles.footer___without__email
      }
    >
      <div className={styles.box} />
      <div className={styles.content}>
        {!showEmail && (
          <div className={`titles__mobile ${styles.titles}`}>
            <div className={styles.title}>
              <h2>{translate("footer.title")}</h2>
            </div>
            <p className="title__mobile__green__small">
              <div className={styles.mail__subtitle}>
                {translate("footer.subtitle")}
              </div>
            </p>
          </div>
        )}
        {emailFormVisible && (
          <div
            ref={useRefMailTitle}
            className={`titles__mobile ${styles.titles}`}
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
                className={`text ${styles.input__style}`}
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
                className={`text ${styles.input__style}`}
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
                className={`text ${styles.text__area}`}
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

        <div className={` ${styles.logo} ${showEmail ? styles.rotated : ""}`}>
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
