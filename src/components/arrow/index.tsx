import * as React from "react";
import { RoadmapEntry } from "../../types";
import { isInternetExplorer } from "../../utils";

import "./index.scss";

export const Arrow: React.FC<{
  node: RoadmapEntry;
  nextNode: RoadmapEntry;
  isActive?: boolean;
}> = ({ node, nextNode, isActive }) => {
  if (isInternetExplorer()) {
    return null;
  }

  return (
    <div className="arrowContainer">
      <div
        className={`arrow ${
          node.category > nextNode.category
            ? "left-down"
            : node.category < nextNode.category
            ? "right-down"
            : ""
        } ${isActive ? "is-active" : ""}`}
        style={{
          gridColumnStart:
            Math.min(node.category || 0, nextNode.category || 0) * 4 + 2,
          gridColumnEnd:
            Math.max(node.category || 0, nextNode.category || 0) * 4 + 2 + 1
        }}
      >
        <div className="arrow__pre-dot" />
        <div className="arrow__post-dot" />
      </div>
    </div>
  );
};
