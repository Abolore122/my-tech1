import { FunctionComponent } from "react";
import styles from "./FAQs.module.css";

const FAQs: FunctionComponent = () => {
  return (
    <div className={styles.faqs}>
      <div className={styles.frameParent}>
        <div className={styles.lightningFilledParent}>
          <img
            className={styles.lightningFilledIcon}
            loading="lazy"
            alt=""
            src="/lightning-filled.svg"
          />
          <a className={styles.faqs1}>faqs</a>
        </div>
        <div className={styles.questionsAnswers}>
          <h1 className={styles.gotQuestions}>Got Questions?</h1>
          <div className={styles.weveGotAnswers}>We’ve got answers</div>
        </div>
      </div>
      <section className={styles.image154Parent}>
        <img
          className={styles.image154Icon}
          loading="lazy"
          alt=""
          src="/image-154@2x.png"
        />
        <div className={styles.appQuestions}>
          <b className={styles.whatIsOlatech}>What is Olatech App ?</b>
          <b className={styles.howDoI}>
            How do i get started using Olatech App ?
          </b>
          <div className={styles.howDoesTheOlatechAppWorkParent}>
            <b className={styles.howDoesThe}>How does the Olatech App Work ?</b>
            <b className={styles.whatIsThe}>
              What is the payment processing timeline on the Olatech App?
            </b>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
