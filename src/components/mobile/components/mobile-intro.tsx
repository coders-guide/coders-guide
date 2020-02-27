import * as React from "react";
import logoImageTransparent from "../../../assets/logo_updated_transparent.svg";
import checkIcon from "../../../assets/check-white.svg";
import desktopScreenshot from "../../../assets/desktop-screenshot.jpg";

export const MobileIntro: React.FC<{ onFinish: () => void }> = ({
  onFinish
}) => {
  const [step, setStep] = React.useState(0);

  const getStepClass = (stepIndex: number) => {
    if (stepIndex > step) {
      return "is-hidden-right";
    }

    if (stepIndex < step) {
      return "is-hidden-left";
    }

    return "";
  };
  return (
    <>
      <div className={`m-intro__step ${getStepClass(0)}`}>
        <span>
          <img src={logoImageTransparent} className="m-intro__logo" />
          <div className="m-intro__headline">
            free open-source interactive roadmap to
            <br />
            <span className="m-intro__highlight">
              help you become a web developer
            </span>
          </div>
          <ul className="m-intro__list">
            <li>
              <img src={checkIcon} />
              free to use
            </li>
            <li>
              <img src={checkIcon} />
              curated resource links
            </li>
            <li>
              <img src={checkIcon} />
              includes progress tracker
            </li>
          </ul>
          <button
            onClick={() => setStep(1)}
            className={`m-intro__start-button`}
          >
            Next
          </button>
        </span>
      </div>
      <div className={`m-intro__step ${getStepClass(1)}`}>
        <span>
          <div className="m-intro__headline">
            your developer education in one place, from zero to hero
          </div>
          <span>
            Step by step, you will get guidelines describing what subject should
            you focus on. Also, you will get a curated list of links to
            educational material to as well. One topic at once.
          </span>
          <button
            onClick={() => setStep(2)}
            className={`m-intro__start-button`}
          >
            Next
          </button>
        </span>
      </div>
      <div className={`m-intro__step ${getStepClass(2)}`}>
        <span>
          <div className="m-intro__headline">
            check out desktop version as well
          </div>
          <span>
            open this website on your desktop computer and experience all of the
            features!
            <img
              className="m-intro__desktop-screenshot"
              src={desktopScreenshot}
            />
          </span>
          <button
            onClick={() => setStep(3)}
            className={`m-intro__start-button`}
          >
            Start
          </button>
        </span>
      </div>
      <div className={`m-intro__step ${getStepClass(3)}`}>
        <span>
          <div className="m-intro__headline">
            currently only roadmap for becoming{" "}
            <strong>react-based full stack web developer</strong>
          </div>
          <span>come later for more!</span>
          <button onClick={onFinish} className={`m-intro__start-button`}>
            Start
          </button>
        </span>
      </div>
    </>
  );
};
