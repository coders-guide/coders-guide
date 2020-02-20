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
import { gtagEvent } from "./utils/gtag.js";
import { useGoals } from "./utils/hooks/useGoals";
import { useActiveNode } from "./utils/hooks/useActiveNode";
// import { LOCAL_STORAGE_KEY_CURRENT_PAN } from "./common/constants";

// TODO: make it dynamic
const reactDataSet = prepareData(rawReactDataSet);

// TODO: break down this component into smaller ones
export const DesktopApp = () => {
  const [helpDisplayMode, setHelpDisplayMode] = React.useState<
    HelpDisplayMode
  >();
  const divRef = React.useRef<HTMLDivElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const bgRef = React.useRef<HTMLDivElement | null>(null);
  const hasStarted = React.useRef<boolean>(false);
  const currentDataSet = reactDataSet;
  const { jumpToNode, changeNode, activeNode, setActiveNode } = useActiveNode(
    currentDataSet
  );
  const { checkedGoals, isNodeChecked, toggleGoal } = useGoals();
  const showIntro = activeNode === -1 || helpDisplayMode === "help";

  let diagram = React.useRef<Diagram | null>(null);
  let globalNodes = React.useRef<Node<{}>[] | null>(null);

  const setupNodes = () =>
    new Promise(resolve => {
      (window.requestAnimationFrame || window.setTimeout)(() => {
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
        resolve();
      });
    });

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
      diagram.current = new Diagram(divRef.current);
      diagram.current.setReadOnly(true);
      diagram.current.setNodes([]);
      diagram.current.on("RenderRequested", refreshUI);

      // try {
      //   const localStoragePan = JSON.parse(
      //     localStorage.getItem(LOCAL_STORAGE_KEY_CURRENT_PAN) || "null"
      //   );
      //   if (localStoragePan) {
      //     diagram.current.panTo(-localStoragePan.panX, -localStoragePan.panY);
      //     diagram.current.setShouldRenderCaptions(true);
      //   }
      // } catch {}

      // diagram.current.on("PanAnimationFinished", () => {
      //   if (!diagram.current) {
      //     return;
      //   }
      //   const { panX, panY } = diagram.current.getDirectTransform();
      //   localStorage.setItem(
      //     LOCAL_STORAGE_KEY_CURRENT_PAN,
      //     JSON.stringify({ panX, panY })
      //   );
      // });

      setupNodes().then(() => {
        centerOnNode(activeNode, true);
      });
      refreshUI();
    }
  }, []);

  React.useLayoutEffect(() => {});

  const setActiveNodeAndCenter = (nodeIndex: number) => {
    setActiveNode(nodeIndex);
    centerOnNode(nodeIndex);
  };

  React.useEffect(() => {
    if (!hasStarted.current && activeNode > -1 && diagram.current) {
      diagram.current.setShouldRenderCaptions(true);
      hasStarted.current = true;

      setupNodes();
    }

    gtagEvent(activeNode);
  }, [activeNode]);

  const centerOnNode = (nodeIndex?: number, disableAnimation?: boolean) => {
    if (!diagram.current || !globalNodes.current) {
      return;
    }

    const element = document.querySelector(
      `[data-node="${nodeIndex || activeNode}"]`
    ) as HTMLDivElement;

    diagram.current.centerOnNode(
      globalNodes.current[nodeIndex || activeNode],
      element.offsetWidth * 2,
      element.offsetHeight * 2,
      disableAnimation
    );
  };

  React.useEffect(() => {
    centerOnNode();
  }, [activeNode]);

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
          {/* <div className="vignette" /> */}
        </div>
      </div>
      {showIntro && (
        <Intro
          onClose={() => {
            if (helpDisplayMode === "help") {
              setHelpDisplayMode(undefined);
              return;
            }
            setActiveNode(0);
          }}
          fadeOut={activeNode === -1}
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
            key={node.id}
            className={`progressbar__node ${
              node.type === "node" && isNodeChecked(node) ? "is-completed" : ""
            } ${node.type === "heading" ? "is-heading" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};
