import * as React from "react";

import { RoadmapEntry } from "../../../types";

export const MobileListHeader: React.FC<{
  goalsChecked?: number[];
  activeNode: RoadmapEntry;
  totalItems?: number;
  defaultLabel?: string;
}> = ({ activeNode, goalsChecked, totalItems, defaultLabel }) => {
  if (goalsChecked) {
    return (
      <>
        {`${defaultLabel || "Topics to cover"} (${(goalsChecked || []).length ||
          0}/${totalItems}):`}
      </>
    );
  }
  return <>{defaultLabel}</>;
};
