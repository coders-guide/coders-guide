import * as React from "react";
import logoImageTransparent from "../../../assets/logo_updated_transparent.svg";
import checkIcon from "../../../assets/check-white.svg";

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
            Interactive roadmap
            <br />
            helping you learn to code
          </div>
          <ul className="m-intro__list">
            <li>
              <img src={checkIcon} />
              free to use
            </li>
            <li>
              <img src={checkIcon} />
              progress tracker
            </li>
            <li>
              <img src={checkIcon} />
              curated resource links
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
          <header className="m-intro__logo" />
          Interactive roadmap for learning coding, including progress tracker
          and curated resource links.
          <button
            onClick={() => setStep(2)}
            className={`m-intro__start-button`}
          >
            Start
          </button>
        </span>
      </div>
      <div className={`m-intro__step ${getStepClass(2)}`}>
        <span>
          <header className="m-intro__logo" />
          Interactive roadmap for learning coding, including progress tracker
          and curated resource links.
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
          <header className="m-intro__logo" />
          Interactive roadmap for learning coding, including progress tracker
          and curated resource links.
          <button onClick={onFinish} className={`m-intro__start-button`}>
            Start
          </button>
        </span>
      </div>
    </>
  );
};
