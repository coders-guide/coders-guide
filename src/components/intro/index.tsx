import * as React from "react";
import demoImage1 from "../../assets/tutorial1.jpg";
import demoImage2 from "../../assets/tutorial2.jpg";
import { isInternetExplorer } from "../../utils";

import "./index.scss";

export const Intro: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [step, setStep] = React.useState(0);
  if (isInternetExplorer()) {
    return null;
  }
  return (
    <div
      className="intro"
      onWheel={e => {
        e.nativeEvent.stopImmediatePropagation();
      }}
    >
      <div className={`intro__wrapper ${step === 0 ? "is-active" : ""}`}>
        <div className={`intro__interior`}>
          <h1>
            <span className="intro__title">coders.guide</span> - your roadmap
            for learning full-stack web development using React
          </h1>
          <p>
            <br />
            Welcome to coders.guide - which is <strong>NOT</strong> another
            learning platform. Internet is already full of well written
            knowledge in a form of articles, videos and various educational
            platforms.
          </p>
          <p>
            This application have another purpose -{" "}
            <strong>
              it was created to provide you a structured roadmap of learning how
              to code full-stack apps.
            </strong>{" "}
            From the start to the end, <strong>from zero to hero.</strong>
          </p>
          <p>
            Step by step, you will get guidelines describing what should be your
            next subject to cover.{" "}
            <strong>
              Also, you will get a curated list of links to educational material
              to as well.
            </strong>{" "}
            One topic at once. Give it a try!
          </p>
          <p>Have fun!</p>
          <div className="intro__bottom">
            <button className="intro__button" onClick={() => setStep(1)}>
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className={`intro__wrapper ${step === 1 ? "is-active" : ""}`}>
        <div className={`intro__interior is-flex`}>
          <div className="intro__column">
            <img src={demoImage1} />
          </div>
          <div className="intro__column is-wide">
            <h1>How to use it (1/2)</h1>
            <p>
              After this tutorial you will face long, interactive infographic -{" "}
              <strong>the roadmap for your education</strong>. It is composed of
              many boxes. Each box describes <strong>one subject</strong> that
              is relevant to your education in a given moment. The roadmap is
              linear, so there is only one path - spanning across many
              categories displayed as columns.
            </p>

            <section>
              Subjects can be marked with following symbols:
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
              <button className="intro__button" onClick={() => setStep(2)}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`intro__wrapper ${step === 2 ? "is-active" : ""}`}>
        <div className={`intro__interior is-flex`}>
          <div className="intro__column">
            <img src={demoImage2} />
          </div>
          <div className="intro__column is-wide">
            <h1>How to use it (2/2)</h1>
            <section>
              In each box, you will se a summary of the subject. After clicking
              on it, few things will appear on the left:
              <ul>
                <li>List of topics to cover</li>
                <li>Proposed practices that you should exercise</li>
                <li>List of curated links to educational material</li>
              </ul>
            </section>
            <section>
              You can{" "}
              <strong>mark selected topics and practices as done</strong>, so
              you can track your progress with time.
            </section>
            <section>
              <strong>
                On the bottom, you can click "resources" in order to see curated
                list of useful links related to the subject.
              </strong>
            </section>
            <section>
              Your progress is saved locally in your browser.
              <br />
              Have fun!
            </section>
            <div className="intro__bottom">
              <button className="intro__button" onClick={onClose}>
                Begin!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
