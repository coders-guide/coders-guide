import * as React from "react";
import { useDebounce } from "use-debounce";

import "./index.scss";

export const DesktopSearch: React.FC<{
  visible: boolean;
  setVisible: (value: boolean) => void;
  onSearchChange: (value: string) => void;
  onCycleResults: () => void;
  selectedResultIndex: number;
  searchResultLength?: number;
}> = ({
  visible,
  setVisible,
  onSearchChange,
  onCycleResults,
  searchResultLength,
  selectedResultIndex
}) => {
  const [internalInputValue, setInputValue] = React.useState("");
  const [inputValue] = useDebounce(internalInputValue, 150);
  React.useEffect(() => {
    const searchListener = (ev: KeyboardEvent) => {
      if (
        (ev.key === "f" && ev.metaKey) ||
        (ev.key === "f" && ev.ctrlKey) ||
        ev.key === "F3"
      ) {
        ev.preventDefault();
        setVisible(true);
      }

      if (ev.key === "Escape" && visible) {
        setVisible(false);
      }

      if (ev.key === "Enter") {
        onCycleResults();
      }
    };

    document.addEventListener("keydown", searchListener);

    return () => document.removeEventListener("keydown", searchListener);
  }, [visible, onCycleResults, setVisible]);

  React.useEffect(() => {
    onSearchChange(inputValue);
  }, [inputValue]);

  React.useEffect(() => {
    if (!visible) {
      setInputValue("");
    }
  }, [visible]);

  const isLoading = internalInputValue !== inputValue;

  if (!visible) {
    return null;
  }
  return (
    <div className="desktop-search">
      <input
        className="desktop-search__input"
        autoFocus
        onChange={e => setInputValue(e.target.value)}
        value={internalInputValue}
        placeholder="Start typing to search..."
      />
      <div
        className={`desktop-search__loading ${isLoading ? "is-visible" : ""}`}
      />
      <div
        className={`desktop-search__result-count ${
          !isLoading && internalInputValue.length ? "is-visible" : ""
        }`}
      >
        {internalInputValue.length < 3 ? (
          "Minimum 3 characters"
        ) : searchResultLength ? (
          <>
            {selectedResultIndex}/{searchResultLength}
          </>
        ) : (
          "No results"
        )}
      </div>
    </div>
  );
};
