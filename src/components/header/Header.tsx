import React from "react";
import styles from "./Header.module.scss";
import Elipse from "./Elipse";
import Logo from "./Logo";

const Header = () => {
  return (
    <section
      id="header"
      style={{ paddingBottom: "50px", position: "relative" }}
    >
      <div className={styles.box}></div>
      <Elipse />
      <div className={styles.logo}>
        <Logo />
      </div>
    </section>
  );
};

export default Header;
