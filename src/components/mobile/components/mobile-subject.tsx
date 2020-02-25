import * as React from "react";

import { RoadmapEntry } from "../../../types";
import { getUrlDomain, isVideoLink } from "../../../utils";
import { MobileListHeader } from "./mobile-list-header";

export const MobileSubject: React.FC<{
  subject: RoadmapEntry;
  canRewind: () => boolean;
  canForward: () => boolean;
  goalsChecked: number[];
  onItemChecked: (i: number) => void;
  isFirst?: boolean;
  onNextClick?: () => void;
}> = ({
  subject,
  canRewind,
  canForward,
  goalsChecked,
  onItemChecked,
  isFirst,
  onNextClick
}) => {
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
        {subject.type !== "heading" && (
          <div className="m-subject__caption is-sticky">
            Subject description
          </div>
        )}
        <div
          className={`m-subject__description is-type-${subject.type}`}
          dangerouslySetInnerHTML={{ __html: subject.description }}
        />
        {isFirst && (
          <button
            className="m-subject__first-start-button"
            onClick={() => onNextClick && onNextClick()}
          >
            Begin with first subject
          </button>
        )}
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
