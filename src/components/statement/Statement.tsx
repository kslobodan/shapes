import styles from "./Statement.module.scss";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../customHooks/useAppContext";
import StatermentTop from "./StatermentTop";
import StatementBottom from "./StatementBottom";

const Statement = () => {
  const [translate] = useTranslation("global");
  const { screenSize } = useAppContext();

  const smallScreen =
    screenSize === "small-screen" ||
    screenSize === "x-small-screen" ||
    screenSize === "xx-small-screen";

  const titleList: string[] =
    translate(
      smallScreen
        ? "statement.statementList.titleMobile"
        : "statement.statementList.title",
      { returnObjects: true }
    ) || [];

  const descriptionList: string[] =
    translate("statement.descriptionMobile", { returnObjects: true }) || [];

  const titlePopulated = titleList && titleList.length > 0;

  return (
    <section style={{ marginTop: "150px" }}>
      <div className={styles.content}>
        {smallScreen &&
          descriptionList.map((row, index) => (
            <div key={index} className={styles.text__mobile}>
              {row}
            </div>
          ))}
        <div className={styles.text}>
          {!smallScreen && <p>{translate("statement.description")}</p>}
        </div>
        {!smallScreen && <StatermentTop />}
        {smallScreen && (
          <div className={styles.pointer__down}>
            <img src={require(`../../images/PointerDownMobile.png`)} alt="" />
          </div>
        )}
        <div className={styles.middle}>
          <div className={styles.title1}>
            {titlePopulated && (
              <>
                {titleList.map((title, index) => (
                  <h2 key={index}>{title}</h2>
                ))}
              </>
            )}
          </div>
          <div className={styles.title2}>
            <p className="title__green__small">
              {translate("statement.statementList.subtitle")}
            </p>
          </div>
        </div>
        {!smallScreen && <StatementBottom />}
        {smallScreen && (
          <div className={styles.pointer__up}>
            <img src={require(`../../images/PointerUpMobile.png`)} alt="" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Statement;
