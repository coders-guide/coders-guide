import { Map } from "immutable";

export type IgNodeType = "block" | "heading";

export type HelpDisplayMode = "credits" | "help" | undefined;

export type ResourceLink = string | { url: string; title: string };

export type CheckedGoals = Map<string, number[]>;

export interface RoadmapEntry {
  id: number;
  category: number;
  type: "node" | "heading";
  title: string;

  summary?: string;
  description: string;
  repeatable?: boolean;
  difficult?: boolean;

  isSingleGoal?: boolean;

  topics?: string[];
  topicsHeader?: string;

  practices?: string[];
  practicesHeader?: string;

  customList?: string[];
  customListHeader?: string;

  links?: ResourceLink[];
  linksHeader?: string;
}
