import * as React from "react";

import "./index.scss";
import { RoadmapEntry } from "../../types";
import { getUrlDomain } from "../../utils";

const isVideoLink = (url: string) => {
  return url.indexOf("Video:") === 0;
};

const ListHeader: React.FC<{
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

export const Sidepane: React.FC<{
  activeNode: RoadmapEntry;
  activeNodeIndex: number;
  changeNode: (n: number) => void;
  nodesCount: number;
  onItemChecked: (index?: number) => void;
  goalsChecked: number[];
}> = ({
  activeNode,
  changeNode,
  nodesCount,
  activeNodeIndex,
  onItemChecked,
  goalsChecked
}) => {
  const [sidepaneMode, setSidepaneMode] = React.useState<
    "checklist" | "resources"
  >("resources");

  React.useEffect(() => {
    setSidepaneMode("checklist");
  }, [activeNode]);

  const canRewind = () => activeNodeIndex > 0;
  const canForward = () => activeNodeIndex < nodesCount - 1;

  const shouldDisplayContent = activeNode.type === "node";
  const containsResources = Boolean(activeNode.links?.length);

  const topicsChecked = goalsChecked.filter(
    goal => goal < (activeNode.topics?.length || 0)
  );
  const practicesChecked = goalsChecked.filter(
    goal => goal >= (activeNode.topics?.length || 0)
  );

  return (
    <>
      {shouldDisplayContent && (
        <>
          <h1 className="sidepane__header">{activeNode.title}</h1>
        </>
      )}
      {sidepaneMode === "checklist" && shouldDisplayContent && (
        <div className="sidepane__content">
          <p dangerouslySetInnerHTML={{ __html: activeNode.description }} />
          {/* Custom list */}
          {activeNode.customList && (
            <p className={`sidepane__checklist-caption`}>
              <ListHeader
                activeNode={activeNode}
                defaultLabel={activeNode.customListHeader}
              />
            </p>
          )}
          <ul className="sidepane__goal-list">
            {activeNode.customList?.map((listItem, index) => (
              <li
                className={`sidepane__goal`}
                key={`${activeNode.id}-${index}`}
                dangerouslySetInnerHTML={{ __html: listItem }}
              />
            ))}
          </ul>
          {/* Topics to cover */}
          {activeNode.topics && (
            <p
              className={`sidepane__checklist-caption ${
                topicsChecked.length >= activeNode.topics.length
                  ? "is-completed"
                  : ""
              }`}
            >
              <ListHeader
                activeNode={activeNode}
                goalsChecked={topicsChecked}
                totalItems={activeNode.topics.length}
                defaultLabel={activeNode.topicsHeader || "Topics to cover"}
              />
            </p>
          )}
          <ul className="sidepane__goal-list">
            {activeNode.topics?.map((listItem, index) => (
              <li
                className={`sidepane__goal is-checkable ${
                  goalsChecked?.includes(index) ? "is-checked" : ""
                }`}
                onClick={() => onItemChecked(index)}
                key={`${activeNode.id}-${index}`}
                dangerouslySetInnerHTML={{ __html: listItem }}
              />
            ))}
          </ul>
          {/* Practices */}
          {activeNode.practices && (
            <p
              className={`sidepane__checklist-caption ${
                practicesChecked.length >= activeNode.practices.length
                  ? "is-completed"
                  : ""
              }`}
            >
              <ListHeader
                activeNode={activeNode}
                goalsChecked={practicesChecked}
                totalItems={activeNode.practices.length}
                defaultLabel={activeNode.practicesHeader || "Practices"}
              />
            </p>
          )}
          <ul className="sidepane__goal-list">
            {activeNode.practices?.map((listItem, index) => (
              <li
                className={`sidepane__goal is-checkable ${
                  goalsChecked?.includes(
                    index + (activeNode.topics?.length || 0)
                  )
                    ? "is-checked"
                    : ""
                }`}
                onClick={() =>
                  onItemChecked(index + (activeNode.topics?.length || 0))
                }
                key={`${activeNode.id}-${index}`}
                dangerouslySetInnerHTML={{ __html: listItem }}
              />
            ))}
          </ul>

          {activeNode.isSingleGoal && (
            <ul className="sidepane__goal-list is-single">
              <li
                className={`sidepane__goal ${
                  goalsChecked?.includes(0) ? "is-checked" : ""
                } is-checkable`}
                onClick={() => onItemChecked()}
              >
                Mark as done
              </li>
            </ul>
          )}
        </div>
      )}
      {sidepaneMode === "resources" && shouldDisplayContent && (
        <div className="sidepane__content">
          <h3>{activeNode.linksHeader || "Links to useful resources:"}</h3>
          <ul className="sidepane__link-list">
            {activeNode.links?.map((listItem, index) =>
              typeof listItem === "object" ? (
                <li
                  className={`sidepane__link ${
                    isVideoLink(listItem.title) ? "is-video" : ""
                  }`}
                  key={index}
                >
                  <a href={listItem.url} target="_blank">
                    {listItem.title}
                  </a>
                  <span className="sidepane__link-domain">
                    {getUrlDomain(listItem.url)}
                  </span>
                </li>
              ) : (
                <li className="sidepane__link" key={index}>
                  <a href={listItem} target="_blank">
                    {listItem}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
      {!shouldDisplayContent && (
        <div className="sidepane__content is-heading">
          Select a subject to see its description
        </div>
      )}
      <div className="sidepane__actions">
        <div className="sidepane__actions--left">
          {shouldDisplayContent && (
            <>
              <button
                className={sidepaneMode === "checklist" ? "is-active" : ""}
                onClick={() => setSidepaneMode("checklist")}
              >
                Description
              </button>
              {containsResources && (
                <button
                  className={sidepaneMode === "resources" ? "is-active" : ""}
                  onClick={() => setSidepaneMode("resources")}
                >
                  Resources
                </button>
              )}
            </>
          )}
        </div>
        <div className="sidepane__actions--right">
          <button
            className="is-active is-arrow"
            disabled={!canRewind()}
            onClick={() => changeNode(-1)}
          >
            <span className="icon icon-arrow shrinking" />
          </button>
          <button
            disabled={!canForward()}
            className="is-active is-arrow is-last"
            onClick={() => changeNode(1)}
          >
            <span className="icon icon-arrow shrinking" />
          </button>
        </div>
      </div>
    </>
  );
};
