import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.walletContentParent, className].join(" ")}>
      <div className={styles.walletContent}>
        <div className={styles.balanceCard}>
          <div className={styles.balanceCardChild} />
          <div className={styles.balanceInfo}>
            <div className={styles.walletBalance}>Wallet Balance</div>
            <div className={styles.balanceActions}>
              <div className={styles.eyeAction}>
                <b className={styles.balancePlaceholder}>$ 22,850.00</b>
                <div className={styles.eyeButton}>
                  <img
                    className={styles.eyeIcon}
                    loading="lazy"
                    alt=""
                    src="/eye.svg"
                  />
                </div>
              </div>
              <button className={styles.fundAction}>
                <div className={styles.fundButton}>
                  <img className={styles.addIcon} alt="" src="/add.svg" />
                  <div className={styles.fundWallet}>Fund Wallet</div>
                  <div className={styles.fundImage}>
                    <img
                      className={styles.image151Icon}
                      alt=""
                      src="/image-151@2x.png"
                    />
                    <div className={styles.fundImageTwo} />
                  </div>
                </div>
              </button>
              <button className={styles.withdrawAction}>
                <img className={styles.addIcon} alt="" src="/export.svg" />
                <div className={styles.withdraw}>Withdraw</div>
              </button>
            </div>
          </div>
          <div className={styles.ratingContentWrapper}>
            <div className={styles.ratingContent}>
              <img
                className={styles.image9Icon}
                loading="lazy"
                alt=""
                src="/image-9@2x.png"
              />
              <div className={styles.starRating}>
                <div className={styles.iconoirstarSolidParent}>
                  <img
                    className={styles.iconoirstarSolid}
                    loading="lazy"
                    alt=""
                    src="/iconoirstarsolid.svg"
                  />
                  <img
                    className={styles.iconoirstarSolid}
                    loading="lazy"
                    alt=""
                    src="/iconoirstarsolid-1.svg"
                  />
                  <img
                    className={styles.iconoirstarSolid}
                    loading="lazy"
                    alt=""
                    src="/iconoirstarsolid-2.svg"
                  />
                  <img
                    className={styles.iconoirstarSolid}
                    loading="lazy"
                    alt=""
                    src="/iconoirstarsolid-3.svg"
                  />
                  <img
                    className={styles.iconoirstarSolid}
                    alt=""
                    src="/iconoirstarsolid-4.svg"
                  />
                </div>
                <div className={styles.starGoogleRating}>
                  5 star Google rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.image134Parent}>
        <img
          className={styles.image134Icon}
          loading="lazy"
          alt=""
          src="/image-134@2x.png"
        />
        <div className={styles.backedByTechstarsContainer}>
          <p className={styles.backedBy}>Backed by</p>
          <p className={styles.backedBy}>Techstars</p>
        </div>
      </div>
      <div className={styles.dollar01Parent}>
        <img
          className={styles.dollar01Icon}
          loading="lazy"
          alt=""
          src="/dollar01.svg"
        />
        <div className={styles.usd}>$USD</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
