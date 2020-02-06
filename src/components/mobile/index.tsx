import * as React from "react";

import "./index.scss";
import { useActiveNode } from "../../utils/hooks/useActiveNode";
import { list as rawReactDataSet } from "../../data/react";
import { prepareData, getUrlDomain, isVideoLink } from "../../utils";
import { scrollIt as animateScroll } from "./utils";
import { RoadmapEntry, MobileAnimationState } from "../../types";
import { useGoals } from "../../utils/hooks/useGoals";
import logoImage from "../../assets/logo_updated.svg";

const MobileListHeader: React.FC<{
  goalsChecked?: number[];
  activeNode: RoadmapEntry;
  totalItems?: number;
  defaultLabel?: string;
}> = ({ activeNode, goalsChecked, totalItems, defaultLabel }) => {
  if (goalsChecked) {
    return (
      <>
        {`${defaultLabel || "Topics to cover"} (${(goalsChecked || []).length ||
          0}/${totalItems}):`}
      </>
    );
  }
  return <>{defaultLabel}</>;
};

export const MobileHeader: React.FC<{
  count: [number, number];
  onMenuClick: () => void;
}> = ({ count: [currentIndex, nodesLength], onMenuClick }) => {
  const percentageDone = (currentIndex + 1) / nodesLength;
  return (
    <>
      <div className="m-header">
        <div className="m-header__menu-icon" onClick={onMenuClick}>
          <span />
          <span />
          <span />
        </div>

        <div className="m-header__product-logo">
          <img src={logoImage} />
        </div>
        <div className="m-header__counter">
          {currentIndex + 1} / {nodesLength}
        </div>
      </div>
      <div className="m-sub-header">
        <span className="m-sub-header__highlight">Roadmap:</span> Web
        development with React - from zero to hero!
        <div
          className="m-sub-header__progress"
          style={{
            width: `${percentageDone * 100}%`
          }}
        />
      </div>
    </>
  );
};

const reactDataSet = prepareData(rawReactDataSet);

