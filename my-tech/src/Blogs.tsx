import { FunctionComponent } from "react";
import styles from "./Blogs.module.css";

const Blogs: FunctionComponent = () => {
  return (
    <div className={styles.blogs}>
      <section className={styles.blogsInner}>
        <header className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.lightningFilledParent}>
              <img
                className={styles.lightningFilledIcon}
                loading="lazy"
                alt=""
                src="/lightning-filled1.svg"
              />
              <a className={styles.blog}>Blog</a>
            </div>
            <h1 className={styles.latestBlog}>{`Latest Blog & Resources`}</h1>
          </div>
        </header>
      </section>
      <section className={styles.frameGroup}>
        <div className={styles.image155Parent}>
          <img
            className={styles.image155Icon}
            loading="lazy"
            alt=""
            src="/image-155@2x.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.howToGetFinancialRseourcesParent}>
              <b className={styles.howToGet}>How to get Financial Rseources</b>
              <div className={styles.arrowRight02SharpWrapper}>
                <img
                  className={styles.arrowRight02SharpIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowright02sharp@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.cryptoImageContainerParent}>
            <div className={styles.cryptoImageContainer}>
              <img
                className={styles.image156Icon}
                loading="lazy"
                alt=""
                src="/image-156@2x.png"
              />
            </div>
            <div className={styles.cryptoHeadingContainerParent}>
              <div className={styles.cryptoHeadingContainer}>
                <b className={styles.learnMoreAbout}>
                  Learn more about cryptocurrency from the internet
                </b>
              </div>
              <div className={styles.arrowRight02SharpWrapper}>
                <img
                  className={styles.arrowRight02SharpIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowright02sharp-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.navigationContainerWrapper}>
            <div className={styles.navigationContainer}>
              <div className={styles.arrowLeftWrapper}>
                <img
                  className={styles.arrowLeftIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowleft.svg"
                />
              </div>
              <div className={styles.arrowLeftWrapper}>
                <img
                  className={styles.arrowLeftIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image157Parent}>
          <img
            className={styles.image157Icon}
            loading="lazy"
            alt=""
            src="/image-157@2x.png"
          />
          <div className={styles.heading4KnowingWhichCoveParent}>
            <b className={styles.howToGet}>
              Overcoming Challenges in Foreign Currency Tuition Payments
            </b>
            <div className={styles.arrowRight02SharpWrapper}>
              <img
                className={styles.arrowRight02SharpIcon}
                loading="lazy"
                alt=""
                src="/arrowright02sharp-2@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
