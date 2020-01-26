import {
  MinimapBoundaries,
  Size,
  Coords,
  DiagramState,
  DiagramTheme
} from "../Models/index";

const MINIMAP_RANGE = 7000;

interface InternalBoundaries {
  left: number;
  top: number;
  width: number;
  height: number;
}

export class MinimapUtils {
  static getBoundingBoxViewport(
    pan: Coords,
    scale: number,
    graphSize: Size
  ): MinimapBoundaries {
    return {
      left: -pan.x,
      right: graphSize.width / scale - pan.x,
      top: -pan.y,
      bottom: graphSize.height / scale - pan.y,
      width: graphSize.width / scale,
      height: graphSize.height / scale
    };
  }

  static getMiniMapBoundaries(
    viewportBoundingBox: MinimapBoundaries,
    graphSize: Size,
    theme: DiagramTheme,
    state: DiagramState
  ): InternalBoundaries {
    const MINIMAP_RANGE_X = MINIMAP_RANGE;
    const MINIMAP_RANGE_Y =
      MINIMAP_RANGE * MinimapUtils.calculateXYRatio(theme, state);
    return {
      left: Math.max(
        Math.min(
          -MINIMAP_RANGE_X + graphSize.width / 2,
          viewportBoundingBox.left
        ),
        viewportBoundingBox.right - 2 * MINIMAP_RANGE_X
      ),
      top: Math.max(
        Math.min(
          -MINIMAP_RANGE_Y + graphSize.height / 2,
          viewportBoundingBox.top
        ),
        viewportBoundingBox.bottom - 2 * MINIMAP_RANGE_Y
      ),
      width: 2 * MINIMAP_RANGE_X,
      height: 2 * MINIMAP_RANGE_Y
    };
  }

  static calculateXYRatio(theme: DiagramTheme, state: DiagramState) {
    return (
      (state.uiState.areaSize.height - theme.minimap.margin * 2) /
      theme.minimap.size
    );
  }

  static mapToWorldPoint(
    point: Coords,
    miniMapBoundaries: InternalBoundaries,
    mapW: number,
    mapH: number
  ) {
    const delta = {
      x:
        (miniMapBoundaries.left + miniMapBoundaries.width / 2) /
        (miniMapBoundaries.width / mapW),
      y:
        (miniMapBoundaries.top + miniMapBoundaries.height / 2) /
        (miniMapBoundaries.height / mapH)
    };

    const ratioX = miniMapBoundaries.width / mapW;
    const ratioY = miniMapBoundaries.height / mapH / 4;
    return {
      x: point.x * ratioX - (mapW / 2 - delta.x) * ratioX,
      y: point.y * ratioY - (mapH / 2 - delta.y) * ratioY
    };
  }

  static worldToMapWidth = (
    size: number,
    miniMapBoundaries: InternalBoundaries,
    mapSize: number
  ) => size / (miniMapBoundaries.width / (mapSize - 1));

  static worldToMapHeight = (
    size: number,
    miniMapBoundaries: InternalBoundaries,
    mapSize: number
  ) => size / (miniMapBoundaries.height / (mapSize - 1));

  static worldToMapPoint = (
    coords: Coords,
    mapSizeX: number,
    mapSizeY: number,
    miniMapBoundaries: InternalBoundaries
  ) => {
    const delta = {
      x: MinimapUtils.worldToMapWidth(
        miniMapBoundaries.left + miniMapBoundaries.width / 2,
        miniMapBoundaries,
        mapSizeX
      ),
      y: MinimapUtils.worldToMapHeight(
        miniMapBoundaries.top + miniMapBoundaries.height / 2,
        miniMapBoundaries,
        mapSizeY
      )
    };
    const ratioX = miniMapBoundaries.width / (mapSizeX - 1);
    const ratioY = miniMapBoundaries.width / (mapSizeY - 1);
    return {
      x: mapSizeX / 2 - delta.x + coords.x / ratioX,
      y: mapSizeY / 2 - delta.y + coords.y / ratioY
    };
  };
}
