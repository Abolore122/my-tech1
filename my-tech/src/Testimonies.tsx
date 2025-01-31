import { FunctionComponent } from "react";
import TestimonialOne from "./TestimonialOne";
import styles from "./Testimonies.module.css";

export type TestimoniesType = {
  className?: string;
};

const Testimonies: FunctionComponent<TestimoniesType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonies, className].join(" ")}>
      <img
        className={styles.testimoniesChild}
        loading="lazy"
        alt=""
        src="/group-1371.svg"
      />
      <section className={styles.takeThereWordsForItParent}>
        <h1 className={styles.takeThereWords}>{`Take there words for it, `}</h1>
        <h1 className={styles.itReallyMatters}>It really matters</h1>
      </section>
      <section className={styles.testimonialsLayoutParent}>
        <div className={styles.testimonialsLayout}>
          <TestimonialOne
            image149="/image-149@2x.png"
            jeremyAdams="Jeremy Adams"
          />
          <TestimonialOne
            authorOnePadding="300px 39px 81px"
            authorOneBackgroundImage="url('/author-two@3x.png')"
            image149="/image-150@2x.png"
            jeremyAdams="Mark Richard"
          />
          <div className={styles.testimonialThree}>
            <img
              className={styles.image152Icon}
              alt=""
              src="/image-152@2x.png"
            />
            <b className={styles.rachealMarculey}>Racheal Marculey</b>
          </div>
        </div>
        <div className={styles.testimonialFour}>
          <img
            className={styles.image153Icon}
            loading="lazy"
            alt=""
            src="/image-153@2x.png"
          />
          <b className={styles.deboraJeremy}>Debora Jeremy</b>
        </div>
      </section>
    </div>
  );
};

export default Testimonies;
