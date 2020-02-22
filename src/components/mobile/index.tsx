import "./index.scss";

import * as React from "react";

import { list as rawReactDataSet } from "../../data/react";
import { MobileAnimationState } from "../../types";
import { prepareData } from "../../utils";
import { useActiveNode } from "../../utils/hooks/useActiveNode";
import { useGoals } from "../../utils/hooks/useGoals";
import { MOBILE_STEPS, useIntro } from "../../utils/hooks/useIntro";
import { MobileHeader } from "./components/mobile-header";
import { MobileIntro } from "./components/mobile-intro";
import { MobileMenu } from "./components/mobile-menu";
import { MobileSubject } from "./components/mobile-subject";
import {
  useMobileWelcomeScreen,
  useAnimatedNavigation
} from "./hooks/use-mobile-navigation";

const reactDataSet = prepareData(rawReactDataSet);

export const MobileApp = () => {
  const introRef = React.useRef<HTMLDivElement>(null);
  const currentDataSet = reactDataSet;

  const { checkedGoals, toggleGoal } = useGoals();
  const { activeNode, changeNode, setActiveNode } = useActiveNode(
    currentDataSet
  );
  const [isMenuShown, setMenuShown] = React.useState(false);
  const { runIntro /* isIntroShown */ } = useIntro(MOBILE_STEPS);

  const activeSubject = currentDataSet[activeNode];

  const canRewind = () => activeNode > 0;
  const canForward = () => activeNode < currentDataSet.length - 1;

  const {
    welcomeScreenShown,
    disableWelcomeScreen,
    welcomeScreenDisabled,
    showWelcomeScreen,
    hideWelcomeScreen
  } = useMobileWelcomeScreen(activeNode);

  const {
    animatedChange,
    animateNextNode,
    animationEnded
  } = useAnimatedNavigation(changeNode, activeNode, canRewind, canForward);

  const setHelpShown = () => {
    setMenuShown(false);
    showWelcomeScreen();
  };

  const onIntroFinish = () => {
    hideWelcomeScreen();
    setActiveNode(1);

    runIntro(() => {
      setActiveNode(activeNode > -1 ? activeNode : 0);
    });
  };

  return (
    <div className="m-wrapper">
      <MobileHeader
        count={[activeNode, currentDataSet.length]}
        onMenuClick={() => {
          setMenuShown(!isMenuShown);
        }}
      />
      {!welcomeScreenDisabled && (
        <div
          className={`m-intro ${welcomeScreenShown ? "is-visible" : ""} `}
          ref={introRef}
          onTransitionEnd={disableWelcomeScreen}
        >
          <MobileIntro onFinish={onIntroFinish} />
        </div>
      )}
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
      <div
        className={`m-current-subject
        ${
          animatedChange === MobileAnimationState.RIGHT ||
          animatedChange === MobileAnimationState.LEFT
            ? "is-deactivated"
            : ""
        }
        ${animatedChange === MobileAnimationState.LEFT ? "is-moving-left" : ""}
        ${
          animatedChange === MobileAnimationState.RIGHT ? "is-moving-right" : ""
        }
        `}
      >
        {activeSubject && (
          <MobileSubject
            key={activeNode}
            subject={activeSubject}
            canRewind={canRewind}
            canForward={canForward}
            goalsChecked={checkedGoals.get(activeSubject.id.toString()) || []}
            onItemChecked={i => toggleGoal(activeSubject.id.toString(), i)}
            isFirst={activeNode === 0}
            onNextClick={() => animateNextNode()}
          />
        )}
      </div>
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
        onHelpClicked={() => setHelpShown()}
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
