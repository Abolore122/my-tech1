import { FunctionComponent } from "react";
import styles from "./Features.module.css";

const Features: FunctionComponent = () => {
  return (
    <div className={styles.features}>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.clipPathGroup} alt="" src="/clip-path-group.svg" />
    </div>
  );
};

export default Features;
