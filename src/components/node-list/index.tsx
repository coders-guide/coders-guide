import * as React from "react";
import { Arrow } from "../arrow";
import { RoadmapEntry } from "../../types";

import "./index.scss";
import { Node } from "./components/node";
import { Heading } from "./components/heading";
import { Map } from "immutable";

export const NodeList: React.FC<{
  nodeList: RoadmapEntry[];
  activeNode: number;
  setActiveNode: (n: number) => void;
  checkedGoals?: Map<string, number[]>;
}> = ({ nodeList, activeNode, setActiveNode, checkedGoals }) => {
  return (
    <>
      {nodeList.map((node, index) => (
        <React.Fragment key={node.id}>
          {node.type === "heading" && (
            <Heading
              node={node}
              index={index}
              activeNode={activeNode}
              setActiveNode={setActiveNode}
            />
          )}
          {node.type !== "heading" && (
            <Node
              node={node}
              index={index}
              activeNode={activeNode}
              setActiveNode={setActiveNode}
              checkedGoals={checkedGoals?.get(node.id.toString()) || []}
            />
          )}
          {nodeList[index + 1] && (
            <Arrow
              node={node}
              isActive={activeNode - 1 === index || activeNode === index}
              nextNode={nodeList[index + 1]}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
};
