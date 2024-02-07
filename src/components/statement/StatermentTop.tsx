import styles from "./Statement.module.scss";

const StatermentTop = () => {
  return (
    <>
      <div className={styles.top}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="370"
          height="185"
          viewBox="0 0 370 185"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.90157e-05 0.000122081L33.9522 33.9674L150.661 150.728L184.613 184.695L218.58 150.743L335.341 34.0349L369.308 0.0827505L301.389 0.0675543L184.628 116.776L67.9196 0.0153183L4.90157e-05 0.000122081Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.000732422 0L10.6067 10.6059L47.0662 47.0655L57.6728 57.6721L68.2794 47.0655L104.739 10.6059L115.345 0H94.1317L57.6728 36.4589L21.2139 0H0.000732422Z"
            fill="#D0D0D0"
          />
        </svg>
      </div>
    </>
  );
};

export default StatermentTop;