export const MobileSubject: React.FC<{
  subject: RoadmapEntry;
  canRewind: () => boolean;
  canForward: () => boolean;
  goalsChecked: number[];
  onItemChecked: (i: number) => void;
}> = ({ subject, canRewind, canForward, goalsChecked, onItemChecked }) => {
  const topicsChecked = goalsChecked.filter(
    goal => goal < (subject.topics?.length || 0)
  );
  const practicesChecked = goalsChecked.filter(
    goal => goal >= (subject.topics?.length || 0)
  );

  const allTopicsChecked =
    topicsChecked.length > 0 &&
    topicsChecked.length >= (subject.topics?.length || 0);
  const allPracticesChecked =
    practicesChecked.length > 0 &&
    practicesChecked.length >= (subject.practices?.length || 0);

  return (
    <>
      <div className="m-subject__block">
        <div className="m-subject__caption is-sticky">Subject description</div>
        <div
          className="m-subject__description"
          dangerouslySetInnerHTML={{ __html: subject.description }}
        />
      </div>
      <div className="m-subject__wrapper">
        {/* Custom list */}
        {subject.customList && (
          <div className="m-subject__block">
            <div
              className="m-subject__caption is-sticky"
              key={`custom-list-caption-${subject.id}`}
            >
              <MobileListHeader
                activeNode={subject}
                defaultLabel={subject.customListHeader}
              />
            </div>

            <ul className="m-goal-list" key={subject.id}>
              {subject.customList?.map((listItem, index) => (
                <li
                  className={`m-goal-list__goal`}
                  key={`${subject.id}-${index}`}
                  dangerouslySetInnerHTML={{
                    __html: listItem
                  }}
                />
              ))}
            </ul>
          </div>
        )}
        {/* Topics to cover */}
        {subject.topics && (
          <div className="m-subject__block">
            <div
              className={`m-subject__caption is-sticky ${
                allTopicsChecked ? "is-completed" : ""
              }`}
              key={subject.id}
            >
              <MobileListHeader
                activeNode={subject}
                goalsChecked={topicsChecked}
                totalItems={subject.topics.length}
                defaultLabel={subject.topicsHeader || "Topics to cover"}
              />
            </div>

            <ul className="m-goal-list" key={`topics-caption-${subject.id}`}>
              {subject.topics?.map((listItem, index) => (
                <li
                  className={`m-goal-list__goal is-checkable ${
                    goalsChecked?.includes(index) ? "is-checked" : ""
                  }`}
                  onClick={() => onItemChecked(index)}
                  key={`${subject.id}-${index}`}
                  dangerouslySetInnerHTML={{
                    __html: listItem
                  }}
                />
              ))}
            </ul>
          </div>
        )}
        {/* Practices */}
        {subject.practices && (
          <div className="m-subject__block">
            <div
              className={`m-subject__caption is-sticky ${
                allPracticesChecked ? "is-completed" : ""
              }`}
              key={subject.id}
            >
              <MobileListHeader
                activeNode={subject}
                goalsChecked={practicesChecked}
                totalItems={subject.practices.length}
                defaultLabel={subject.practicesHeader || "Practices"}
              />
            </div>

            <ul className="m-goal-list" key={`practices-caption-${subject.id}`}>
              {subject.practices?.map((listItem, index) => (
                <li
                  className={`m-goal-list__goal is-checkable ${
                    goalsChecked?.includes(
                      index + (subject.topics?.length || 0)
                    )
                      ? "is-checked"
                      : ""
                  }`}
                  onClick={() =>
                    onItemChecked(index + (subject.topics?.length || 0))
                  }
                  key={`${subject.id}-${index}`}
                  dangerouslySetInnerHTML={{
                    __html: listItem
                  }}
                />
              ))}
            </ul>
          </div>
        )}
        {subject.links && (
          <div className="m-subject__block">
            <div
              className="m-subject__caption is-sticky"
              key={`links-caption-${subject.id}`}
            >
              {subject.linksHeader || "Links to useful resources"}
            </div>
            <ul className="m-link-list" key={subject.id}>
              {subject.links.map((listItem, index) =>
                typeof listItem === "object" ? (
                  <li
                    className={`m-link-list__link ${
                      isVideoLink(listItem.title) ? "is-video" : ""
                    }`}
                    key={index}
                  >
                    <a href={listItem.url} target="_blank">
                      {listItem.title}
                    </a>
                    <span className="m-link-list__link-domain">
                      {getUrlDomain(listItem.url)}
                    </span>
                  </li>
                ) : (
                  <li className="m-link-list__link" key={index}>
                    <a href={listItem} target="_blank">
                      {listItem}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

const MobileIntro: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
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
          <header className="m-intro__logo" />
          Interactive roadmap for learning coding, including progress tracker
          and curated resource links.
          <button
            onClick={() => setStep(1)}
            className={`m-intro__start-button`}
          >
            Start
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

export const MobileMenu: React.FC<{
  isShown: boolean;
  subjectList: RoadmapEntry[];
  selectedEntry?: RoadmapEntry;
  onClose: () => void;
  onSelectSubject: (entry: RoadmapEntry) => void;
}> = ({ isShown, subjectList, selectedEntry, onClose, onSelectSubject }) => {
  React.useEffect(() => {
    if (isShown) {
      document.body.classList.add("is-scroll-blocked");
    } else {
      document.body.classList.remove("is-scroll-blocked");
    }
  }, [isShown]);
  return (
    <div className={`m-menu ${isShown ? "is-shown" : ""}`}>
      <div className="m-menu__content">
        <div className="m-menu__close" onClick={onClose} />
        <img src={logoImage} />
        <div className="m-menu__sub-header">
          your interactive roadmap to learn coding
        </div>
        <ul>
          <li className="m-menu__item is-first-level">How to use it?</li>
          <li className="m-menu__item is-first-level">
            Current roadmap:
            <ul>
              <li className="m-menu__item">
                Full-stack web development with React
              </li>
              <li className="m-menu__item">(more coming soon)</li>
            </ul>
          </li>

          <li className="m-menu__item is-first-level">
            Subject list (click to jump):
            <ul>
              {subjectList.map(subject => (
                <li
                  className={`m-menu__item is-selectable ${
                    selectedEntry === subject ? "is-selected" : ""
                  }`}
                  key={subject.id}
                  onClick={() => onSelectSubject(subject)}
                >
                  {subject.title}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const MobileApp = () => {
  const introRef = React.useRef<HTMLDivElement>(null);
  const currentDataSet = reactDataSet;

  const [animatedChange, setAnimatedChange] = React.useState<
    MobileAnimationState
  >(MobileAnimationState.NONE);

  const { checkedGoals, toggleGoal } = useGoals();
  const { activeNode, changeNode, setActiveNode } = useActiveNode(
    currentDataSet
  );
  const [isMenuShown, setMenuShown] = React.useState(false);

  const animateNextNode = (direction?: number) => {
    if (animatedChange !== MobileAnimationState.NONE) {
      return;
    }
    animateScroll(0, 400, "easeInOutQuad");
    if (direction === -1) {
      setAnimatedChange(MobileAnimationState.RIGHT);
    } else {
      setAnimatedChange(MobileAnimationState.LEFT);
    }
  };

  const animationEnded = () => {
    if (animatedChange === MobileAnimationState.LEFT) {
      setAnimatedChange(MobileAnimationState.PRE_RETRACTING_LEFT);
      changeNode();
    }
    if (animatedChange === MobileAnimationState.PRE_RETRACTING_LEFT) {
      setAnimatedChange(MobileAnimationState.RETRACTING_LEFT);
    }
    if (animatedChange === MobileAnimationState.RETRACTING_LEFT) {
      setAnimatedChange(MobileAnimationState.NONE);
    }
    if (animatedChange === MobileAnimationState.RIGHT) {
      setAnimatedChange(MobileAnimationState.PRE_RETRACTING_RIGHT);
      changeNode(-1);
    }
    if (animatedChange === MobileAnimationState.PRE_RETRACTING_RIGHT) {
      setAnimatedChange(MobileAnimationState.RETRACTING_RIGHT);
    }
    if (animatedChange === MobileAnimationState.RETRACTING_RIGHT) {
      setAnimatedChange(MobileAnimationState.NONE);
    }
  };

  const [introShown, setIntroShown] = React.useState(activeNode === -1);
  const [introDisabled, setIntroDisabled] = React.useState(!introShown);

  const activeSubject = currentDataSet[activeNode];

  const canRewind = () => activeNode > 0;
  const canForward = () => activeNode < currentDataSet.length - 1;

  // const reset = () => {
  //   setActiveNode(-1);
  // };

  React.useLayoutEffect(() => {
    if (activeNode === -1) {
      setIntroDisabled(false);
      setIntroShown(true);
    }

    if (
      animatedChange === MobileAnimationState.PRE_RETRACTING_RIGHT &&
      !canRewind()
    ) {
      setAnimatedChange(MobileAnimationState.NONE);
    }

    if (
      animatedChange === MobileAnimationState.PRE_RETRACTING_LEFT &&
      !canForward()
    ) {
      setAnimatedChange(MobileAnimationState.NONE);
    }
  }, [activeNode]);

  return (
    <div className="m-wrapper">
      <MobileHeader
        count={[activeNode, currentDataSet.length]}
        onMenuClick={() => {
          setMenuShown(!isMenuShown);
        }}
      />
      {
        <div
          className={`m-intro ${introShown ? "is-visible" : ""} ${
            introDisabled ? "is-disabled" : ""
          }`}
          ref={introRef}
          onTransitionEnd={e => {
            if (!introShown) {
              setIntroDisabled(true);
            }
          }}
        >
          <MobileIntro
            onFinish={() => {
              setIntroShown(false);
              setActiveNode(0);
            }}
          />
        </div>
      }
      {/* TITLE */}
      {activeSubject && (
        <div className="m-subject__title">
          <button
            className="m-subject__button is-left"
            disabled={!canRewind()}
            onClick={e => {
              e.preventDefault();
              animateNextNode(-1);
            }}
          />

          <div className="m-subject__title-interior">{activeSubject.title}</div>
          <button
            className="m-subject__button is-right"
            disabled={!canForward()}
            onClick={e => {
              e.preventDefault();
              animateNextNode();
            }}
          />
        </div>
      )}
      {/* PREVIOUS SUBJECT */}
      {currentDataSet[activeNode - 1] && (
        <div
          className={`m-other-subject is-previous ${
            animatedChange === MobileAnimationState.RIGHT ? "is-activated" : ""
          } ${
            animatedChange === MobileAnimationState.RETRACTING_RIGHT
              ? "is-retracting"
              : ""
          }`}
          onTransitionEnd={animationEnded}
        >
          <MobileSubject
            subject={currentDataSet[activeNode - 1]}
            canRewind={canRewind}
            canForward={canForward}
            goalsChecked={
              checkedGoals.get(currentDataSet[activeNode - 1].id.toString()) ||
              []
            }
            onItemChecked={i =>
              toggleGoal(currentDataSet[activeNode - 1].id.toString(), i)
            }
          />
        </div>
      )}
      {/* ACTIVE SUBJECT */}
      {activeSubject && (
        <MobileSubject
          subject={activeSubject}
          canRewind={canRewind}
          canForward={canForward}
          goalsChecked={checkedGoals.get(activeSubject.id.toString()) || []}
          onItemChecked={i => toggleGoal(activeSubject.id.toString(), i)}
        />
      )}
      {/* NEXT SUBJECT */}
      {currentDataSet[activeNode + 1] && (
        <div
          className={`m-other-subject is-next ${
            animatedChange === MobileAnimationState.LEFT ? "is-activated" : ""
          } ${
            animatedChange === MobileAnimationState.RETRACTING_LEFT
              ? "is-retracting"
              : ""
          }`}
          onTransitionEnd={animationEnded}
        >
          <MobileSubject
            subject={currentDataSet[activeNode + 1]}
            canRewind={canRewind}
            canForward={canForward}
            goalsChecked={
              checkedGoals.get(currentDataSet[activeNode + 1].id.toString()) ||
              []
            }
            onItemChecked={i =>
              toggleGoal(currentDataSet[activeNode + 1].id.toString(), i)
            }
          />
        </div>
      )}
      <MobileMenu
        onClose={() => setMenuShown(false)}
        isShown={isMenuShown}
        subjectList={currentDataSet}
        selectedEntry={activeSubject}
        onSelectSubject={subject => {
          const index = currentDataSet.findIndex(
            entry => entry.id === subject.id
          );
          if (index > -1) {
            setActiveNode(index);
            setMenuShown(false);
          }
        }}
      />
    </div>
  );
};
