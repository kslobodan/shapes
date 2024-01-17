import React from "react";
import styles from "./Statement.module.scss";

const Statement = () => {
  return (
    <section style={{ marginTop: "150px" }}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            At MAJABO, we he­lp your brand shine. We build standout identitie­s,
            modern websites, and accurate­ digital campaigns.We­'re not just a
            marketing agency. We­'re your accountable partner! We say, it’s ­all
            about understanding your vision, lifting your brand, sharing your
            story, and delivering results you can me­asure.
          </p>
        </div>
        <div className={styles.top}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="370"
            height="185"
            viewBox="0 0 370 185"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.90157e-05 0.000122081L33.9522 33.9674L150.661 150.728L184.613 184.695L218.58 150.743L335.341 34.0349L369.308 0.0827505L301.389 0.0675543L184.628 116.776L67.9196 0.0153183L4.90157e-05 0.000122081Z"
              fill="#EDEDED"
            />
          </svg>
        </div>
        <div className={styles.middle}>
          <div className={styles.title1}>
            <h2>The future belongs to those</h2>
            <h2>who believe in the beauty of their dreams.</h2>
          </div>
          <div className={styles.title2}>
            <p className="title__green__small">ELEANOR ROOSEVELT</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="370"
            height="183"
            viewBox="0 0 370 183"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.25347e-05 183L34.1366 149.218L150.477 34.0866L184.613 0.304633L218.765 34.0713L335.156 149.151L369.308 182.917L301.02 182.933L184.628 67.8533L68.2884 182.985L9.25347e-05 183Z"
              fill="#EDEDED"
            />
          </svg>
        </div>
        <div className={styles.pointer__top}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="116"
            height="58"
            viewBox="0 0 116 58"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.000732422 0L10.6067 10.6059L47.0662 47.0655L57.6728 57.6721L68.2794 47.0655L104.739 10.6059L115.345 0H94.1317L57.6728 36.4589L21.2139 0H0.000732422Z"
              fill="#D0D0D0"
            />
          </svg>
        </div>
        <div className={styles.pointer__bottom}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="116"
            height="58"
            viewBox="0 0 116 58"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.000732422 57.6719L10.6067 47.0659L47.0662 10.6064L57.6728 -0.000205994L68.2794 10.6064L104.739 47.0659L115.345 57.6719H94.1317L57.6728 21.213L21.2139 57.6719H0.000732422Z"
              fill="#D0D0D0"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Statement;
