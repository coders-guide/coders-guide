import { Node } from "./Node";
import { NodeOption } from "./NodeOption";
import { Category } from "./Category";

export interface AcceptedNodeDefinition<Data = {}> {
  definition?: NodeDefinition<Data>;
  category?: {
    name: string;
    definitions: AcceptedNodeDefinition<Data>[];
  };
}
export interface NodeDefinition<Data = {}> {
  node: Partial<Node>;
  width: number;
  height: number;
  zindex?: number;
  backgroundColor?: string;
  hoverColor?: string;
  categories?: {
    inputs?: Category[];
    outputs?: Category[];
    node?: Category[];
  };
  type: string;
  acceptsInputs?: (
    incomingDefinition: NodeDefinition<Data>,
    allDefinitions: NodeDefinition<Data>[],
    definition?: NodeDefinition<Data>,
    nodes?: Node<Data>[],
    node?: Node<Data>
  ) => AcceptedNodeDefinition<Data>[];
  acceptsOutputs?: (
    incomingDefinition: NodeDefinition<Data>,
    allDefinitions: NodeDefinition<Data>[],
    definition?: NodeDefinition<Data>,
    nodes?: Node<Data>[],
    node?: Node<Data>
  ) => AcceptedNodeDefinition<Data>[];
  instances?: Partial<NodeDefinition<Data>>[];
  options?: NodeOption[];
  root?: boolean;
  main?: boolean;
  hidden?: boolean;
  parent?: NodeDefinition<Data>;
  id?: string;
  help?: string;
  data?: Data;
}
