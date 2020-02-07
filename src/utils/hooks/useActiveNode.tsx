import * as React from "react";
import { RoadmapEntry } from "../../types";
import { LOCAL_STORAGE_KEY_ACTIVE_NODE_INDEX } from "../../common/constants";

export const useActiveNode = (currentDataSet: RoadmapEntry[]) => {
  const [activeNode, setActiveNode] = React.useState<number>(() => {
    const activeNodeIndexString =
      localStorage.getItem(LOCAL_STORAGE_KEY_ACTIVE_NODE_INDEX) || "";
    const activeNodeIndex = parseInt(activeNodeIndexString);
    if (!isNaN(activeNodeIndex)) {
      return activeNodeIndex;
    }

    return -1;
  });

  const changeNode = (direction: number = 1) => {
    if (
      activeNode + direction < 0 ||
      activeNode + direction > currentDataSet.length - 1
    ) {
      return;
    }
    setActiveNode(activeNode + direction);
  };

  React.useEffect(() => {
    if (activeNode > -1) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY_ACTIVE_NODE_INDEX,
        JSON.stringify(activeNode)
      );
    }

    const listener = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        changeNode();
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        changeNode(-1);
      }
    };
    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [activeNode]);

  const jumpToNode = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const mouseX = e.clientX;
    const elementWidth = e.currentTarget.getBoundingClientRect().width;
    const percentage = mouseX / elementWidth;
    const targetNodeIndex = Math.max(
      0,
      Math.ceil(currentDataSet.length * percentage) - 1
    );
    if (currentDataSet[targetNodeIndex]) {
      setActiveNode(targetNodeIndex);
    }
  };

  return { jumpToNode, changeNode, activeNode, setActiveNode };
};
