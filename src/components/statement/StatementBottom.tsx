import styles from "./Statement.module.scss";
const StatementBottom = () => {
  return (
    <>
      <div className={styles.bottom}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="370"
          height="183"
          viewBox="0 0 370 183"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.25347e-05 183L34.1366 149.218L150.477 34.0866L184.613 0.304633L218.765 34.0713L335.156 149.151L369.308 182.917L301.02 182.933L184.628 67.8533L68.2884 182.985L9.25347e-05 183Z"
            fill="#EDEDED"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.000732422 57.6719L10.6067 47.0659L47.0662 10.6064L57.6728 -0.000205994L68.2794 10.6064L104.739 47.0659L115.345 57.6719H94.1317L57.6728 21.213L21.2139 57.6719H0.000732422Z"
            fill="#D0D0D0"
          />
        </svg>
      </div>
    </>
  );
};

export default StatementBottom;
