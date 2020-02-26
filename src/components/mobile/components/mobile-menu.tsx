import * as React from "react";

import logoImage from "../../../assets/logo_updated.svg";
import { RoadmapEntry } from "../../../types";

export const MobileMenu: React.FC<{
  isShown: boolean;
  subjectList: RoadmapEntry[];
  selectedEntry?: RoadmapEntry;
  onClose: () => void;
  onHelpClicked: () => void;
  onSelectSubject: (entry: RoadmapEntry) => void;
}> = ({
  isShown,
  subjectList,
  selectedEntry,
  onClose,
  onSelectSubject,
  onHelpClicked
}) => {
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
          <li className="m-menu__item is-first-level" onClick={onHelpClicked}>
            How to use it?
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
          <li className="m-menu__item is-first-level">
            Credits:
            <ul>
              <li className="m-menu__item">
                Created by{" "}
                <a href="http://www.hubertzub.com/" target="_blank">
                  Hubert Zub
                </a>{" "}
                in{" "}
                <a
                  href="https://www.google.com/maps/place/Bialystok/data=!4m2!3m1!1s0x471ffc048f41971d:0x72317dcc8bf07b2c?sa=X&ved=2ahUKEwj4k9rt4KHnAhWFblAKHTUXBlIQ8gEwAHoECAsQAQ"
                  target="_blank"
                >
                  Białystok, Poland
                </a>
              </li>

              <li className="m-menu__item">
                Using code from{" "}
                <a
                  href="https://github.com/graphql-editor/diagram"
                  target="_blank"
                >
                  Diagram
                </a>{" "}
                by{" "}
                <a href="https://graphqleditor.com" target="_blank">
                  GraphQL editor
                </a>
              </li>
              <li className="m-menu__item">
                Testing and text fixes by{" "}
                <a href="https://github.com/vveronika" target="_blank">
                  Weronika
                </a>
              </li>
              <li className="m-menu__item">
                Using free icons from{" "}
                <a href="http://www.onlinewebfonts.com/icon" target="_blank">
                  OnlineWebFonts
                </a>
                ,{" "}
                <a href="https://iconmonstr.com/" target="_blank">
                  IconMonstr
                </a>{" "}
                and{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Flaticon"
                  target="_blank"
                >
                  Freepik on Flaticon
                </a>
              </li>
              <li className="m-menu__item">
                Heavily inspired by education effort in{" "}
                <a href="http://www.eyedea.io" target="_blank">
                  EYEDEA
                </a>{" "}
                ❤️
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
