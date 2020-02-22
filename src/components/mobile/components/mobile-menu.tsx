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
          {/* <li className="m-menu__item is-first-level">
            Current roadmap:
            <ul>
              <li className="m-menu__item">
                Full-stack web development with React
              </li>
              <li className="m-menu__item">(more coming soon)</li>
            </ul>
          </li> */}

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
