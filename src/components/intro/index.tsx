import * as React from "react";
import { isInternetExplorer } from "../../utils";

import demoVideo1 from "../../assets/demo1.mp4";
import demoVideo2 from "../../assets/demo2.mp4";
import logo from "../../assets/logo_updated_transparent.svg";
import { Intro as IntroComponent } from "../intro-animation";

import "./index.scss";

export const Intro: React.FC<{ onClose: () => void; fadeOut?: boolean }> = ({
  onClose,
  fadeOut = false
}) => {
  const [step, setStep] = React.useState(0);
  const [fadingOut, setFadingOut] = React.useState(false);

  const close = () => {
    if (fadeOut) {
      setFadingOut(true);
      setStep(3);
      setTimeout(() => {
        onClose();
      }, 250);
    } else {
      onClose();
    }
  };

  const getStepClass = (stepIndex: number) => {
    if (step === stepIndex) {
      return "is-active";
    }

    if (step > stepIndex) {
      return "is-left";
    }

    return "is-right";
  };

  if (isInternetExplorer()) {
    return null;
  }
  return (
    <div
      className={`intro ${fadingOut ? "is-fading-out" : ""}`}
      onWheel={e => {
        e.nativeEvent.stopImmediatePropagation();
      }}
    >
      <div className={`intro__wrapper ${getStepClass(0)}`}>
        <div className="intro__interior is-narrow">
          <header className="intro__column-set">
            <div className="intro__column-1">
              <img className="intro__logo" alt="Logo" src={logo} />
            </div>
            <div className="intro__column-1" />
          </header>
          <div className="intro__column-set">
            <div className="intro__column-1 intro__animation">
              <IntroComponent />
            </div>
            <div className="intro__column-1 intro__description">
              <div className="intro__title">
                <span>
                  interactive roadmap to help you learn{" "}
                  <strong className="intro__highlight">how to code</strong>
                </span>
              </div>
              <p>
                <br />
                welcome to{" "}
                <strong className="intro__highlight">coders.guide</strong> - it
                is <strong>NOT</strong> another learning platform. Internet is
                already full of well written knowledge in a form of articles,
                videos and various educational platforms.
              </p>
              <p>
                this application have another purpose -{" "}
                <strong className="intro__highlight">
                  it provides you a structured roadmap of learning how to code
                  full-stack apps.
                </strong>{" "}
              </p>
              <p>
                from the start to the end,{" "}
                <strong className="intro__highlight">from zero to hero.</strong>
              </p>
            </div>
          </div>
          <div className="intro__bottom">
            <button className="intro__button" onClick={() => setStep(1)}>
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className={`intro__wrapper ${getStepClass(1)}`}>
        <div className={`intro__interior is-flex`}>
          <div className="intro__column">
            {/* <img src={demoImage1} /> */}
            <video muted autoPlay loop>
              <source src={demoVideo1} type="video/mp4" />
            </video>
          </div>
          <div className="intro__column intro__description is-wide">
            <div className="intro__title">
              <span>
                how to use it&nbsp;&nbsp;&nbsp;
                <strong className="intro__highlight">(1 of 2)</strong>
              </span>
            </div>
            <p>
              <br />
              after the start you will face long, interactive infographic -{" "}
              <strong>the roadmap for your education</strong>. it is composed of
              many boxes - each describes <strong>one subject</strong> that is
              relevant to you at a given moment.
            </p>
            <p>
              the roadmap is linear, so there is only one path - spanning across
              many categories displayed as columns.
            </p>

            <section>
              subjects can be marked with following symbols:
              <ul>
                <li>
                  <span className="icon icon-repeat" />
                  &nbsp;&nbsp;&nbsp;this icon indicates that you should practice
                  the subject very often - it is particularly recommended to be
                  cultivated more than others
                </li>
                <li>
                  <span className="icon icon-star" />
                  &nbsp;&nbsp;&nbsp;this icon indicates that the subject might
                  be difficult and therefore optional - but certainly worthwile
                  and if possible, should not be skipped
                </li>
              </ul>
            </section>
            <div className="intro__bottom">
              <button className="intro__button" onClick={() => setStep(0)}>
                back
              </button>
              <button className="intro__button" onClick={() => setStep(2)}>
                continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`intro__wrapper ${getStepClass(2)}`}>
        <div className={`intro__interior is-flex`}>
          <div className="intro__column">
            <video muted autoPlay loop>
              <source src={demoVideo2} type="video/mp4" />
            </video>
          </div>
          <div className="intro__column intro__description is-wide">
            <h1 className="intro__title">
              <span>
                how to use it&nbsp;&nbsp;&nbsp;
                <strong className="intro__highlight">(2 of 2)</strong>
              </span>
            </h1>
            <p>
              <br />
              in the each box, you will see a summary of the subject. After
              clicking on it, few things will appear on the left:
            </p>
            <section>
              <ul className="intro__list">
                <li>list of topics to cover</li>
                <li>proposed practices that you should exercise</li>
                <li>list of curated links to educational material</li>
              </ul>
            </section>

            <p>
              you can{" "}
              <strong>mark selected topics and practices as done</strong>, so
              you can track your progress with time.
            </p>
            <p>
              <strong className="intro__highlight">
                choose "resources" in order to see curated list of useful links
                related to the subject.
              </strong>
            </p>
            <p>
              your progress is saved locally in your browser.
              <br />
              <strong className="intro__title intro__highlight">
                have fun!
              </strong>
            </p>
            <div className="intro__bottom">
              <button className="intro__button" onClick={() => setStep(1)}>
                back
              </button>
              <button className="intro__button" onClick={close}>
                start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
