import { EventBus } from "../../EventBus";
import * as Events from "../../Events";
import { ScreenPosition } from "../../IO/ScreenPosition";
import { DiagramTheme, Node, Size } from "../../Models";
import { DiagramState } from "../../Models/DiagramState";
import { NodeDefinition } from "../../Models/NodeDefinition";
import { Utils } from "../../Utils";
import { NodeManager } from "./nodeManager";
import { UIManager } from "./uiManager";

export class StateManager {
  public state: DiagramState;
  private nodeManager: NodeManager;
  private uiManager: UIManager;

  setPanningEnabled(panningEnabled: boolean) {
    this.uiManager.setPanningEnabled(panningEnabled);
  }

  constructor(
    private eventBus: EventBus,
    private theme: DiagramTheme,
    disableLinkOperations: boolean,
    areaSize: { width: number; height: number }
  ) {
    const hostConstraints = [
      (document.querySelector(".diagram-element") as HTMLElement).offsetWidth,
      (document.querySelector(".diagram-element") as HTMLElement).offsetHeight
    ];

    const scale = Math.min(hostConstraints[0] / 1360, 0.75);
    const panX = 20;
    const panY = hostConstraints[1] / scale - 1000 / 2;

    this.state = {
      links: [],
      nodes: [],
      nodeDefinitions: [],
      categories: [],
      selectedLinks: [],
      selectedNodes: [],
      hover: {},
      hoverMinimap: false,
      uiState: {
        minimapActive: true,
        panX,
        panY,
        targetPanX: panX,
        targetPanY: panY,
        scale: scale,
        areaSize,
        draggingWorld: false,
        draggingElements: false,
        draggingMinimap: false,
        animatingPan: false
      },
      screenShotInProgress: false
    };
    this.uiManager = new UIManager(
      this.state.uiState,
      this.eventBus,
      this.theme
    );
    this.nodeManager = new NodeManager(this.state, this.theme);

    this.eventBus.subscribe(Events.IOEvents.WorldMouseDrag, this.mouseDrag);
  }

  panTo(x: number, y: number) {
    this.uiManager.panTo({ x, y });
  }

  getState() {
    return {
      ...this.state
    };
  }
  pureState = () => this.state;
  setDefinitions(nodeDefinitions: NodeDefinition[]) {
    this.state.nodeDefinitions = nodeDefinitions;
    for (const nd of this.state.nodeDefinitions) {
      if (!nd.id) {
        nd.id = Utils.generateId();
      }
    }
  }
  setNodes(nodes: Node[]) {
    this.nodeManager.loadNodes(nodes);
  }

  setReadOnly(isReadOnly: boolean) {
    this.state.isReadOnly = isReadOnly;
  }
  requestSerialise = () => {
    this.eventBus.publish(Events.DiagramEvents.SerialisationRequested);
  };
  calculateAnimations = (timeCoefficient: number) => {
    return this.uiManager.calculateAnimations(timeCoefficient);
  };
  selectNode = (node: Node) => {
    this.nodeManager.selectSingleNode(node);
  };
  zeroGraph = () => {
    this.uiManager.panTo({
      x: -this.theme.node.width * 3,
      y: -this.theme.node.height * 3
    });
  };
  centerOnNode = (node: Node, padX?: number, padY?: number) => {
    const foundIndex = this.state.nodes.indexOf(node);

    if (foundIndex > -1) {
      this.eventBus.publish(
        Events.DiagramEvents.CenterOnNode,
        node,
        padX,
        padY
      );
    }
  };
  mouseDrag = ({
    withoutPan,
    calculated
  }: {
    withoutPan: ScreenPosition;
    calculated: ScreenPosition;
  }) => {
    if (this.state.uiState.draggingMinimap) {
      return;
    }

    this.uiManager.panScreen(withoutPan);
  };
  areaResized = (newSize: Size) => {
    this.state.uiState.areaSize = newSize;
    this.eventBus.publish(Events.DiagramEvents.RenderRequested);
  };
  worldToScreenCoordinates = (e: ScreenPosition) =>
    this.uiManager.worldToScreen(e);
  setScreenShotInProgress(screenShotInProgress: boolean) {
    this.state.screenShotInProgress = screenShotInProgress;
  }
  isScreenShotInProgress() {
    return this.state.screenShotInProgress;
  }
}
