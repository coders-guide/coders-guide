import * as React from "react";

import logoTransparent from "./assets/logo_updated_transparent.svg";
import noMobileIcon from "./assets/no-mobile.svg";
import { Credits } from "./components/credits";
import { NodeList } from "./components/node-list";
import { DesktopSearch } from "./components/search";
import { Sidepane } from "./components/sidepane";
import { TopBar } from "./components/top-bar";
import { WelcomeScreen } from "./components/welcome-screen";
import { list as rawReactDataSet } from "./data/react";
import { Diagram, Node } from "./diagram";
import { HelpDisplayMode } from "./types";
import { prepareData, setScaleIndicator } from "./utils";
import { gtagEvent } from "./utils/gtag.js";
import { useActiveNode } from "./utils/hooks/useActiveNode";
import { useGoals } from "./utils/hooks/useGoals";
import { DESKTOP_STEPS, useIntro } from "./utils/hooks/useIntro";
import { useSearch } from "./utils/hooks/useSearch";

// TODO: make it dynamic
const reactDataSet = prepareData(rawReactDataSet);

// TODO: break down this component into smaller ones
export const DesktopApp = () => {
  const [searchVisible, setSearchVisible] = React.useState(false);
  const [searchPhrase, setSearchPhrase] = React.useState("");

  const [helpDisplayMode, setHelpDisplayMode] = React.useState<
    HelpDisplayMode
  >();
  const divRef = React.useRef<HTMLDivElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const bgRef = React.useRef<HTMLDivElement | null>(null);
  const hasStarted = React.useRef<boolean>(false);
  const currentDataSet = reactDataSet;

  const { runIntro, isIntroShown } = useIntro(DESKTOP_STEPS);

  const isNavigationBlocked = isIntroShown || searchVisible;

  const {
    jumpToNode,
    changeNode,
    activeNode,
    setActiveNodeIndex
  } = useActiveNode(currentDataSet, isNavigationBlocked);

  const { checkedGoals, isNodeChecked, toggleGoal } = useGoals();
  const isWelcomeScreenShown = activeNode === -1 || helpDisplayMode === "help";

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

  const onCloseWelcomeScreen = () => {
    if (helpDisplayMode === "help") {
      setHelpDisplayMode(undefined);
      setActiveNodeIndex(1, false);

      runIntro(() => {
        setActiveNodeIndex(activeNode, false);
      });
      return;
    }
    setActiveNodeIndex(1, false);
    runIntro(() => {
      setActiveNodeIndex(0, false);
    });
  };

  React.useEffect(() => {
    if (divRef.current) {
      diagram.current = new Diagram(divRef.current);
      diagram.current.setReadOnly(true);
      diagram.current.setNodes([]);
      diagram.current.on("RenderRequested", refreshUI);

      setupNodes().then(() => {
        centerOnNode(activeNode, true);
      });
      refreshUI();
    }
  }, []);

  React.useLayoutEffect(() => {});

  const setActiveNodeAndCenter = (
    nodeIndex: number,
    useHistory?: boolean | "replace"
  ) => {
    setActiveNodeIndex(nodeIndex, useHistory);
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

    if (!element) {
      return;
    }

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

  const toggleSearch = (visible: boolean) => {
    if (isIntroShown) {
      return;
    }
    if (!visible || (visible && helpDisplayMode !== "help")) {
      if (helpDisplayMode === "credits") {
        setHelpDisplayMode(undefined);
      }
      setSearchVisible(visible);
    }
  };
  const nodeClicked = (n: number) => {
    setActiveNodeAndCenter(n);
    setSearchVisible(false);
  };

  const { searchResults, selectedResultIndex, cycleSearchResults } = useSearch(
    searchPhrase,
    currentDataSet,
    activeNode,
    setActiveNodeAndCenter,
    searchVisible
  );

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
                searchHighlight={searchVisible ? searchPhrase : undefined}
                activeNode={activeNode}
                setActiveNode={nodeClicked}
                checkedGoals={checkedGoals}
              />
            </div>
          </div>
          {/* <div className="vignette" /> */
          /* Do I need it? */}
        </div>
      </div>
      {isWelcomeScreenShown && (
        <WelcomeScreen
          helpOnly={helpDisplayMode === "help"}
          onClose={onCloseWelcomeScreen}
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
      <div id="mobile-warning" className="on-desktop">
        <div id="mobile-warning-logo">
          <img src={logoTransparent} width="200" />
        </div>
        <strong>Hello there!</strong>
        <br />
        <br />
        Viewport is too small. Expand your browser window in order to use the
        app!
        <br />
        <br />
        <img src={noMobileIcon} width="100" height="100" />
      </div>
      <DesktopSearch
        onCycleResults={cycleSearchResults}
        visible={searchVisible}
        setVisible={toggleSearch}
        onSearchChange={setSearchPhrase}
        selectedResultIndex={selectedResultIndex + 1}
        searchResultLength={searchResults?.length}
      />
    </div>
  );
};

export default DesktopApp;
