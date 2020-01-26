import { Node } from "./Node";
import { Category } from "./Category";
import { Link } from "./Link";
import { ScreenPosition } from "../IO/ScreenPosition";
import { NodeDefinition } from "./NodeDefinition";
import { UIState } from "./UIState";

export interface DiagramState {
  links: Link[];
  nodes: Node[];
  categories: Category[];
  nodeDefinitions: NodeDefinition[];
  selectedLinks: Link[];
  selectedNodes: Node[];
  renamed?: Node;
  draw?: {
    node: Node;
    io: "i" | "o";
    initialPos: ScreenPosition;
  };
  hoverMinimap: boolean;
  hover: {
    node?: Node;
    link?: Link;
    menu?: boolean;
    io?: "i" | "o";
    type?: boolean;
    description?: Node;
  };
  isReadOnly?: boolean;
  menu?: boolean;
  drawedConnection?: ScreenPosition;
  uiState: UIState;
  screenShotInProgress: boolean;
}
