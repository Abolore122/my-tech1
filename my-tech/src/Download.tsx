import { FunctionComponent } from "react";
import styles from "./Download.module.css";

export type DownloadType = {
  className?: string;
};

const Download: FunctionComponent<DownloadType> = ({ className = "" }) => {
  return (
    <div className={[styles.download, className].join(" ")}>
      <section className={styles.page}>
        <div className={styles.pageInner}>
          <div className={styles.frameParent}>
            <div className={styles.appDownloadBannerParent}>
              <div className={styles.appDownloadBanner}>
                <h1
                  className={styles.downloadTheOlatech}
                >{`Download the Olatech `}</h1>
                <h1 className={styles.appToday}> App Today!</h1>
              </div>
              <div className={styles.ourCustomQrCodeWillTakeYWrapper}>
                <div className={styles.ourCustomQrContainer}>
                  <p className={styles.ourCustomQr}>
                    Our custom QR code will take you to your app store
                  </p>
                  <p className={styles.ourCustomQr}>
                    to download our awesome native apps
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.appStoreLinksWrapper}>
              <div className={styles.appStoreLinks}>
                <button className={styles.link}>
                  <img
                    className={styles.component2Icon}
                    alt=""
                    src="/component-2.svg"
                  />
                  <div className={styles.storeName}>
                    <div className={styles.downloadOn}>Download on</div>
                    <div className={styles.appstore}>Appstore</div>
                  </div>
                </button>
                <button className={styles.link}>
                  <img
                    className={styles.component1Icon}
                    alt=""
                    src="/component-1.svg"
                  />
                  <div className={styles.storeName}>
                    <div className={styles.downloadOn}>Download on</div>
                    <div className={styles.playstore}>Playstore</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <img className={styles.frameChild} alt="" src="/group-1369.svg" />
          <div className={styles.pay4meQrcodeRoundedsvg}>
            <img
              className={styles.component1Icon1}
              loading="lazy"
              alt=""
              src="/component-1-1@2x.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
