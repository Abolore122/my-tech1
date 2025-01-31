import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TestimonialOne.module.css";

export type TestimonialOneType = {
  className?: string;
  image149?: string;
  jeremyAdams?: string;

  /** Style props */
  authorOnePadding?: CSSProperties["padding"];
  authorOneBackgroundImage?: CSSProperties["backgroundImage"];
};

const TestimonialOne: FunctionComponent<TestimonialOneType> = ({
  className = "",
  authorOnePadding,
  authorOneBackgroundImage,
  image149,
  jeremyAdams,
}) => {
  const authorOneStyle: CSSProperties = useMemo(() => {
    return {
      padding: authorOnePadding,
      backgroundImage: authorOneBackgroundImage,
    };
  }, [authorOnePadding, authorOneBackgroundImage]);

  return (
    <div className={[styles.testimonialOne, className].join(" ")}>
      <div className={styles.authorOne} style={authorOneStyle}>
        <img className={styles.image149Icon} alt="" src={image149} />
        <b className={styles.jeremyAdams}>{jeremyAdams}</b>
      </div>
    </div>
  );
};

export default TestimonialOne;
