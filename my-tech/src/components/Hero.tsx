import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent2 from "./FrameComponent2";
import styles from "./Hero.module.css";

const Hero: FunctionComponent = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroChild} />
      <FrameComponent />
      <section className={styles.heroInner}>
        <div className={styles.paymentInfoParent}>
          <div className={styles.paymentInfo}>
            <div className={styles.reliablePayment}>
              <div className={styles.reliablePaymentMethodForWrapper}>
                <h1
                  className={styles.reliablePaymentMethod}
                >{`Reliable Payment Method for `}</h1>
              </div>
              <div className={styles.cryptoExchange}>
                <div className={styles.cryptocurrencyExchangeWrapper}>
                  <h1 className={styles.cryptocurrencyExchange}>
                    Cryptocurrency Exchange
                  </h1>
                </div>
                <h3 className={styles.theEasiestAnd}>
                  The easiest and fastest way to buy and pay with cryptocurrency
                  for bussinesses, government agencies worldwide
                </h3>
              </div>
              <div className={styles.downloadDemoWrapper}>
                <div className={styles.downloadDemo}>
                  <button className={styles.downloadAction}>
                    <div className={styles.downloadApp}>Download app</div>
                    <div className={styles.downloadComponent}>
                      <img
                        className={styles.component1Icon}
                        alt=""
                        src="/component-1-1.svg"
                      />
                      <div className={styles.downloadComponentSeparator} />
                      <img
                        className={styles.component1Icon}
                        alt=""
                        src="/component-2-1.svg"
                      />
                    </div>
                  </button>
                  <button className={styles.watchDemoAction}>
                    <div className={styles.watchDemo}>Watch Demo</div>
                    <img
                      className={styles.playCircleIcon}
                      alt=""
                      src="/playcircle.svg"
                    />
                  </button>
                </div>
              </div>
              <div className={styles.investorsContentWrapper}>
                <div className={styles.investorsContent}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/ellipse-376@2x.png"
                    />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/ellipse-377@2x.png"
                    />
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/ellipse-378@2x.png"
                    />
                    <img
                      className={styles.ellipseIcon}
                      loading="lazy"
                      alt=""
                      src="/ellipse-379@2x.png"
                    />
                  </div>
                  <h3 className={styles.trustedBy3m}>
                    Trusted by 3m+ Investors Globaly
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent1 />
        </div>
      </section>
      <FrameComponent2 />
    </div>
  );
};

export default Hero;
