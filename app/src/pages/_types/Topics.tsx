import { Page } from "./PageShapes";

type TopicInfo = Page;

const Math: TopicInfo = {
  info: {
    title: "Mathematics",
    path: "mathematics",
    summary: "",
    pageType: "channel"
  },
  content: [],
};

const UIUX: TopicInfo = {
  info: {
    title: "UI/UX Design",
    path: "uiux-design",
    summary: "",
    pageType: "channel"
  },

  content: [],
};

const Illustration: TopicInfo = {
  info: {
    title: "Illustration",
    path: "illustration",
    summary: "",
    pageType: "channel"
  },

  content: [],
};

const Coding: TopicInfo = {
  info: {
    title: "Coding",
    path: "coding",
    summary: "",
    pageType: "channel"
  },

  content: [],
};

export const Topics = {
  Math,
  UIUX,
  Illustration,
  Coding,
} as const;

export type Topic = (typeof Topics)[keyof typeof Topics];

// Note: The following is an example of an union of types
// export type Label =
//   | typeof Labels_BrainWave[keyof typeof Labels_BrainWave]
//   | typeof Labels_Person[keyof typeof Labels_Person]
//   | typeof Labels_Design[keyof typeof Labels_Design];
