import * as React from "react";
import { RoadmapEntry } from "../../../types";
import StarOutline from "../../../assets/star-outline.svg";

export const Heading: React.FC<{
  node: RoadmapEntry;
  activeNode: number;
  setActiveNode: (n: number) => void;
  index: number;
  hideButton?: boolean;
}> = ({ node, activeNode, setActiveNode, index, hideButton }) => {
  return (
    <div
      onClick={() => setActiveNode(index)}
      className="heading"
      data-category={0}
      data-node={index}
      style={
        {
          // transform: `translateX(460px)`
        }
      }
    >
      {index === 0 ? (
        <h1>{node.title}</h1>
      ) : (
        <h2>
          <img className="heading__star" src={StarOutline} /> {node.title}
        </h2>
      )}
      <div
        className="heading__content"
        dangerouslySetInnerHTML={{ __html: node.description }}
      />
      {!hideButton && (
        <button
          className="heading__button"
          onClick={e => {
            e.stopPropagation();
            setActiveNode(index + 1);
          }}
        >
          {index === 0 ? "Start" : "Next"}
        </button>
      )}
    </div>
  );
};
