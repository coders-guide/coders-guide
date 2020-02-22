import * as React from "react";
import { RoadmapEntry } from "../../types";
import { LOCAL_STORAGE_KEY_ACTIVE_NODE_INDEX } from "../../common/constants";

export const useActiveNode = (
  currentDataSet: RoadmapEntry[],
  isNavigationBlocked: boolean = false
) => {
  const [activeNode, setActiveNode] = React.useState<number>(() => {
    const activeNodeIndexString =
      localStorage.getItem(LOCAL_STORAGE_KEY_ACTIVE_NODE_INDEX) || "";
    const activeNodeIndex = parseInt(activeNodeIndexString);
    if (!isNaN(activeNodeIndex)) {
      window.history.replaceState({}, "", `/#${activeNodeIndex}`);
      return activeNodeIndex;
    }

    return -1;
  });

  React.useEffect(() => {
    const hashChangeListener = (ev: HashChangeEvent) => {
      if (ev.newURL !== ev.oldURL) {
        const hashNumber = parseInt((window.location.hash || "").substr(1), 10);
        if (Number.isInteger(hashNumber)) {
          setActiveNode(hashNumber);
        }
      }
    };

    window.addEventListener("hashchange", hashChangeListener);

    return () => window.removeEventListener("hashchange", hashChangeListener);
  }, []);

  const changeNode = (direction: number = 1) => {
    if (isNavigationBlocked) {
      return;
    }
    if (
      activeNode + direction < 0 ||
      activeNode + direction > currentDataSet.length - 1
    ) {
      return;
    }
    setActiveNode(activeNode + direction);
    window.history.pushState({}, "", `/#${activeNode + direction}`);
  };

  React.useEffect(() => {
    if (activeNode > -1) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY_ACTIVE_NODE_INDEX,
        JSON.stringify(activeNode)
      );
    }

    const listener = (e: KeyboardEvent) => {
      if (isNavigationBlocked) {
        return;
      }
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        changeNode();
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        changeNode(-1);
      }
    };
    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [activeNode, isNavigationBlocked]);

  const jumpToNode = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isNavigationBlocked) {
      return;
    }
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
