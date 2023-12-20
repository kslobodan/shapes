import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <section
      id="header"
      style={{ paddingBottom: "50px", position: "relative" }}
    >
      <div className={styles.box}></div>
      <div className={styles.elipse}></div>
      <div className={styles.shape1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="166"
          height="119"
          viewBox="0 0 166 119"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M83.5998 0C107.654 0 128.35 14.3735 137.569 35H120.53C112.66 22.9575 99.0594 15 83.5998 15C59.2805 15 39.5605 34.6916 39.5143 59H24.5143C24.5604 26.4073 50.9962 0 83.5998 0ZM29.5539 83C38.7349 103.718 59.4795 118.171 83.5998 118.171C116.232 118.171 142.685 91.7176 142.685 59.0856L142.685 59H127.685L127.685 59.0856C127.685 83.4333 107.948 103.171 83.5998 103.171C68.067 103.171 54.4105 95.1382 46.5579 83H29.5539Z"
            fill="white"
          />
          <rect
            x="166"
            y="51"
            width="15"
            height="165.314"
            transform="rotate(90 166 51)"
            fill="#C3D400"
          />
        </svg>
      </div>
    </section>
  );
};

export default Header;
