import { FunctionComponent } from "react";
import styles from "./Footers.module.css";

export type FootersType = {
  className?: string;
};

const Footers: FunctionComponent<FootersType> = ({ className = "" }) => {
  return (
    <div className={[styles.footers, className].join(" ")}>
      <footer className={styles.main}>
        <div className={styles.content}>
          <div className={styles.containerParent}>
            <div className={styles.container}>
              <div className={styles.features}>
                <img
                  className={styles.featureListIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-1707478976.svg"
                />
                <img
                  className={styles.featureListIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-1707478977.svg"
                />
                <img
                  className={styles.featureListIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-1707478978.svg"
                />
                <img
                  className={styles.featureListIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-1707478981.svg"
                />
                <img
                  className={styles.featureListIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-1707478980.svg"
                />
              </div>
            </div>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-1370.svg"
            />
          </div>
        </div>
        <div className={styles.aboutUs}>
          <div className={styles.aboutContent}>
            <a className={styles.company}>Company</a>
            <a className={styles.about}>About</a>
            <a className={styles.blog}>Blog</a>
            <div className={styles.howItWorks}>How it Works</div>
            <a className={styles.careers}>Careers</a>
          </div>
        </div>
        <div className={styles.reviews}>
          <a className={styles.resources}>Resources</a>
          <div className={styles.androidReviews}>Android Reviews</div>
          <a className={styles.iosReviews}>iOS Reviews</a>
          <div className={styles.testimonials}>Testimonials</div>
          <a className={styles.faqs}>FAQs</a>
          <div className={styles.reviewsContainer}>
            <div className={styles.sMSContainer}>
              <img
                className={styles.smsIcon}
                loading="lazy"
                alt=""
                src="/sms.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.terms}>
          <div className={styles.termsContent}>
            <a className={styles.legal}>Legal</a>
            <a className={styles.termsOfService}>Terms of Service</a>
            <a className={styles.termsOfService}>Terms of Service</a>
            <a className={styles.privacyPolicy}>Privacy Policy</a>
            <div className={styles.kycamlPolicy}>KYC/AML Policy</div>
          </div>
        </div>
        <div className={styles.downloads}>
          <div className={styles.downloadLinks}>
            <div className={styles.downloadButtons}>
              <button className={styles.link}>
                <img
                  className={styles.component2Icon}
                  alt=""
                  src="/component-2.svg"
                />
                <div className={styles.storePlatforms}>
                  <a className={styles.downloadOn}>Download on</a>
                  <a className={styles.appstore}>Appstore</a>
                </div>
              </button>
              <button className={styles.link}>
                <img
                  className={styles.component1Icon}
                  alt=""
                  src="/component-1.svg"
                />
                <div className={styles.storePlatforms}>
                  <a className={styles.downloadOn}>Download on</a>
                  <a className={styles.playstore}>Playstore</a>
                </div>
              </button>
            </div>
            <div className={styles.dependingOnYour}>
              Depending on your mobile device, download our awesome native app
              to start enjoying all the benefits of pay4Me.
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.footer}>
        <b className={styles.olatechIsA}>
          Olatech is a financial technology company making it easier to pay
          bills and other commodity using cryptocurrency. We offer our products
          and services in partnership with licensed transmitters and banking
          partners in their respective jurisdictions. All trademarks, logos, and
          brand names are the property of their respective owners. All company,
          product, and service names used on this website are for identification
          purposes only. Use of these names, trademarks and brands do not imply
          endorsement.
        </b>
      </div>
    </div>
  );
};

export default Footers;
