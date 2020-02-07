import * as React from "react";
import { Map } from "immutable";
import { CheckedGoals, RoadmapEntry } from "../../types";
import { LOCAL_STORAGE_KEY_CHECKED_GOALS } from "../../common/constants";

export const useGoals = () => {
  const [checkedGoals, setCheckedGoals] = React.useState<CheckedGoals>(Map());

  React.useEffect(() => {
    try {
      const localStoragecheckedGoals = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY_CHECKED_GOALS) || "{}"
      );
      setCheckedGoals(Map<string, number[]>(localStoragecheckedGoals));
    } catch {}
  }, []);

  React.useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_CHECKED_GOALS,
      JSON.stringify(checkedGoals.toJSON())
    );
  }, [checkedGoals]);

  const markGoalChecked = (subjectId: string, taskIndex: number) => {
    setCheckedGoals(
      checkedGoals.set(subjectId.toString(), [
        ...(checkedGoals.get(subjectId.toString()) || []),
        taskIndex
      ])
    );
  };

  const markGoalUnchecked = (subjectId: string, taskIndex: number) => {
    setCheckedGoals(
      checkedGoals.set(
        subjectId.toString(),
        (checkedGoals.get(subjectId.toString()) || []).filter(
          goal => goal !== taskIndex
        )
      )
    );
  };

  const toggleGoal = (subjectId: string, taskIndex?: number) => {
    if (checkedGoals.get(subjectId)?.includes(taskIndex || 0)) {
      markGoalUnchecked(subjectId, taskIndex || 0);
    } else {
      markGoalChecked(subjectId, taskIndex || 0);
    }
  };

  const isNodeChecked = (node: RoadmapEntry) => {
    if (node.isSingleGoal) {
      return (checkedGoals.get(node.id.toString())?.length || 0) > 0;
    }
    return (
      (checkedGoals.get(node.id.toString())?.length || 0) >=
      (node.topics?.length || 0) + (node.practices?.length || 0)
    );
  };

  return { checkedGoals, toggleGoal, isNodeChecked };
};
