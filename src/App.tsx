import * as React from "react";
import { Diagram, Node } from "./diagram";
import { NodeList } from "./components/node-list";
import { Intro } from "./components/intro";
import { HelpDisplayMode } from "./types";
import { prepareData, setScaleIndicator } from "./utils";
import { TopBar } from "./components/top-bar";
import { Sidepane } from "./components/sidepane";
import { Credits } from "./components/credits";
import { list as rawReactDataSet } from "./data/react";
import { Map } from "immutable";
import { RoadmapEntry, CheckedGoals } from "./types";

// TODO: make it dynamic
const reactDataSet = prepareData(rawReactDataSet);

// TODO: break down this component into smaller ones
export const App = () => {
  const [helpDisplayMode, setHelpDisplayMode] = React.useState<
    HelpDisplayMode
  >();
  const divRef = React.useRef<HTMLDivElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const bgRef = React.useRef<HTMLDivElement | null>(null);
  const [checkedGoals, setCheckedGoals] = React.useState<CheckedGoals>(Map());
  const [activeNode, setActiveNode] = React.useState<number>(-1);
  const hasStarted = React.useRef<boolean>(false);

  let diagram = React.useRef<Diagram | null>(null);
  let globalNodes = React.useRef<Node<{}>[] | null>(null);

  const currentDataSet = reactDataSet;

  const markGoalChecked = (subjectId: string, taskIndex: number) => {
    setCheckedGoals(
      checkedGoals.set(subjectId.toString(), [
        ...(checkedGoals.get(subjectId.toString()) || []),
        taskIndex
      ])
    );
  };

  const markGoalUnchecked = (subjectId: string, taskIndex: number) => {
    setCheckedGoals(
      checkedGoals.set(
        subjectId.toString(),
        (checkedGoals.get(subjectId.toString()) || []).filter(
          goal => goal !== taskIndex
        )
      )
    );
  };

  const isNodeChecked = (node: RoadmapEntry) => {
    if (node.isSingleGoal) {
      return (checkedGoals.get(node.id.toString())?.length || 0) > 0;
    }
    return (
      (checkedGoals.get(node.id.toString())?.length || 0) >=
      (node.topics?.length || 0) + (node.practices?.length || 0)
    );
  };

  const toggleGoal = (subjectId: string, taskIndex?: number) => {
    if (checkedGoals.get(subjectId)?.includes(taskIndex || 0)) {
      markGoalUnchecked(subjectId, taskIndex || 0);
    } else {
      markGoalChecked(subjectId, taskIndex || 0);
    }
  };

  const setupNodes = () => {
    window.requestAnimationFrame(() => {
      if (!containerRef.current || !diagram.current) {
        return;
      }

      const nodeContainer = containerRef.current.children[0];

      const nodes = (Array.from(nodeContainer.children).filter(
        n => n.classList.contains("record") || n.classList.contains("heading")
      ) as HTMLElement[]).map((nodeElement, i) => {
        const categoryIndex = parseInt(
          nodeElement.dataset["category"] || "0",
          10
        );
        const definition = {
          id: i.toString(),
          width: nodeElement.offsetWidth * 2,
          height: nodeElement.offsetHeight * 2,
          category: nodeElement.dataset["category"],
          type: `type${i}`,
          node: {}
        };

        return {
          definition,
          x: categoryIndex * 460 * 2,
          y: nodeElement.offsetTop * 2,
          id: `node${i}`,
          options: [],
          name: ""
        };
      });

      globalNodes.current = nodes;
      diagram.current.setNodes(nodes);
    });
  };

  const refreshUI = () => {
    window.requestAnimationFrame(() => {
      if (!diagram.current || !containerRef.current || !bgRef.current) {
        return;
      }
      let { panX, panY, scale } = diagram.current.getDirectTransform();

      panX = panX || 0;
      panY = panY || 0;

      containerRef.current.style.transform = `scale(${scale}) translate(${panX *
        0.5}px, ${panY * 0.5}px)`;
      bgRef.current.style.transform = `translate(${(panX % 5400) *
        0.1}px, ${(panY % 5400) * 0.1}px)`;

      setScaleIndicator(scale);
    });
  };

  React.useEffect(() => {
    if (divRef.current) {
      try {
        const localStoragecheckedGoals = JSON.parse(
          localStorage.getItem("checkedGoals") || "{}"
        );
        setCheckedGoals(Map<string, number[]>(localStoragecheckedGoals));
      } catch {}

      const activeNodeIndexString =
        localStorage.getItem("activeNodeIndex") || "";
      const activeNodeIndex = parseInt(activeNodeIndexString);
      if (!isNaN(activeNodeIndex)) {
        setActiveNode(activeNodeIndex);
      }
      diagram.current = new Diagram(divRef.current);
      diagram.current.setReadOnly(true);
      diagram.current.setNodes([]);
      diagram.current.on("RenderRequested", refreshUI);

      try {
        const localStoragePan = JSON.parse(
          localStorage.getItem("currentPan") || "null"
        );
        if (localStoragePan) {
          diagram.current.panTo(-localStoragePan.panX, -localStoragePan.panY);
          diagram.current.setShouldRenderCaptions(true);
        }
      } catch {}

      diagram.current.on("PanAnimationFinished", () => {
        if (!diagram.current) {
          return;
        }
        const { panX, panY } = diagram.current.getDirectTransform();
        localStorage.setItem("currentPan", JSON.stringify({ panX, panY }));
      });

      setupNodes();
      refreshUI();
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("checkedGoals", JSON.stringify(checkedGoals.toJSON()));
  }, [checkedGoals]);

  const changeNode = (direction: number = 1) => {
    if (
      activeNode + direction < 0 ||
      activeNode + direction > currentDataSet.length - 1
    ) {
      return;
    }
    setActiveNode(activeNode + direction);
  };

  const setActiveNodeAndCenter = (nodeIndex: number) => {
    setActiveNode(nodeIndex);
    centerOnActiveNode(nodeIndex);
  };

  React.useEffect(() => {
    if (!hasStarted.current && activeNode > -1 && diagram.current) {
      diagram.current.setShouldRenderCaptions(true);
      hasStarted.current = true;

      setupNodes();
    }

    if (activeNode > -1) {
      localStorage.setItem("activeNodeIndex", JSON.stringify(activeNode));
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

  const centerOnActiveNode = (nodeIndex?: number) => {
    if (!diagram.current || !globalNodes.current) {
      return;
    }

    const element = document.querySelector(
      `[data-node="${nodeIndex || activeNode}"]`
    ) as HTMLDivElement;

    diagram.current.centerOnNode(
      globalNodes.current[nodeIndex || activeNode],
      element.offsetWidth * 2,
      element.offsetHeight * 2
    );
  };

  React.useEffect(() => {
    centerOnActiveNode();
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

  return (
    <div className="global-wrapper">
      {helpDisplayMode === "credits" && (
        <Credits onClose={() => setHelpDisplayMode(undefined)} />
      )}
      <TopBar
        helpDisplayMode={helpDisplayMode}
        setHelpDisplayMode={setHelpDisplayMode}
      />
      <div className="main-wrapper">
        <div className="background-container" ref={bgRef} />
        <div
          onWheel={e => {
            if (!Number.isInteger(e.deltaY)) {
              return;
            }
            e.nativeEvent.stopImmediatePropagation();
          }}
          className={`sidepane is-active`}
        >
          {activeNode > -1 && (
            <>
              <Sidepane
                onItemChecked={i =>
                  toggleGoal(currentDataSet[activeNode].id.toString(), i)
                }
                activeNodeIndex={activeNode}
                changeNode={changeNode}
                nodesCount={currentDataSet.length}
                activeNode={currentDataSet[activeNode]}
                goalsChecked={
                  checkedGoals.get(currentDataSet[activeNode].id.toString()) ||
                  []
                }
              />
            </>
          )}
        </div>
        <div className="diagram-container">
          <div ref={divRef} className="diagram-element" />
          <div ref={containerRef} className="markup-container">
            <div className="node-list-wrapper">
              <NodeList
                nodeList={currentDataSet}
                activeNode={activeNode}
                setActiveNode={setActiveNodeAndCenter}
                checkedGoals={checkedGoals}
              />
            </div>
          </div>
          <div className="vignette" />
        </div>
      </div>
      {(activeNode === -1 || helpDisplayMode === "help") && (
        <Intro
          onClose={() => {
            if (helpDisplayMode === "help") {
              setHelpDisplayMode(undefined);
              return;
            }
            setActiveNode(0);
          }}
        />
      )}
      <div
        className="progressbar"
        onClick={jumpToNode}
        onWheel={e => {
          e.nativeEvent.stopImmediatePropagation();
          const delta = e.deltaY * (e.deltaMode === 1 ? 24 : 1);
          if (delta > 24) {
            changeNode();
          }
          if (delta < -24) {
            changeNode(-1);
          }
        }}
      >
        {activeNode > -1 && (
          <div
            className="progressbar__bar"
            style={{
              width: `${((activeNode + 1) / currentDataSet.length) * 100}%`
            }}
          />
        )}
        {currentDataSet.map(node => (
          <div
            className={`progressbar__node ${
              node.type === "node" && isNodeChecked(node) ? "is-completed" : ""
            } ${node.type === "heading" ? "is-heading" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};
