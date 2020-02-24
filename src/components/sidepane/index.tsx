import * as React from "react";

import "./index.scss";
import { RoadmapEntry } from "../../types";
import { getUrlDomain, isVideoLink } from "../../utils";
import targetIcon from "../../assets/target.svg";
import gymIcon from "../../assets/gym.svg";
import linkIcon from "../../assets/link2.svg";
import checkIcon from "../../assets/check-white.svg";

type SidepaneMode = "topics" | "practices" | "links";

const SidepaneNav: React.FC<{
  activeNode: RoadmapEntry;
  sidepaneMode: SidepaneMode;
  setSidepaneMode: (mode: SidepaneMode) => void;
  topicsDone?: boolean;
  practicesDone?: boolean;
}> = ({
  activeNode,
  sidepaneMode,
  setSidepaneMode,
  topicsDone = false,
  practicesDone = false
}) => {
  const tabsCount =
    (activeNode.topics?.length ? 1 : 0) +
    (activeNode.practices?.length ? 1 : 0) +
    (activeNode.links?.length ? 1 : 0);

  return (
    <div className="sidepane__nav">
      {(activeNode.topics?.length || activeNode.customList?.length) && (
        <button
          className={`is-one-of-${tabsCount} ${
            sidepaneMode === "topics" ? "is-active" : ""
          } ${topicsDone ? "is-completed" : ""}`}
          onClick={() => setSidepaneMode("topics")}
        >
          <img src={topicsDone ? checkIcon : targetIcon} />
          <span>Topics</span>
        </button>
      )}
      {activeNode.practices?.length && (
        <button
          className={`is-one-of-${tabsCount} ${
            sidepaneMode === "practices" ? "is-active" : ""
          } ${practicesDone ? "is-completed" : ""}`}
          onClick={() => setSidepaneMode("practices")}
        >
          <img src={practicesDone ? checkIcon : gymIcon} />
          <span>Practices</span>
        </button>
      )}
      {activeNode.links?.length && (
        <button
          className={`is-one-of-${tabsCount} ${
            sidepaneMode === "links" ? "is-active" : ""
          }`}
          onClick={() => setSidepaneMode("links")}
        >
          <img src={linkIcon} />
          <span>Links</span>
        </button>
      )}
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
  changeNode: (n?: number) => void;
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
  const initialMode: SidepaneMode =
    activeNode.topics?.length || activeNode.customList?.length
      ? "topics"
      : "practices";

  const [sidepaneMode, setSidepaneMode] = React.useState<SidepaneMode>(
    initialMode
  );

  React.useEffect(() => {
    setSidepaneMode(initialMode);
  }, [activeNode]);

  const canRewind = () => activeNodeIndex > 0;
  const canForward = () => activeNodeIndex < nodesCount - 1;

  const isSubjectNode = activeNode.type === "node";

  const topicsChecked = goalsChecked.filter(
    goal => goal < (activeNode.topics?.length || 0)
  );
  const practicesChecked = goalsChecked.filter(
    goal => goal >= (activeNode.topics?.length || 0)
  );

  const topicsDone = topicsChecked.length === activeNode.topics?.length;
  const practicesDone =
    practicesChecked.length === activeNode.practices?.length;

  return (
    <>
      {isSubjectNode && (
        <>
          <div className="sidepane__top-bar">
            <h3 className="sidepane__index">subject #{activeNodeIndex}</h3>
          </div>
          <h1 className="sidepane__header">{activeNode.title}</h1>

          <div className="sidepane__scrollable">
            <p
              className="sidepane__description"
              dangerouslySetInnerHTML={{ __html: activeNode.description }}
            />
            {(activeNode.repeatable || activeNode.difficult) && (
              <div className="sidepane__legend">
                <ul>
                  {activeNode.repeatable && (
                    <li>
                      <span className="icon icon-repeat small" />
                      &nbsp;&nbsp;you should practice the subject very often, it
                      is particularly recommended to be exercised frequently
                    </li>
                  )}
                  {activeNode.difficult && (
                    <li>
                      <span className="icon icon-star small" />
                      &nbsp;&nbsp;consider this subject as an "extra" one - it
                      might be more difficult than the others, but still it's
                      certainly worthwile and beneficial for your further
                      development
                    </li>
                  )}
                </ul>
              </div>
            )}
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
            <SidepaneNav
              key={activeNodeIndex}
              activeNode={activeNode}
              sidepaneMode={sidepaneMode}
              setSidepaneMode={setSidepaneMode}
              topicsDone={topicsDone}
              practicesDone={practicesDone}
            />
            <div className="sidepane__content">
              {sidepaneMode === "topics" && (
                <List
                  activeNode={activeNode}
                  list={activeNode.customList}
                  hasGoals={false}
                  header={activeNode.customListHeader}
                />
              )}

              {sidepaneMode === "topics" && (
                <List
                  activeNode={activeNode}
                  list={activeNode.topics}
                  hasGoals={true}
                  header={activeNode.topicsHeader || "Topics to cover"}
                  goalsChecked={topicsChecked}
                  onItemChecked={onItemChecked}
                />
              )}

              {sidepaneMode === "practices" && (
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
              )}

              {sidepaneMode === "links" && <LinkList activeNode={activeNode} />}
            </div>
          </div>
        </>
      )}

      {!isSubjectNode && (
        <div className="sidepane__milestone">
          {!canRewind() || !canForward()
            ? ""
            : "select a subject to see its description"}
        </div>
      )}

      {canRewind() && canForward() && (
        <div className="sidepane__footer">
          <div className="sidepane__next-button-container">
            <button
              onClick={() => changeNode()}
              className="sidepane__next-button"
            >
              Next subject
            </button>
          </div>
        </div>
      )}
    </>
  );
};
