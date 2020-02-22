import * as React from "react";
import { MobileAnimationState } from "../../../types";
import { scrollIt as animateScroll } from "../utils";

export const useAnimatedNavigation = (
  changeNode: (direction?: number) => void,
  activeNode: number,
  canRewind: () => boolean,
  canForward: () => boolean
) => {
  const [animatedChange, setAnimatedChange] = React.useState<
    MobileAnimationState
  >(MobileAnimationState.NONE);

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

  React.useLayoutEffect(() => {
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

  return { animateNextNode, animationEnded, animatedChange, setAnimatedChange };
};

export const useMobileWelcomeScreen = (activeNode: number) => {
  const [welcomeScreenShown, setWelcomeScreenShown] = React.useState(
    activeNode === -1
  );
  const [welcomeScreenDisabled, setWelcomeScreenDisabled] = React.useState(
    !welcomeScreenShown
  );

  React.useLayoutEffect(() => {
    if (activeNode === -1) {
      setWelcomeScreenDisabled(false);
      setWelcomeScreenShown(true);
    }
  }, [activeNode]);

  const showWelcomeScreen = (activeNodeIndex?: number) => {
    setWelcomeScreenDisabled(false);
    setWelcomeScreenShown(true);
  };

  const disableWelcomeScreen = () => {
    if (!welcomeScreenShown) {
      setWelcomeScreenDisabled(true);
    }
  };

  const hideWelcomeScreen = () => {
    setWelcomeScreenShown(false);
  };

  return {
    // setWelcomeScreenShown,
    disableWelcomeScreen,
    welcomeScreenDisabled,
    setWelcomeScreenDisabled,
    welcomeScreenShown,
    showWelcomeScreen,
    hideWelcomeScreen
  };
};
