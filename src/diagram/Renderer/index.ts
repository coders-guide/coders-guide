import { ZoomPan } from "./zoomPan";
import { EventBus } from "../EventBus";
import { StateManager } from "../Diagram/stateManager";
import { DiagramEvents } from "../Events";
import { DiagramTheme } from "../Models";
import { ContextProvider } from "./ContextProvider";
// import { ConfigurationManager } from "../Configuration";

/**
 * Renderer.
 *
 * Main renderer service. Responsibilities:
 * - store context for canvas drawing
 * - set up the render loop
 * - render nodes, links and particular subcomponents (cursor, menu, minimap etc.)
 *
 */
export class Renderer {
  // private nodeRenderer: NodeRenderer;
  private zoomPan: ZoomPan = new ZoomPan();
  private previousFrameTime: number = 0;
  private contextProvider: ContextProvider;
  private shouldRenderCaptions: boolean = false;
  /**
   * @param eventBus event bus instance to be used
   * @param context context from the canvas
   * @param stateManager state manager instance to fetch data from
   * @param theme Color and positional options of diagram
   */
  constructor(
    private eventBus: EventBus,
    canvasContext: CanvasRenderingContext2D,
    private stateManager: StateManager,
    theme: DiagramTheme
  ) {
    this.contextProvider = new ContextProvider(canvasContext);

    this.eventBus.subscribe(DiagramEvents.RenderRequested, this.renderStart);
  }

  setShouldRenderCaptions(shouldRenderCaptions: boolean) {
    this.shouldRenderCaptions = shouldRenderCaptions;
  }

  /**
   * Renders background of canvas
   *
   * @memberof Renderer
   */
  renderBackground() {
    const { context } = this.contextProvider;
    const { width, height } = context.canvas;
    context.clearRect(0, 0, width, height);
  }

  setScreenTransform() {
    this.zoomPan.setUniformMatrix(this.contextProvider.context);
  }

  setWorldTransform() {
    const uiState = this.stateManager.pureState().uiState;
    this.zoomPan.setCalculatedMatrix(this.contextProvider.context, uiState);
  }

  setXWorldTransform() {
    const uiState = this.stateManager.pureState().uiState;
    this.zoomPan.setCalculatedMatrixX(this.contextProvider.context, uiState);
  }

  renderStart = () => {
    window.requestAnimationFrame(this.render);
  };

  renderUpdate = () => {
    window.requestAnimationFrame(this.render);
  };

  animate = (timeCoefficient: number) => {
    return this.stateManager.calculateAnimations(timeCoefficient);
  };

  calculateTimeDelta = (timePassed: number) => {
    if (this.previousFrameTime === 0) {
      return 1.0;
    } else {
      return (timePassed - this.previousFrameTime) / 16.0;
    }
  };

  resetTimeCounter = () => {
    this.previousFrameTime = 0;
  };

  renderLanes = () => {
    const { context } = this.contextProvider;
    context.strokeStyle = "rgba(0,0,0,1)";
    context.lineWidth = 5;

    context.fillStyle = "rgba(255,0,0,0.1)";
    context.fillRect(-6060, 0, 6000, context.canvas.height);
    context.fillRect(-60, 0, 920, context.canvas.height);
    context.fillStyle = "rgba(0,255,0,0.06)";
    context.fillRect(860, 0, 920, context.canvas.height);
    context.fillStyle = "rgba(255,255,0,0.10)";
    context.fillRect(860 + 920, 0, 920, context.canvas.height);
    context.fillStyle = "rgba(0,128,255,0.08)";
    context.fillRect(860 + 920 + 920, 0, 920, context.canvas.height);
    context.fillStyle = "rgba(0,255,0,0.1)";
    context.fillRect(860 + 920 + 920 + 920, 0, 92000, context.canvas.height);
    context.fillStyle = "rgba(128,128,0,0.1)";
    // context.fillRect( // TODO: new path
    //   860 + 920 + 920 + 920 + 920,
    //   0,
    //   92000,
    //   context.canvas.height
    // );

    context.fillStyle = "rgba(255,255,255,0.6)";

    context.fillRect(860, 0, 3, context.canvas.height);
    context.fillRect(860 + 920, 0, 3, context.canvas.height);
    context.fillRect(860 + 920 + 920, 0, 3, context.canvas.height);
    context.fillRect(860 + 920 + 920 + 920, 0, 3, context.canvas.height);
    // context.fillRect(860 + 920 + 920 + 920 + 920, 0, 3, context.canvas.height);

    const { scale } = this.stateManager.getState().uiState;

    context.fillStyle = "rgba(255,255,255,0.25)";
    context.font = "96px arial";
    if (this.shouldRenderCaptions) {
      [
        "Computer science",
        "JavaScript",
        "Front-end development",
        "Frameworks",
        "Tooling"
        // "Personal growth" // TODO: new path
      ].forEach((text, i) => {
        context.save();
        context.scale(1 / scale, 1);

        context.rotate(Math.PI / 2);
        context.fillStyle = "rgba(255,255,255,0.25)";
        context.font = "96px Lato";
        const textWidth = context.measureText(text).width;
        context.fillText(
          text,
          context.canvas.height - textWidth - 60,
          -30 + -i * 920 * scale
        );
        context.restore();
        context.save();
        context.scale(1 / scale, 1);
        context.font = `${12 + 32 * scale}px Lato`;
        context.fillStyle = "rgba(255,255,255,1.0)";
        const textWidthHorizontal = context.measureText(text).width;
        context.translate(-(textWidthHorizontal / 2), 0);

        context.fillText(text, (-60 + 460 + i * 920) * scale, 40 + scale * 40);

        context.restore();
      });
    }
  };

  render = (timePassed: number) => {
    const timeCoefficient = this.calculateTimeDelta(timePassed);

    // render loop
    this.setScreenTransform();
    this.renderBackground();

    this.setXWorldTransform();
    this.renderLanes();

    if (this.animate(timeCoefficient)) {
      this.previousFrameTime = timePassed;
    } else {
      this.resetTimeCounter();
      this.eventBus.publish(DiagramEvents.PanAnimationFinished);
    }
  };
}
