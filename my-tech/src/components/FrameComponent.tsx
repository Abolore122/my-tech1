import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.heroInner, className].join(" ")}>
      <header className={styles.navigationLinksParent}>
        <div className={styles.navigationLinks}>
          <img
            className={styles.image136Icon}
            loading="lazy"
            alt=""
            src="/image-136@2x.png"
          />
          <a className={styles.olatechApp}>OlaTech App</a>
          <div className={styles.homeParent}>
            <a className={styles.home}>Home</a>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/line-1.svg"
            />
          </div>
          <a className={styles.about}>About</a>
          <a className={styles.blog}>Blog</a>
          <a className={styles.support}>Support</a>
        </div>
        <button className={styles.downloadAppParent}>
          <a className={styles.downloadApp}>Download app</a>
          <div className={styles.component1Parent}>
            <img
              className={styles.component1Icon}
              alt=""
              src="/component-1.svg"
            />
            <div className={styles.componentSeparator} />
            <img
              className={styles.component1Icon}
              alt=""
              src="/component-2.svg"
            />
          </div>
        </button>
      </header>
    </section>
  );
};

export default FrameComponent;
