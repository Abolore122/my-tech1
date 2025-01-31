import { FunctionComponent } from "react";
import styles from "./Steps.module.css";

export type StepsType = {
  className?: string;
};

const Steps: FunctionComponent<StepsType> = ({ className = "" }) => {
  return (
    <div className={[styles.steps, className].join(" ")}>
      <div className={styles.appSteps}>
        <h1 className={styles.phasesToGet}>4 Phases to Get Started</h1>
      </div>
      <main className={styles.frameParent}>
        <section className={styles.appDownloadParent}>
          <div className={styles.appDownload}>
            <img
              className={styles.component1Icon}
              loading="lazy"
              alt=""
              src="/component-1.svg"
            />
            <div className={styles.downloadInstructions}>
              <div className={styles.downloadInstructionsChild} />
              <div className={styles.wrapper}>
                <div className={styles.div}>1.</div>
              </div>
              <h1 className={styles.downloadTheMobile}>
                Download the Mobile App
              </h1>
              <div className={styles.downloadDescription}>
                <h1 className={styles.getStartedBy}>
                  Get started by downloading our mobile app, available on iOS
                  and Android.
                </h1>
                <div className={styles.qRCodeImageWrapper}>
                  <div className={styles.qRCodeImage}>
                    <div className={styles.pay4meQrcodeRoundedsvg}>
                      <img
                        className={styles.component1Icon1}
                        loading="lazy"
                        alt=""
                        src="/component-1-11@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.div}>2.</div>
            <div className={styles.signupSteps}>
              <h1 className={styles.signUpOn}>Sign up on the app.</h1>
              <div className={styles.signupDescription}>
                <h1 className={styles.getStartedBy}>
                  Sign up with your details, verify your identity, and set up
                  your payment preferences.
                </h1>
                <div className={styles.signupIllustration}>
                  <div className={styles.component18Wrapper}>
                    <div className={styles.component18}>
                      <div className={styles.imageWrapper}>
                        <div className={styles.paddingContainer}>
                          <div className={styles.innerPadding}>
                            <div className={styles.timeContainer}>
                              <div className={styles.time}>9:41</div>
                            </div>
                            <div className={styles.levelsContainer}>
                              <div className={styles.levelsWrapper}>
                                <div className={styles.levelsParent}>
                                  <img
                                    className={styles.levelsIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/levels.svg"
                                  />
                                  <div className={styles.levelIcons}>
                                    <div className={styles.levelIconsChild} />
                                    <div className={styles.levelIconsItem} />
                                  </div>
                                </div>
                              </div>
                              <img
                                className={styles.component1Icon2}
                                loading="lazy"
                                alt=""
                                src="/component-1-2.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.signupAction}>
                          <div className={styles.signUp}>Sign Up</div>
                          <div className={styles.userForm}>
                            <div className={styles.formFields}>
                              <div className={styles.name}>Name</div>
                              <div className={styles.inputFields}>
                                <div className={styles.johDoe}>Joh Doe</div>
                              </div>
                            </div>
                            <div className={styles.formFields}>
                              <div className={styles.name}>Email</div>
                              <div className={styles.inputFields}>
                                <div className={styles.examplegmailcom}>
                                  example@gmail.com
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.paymentStepsParent}>
          <div className={styles.paymentSteps}>
            <div className={styles.paymentSetup}>
              <div className={styles.downloadInstructionsChild} />
              <div className={styles.div}>3.</div>
              <div className={styles.setupSteps}>
                <h1 className={styles.signUpOn}>Setup Payment Details</h1>
                <div className={styles.signupDescription}>
                  <h1 className={styles.getStartedBy}>
                    Securely link your local bank account or mobile wallet to
                    the Pay4me app.
                  </h1>
                  <div className={styles.iconLayoutWrapper}>
                    <div className={styles.iconLayout}>
                      <div className={styles.vuesaxlinearbankWrapper}>
                        <img
                          className={styles.vuesaxlinearbankIcon}
                          loading="lazy"
                          alt=""
                          src="/vuesaxlinearbank.svg"
                        />
                      </div>
                      <div className={styles.iconLayoutInner}>
                        <img
                          className={styles.frameItem}
                          loading="lazy"
                          alt=""
                          src="/line-110.svg"
                        />
                      </div>
                      <div className={styles.iconLayoutChild}>
                        <img
                          className={styles.frameInner}
                          loading="lazy"
                          alt=""
                          src="/frame-1000008488.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.completePayment}>
              <div className={styles.frameChild} />
              <div className={styles.div}>4.</div>
              <div className={styles.signupSteps}>
                <h1 className={styles.signUpOn}>Complete Your Payment</h1>
                <div className={styles.paymentDescription}>
                  <h1 className={styles.getStartedBy}>
                    Choose your preferred payment method and finalize the
                    transaction securely.
                  </h1>
                  <div className={styles.paymentImage}>
                    <img
                      className={styles.image144Icon}
                      loading="lazy"
                      alt=""
                      src="/image-144@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.actionButtons}>
            <div className={styles.buttonLayout}>
              <div className={styles.downloadButton}>
                <div className={styles.downloadApp}>Download app</div>
              </div>
              <div className={styles.buttonContainer}>
                <img
                  className={styles.component2Icon}
                  alt=""
                  src="/component-1-3.svg"
                />
              </div>
              <div className={styles.buttonSeparator}>
                <div className={styles.buttonSeparatorChild} />
              </div>
              <div className={styles.buttonContainer}>
                <img
                  className={styles.component2Icon}
                  alt=""
                  src="/component-2.svg"
                />
              </div>
            </div>
          </button>
        </section>
      </main>
    </div>
  );
};


export default Steps;

