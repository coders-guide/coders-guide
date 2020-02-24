import * as React from "react";
import { RoadmapEntry } from "types";
import { usePrevious } from "./usePrevious";

export const useSearch = (
  searchPhrase: string,
  currentDataSet: RoadmapEntry[],
  activeNode: number,
  setActiveNodeAndCenter: Function,
  searchVisible: boolean
) => {
  const [searchResults, setSearchResults] = React.useState<
    RoadmapEntry[] | null
  >([]);
  const [selectedResultIndex, setSelectedResultIndex] = React.useState<number>(
    0
  );
  const previousSelectedResultIndex = usePrevious(selectedResultIndex);

  React.useEffect(() => {
    setSelectedResultIndex(0);
  }, [searchResults]);

  React.useEffect(() => {
    if (searchPhrase.length < 3) {
      setSearchResults(null);
      return;
    }
    const resultNodes = currentDataSet
      .filter(entry => entry.type === "node")
      .filter(
        entry =>
          entry.title.toLowerCase().indexOf(searchPhrase) > -1 ||
          (entry.summary || entry.description)
            .toLowerCase()
            .indexOf(searchPhrase) > -1
      );
    setSearchResults(resultNodes);
  }, [searchPhrase]);

  React.useEffect(() => {
    if (!searchVisible) {
      return;
    }
    if (searchResults?.length) {
      const isSelected = searchResults.findIndex(
        r => r.id === currentDataSet[activeNode].id
      );

      if (
        isSelected > -1 &&
        previousSelectedResultIndex === selectedResultIndex
      ) {
        setSelectedResultIndex(isSelected);
        return;
      }

      if (!searchResults[selectedResultIndex]) {
        return;
      }
      const foundIndex = currentDataSet.findIndex(
        entry => entry.id === searchResults[selectedResultIndex].id
      );

      setActiveNodeAndCenter(foundIndex, "replace");
    }
  }, [searchResults, selectedResultIndex, activeNode]);

  const cycleSearchResults = React.useCallback(() => {
    if (!searchResults?.length) {
      return;
    }

    setSelectedResultIndex((selectedResultIndex + 1) % searchResults.length);
  }, [searchResults, selectedResultIndex]);

  return { cycleSearchResults, searchResults, selectedResultIndex };
};
