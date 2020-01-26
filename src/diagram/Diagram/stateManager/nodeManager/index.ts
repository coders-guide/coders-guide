import { DiagramTheme, Node } from "../../../Models";
import { DiagramState } from "../../../Models/DiagramState";

/**
 * NodeManager:
 *
 * Main nodes operation class
 */
export class NodeManager {
  constructor(private state: DiagramState, theme: DiagramTheme) {}

  loadNodes = (nodes: Node[]) => {
    this.state.nodes = nodes;
    this.state.selectedNodes = [];
  };

  selectSingleNode = (node: Node) => {
    this.state.selectedNodes = [node];
  };
}
