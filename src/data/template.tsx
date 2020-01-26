import { RoadmapEntry } from "../types";

export const list: RoadmapEntry[] = [
  {
    id: 1,
    category: 0,
    type: "heading",
    title: "Example heading",
    description: "Example heading description"
  },
  {
    id: 2,
    category: 2,
    type: "node",
    title: "Example subject",
    summary:
      "This is a summary - this text will appear in the box on the roadmap.",
    description:
      "This is a description - this text will appear in the sidebar.",
    topics: [
      "Topic #1 that will be displayer in the sidebar",
      "Topic #2 that will be displayer in the sidebar",
      "Topic #3 that will be displayer in the sidebar"
    ],
    practices: [
      "Practice #1 that will be displayer in the sidebar",
      "Practice #2 that will be displayer in the sidebar",
      "Practice #3 that will be displayer in the sidebar"
    ],
    links: [
      {
        title: "Link #1 Title",
        url: "https://www.google.com"
      },
      {
        title: "Link #2 Title",
        url: "https://www.google.com"
      },
      {
        title: "Link #3 Title",
        url: "https://www.google.com"
      }
    ],
    repeatable: true,
    difficult: true
  }

  // ...
];
