import * as React from "react";

import "./index.scss";
import { RoadmapEntry } from "../../types";
import { getUrlDomain } from "../../utils";

const isVideoLink = (url: string) => {
  return url.indexOf("Video:") === 0;
};

const SidepaneNav: React.FC = () => {
  return (
    <div className="sidepane__nav">
      <span className="fill-start" />
      <button className="is-active">Topics</button>
      <button>Practices</button>
      <button>Links</button>
      <span className="fill-start" />
    </div>
  );
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

const List: React.FC<{
  activeNode: RoadmapEntry;
  list?: string[];
  header?: string;
  hasGoals: boolean;
  goalsChecked?: number[];
  onItemChecked?: (index: number) => void;
}> = ({
  activeNode,
  list,
  header,
  hasGoals = false,
  goalsChecked,
  onItemChecked
}) => {
  if (!list) {
    return null;
  }

  return (
    <>
      {hasGoals && goalsChecked ? (
        <p
          className={`sidepane__checklist-caption ${
            goalsChecked.length >= list.length ? "is-completed" : ""
          }`}
        >
          <ListHeader
            activeNode={activeNode}
            goalsChecked={goalsChecked}
            totalItems={list.length}
            defaultLabel={header}
          />
        </p>
      ) : (
        <p className={`sidepane__checklist-caption`}>
          <ListHeader activeNode={activeNode} defaultLabel={header} />
        </p>
      )}

      {hasGoals && onItemChecked ? (
        <ul className="sidepane__goal-list">
          {list.map((listItem, index) => (
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
      ) : (
        <ul className="sidepane__goal-list">
          {list.map((listItem, index) => (
            <li
              className={`sidepane__goal`}
              key={`${activeNode.id}-${index}`}
              dangerouslySetInnerHTML={{ __html: listItem }}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export const LinkList: React.FC<{
  activeNode: RoadmapEntry;
}> = ({ activeNode }) => {
  if (!activeNode.links) {
    return null;
  }
  return (
    <>
      <h3 className="sidepane__link-header">
        {activeNode.linksHeader || "Links to useful resources:"}
      </h3>
      <ul className="sidepane__link-list">
        {activeNode.links.map((listItem, index) =>
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
    </>
  );
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

  // const canRewind = () => activeNodeIndex > 0;
  // const canForward = () => activeNodeIndex < nodesCount - 1;

  const isSubjectNode = activeNode.type === "node";

  const topicsChecked = goalsChecked.filter(
    goal => goal < (activeNode.topics?.length || 0)
  );
  const practicesChecked = goalsChecked.filter(
    goal => goal >= (activeNode.topics?.length || 0)
  );

  return (
    <>
      {isSubjectNode && (
        <>
          <h1 className="sidepane__header">{activeNode.title}</h1>

          <div className="sidepane__scrollable">
            <p
              className="sidepane__description"
              dangerouslySetInnerHTML={{ __html: activeNode.description }}
            />

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

            <SidepaneNav />
            <div className="sidepane__content">
              <List
                activeNode={activeNode}
                list={activeNode.customList}
                hasGoals={false}
                header={activeNode.customListHeader}
              />

              <List
                activeNode={activeNode}
                list={activeNode.topics}
                hasGoals={true}
                header={activeNode.topicsHeader || "Topics to cover"}
                goalsChecked={topicsChecked}
                onItemChecked={onItemChecked}
              />

              <List
                activeNode={activeNode}
                list={activeNode.practices}
                hasGoals={true}
                header={activeNode.practicesHeader || "Practices"}
                goalsChecked={practicesChecked.map(
                  goal => goal - (activeNode.topics?.length || 0)
                )}
                onItemChecked={i =>
                  onItemChecked(i + (activeNode.topics?.length || 0))
                }
              />
              <LinkList activeNode={activeNode} />
            </div>
          </div>
        </>
      )}
      {sidepaneMode === "resources" && isSubjectNode && (
        <div className="sidepane__content"></div>
      )}
      {!isSubjectNode && (
        <div className="sidepane__milestone">
          Select a subject to see its description
        </div>
      )}
      {/* <div className="sidepane__actions">
        <div className="sidepane__actions--left">
          {isSubjectNode && (
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
      </div> */}
    </>
  );
};
