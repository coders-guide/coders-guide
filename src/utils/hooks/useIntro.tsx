import * as React from "react";
import IntroJS, { Options } from "intro.js";
import "intro.js/introjs.css";
import "../styles/intro-override.scss";

export type IntroStep = {
  text: string;
  selector?: string;
  lightHighlight?: boolean;
  isSidepaneHint?: boolean;
};

export const MOBILE_STEPS: IntroStep[] = [
  {
    text: "You can see the current subject here",
    selector: ".m-subject__title"
  },
  {
    text: "Use this arrow to move to the next subject",
    selector: ".m-subject__button.is-right"
  },
  {
    text:
      "In this place, you will see what the subject is about. You can expect to see general guidelines and suggestions here.",
    selector: ".m-current-subject .m-subject__description"
  },
  {
    text:
      "Each subject contain list of subtopics to cover and <strong>links with educational material</strong>. Many of them also have suggested practices, check them out!",
    selector: ".m-current-subject .m-goal-list"
  }
];

export const DESKTOP_STEPS: IntroStep[] = [
  {
    text:
      '<header>Welcome to the roadmap!</header><p>Click "next" button to start the short tour.</p>',
    selector: undefined
  },
  {
    text:
      "<header>Subject title</header><p>You will see the name of your currently selected subject here.</p>",
    selector: ".sidepane__header",
    isSidepaneHint: true
  },
  {
    text:
      "<header>Subject description</header><p>In this place, you will see what the subject is about. You can expect to see general guidelines and suggestions here.</p>",
    selector: ".sidepane__description",
    isSidepaneHint: true
  },
  {
    text:
      "<header>Subject tabs</header><p>Each subject contain list of subtopics to cover and <strong>links with educational material</strong>. Many of them also have suggested practices, check them out!</p>",
    selector: ".sidepane__nav",
    isSidepaneHint: true
  },
  {
    text:
      "<header>Subtopics, practices and links</header><p>Depending on selected tab, you will see list of either topics, practices or links in this place.</p><p><strong>In case of topics and practices, you can click on them in order to mark it as completed.</strong></p>",
    selector: ".sidepane__content",
    isSidepaneHint: true
  },
  {
    text:
      "<header>Roadmap view</header><p>You can see subjects and milestones in the main roadmap view here. Notice that subjects are divided into columns - this indicates which category the subject is related to.</p>",
    selector: ".diagram-container",
    lightHighlight: true
  },
  {
    text:
      "<header>Progress bar</header><p>You will see your linear progress here - you can click on it to quickly move to another subject.</p>",
    selector: ".progressbar"
  }
];

/**
 * Since intro.js is imperative and it's difficult to
 * wait for visibility of certain elements in a declarative way,
 * waitForElements function is made for watching the DOM tree and waiting
 * for certain elements to show.
 */
const waitForElements = (selectorList: string[]) => {
  const allElementsExist = () =>
    !selectorList
      .map(selector => document.querySelector(selector))
      .some(s => !s);

  const OBSERVE_TIMEOUT = 250;
  return new Promise(resolve => {
    if (!window.MutationObserver) {
      setTimeout(() => {
        resolve();
      }, OBSERVE_TIMEOUT);
      return;
    }

    if (allElementsExist()) {
      resolve();
      return;
    }

    var observer = new MutationObserver(function(mutations, me) {
      if (allElementsExist()) {
        me.disconnect();
        resolve();
        return;
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true
    });

    setTimeout(() => {
      observer.disconnect();
      resolve();
      return;
    }, OBSERVE_TIMEOUT);
  });
};

export const useIntro = (steps: IntroStep[]) => {
  const [isIntroShown, setIntroShown] = React.useState(false);
  const elementList = steps.map(p => p.selector).filter(Boolean) as string[];
  const runIntro = (closeCallback: () => void) => {
    waitForElements(elementList).then(() => {
      const intro = IntroJS();
      const introOptions: Partial<Options> = {
        keyboardNavigation: false,
        showBullets: false,
        showProgress: true,
        exitOnOverlayClick: false,
        exitOnEsc: false,
        disableInteraction: true,
        scrollToElement: false,
        hideNext: true,
        hidePrev: true
      };
      const setSteps = () => {
        intro.setOptions({
          steps: steps.map((step, index) => ({
            intro: step.text,
            highlightClass: step.lightHighlight ? "is-light" : undefined,
            tooltipClass: index === steps.length - 1 ? "is-last" : undefined,
            position: step.isSidepaneHint ? "right" : undefined,
            element: step.selector
              ? document.querySelector(step.selector) || undefined
              : undefined
          })),
          ...introOptions
        });
      };
      setSteps();
      setIntroShown(true);
      const introClosed = () => {
        closeCallback();
        setIntroShown(false);
      };
      intro.start();
      intro.onbeforechange(() => {
        setSteps();
        intro.refresh();
      });
      intro.oncomplete(introClosed);
      intro.onexit(introClosed);
    });
  };
  return { runIntro, isIntroShown };
};
