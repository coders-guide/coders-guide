import * as React from "react";
import { isInternetExplorer } from "../../utils";

import logo from "../../assets/logo_updated_transparent.svg";
import { IntroAnimation } from "../intro-animation";

import "./index.scss";

import IconReact from "../../assets/react.svg";
import IconAngular from "../../assets/angular.svg";
import IconQuestion from "../../assets/question.svg";

const CLOSE_WELCOME_SCREEN_TIMEOUT = 120;

export const WelcomeScreen: React.FC<{
  onClose: () => void;
  helpOnly: boolean;
}> = ({ onClose, helpOnly = false }) => {
  const [step, setStep] = React.useState(0);
  const [fadingOut, setFadingOut] = React.useState(false);

  const close = () => {
    setFadingOut(true);
    setStep(step + 1);
    setTimeout(() => {
      onClose();
    }, CLOSE_WELCOME_SCREEN_TIMEOUT);
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
              <IntroAnimation />
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
            <button
              className="intro__button"
              onClick={() => (helpOnly ? close() : setStep(1))}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className={`intro__wrapper ${getStepClass(1)}`}>
        <div className={`intro__interior is-flex`}>
          <div className="intro__description">
            <div className="intro__title">
              <span>choose your path</span>
            </div>

            <div className="intro__path-select">
              <div className="intro__path-select__option is-selected">
                <img src={IconReact} alt="React" /> Web full-stack developer
                specialized in React
              </div>
              <div className="intro__path-select__option is-disabled">
                <img src={IconAngular} alt="Coming soon" /> Coming soon...
              </div>
              <div className="intro__path-select__option is-disabled">
                <img src={IconQuestion} alt="Coming soon" /> Coming soon...
              </div>
            </div>

            {/* <section>
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
            </section> */}
            <div className="intro__bottom">
              <button className="intro__button" onClick={() => setStep(0)}>
                back
              </button>
              <button className="intro__button" onClick={() => close()}>
                begin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
