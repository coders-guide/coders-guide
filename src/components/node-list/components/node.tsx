import * as React from "react";
import { RoadmapEntry } from "../../../types";

const NODE_CATEGORY_SHIFT = 460;

const Progress: React.FC<{ completed: number; sum: number }> = ({
  completed,
  sum
}) => (
  <div
    className={`record__progress ${completed === sum ? "is-completed" : ""}`}
  >{`${completed}/${sum}`}</div>
);

const SingleGoal: React.FC<{ isDone: boolean }> = ({ isDone }) => (
  <div className={`record__progress is-single ${isDone ? "is-completed" : ""}`}>
    Done
  </div>
);

export const Node: React.FC<{
  node: RoadmapEntry;
  activeNode: number;
  setActiveNode: (n: number) => void;
  index: number;
  checkedGoals?: number[];
  searchHighlight?: string;
}> = ({
  node,
  activeNode,
  setActiveNode,
  index,
  checkedGoals,
  searchHighlight
}) => {
  const completedChecklistItems = (checkedGoals || []).length;
  const sumChecklistItems =
    (node.topics?.length || 0) + (node.practices?.length || 0);
  const isChecklistCompleted =
    (node.isSingleGoal && (checkedGoals || []).includes(0)) ||
    (completedChecklistItems > 0 &&
      completedChecklistItems === sumChecklistItems);

  const highlightedText = React.useMemo(() => {
    const sourceText = node.summary || node.description;

    if (!searchHighlight) {
      return sourceText;
    }

    var innerHTML = sourceText.toLowerCase();
    var index = innerHTML.indexOf(searchHighlight);
    if (index >= 0) {
      return (
        sourceText.substring(0, index) +
        '<span class="is-highlighted">' +
        sourceText.substring(index, index + searchHighlight.length) +
        "</span>" +
        sourceText.substring(index + searchHighlight.length)
      );
    }

    return sourceText;
  }, [searchHighlight]);

  return (
    <div
      data-category={node.category}
      data-node={index}
      style={{
        transform: `translateX(${node.category * NODE_CATEGORY_SHIFT}px)`
      }}
      className={`record ${isChecklistCompleted ? "is-completed" : ""} ${
        index === activeNode ? "is-active" : ""
      } category-${node.category}`}
    >
      <h1
        onClick={() => setActiveNode(index)}
        className={isChecklistCompleted ? "is-completed" : ""}
      >
        {node.title}
      </h1>
      <div
        className={`record__content ${
          isChecklistCompleted ? "is-completed" : ""
        }`}
        onClick={() => setActiveNode(index)}
      >
        <div className="record__index">
          <div className="record__index__counter">{index}.</div>
          {isChecklistCompleted && (
            <div className="record__index__indication">
              <span className="icon icon-check large margin-left" />
            </div>
          )}
          {node.repeatable && (
            <div className="record__index__indication">
              <span className="icon icon-repeat large margin-left" />
            </div>
          )}
          {node.difficult && (
            <div className="record__index__indication">
              <span className="icon icon-star large" />
            </div>
          )}
        </div>

        <span dangerouslySetInnerHTML={{ __html: highlightedText }} />
      </div>
      <div className="record__bottom">
        {(node.topics || node.practices) && (
          <Progress
            completed={completedChecklistItems}
            sum={sumChecklistItems}
          />
        )}
        {node.isSingleGoal && (
          <SingleGoal isDone={Boolean((checkedGoals || []).includes(0))} />
        )}
        <button
          className="record__button"
          onClick={() => setActiveNode(index + 1)}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};
