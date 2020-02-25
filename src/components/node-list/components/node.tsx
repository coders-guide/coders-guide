import * as React from "react";
import { RoadmapEntry } from "../../../types";

const NODE_CATEGORY_SHIFT = 460;

const ProgressIndicator: React.FC<{ completed: number; sum: number }> = ({
  completed,
  sum
}) => (
  <div
    className={`record__progress ${completed === sum ? "is-completed" : ""}`}
  >{`${completed}/${sum}`}</div>
);

const SingleGoalIndicator: React.FC<{ isDone: boolean }> = ({ isDone }) => (
  <div className={`record__progress is-single ${isDone ? "is-completed" : ""}`}>
    Done
  </div>
);

const highlightText = (subject: string, searchedText: string) => {
  var index = subject.toLowerCase().indexOf(searchedText.toLowerCase());
  if (index >= 0) {
    return (
      subject.substring(0, index) +
      '<span class="is-highlighted">' +
      subject.substring(index, index + searchedText.length) +
      "</span>" +
      subject.substring(index + searchedText.length)
    );
  }
  return subject;
};

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

  const [highlightedHeader, highlightedDescription] = React.useMemo(() => {
    const headerText = node.title;
    const sourceText = node.summary || node.description;

    if (!searchHighlight) {
      return [headerText, sourceText];
    }

    return [
      highlightText(headerText, searchHighlight),
      highlightText(sourceText, searchHighlight)
    ];
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
        dangerouslySetInnerHTML={{ __html: highlightedHeader }}
      />
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

        <span dangerouslySetInnerHTML={{ __html: highlightedDescription }} />
      </div>
      <div className="record__bottom">
        {(node.topics || node.practices) && (
          <ProgressIndicator
            completed={completedChecklistItems}
            sum={sumChecklistItems}
          />
        )}
        {node.isSingleGoal && (
          <SingleGoalIndicator
            isDone={Boolean((checkedGoals || []).includes(0))}
          />
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
