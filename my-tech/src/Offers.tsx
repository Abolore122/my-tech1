import { FunctionComponent } from "react";
import styles from "./Offers.module.css";

export type OffersType = {
  className?: string;
};

const Offers: FunctionComponent<OffersType> = ({ className = "" }) => {
  return (
    <div className={[styles.offers, className].join(" ")}>
      <main className={styles.container}>
        <section className={styles.frameParent}>
          <img className={styles.frameChild} alt="" src="/group-1370.svg" />
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/frame-1707479107@2x.png"
              />
              <div className={styles.superFastPayment}>Super Fast Payment</div>
            </div>
          </div>
        </section>
        <div className={styles.features}>
          <div className={styles.featuresContent}>
            <img
              className={styles.featuresContentChild}
              alt=""
              src="/group-1372.svg"
            />
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameFrame}>
                      <img
                        className={styles.frameIcon}
                        loading="lazy"
                        alt=""
                        src="/frame.svg"
                      />
                    </div>
                    <div className={styles.payForECommerceWrapper}>
                      <div className={styles.payForECommerce}>
                        Pay for E-commerce
                      </div>
                    </div>
                    <div
                      className={styles.payForECommerce}
                    >{`Travel Bookings & More`}</div>
                  </div>
                </div>
                <div className={styles.weHelpYou}>
                  We help you make crypto payment easier,pay for your travel
                  bookings at ease and comfort of your zone without stress.
                </div>
              </div>
              <div className={styles.imageContainerParent}>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.imageIcon}
                    loading="lazy"
                    alt=""
                    src="/image@2x.png"
                  />
                  <img
                    className={styles.image3Icon}
                    loading="lazy"
                    alt=""
                    src="/image-3@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.imageWrapper}>
                    <img
                      className={styles.imageIcon1}
                      loading="lazy"
                      alt=""
                      src="/image-1@2x.png"
                    />
                  </div>
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/group-1370-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <button className={styles.footer}>
        <div className={styles.appDownload}>
          <div className={styles.downloadButton}>
            <div className={styles.downloadApp}>Download app</div>
          </div>
          <div className={styles.componentPair}>
            <img
              className={styles.component1Icon}
              alt=""
              src="/component-1.svg"
            />
          </div>
          <div className={styles.separatorWrapper}>
            <div className={styles.separator} />
          </div>
          <div className={styles.componentPair}>
            <img
              className={styles.component1Icon}
              alt=""
              src="/component-2.svg"
            />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Offers;
